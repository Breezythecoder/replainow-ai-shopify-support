import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportBanners() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Define all banners to export
  const banners = [
    "main-banner-v2",
    "cards-in-action-no-widget",
    "dashboard-3-column",
    "knowledge-dashboard",
    "order-management",
    "widget-showcase-v2"
  ];

  // Define language to export (passed as argument)
  const lang = process.argv[2] || 'en';
  
  console.log(`\n🚀 Exporting ${banners.length} banners for language: ${lang.toUpperCase()}\n`);

  for (const bannerName of banners) {
    const fullName = `${bannerName}-${lang}`;
    console.log(`📦 Exporting ${fullName}...`);

    const page = await browser.newPage();

    // Set viewport to 1600x900 with normal scale for exact dimensions
    await page.setViewport({
      width: 1600,
      height: 900,
      deviceScaleFactor: 1,
    });

    // Navigate to the banner HTML file
    const filePath = `file://${path.join(
      __dirname,
      "html",
      `${fullName}.html`
    )}`;
    
    try {
      await page.goto(filePath, { waitUntil: "networkidle0", timeout: 10000 });
    } catch (error) {
      console.log(`   ⚠️  Warning: ${fullName}.html not found, skipping...`);
      await page.close();
      continue;
    }

    // Inject CSS to ensure proper full-bleed export
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
    `;
    await page.addStyleTag({ content: exportCSS });

    // Ensure fonts are loaded
    await page.evaluateHandle("document.fonts.ready");

    // Wait for any animations or assets to load
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Take screenshot with high quality settings
    const outputPath = path.join(__dirname, "png", `${fullName}.png`);
    await page.screenshot({
      path: outputPath,
      type: "png",
      omitBackground: false,
      fullPage: false,
      captureBeyondViewport: false,
    });

    await page.close();
    console.log(`   ✓ Exported ${fullName}.png`);
  }

  await browser.close();
  console.log(
    `\n✅ All ${banners.length} banners for ${lang.toUpperCase()} exported successfully!\n`
  );
}

// Create png directory if it doesn't exist
const pngDir = path.join(__dirname, "png");
if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

exportBanners().catch(console.error);


