#!/usr/bin/env node
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🎨 ReplAInow STATIC Banner Export');
console.log('===================================\n');

// Create output directory
const outputDir = join(__dirname, '..', 'exported-banners');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Launch browser
console.log('🚀 Launching browser...\n');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1, // Exact 1600x900 output
});

// Export Hero1
console.log('📸 Exporting Hero1-Zero-Setup...');
await page.goto('http://localhost:5173/banners/hero1-zero-setup.html', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const filename = join(outputDir, 'ReplAInow-Hero1-Zero-Setup.png');
await page.screenshot({ 
  path: filename,
  fullPage: false,
  type: 'png',
});
console.log('   ✅ Saved!\n');

await browser.close();

console.log('🎉 Export complete!');
console.log(`📁 Saved to: ${outputDir}`);

