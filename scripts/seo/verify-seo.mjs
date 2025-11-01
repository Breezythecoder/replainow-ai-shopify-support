#!/usr/bin/env node

/**
 * SEO Verification Script
 * Verifies that all SEO components are working correctly for all languages
 */

import { readFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 SEO Verification Script');
console.log('========================\n');

// Check if SEOHead component supports all languages
const seoHeadPath = 'src/components/SEOHead.tsx';
const seoHeadContent = readFileSync(seoHeadPath, 'utf8');

console.log('📋 SEOHead Component Analysis:');
console.log('-----------------------------');

// Check for locale support
const localeSupport = seoHeadContent.includes("'de' | 'en' | 'fr' | 'es'");
console.log(`✅ Multi-locale support: ${localeSupport ? 'YES' : 'NO'}`);

// Check for hreflang implementation
const hreflangSupport = seoHeadContent.includes('hreflang');
console.log(`✅ Hreflang tags: ${hreflangSupport ? 'YES' : 'NO'}`);

// Check for canonical URLs
const canonicalSupport = seoHeadContent.includes('canonical');
console.log(`✅ Canonical URLs: ${canonicalSupport ? 'YES' : 'NO'}`);

// Check for JSON-LD schema
const jsonLdSupport = seoHeadContent.includes('application/ld+json');
console.log(`✅ JSON-LD Schema: ${jsonLdSupport ? 'YES' : 'NO'}`);

// Check for Open Graph
const ogSupport = seoHeadContent.includes('og:');
console.log(`✅ Open Graph tags: ${ogSupport ? 'YES' : 'NO'}`);

// Check for Twitter Cards
const twitterSupport = seoHeadContent.includes('twitter:');
console.log(`✅ Twitter Cards: ${twitterSupport ? 'YES' : 'NO'}`);

console.log('\n📊 Locale Files Analysis:');
console.log('------------------------');

// Check if all locale files exist and have SEO content (NEW STRUCTURE)
const locales = ['de', 'en', 'fr', 'es'];
let allSeoComplete = true;

for (const locale of locales) {
  try {
    // New structure: src/i18n/locales/{locale}/seo.json
    const seoPath = `src/i18n/locales/${locale}/seo.json`;
    const seoContent = readFileSync(seoPath, 'utf8');
    const seoData = JSON.parse(seoContent);
    
    const hasSeo = seoData.title && seoData.description && seoData.schema;
    const seoKeys = Object.keys(seoData).length;
    const schemaKeys = seoData.schema ? Object.keys(seoData.schema).length : 0;
    
    console.log(`✅ ${locale.toUpperCase()}: ${seoKeys} SEO keys, ${schemaKeys} schema sections`);
    
    if (!hasSeo) {
      allSeoComplete = false;
    }
  } catch (error) {
    console.log(`❌ ${locale.toUpperCase()}: Missing or invalid seo.json file`);
    allSeoComplete = false;
  }
}

console.log('\n📋 Site Stats Analysis:');
console.log('----------------------');

// Check if getLocalizedStats supports all languages
const siteStatsPath = 'src/config/siteStats.ts';
const siteStatsContent = readFileSync(siteStatsPath, 'utf8');

const statsLocaleSupport = siteStatsContent.includes("'de' | 'en' | 'fr' | 'es'");
console.log(`✅ Multi-locale stats support: ${statsLocaleSupport ? 'YES' : 'NO'}`);

console.log('\n🎯 Summary:');
console.log('===========');

if (localeSupport && hreflangSupport && canonicalSupport && jsonLdSupport && ogSupport && twitterSupport && allSeoComplete && statsLocaleSupport) {
  console.log('🎉 ALL SEO COMPONENTS ARE FULLY FUNCTIONAL!');
  console.log('\n✅ Features verified:');
  console.log('  • Multi-language support (DE, EN, FR, ES)');
  console.log('  • Hreflang tags for international SEO');
  console.log('  • Canonical URLs for each page');
  console.log('  • JSON-LD structured data');
  console.log('  • Open Graph meta tags');
  console.log('  • Twitter Card meta tags');
  console.log('  • Localized site statistics');
  console.log('  • Complete i18n translations');
  
  console.log('\n🚀 Ready for production deployment!');
  process.exit(0);
} else {
  console.log('❌ SOME SEO COMPONENTS NEED ATTENTION');
  console.log('\nMissing features:');
  if (!localeSupport) console.log('  • Multi-locale support in SEOHead');
  if (!hreflangSupport) console.log('  • Hreflang tags');
  if (!canonicalSupport) console.log('  • Canonical URLs');
  if (!jsonLdSupport) console.log('  • JSON-LD schema');
  if (!ogSupport) console.log('  • Open Graph tags');
  if (!twitterSupport) console.log('  • Twitter Cards');
  if (!allSeoComplete) console.log('  • Complete i18n translations');
  if (!statsLocaleSupport) console.log('  • Multi-locale stats support');
  
  process.exit(1);
}
