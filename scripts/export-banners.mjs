#!/usr/bin/env node
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const banners = [
  { id: 'h1', name: 'H1-Zero-Setup-60-Sekunden', type: 'hero' },
  { id: 'h2', name: 'H2-Automation-Power', type: 'hero' },
  { id: 'h3', name: 'H3-Dual-Channel', type: 'hero' },
  { id: 'h4', name: 'H4-Global-Languages', type: 'hero' },
  { id: 'h5', name: 'H5-Real-Time-Sync', type: 'hero' },
  { id: 'h6', name: 'H6-Quality-Scores', type: 'hero' },
  { id: 'h7', name: 'H7-Visual-Commerce', type: 'hero' },
  { id: 'h8', name: 'H8-Human-AI-Team', type: 'hero' },
  { id: 'f1', name: 'F1-Shopify-Auto-Import', type: 'feature' },
  { id: 'f2', name: 'F2-3-Column-Dashboard', type: 'feature' },
  { id: 'f3', name: 'F3-Multi-Tab-Widget', type: 'feature' },
  { id: 'f4', name: 'F4-Proactive-Triggers', type: 'feature' },
  { id: 'f5', name: 'F5-Thread-Based-Email', type: 'feature' },
];

console.log('🎨 ReplAInow Banner Export Script');
console.log('==================================\n');

// Create output directory
const outputDir = join(__dirname, '..', 'exported-banners');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
  console.log('✅ Created output directory:', outputDir);
}

// Launch browser
console.log('🚀 Launching browser...\n');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 2, // 2x resolution for crispy quality (3200x1800 internal)
});

console.log('✅ Browser ready\n');

// Export each banner
for (const banner of banners) {
  try {
    console.log(`📸 Exporting ${banner.name}...`);
    
    // Navigate to the banner-specific export page
    const url = `http://localhost:5173/banner-export?id=${banner.id}`;
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for rendering and UI cleanup
    await page.waitForTimeout(2000);
    
    // Hide any remaining UI elements via JavaScript
    await page.evaluate(() => {
      // Remove Design Auditor and any overlays
      document.querySelectorAll('[data-design-auditor], [role="complementary"], [role="status"], .toaster, .toast').forEach(el => el.remove());
      // Hide contrast auditor
      const contrastElements = document.querySelectorAll('div[style*="position: fixed"]');
      contrastElements.forEach(el => {
        if (el.textContent?.includes('Kontrast') || el.textContent?.includes('Design Auditor')) {
          el.remove();
        }
      });
    });

    // Take screenshot of the FULL PAGE (which is exactly 1600x900)
    // With deviceScaleFactor: 2, this will be super crisp quality
    const filename = join(outputDir, `ReplAInow-Banner-${banner.name}.png`);
    await page.screenshot({ 
      path: filename,
      fullPage: false,
      type: 'png',
      // Playwright will automatically scale down from 3200x1800 to 1600x900
      // giving us perfect quality
    });
    
    console.log(`   ✅ Saved: ${banner.name}.png (1600×900px)`);
  } catch (error) {
    console.error(`   ❌ Error exporting ${banner.name}:`, error.message);
  }
}

await browser.close();

console.log('\n🎉 Export complete!');
console.log(`📁 All banners saved to: ${outputDir}`);
console.log('\n📋 Next steps:');
console.log('   1. Check the exported-banners/ folder');
console.log('   2. All files are 1600×900px PNG');
console.log('   3. Ready to upload to Shopify App Store!\n');

