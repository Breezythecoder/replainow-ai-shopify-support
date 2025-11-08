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

  // CSS to inject for removing padding/margins/border-radius
  const exportCSS = `
    body { 
      padding: 0 !important; 
      margin: 0 !important; 
      min-height: 900px !important;
      height: 900px !important;
    }
    .banner { 
      width: 1600px !important; 
      height: 900px !important; 
      border-radius: 0 !important;
    }
    .banner-container {
      max-width: 1600px !important;
      width: 1600px !important;
      height: 900px !important;
      border-radius: 0 !important;
      padding: 80px !important;
      margin: 0 !important;
      box-sizing: border-box !important;
    }
  `;

  const banners = [
    // Main Banner
    { name: 'shopify-hauptbanner-v2-de', title: 'HAUPT V2: Deine KI löst bis zu 80%' }
  ];

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const banner of banners) {
    try {
      console.log(`📸 Exporting ${banner.title}...`);
      
      const page = await browser.newPage();
      
      // HIGH QUALITY: Use deviceScaleFactor 2 for Retina/High-DPI
      await page.setViewport({ 
        width: 1600, 
        height: 900,
        deviceScaleFactor: 2  // 2x resolution for crisp quality
      });
      
      // Load the HTML file
      const filePath = `file://${path.join(__dirname, 'banners', `${banner.name}.html`)}`;
      await page.goto(filePath, { waitUntil: 'networkidle0' });
      
      // Inject export CSS to remove padding/margins/border-radius
      await page.addStyleTag({ content: exportCSS });
      
      // Wait for fonts to load and animations to settle
      await page.evaluateHandle('document.fonts.ready');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take HIGH QUALITY screenshot
      const outputPath = path.join(exportDir, `${banner.name}.png`);
      await page.screenshot({
        path: outputPath,
        type: 'png',
        omitBackground: false,
        fullPage: false
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
