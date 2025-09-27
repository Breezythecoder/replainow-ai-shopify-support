import { chromium } from 'playwright';

async function analyzeWebsite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🔍 Öffne replainow.com...');
  await page.goto('https://replainow.com/', { waitUntil: 'networkidle' });
  
  console.log('📸 Mache Screenshot...');
  await page.screenshot({ path: 'replainow-analysis.png', fullPage: true });
  
  console.log('🔍 Analysiere Footer...');
  const footerContent = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      return footer.innerHTML;
    }
    return 'Footer nicht gefunden!';
  });
  
  console.log('📋 Footer Content:');
  console.log(footerContent);
  
  console.log('🔍 Analysiere Navigation...');
  const navContent = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      return nav.innerHTML;
    }
    return 'Navigation nicht gefunden!';
  });
  
  console.log('📋 Navigation Content:');
  console.log(navContent);
  
  await browser.close();
  console.log('✅ Analyse abgeschlossen!');
}

analyzeWebsite().catch(console.error);
