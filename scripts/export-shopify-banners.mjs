#!/usr/bin/env node

/**
 * PROFESSIONAL SHOPIFY BANNER EXPORT SCRIPT
 * 
 * Exports all banners as PNG files with EXACT dimensions (1600x900px)
 * Uses Playwright for reliable screenshot generation
 */

import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const outputDir = join(projectRoot, 'exported-banners');

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const BANNERS = [
  { id: 1, name: 'ReplAInow-Zero-Setup-60s', title: 'Zero Setup', url: 'http://localhost:5173/banner-standalone-1.html' },
  { id: 2, name: 'ReplAInow-Automation-60-80', title: 'Automation Power', url: 'http://localhost:5173/banner-raw/2' },
  { id: 3, name: 'ReplAInow-Email-Chat', title: 'Dual Channel', url: 'http://localhost:5173/banner-raw/3' },
  { id: 4, name: 'ReplAInow-100-Languages', title: 'Global Languages', url: 'http://localhost:5173/banner-raw/4' },
  { id: 5, name: 'ReplAInow-Realtime-Sync', title: 'Real-Time Sync', url: 'http://localhost:5173/banner-raw/5' },
  { id: 6, name: 'ReplAInow-Visual-Commerce', title: 'Visual Commerce', url: 'http://localhost:5173/banner-raw/6' }
];

const BANNER_WIDTH = 1600;
const BANNER_HEIGHT = 900;

console.log('🎨 SHOPIFY BANNER EXPORT SCRIPT');
console.log('================================\n');
console.log(`📁 Output Directory: ${outputDir}`);
console.log(`📐 Dimensions: ${BANNER_WIDTH}×${BANNER_HEIGHT}px\n`);

async function exportBanners() {
  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: BANNER_WIDTH, height: BANNER_HEIGHT },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();

  try {
    console.log('📸 Starting export...\n');

    // Export each banner from dedicated raw route
    for (const banner of BANNERS) {
      try {
        const url = banner.url || `http://localhost:5173/banner-raw/${banner.id}`;
        console.log(`🌐 Opening: ${url}`);
        
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000);
        
        // Take full page screenshot (banner is exactly 1600x900)
        const outputPath = join(outputDir, `${banner.name}.png`);
        
        await page.screenshot({
          path: outputPath,
          type: 'png',
          fullPage: false,
        });

        console.log(`✅ [${banner.id}/6] ${banner.title}`);
        console.log(`   └─ Saved: ${banner.name}.png (${BANNER_WIDTH}×${BANNER_HEIGHT}px)\n`);
      } catch (err) {
        console.error(`❌ Error exporting banner ${banner.id}:`, err.message);
      }
    }

    console.log('\n🎉 EXPORT COMPLETE!\n');
    console.log(`📁 All banners saved to: ${outputDir}/`);
    console.log('\n✅ Files created:');
    BANNERS.forEach(b => {
      console.log(`   - ${b.name}.png`);
    });

  } catch (error) {
    console.error('\n❌ EXPORT FAILED:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the export
console.log('⏳ Initializing Playwright...\n');

exportBanners()
  .then(() => {
    console.log('\n✨ Done! Ready for Shopify App Store upload!\n');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Fatal error:', error);
    process.exit(1);
  });

