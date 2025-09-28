#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const LOCALES_DIR = './src/i18n/locales';
const OUTPUT_DIR = './docs/i18n';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Load locale files
const de = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, 'de.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, 'en.json'), 'utf8'));

// Function to get all keys from an object
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Function to get value type
function getValueType(value) {
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object' && value !== null) return 'object';
  return typeof value;
}

// Function to get nested value
function getNestedValue(obj, key) {
  return key.split('.').reduce((current, k) => current?.[k], obj);
}

// Get all keys from both locales
const deKeys = getAllKeys(de);
const enKeys = getAllKeys(en);

// Find differences
const missingInEn = deKeys.filter(key => !enKeys.includes(key));
const missingInDe = enKeys.filter(key => !deKeys.includes(key));
const commonKeys = deKeys.filter(key => enKeys.includes(key));

// Check type mismatches
const typeMismatches = [];
for (const key of commonKeys) {
  const deValue = getNestedValue(de, key);
  const enValue = getNestedValue(en, key);
  const deType = getValueType(deValue);
  const enType = getValueType(enValue);
  
  if (deType !== enType) {
    typeMismatches.push({
      key,
      deType,
      enType,
      deValue,
      enValue
    });
  }
}

// Generate report
const report = `# Locale Shape Analysis Report

Generated: ${new Date().toISOString()}

## Summary
- German keys: ${deKeys.length}
- English keys: ${enKeys.length}
- Common keys: ${commonKeys.length}
- Missing in EN: ${missingInEn.length}
- Missing in DE: ${missingInDe.length}
- Type mismatches: ${typeMismatches.length}

## Missing Keys in English

${missingInEn.length > 0 ? missingInEn.map(key => `- \`${key}\``).join('\n') : 'None'}

## Missing Keys in German

${missingInDe.length > 0 ? missingInDe.map(key => `- \`${key}\``).join('\n') : 'None'}

## Type Mismatches

${typeMismatches.length > 0 ? typeMismatches.map(mismatch => 
  `### \`${mismatch.key}\`
- German: ${mismatch.deType} (${JSON.stringify(mismatch.deValue)})
- English: ${mismatch.enType} (${JSON.stringify(mismatch.enValue)})
`).join('\n') : 'None'}

## Detailed Key Analysis

### German-only keys
${missingInEn.map(key => `- \`${key}\`: ${getValueType(getNestedValue(de, key))}`).join('\n')}

### English-only keys  
${missingInDe.map(key => `- \`${key}\`: ${getValueType(getNestedValue(en, key))}`).join('\n')}

## Recommendations

1. **Add missing keys to English locale:**
${missingInEn.map(key => `   - Add \`${key}\` with appropriate English translation`).join('\n')}

2. **Fix type mismatches:**
${typeMismatches.map(mismatch => 
  `   - Fix \`${mismatch.key}\`: Make both locales use ${mismatch.deType} type`
).join('\n')}

3. **Remove unused keys from English:**
${missingInDe.map(key => `   - Remove \`${key}\` if not needed`).join('\n')}
`;

// Write report
fs.writeFileSync(path.join(OUTPUT_DIR, 'LOCALE_SHAPE_DIFF.md'), report);

console.log('✅ Locale shape analysis complete');
console.log(`📊 Found ${missingInEn.length} missing keys in EN`);
console.log(`📊 Found ${missingInDe.length} missing keys in DE`);
console.log(`📊 Found ${typeMismatches.length} type mismatches`);
console.log(`📝 Report saved to: ${path.join(OUTPUT_DIR, 'LOCALE_SHAPE_DIFF.md')}`);
