#!/usr/bin/env node

/**
 * 🔍 FIND UNUSED TRANSLATION KEYS
 * Scans all components and finds which translation keys are actually used
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LOCALES_DIR = 'src/i18n/locales';
const SRC_DIR = 'src';

console.log('🔍 Scanning for used translation keys...\n');

// Step 1: Find all t('xxx') calls in components
const findUsedKeys = async () => {
  const usedKeys = new Set();
  
  // Find all .tsx and .ts files
  const files = await glob(`${SRC_DIR}/**/*.{tsx,ts}`, {
    ignore: ['**/*.test.ts', '**/*.test.tsx', '**/node_modules/**']
  });
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Find all t('xxx') patterns
    const regex = /t\(['"]([\w.]+)['"]/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      usedKeys.add(match[1]);
    }
    
    // Find all t("xxx") patterns
    const regex2 = /t\(["]([\w.]+)["]/g;
    while ((match = regex2.exec(content)) !== null) {
      usedKeys.add(match[1]);
    }
  }
  
  return Array.from(usedKeys).sort();
};

// Step 2: Get all keys from a JSON file (recursively)
const getAllKeys = (obj, prefix = '') => {
  const keys = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      // Recursive for nested objects
      keys.push(...getAllKeys(obj[key], fullKey));
    } else {
      // Leaf node
      keys.push(fullKey);
    }
  }
  
  return keys;
};

// Step 3: Compare used vs available
const analyzeTranslations = async () => {
  const usedKeys = await findUsedKeys();
  
  console.log(`✅ Found ${usedKeys.length} used translation keys\n`);
  
  // Check each translation file
  const translationFiles = [
    'common.json',
    'marketing.json',
    'content.json',
    'dashboard.json',
    'legal.json',
    'seo.json'
  ];
  
  for (const fileName of translationFiles) {
    const filePath = path.join(LOCALES_DIR, 'en', fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping ${fileName} (not found)`);
      continue;
    }
    
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const allKeys = getAllKeys(fileContent);
    
    // Filter to this namespace
    const namespace = fileName.replace('.json', '');
    const usedInFile = usedKeys.filter(k => k.startsWith(namespace + '.'));
    const unusedInFile = allKeys
      .map(k => `${namespace}.${k}`)
      .filter(k => !usedKeys.includes(k));
    
    console.log(`📄 ${fileName}:`);
    console.log(`   Total keys: ${allKeys.length}`);
    console.log(`   Used: ${usedInFile.length} (${Math.round(usedInFile.length / allKeys.length * 100)}%)`);
    console.log(`   Unused: ${unusedInFile.length} (${Math.round(unusedInFile.length / allKeys.length * 100)}%)`);
    
    if (unusedInFile.length > 0 && unusedInFile.length < 20) {
      console.log(`   ❌ Unused keys:`);
      unusedInFile.forEach(k => console.log(`      - ${k}`));
    } else if (unusedInFile.length >= 20) {
      console.log(`   ❌ First 10 unused keys:`);
      unusedInFile.slice(0, 10).forEach(k => console.log(`      - ${k}`));
      console.log(`      ... and ${unusedInFile.length - 10} more`);
    }
    
    console.log('');
  }
  
  // Summary
  console.log('\n📊 SUMMARY:');
  console.log(`Total translation keys used in code: ${usedKeys.length}`);
  console.log(`\nMost used namespaces:`);
  
  const namespaces = {};
  usedKeys.forEach(key => {
    const ns = key.split('.')[0];
    namespaces[ns] = (namespaces[ns] || 0) + 1;
  });
  
  Object.entries(namespaces)
    .sort((a, b) => b[1] - a[1])
    .forEach(([ns, count]) => {
      console.log(`  ${ns}: ${count} keys`);
    });
};

// Run analysis
analyzeTranslations().catch(console.error);

