#!/usr/bin/env node

/**
 * Locale Coverage Report
 * Shows translation coverage across all supported languages
 */

import fs from 'fs';
import path from 'path';

console.log('📊 Locale Coverage Report');
console.log('========================\n');

const LOCALES_DIR = 'src/i18n/locales';
const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr'];
const NAMESPACES = ['common', 'marketing', 'seo', 'legal'];

// Count keys in JSON object recursively
function countKeys(obj) {
  let count = 0;
  
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      count += countKeys(obj[key]);
    } else {
      count++;
    }
  }
  
  return count;
}

// Get all translation keys recursively
function getAllKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

// Load all locale files
const localeData = {};
let baselineKeys = {};

for (const locale of SUPPORTED_LOCALES) {
  localeData[locale] = {};
  
  for (const namespace of NAMESPACES) {
    const filePath = path.join(LOCALES_DIR, locale, `${namespace}.json`);
    
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        localeData[locale][namespace] = data;
        
        // Use English as baseline
        if (locale === 'en') {
          baselineKeys[namespace] = getAllKeys(data);
        }
      } catch (error) {
        console.error(`❌ Error reading ${locale}/${namespace}.json:`, error.message);
      }
    } else {
      console.warn(`⚠️  Missing ${locale}/${namespace}.json`);
    }
  }
}

// Report by namespace
console.log('📁 By Namespace:\n');

for (const namespace of NAMESPACES) {
  console.log(`  ${namespace}.json:`);
  
  for (const locale of SUPPORTED_LOCALES) {
    if (localeData[locale][namespace]) {
      const keyCount = countKeys(localeData[locale][namespace]);
      const baselineCount = baselineKeys[namespace]?.length || keyCount;
      const coverage = baselineCount > 0 ? ((keyCount / baselineCount) * 100).toFixed(1) : '100.0';
      const icon = coverage >= 100 ? '✅' : coverage >= 80 ? '⚠️' : '❌';
      
      console.log(`    ${icon} ${locale}: ${keyCount} keys (${coverage}% coverage)`);
    } else {
      console.log(`    ❌ ${locale}: Missing file`);
    }
  }
  
  console.log('');
}

// Report by locale
console.log('🌍 By Locale:\n');

for (const locale of SUPPORTED_LOCALES) {
  let totalKeys = 0;
  let totalBaseline = 0;
  
  for (const namespace of NAMESPACES) {
    if (localeData[locale][namespace]) {
      totalKeys += countKeys(localeData[locale][namespace]);
    }
    if (baselineKeys[namespace]) {
      totalBaseline += baselineKeys[namespace].length;
    }
  }
  
  const coverage = totalBaseline > 0 ? ((totalKeys / totalBaseline) * 100).toFixed(1) : '100.0';
  const icon = coverage >= 100 ? '✅' : coverage >= 80 ? '⚠️' : '❌';
  
  console.log(`  ${icon} ${locale.toUpperCase()}: ${totalKeys} total keys (${coverage}% coverage)`);
}

// Find missing translations
console.log('\n🔍 Missing Translations:\n');

for (const namespace of NAMESPACES) {
  const baseline = baselineKeys[namespace] || [];
  let hasMissing = false;
  
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === 'en') continue; // Skip baseline
    
    const localeKeys = localeData[locale][namespace] 
      ? getAllKeys(localeData[locale][namespace])
      : [];
    
    const missing = baseline.filter(key => !localeKeys.includes(key));
    
    if (missing.length > 0) {
      if (!hasMissing) {
        console.log(`  ${namespace}.json:`);
        hasMissing = true;
      }
      console.log(`    ${locale}: ${missing.length} missing keys`);
      if (missing.length <= 5) {
        missing.forEach(key => console.log(`      - ${key}`));
      }
    }
  }
  
  if (hasMissing) console.log('');
}

console.log('\n✨ Report complete!');

