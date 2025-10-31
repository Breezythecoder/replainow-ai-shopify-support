#!/usr/bin/env node

/**
 * Banner Export Script
 * Konvertiert HTML Banner zu PNG Bildern
 * 
 * Verwendung: node export-banners.mjs
 */

import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportBanners() {
  console.log('🚀 Starting banner export...\n');
  
  // Create export directory
  const exportDir = path.join(__dirname, 'exported-images');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }

  const banners = [
    { name: 'banner-1-hero', title: 'Hero Banner' },
    { name: 'banner-2-stats', title: 'Stats Banner' },
    { name: 'banner-3-minimal', title: 'Minimal Banner' },
    { name: 'banner-4-testimonial', title: 'Testimonial Banner' },
    { name: 'banner-5-features', title: 'Features Banner' },
    { name: 'banner-6-dashboard', title: 'Dashboard Banner' },
    { name: 'banner-7-integration', title: 'Integration Banner' },
    { name: 'banner-8-mobile', title: 'Mobile Banner' },
    { name: 'banner-9-analytics', title: 'Analytics Banner' }
  ];

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const banner of banners) {
    try {
      console.log(`📸 Exporting ${banner.title}...`);
      
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 600 });
      
      // Load the HTML file
      const filePath = `file://${path.join(__dirname, 'banners', `${banner.name}.html`)}`;
      await page.goto(filePath, { waitUntil: 'networkidle0' });
      
      // Wait a bit for animations to settle
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Take screenshot
      const outputPath = path.join(exportDir, `${banner.name}.png`);
      await page.screenshot({
        path: outputPath,
        clip: { x: 0, y: 0, width: 1200, height: 600 }
      });
      
      console.log(`✅ Exported: ${outputPath}\n`);
      await page.close();
      
    } catch (error) {
      console.error(`❌ Error exporting ${banner.title}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 Banner export complete!');
  console.log(`📁 Images saved to: ${exportDir}`);
}

// Run the export
exportBanners().catch(console.error);
