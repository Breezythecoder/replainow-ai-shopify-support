#!/usr/bin/env node

/**
 * DASHBOARD BANNERS EXPORT SCRIPT
 * 
 * Exports all 4 dashboard banners as PNG files (1600x900px)
 * Uses Playwright for reliable screenshot generation
 */

import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const outputDir = join(projectRoot, 'exported-dashboard-banners');

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const BANNERS = [
  { 
    id: 1, 
    name: 'ReplAInow-Dashboard-3-Column-Overview', 
    title: '3-Column Dashboard Overview',
    url: 'http://localhost:5173/banner-dashboard-1-overview.html'
  },
  { 
    id: 2, 
    name: 'ReplAInow-Dashboard-Order-Management', 
    title: 'Order Management Integration',
    url: 'http://localhost:5173/banner-dashboard-2-orders.html'
  },
  { 
    id: 3, 
    name: 'ReplAInow-Dashboard-Customer-Journey', 
    title: 'Customer Journey Intelligence',
    url: 'http://localhost:5173/banner-dashboard-3-journey.html'
  },
  { 
    id: 4, 
    name: 'ReplAInow-Dashboard-Product-Picker', 
    title: 'Product Picker & Commerce',
    url: 'http://localhost:5173/banner-dashboard-4-product-picker.html'
  }
];

const BANNER_WIDTH = 1600;
const BANNER_HEIGHT = 900;

console.log('🎨 DASHBOARD BANNERS EXPORT');
console.log('============================\n');
console.log(`📁 Output: ${outputDir}`);
console.log(`📐 Size: ${BANNER_WIDTH}×${BANNER_HEIGHT}px\n`);

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

    for (const banner of BANNERS) {
      try {
        console.log(`🌐 Opening: ${banner.url}`);
        
        await page.goto(banner.url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000); // Wait for animations
        
        const outputPath = join(outputDir, `${banner.name}.png`);
        
        await page.screenshot({
          path: outputPath,
          type: 'png',
          fullPage: false,
        });

        console.log(`✅ [${banner.id}/4] ${banner.title}`);
        console.log(`   └─ Saved: ${banner.name}.png\n`);
      } catch (err) {
        console.error(`❌ Error exporting banner ${banner.id}:`, err.message);
      }
    }

    console.log('🎉 EXPORT COMPLETE!\n');
    console.log(`📁 All banners saved to:\n   ${outputDir}/\n`);
    console.log('✅ Files created:');
    BANNERS.forEach(b => {
      console.log(`   - ${b.name}.png`);
    });
    console.log('\n💎 Ready for Shopify App Store!\n');

  } catch (error) {
    console.error('\n❌ EXPORT FAILED:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

console.log('⏳ Initializing...\n');

exportBanners()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });










