#!/usr/bin/env node

/**
 * Live Website Analyzer
 * Analyzes the live website and takes screenshots for debugging
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://replainow.com';
const OUTPUT_DIR = './docs/live-analysis';

async function analyzeLiveWebsite() {
  console.log('🔍 Starting Live Website Analysis...');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ 
    headless: false, // Set to true for production
    slowMo: 1000 
  });

  try {
    // Test German page
    console.log('\n🇩🇪 Analyzing German page (/)...');
    const dePage = await browser.newPage();
    await dePage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    
    // Take screenshot
    await dePage.screenshot({ 
      path: path.join(OUTPUT_DIR, 'de-page-full.png'),
      fullPage: true 
    });
    
    // Get page content
    const deContent = await dePage.content();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'de-page.html'), deContent);
    
    // Get title and meta
    const deTitle = await dePage.title();
    const deDescription = await dePage.getAttribute('meta[name="description"]', 'content');
    const deLang = await dePage.getAttribute('html', 'lang');
    
    console.log(`✅ German page: ${deTitle}`);
    console.log(`   Lang: ${deLang}`);
    console.log(`   Description: ${deDescription}`);
    
    await dePage.close();

    // Test English page
    console.log('\n🇬🇧 Analyzing English page (/en)...');
    const enPage = await browser.newPage();
    await enPage.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle' });
    
    // Take screenshot
    await enPage.screenshot({ 
      path: path.join(OUTPUT_DIR, 'en-page-full.png'),
      fullPage: true 
    });
    
    // Get page content
    const enContent = await enPage.content();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'en-page.html'), enContent);
    
    // Get title and meta
    const enTitle = await enPage.title();
    const enDescription = await enPage.getAttribute('meta[name="description"]', 'content');
    const enLang = await enPage.getAttribute('html', 'lang');
    
    console.log(`✅ English page: ${enTitle}`);
    console.log(`   Lang: ${enLang}`);
    console.log(`   Description: ${enDescription}`);
    
    // Check for German text on English page
    console.log('\n🔍 Checking for German text on English page...');
    const germanTexts = [
      'Automatisiere',
      'Kundensupport',
      'Shopify',
      'KI',
      'GPT-4',
      'Sekunden',
      'Sprachen',
      'DSGVO',
      'kostenlos',
      'testen'
    ];
    
    const foundGermanTexts = [];
    for (const text of germanTexts) {
      if (enContent.includes(text)) {
        foundGermanTexts.push(text);
      }
    }
    
    if (foundGermanTexts.length > 0) {
      console.log(`❌ Found German text on English page: ${foundGermanTexts.join(', ')}`);
    } else {
      console.log('✅ No German text found on English page');
    }
    
    // Check for English text on English page
    console.log('\n🔍 Checking for English text on English page...');
    const englishTexts = [
      'AI Helpdesk',
      'Automated',
      'Customer Support',
      'GPT-4',
      'seconds',
      'languages',
      'GDPR',
      'free',
      'trial'
    ];
    
    const foundEnglishTexts = [];
    for (const text of englishTexts) {
      if (enContent.includes(text)) {
        foundEnglishTexts.push(text);
      }
    }
    
    if (foundEnglishTexts.length > 0) {
      console.log(`✅ Found English text on English page: ${foundEnglishTexts.join(', ')}`);
    } else {
      console.log('❌ No English text found on English page');
    }
    
    // Check specific sections
    console.log('\n🔍 Checking specific sections...');
    
    // Hero section
    const heroSection = await enPage.$('[data-testid="hero"], .hero, h1');
    if (heroSection) {
      const heroText = await heroSection.textContent();
      console.log(`Hero text: ${heroText?.substring(0, 100)}...`);
    }
    
    // Features section
    const featuresSection = await enPage.$('[data-testid="features"], .features');
    if (featuresSection) {
      const featuresText = await featuresSection.textContent();
      console.log(`Features text: ${featuresText?.substring(0, 100)}...`);
    }
    
    // Pricing section
    const pricingSection = await enPage.$('[data-testid="pricing"], .pricing');
    if (pricingSection) {
      const pricingText = await pricingSection.textContent();
      console.log(`Pricing text: ${pricingText?.substring(0, 100)}...`);
    }
    
    await enPage.close();
    
    // Generate analysis report
    const report = `
# Live Website Analysis Report

Generated: ${new Date().toISOString()}

## German Page (${BASE_URL}/)
- **Title:** ${deTitle}
- **Lang:** ${deLang}
- **Description:** ${deDescription}

## English Page (${BASE_URL}/en)
- **Title:** ${enTitle}
- **Lang:** ${enLang}
- **Description:** ${enDescription}

## Issues Found
${foundGermanTexts.length > 0 ? `- German text found on English page: ${foundGermanTexts.join(', ')}` : '- No German text found on English page ✅'}
${foundEnglishTexts.length > 0 ? `- English text found on English page: ${foundEnglishTexts.join(', ')}` : '- No English text found on English page ❌'}

## Files Generated
- \`de-page-full.png\` - Screenshot of German page
- \`en-page-full.png\` - Screenshot of English page
- \`de-page.html\` - HTML source of German page
- \`en-page.html\` - HTML source of English page

## Recommendations
${foundGermanTexts.length > 0 ? '1. Fix German text on English page\n2. Ensure all components use English translations\n3. Check i18n configuration' : '1. Website appears to be working correctly'}
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, 'ANALYSIS_REPORT.md'), report);
    console.log(`\n📝 Analysis report saved to: ${path.join(OUTPUT_DIR, 'ANALYSIS_REPORT.md')}`);
    
  } finally {
    await browser.close();
  }
}

// Run the analysis
analyzeLiveWebsite().catch(console.error);
