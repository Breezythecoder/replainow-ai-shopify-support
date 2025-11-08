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

  const banners = [
    {
      name: "cards-in-action-no-widget-de",
      title: "Cards in Action - Ohne Widget (für Canva)",
    },
  ];

  for (const banner of banners) {
    console.log(`Exporting ${banner.title}...`);

    const page = await browser.newPage();

    // Set viewport to 1600x900 with normal scale for exact dimensions
    await page.setViewport({
      width: 1600,
      height: 900,
      deviceScaleFactor: 1, // 1x for exact 1600x900 output
    });

    // Navigate to the banner HTML file
    const filePath = `file://${path.join(
      __dirname,
      "html",
      `${banner.name}.html`
    )}`;
    await page.goto(filePath, { waitUntil: "networkidle0" });

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
    const outputPath = path.join(__dirname, "png", `${banner.name}.png`);
    await page.screenshot({
      path: outputPath,
      type: "png",
      omitBackground: false,
      fullPage: false,
      captureBeyondViewport: false,
    });

    await page.close();
    console.log(`✓ Exported ${banner.name}.png`);
  }

  await browser.close();
  console.log(
    "\n✅ All banners exported successfully to shopify-final-banners/png/"
  );
}

// Create png directory if it doesn't exist
const pngDir = path.join(__dirname, "png");
if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

exportBanners().catch(console.error);
