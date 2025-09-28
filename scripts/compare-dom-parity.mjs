#!/usr/bin/env node

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 DOM Parity Comparison Script');
console.log('================================\n');

async function extractDOMStructure(page, url) {
  await page.goto(url);
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  const structure = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('section, main, header, footer, article, aside, nav')).map(el => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      className: el.className || null,
      textContent: el.textContent?.trim().substring(0, 100) || null // First 100 chars for context
    }));
    
    return elements;
  });
  
  return structure;
}

async function compareParity() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('📊 Extracting DOM structure from / (DE)...');
    const deStructure = await extractDOMStructure(page, 'http://localhost:4173/');
    
    console.log('📊 Extracting DOM structure from /en (EN)...');
    const enStructure = await extractDOMStructure(page, 'http://localhost:4173/en');
    
    console.log('\n📋 Structure Comparison:');
    console.log('========================');
    console.log(`DE sections: ${deStructure.length}`);
    console.log(`EN sections: ${enStructure.length}`);
    
    // Compare by ID
    const deIds = deStructure.map(s => s.id).filter(Boolean);
    const enIds = enStructure.map(s => s.id).filter(Boolean);
    
    const missingInEn = deIds.filter(id => !enIds.includes(id));
    const extraInEn = enIds.filter(id => !deIds.includes(id));
    
    if (missingInEn.length > 0) {
      console.log(`❌ Missing sections in EN: ${missingInEn.join(', ')}`);
    }
    
    if (extraInEn.length > 0) {
      console.log(`⚠️  Extra sections in EN: ${extraInEn.join(', ')}`);
    }
    
    if (missingInEn.length === 0 && extraInEn.length === 0) {
      console.log('✅ All sections present in both versions');
    }
    
    // Generate detailed report
    const report = {
      timestamp: new Date().toISOString(),
      comparison: {
        de: {
          totalSections: deStructure.length,
          sections: deStructure
        },
        en: {
          totalSections: enStructure.length,
          sections: enStructure
        }
      },
      parity: {
        missingInEn,
        extraInEn,
        isComplete: missingInEn.length === 0 && extraInEn.length === 0
      }
    };
    
    // Save report
    const reportPath = join('docs', 'i18n', 'dom-parity-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
    
    // Generate unified diff-style output
    console.log('\n🔍 Unified Diff Style Comparison:');
    console.log('===================================');
    
    deStructure.forEach((section, index) => {
      const enSection = enStructure[index];
      if (!enSection || enSection.id !== section.id) {
        console.log(`- ${section.tag}#${section.id || 'no-id'} (DE only)`);
      } else {
        console.log(`  ${section.tag}#${section.id || 'no-id'} (both)`);
      }
    });
    
    enStructure.forEach((section, index) => {
      const deSection = deStructure[index];
      if (!deSection || deSection.id !== section.id) {
        console.log(`+ ${section.tag}#${section.id || 'no-id'} (EN only)`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error during comparison:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run comparison
compareParity().catch(console.error);
