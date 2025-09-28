#!/usr/bin/env node

/**
 * Debug Locale Detection
 * Tests locale detection for different paths
 */

import { getLocaleFromPath } from '../src/i18n/locale.js';

console.log('🔍 Testing Locale Detection...\n');

const testPaths = [
  '/',
  '/en',
  '/en/',
  '/fr',
  '/es'
];

testPaths.forEach(path => {
  const locale = getLocaleFromPath(path);
  console.log(`Path: ${path} → Locale: ${locale}`);
});

console.log('\n🔍 Testing i18n function...');

// Test the t function
import { t } from '../src/i18n/index.js';

const testKeys = [
  'ui.hero.title',
  'ui.hero.subtitle',
  'ui.navigation.home'
];

['de', 'en'].forEach(locale => {
  console.log(`\n--- Locale: ${locale} ---`);
  testKeys.forEach(key => {
    const translation = t(key, locale);
    console.log(`${key}: ${translation}`);
  });
});
