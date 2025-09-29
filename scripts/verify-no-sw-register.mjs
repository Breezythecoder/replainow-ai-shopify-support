#!/usr/bin/env node

/**
 * CI Guard: Prevent SW registration regressions
 * Blocks deployment if serviceWorker.register( is found in index.html
 */

import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');

if (/serviceWorker\.register\(/.test(html)) {
  console.error('❌ SW registration detected in index.html — blocked by policy.');
  console.error('Service Workers are disabled to prevent cache issues.');
  process.exit(1);
}

console.log('✅ OK: no SW registration present.');
