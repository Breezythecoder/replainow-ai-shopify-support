#!/usr/bin/env node

/**
 * i18n Migration Script
 * Migrates complete content from old flat JSON structure to new organized structure
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../..');

console.log('🔄 i18n Migration Script');
console.log('=======================\n');

const LOCALES = ['de', 'en', 'es', 'fr'];

// Get old JSON files from git
for (const locale of LOCALES) {
  try {
    console.log(`📦 Migrating ${locale.toUpperCase()}...`);
    
    // Extract old JSON from git history
    const oldJsonPath = `/tmp/old_${locale}.json`;
    execSync(`git show "148f64e7^1:src/i18n/locales/${locale}.json" > ${oldJsonPath}`, {
      cwd: ROOT,
      stdio: 'ignore'
    });
    
    // Read old JSON
    const oldContent = fs.readFileSync(oldJsonPath, 'utf8');
    const oldData = JSON.parse(oldContent);
    
    // Split into new structure
    const newStructure = {
      common: {},
      marketing: {},
      seo: {},
      legal: {}
    };
    
    // Map SEO content
    if (oldData.seo) {
      newStructure.seo = {
        ...oldData.seo,
        schema: oldData.schema || {}
      };
    }
    
    // Map UI content to appropriate namespaces
    if (oldData.ui) {
      const ui = oldData.ui;
      
      // Common (navigation, footer)
      newStructure.common = {
        navigation: ui.navigation || {},
        footer: ui.footer || {},
        contact: ui.contact || {}
      };
      
      // Marketing (everything else)
      newStructure.marketing = {
        hero: ui.hero || {},
        features: ui.features || {},
        pricing: ui.pricing || {},
        testimonials: ui.testimonials || {},
        faq: ui.faq || {},
        cta: ui.cta || {},
        howItWorks: ui.howItWorks || {},
        liveDemo: ui.liveDemo || {},
        comparison: ui.comparison || {},
        mailAndChat: ui.mailAndChat || {},
        problemSolution: ui.problemSolution || {},
        socialProof: ui.socialProof || {},
        industryExamples: ui.industryExamples || {},
        liveExamples: ui.liveExamples || {},
        finalCta: ui.finalCta || {},
        stickyInstallBar: ui.stickyInstallBar || {},
        exitIntent: ui.exitIntent || {}
      };
    }
    
    // Legal (minimal for now)
    newStructure.legal = {
      privacy: { title: "Privacy Policy", lastUpdated: "Last updated: 2024" },
      terms: { title: "Terms of Service", lastUpdated: "Last updated: 2024" },
      refund: { title: "Refund Policy", lastUpdated: "Last updated: 2024" },
      cookies: { title: "Cookie Policy", lastUpdated: "Last updated: 2024" },
      security: { title: "Security Statement", lastUpdated: "Last updated: 2024" },
      impressum: { title: "Impressum", company: "ReplAInow", location: "Dubai, UAE" }
    };
    
    // Write new files
    const localeDir = path.join(ROOT, 'src/i18n/locales', locale);
    
    fs.writeFileSync(
      path.join(localeDir, 'common.json'),
      JSON.stringify(newStructure.common, null, 2),
      'utf8'
    );
    
    fs.writeFileSync(
      path.join(localeDir, 'marketing.json'),
      JSON.stringify(newStructure.marketing, null, 2),
      'utf8'
    );
    
    fs.writeFileSync(
      path.join(localeDir, 'seo.json'),
      JSON.stringify(newStructure.seo, null, 2),
      'utf8'
    );
    
    fs.writeFileSync(
      path.join(localeDir, 'legal.json'),
      JSON.stringify(newStructure.legal, null, 2),
      'utf8'
    );
    
    console.log(`   ✅ ${locale}/common.json`);
    console.log(`   ✅ ${locale}/marketing.json`);
    console.log(`   ✅ ${locale}/seo.json`);
    console.log(`   ✅ ${locale}/legal.json\n`);
    
  } catch (error) {
    console.error(`   ❌ Failed to migrate ${locale}:`, error.message);
  }
}

console.log('✨ Migration complete!');
console.log('\n📊 Next steps:');
console.log('1. Review the generated files');
console.log('2. Commit changes: git add src/i18n/locales && git commit -m "feat: complete i18n migration"');
console.log('3. Push: git push origin main');

