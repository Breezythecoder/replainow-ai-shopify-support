import { test, expect } from '@playwright/test';

test.describe('EN Parity Tests', () => {
  const baseUrl = 'http://localhost:4173';

  test('German homepage (/ route) should load correctly', async ({ page }) => {
    await page.goto(`${baseUrl}/`);
    
    // Check HTML lang attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    
    // Check for German content in hero section
    await expect(page.locator('h1')).toContainText(/Shopify/);
    
    // Check for JSON-LD scripts
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount({ min: 1 });
    
    // Check canonical URL
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${baseUrl}/`);
    
    // Check hreflang tags
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', `${baseUrl}/en`);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', `${baseUrl}/`);
    
    // Check for console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a bit for potential errors
    await page.waitForTimeout(2000);
    
    if (consoleErrors.length > 0) {
      console.error('Console errors on /:', consoleErrors);
      throw new Error(`Console errors found: ${consoleErrors.join(', ')}`);
    }
  });

  test('English homepage (/en route) should load correctly', async ({ page }) => {
    await page.goto(`${baseUrl}/en`);
    
    // Check HTML lang attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    
    // Check for English content in hero section
    await expect(page.locator('h1')).toContainText(/Shopify/);
    
    // Check for JSON-LD scripts
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount({ min: 1 });
    
    // Check canonical URL
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${baseUrl}/en`);
    
    // Check hreflang tags
    await expect(page.locator('link[rel="alternate"][hreflang="de"]')).toHaveAttribute('href', `${baseUrl}/`);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', `${baseUrl}/`);
    
    // Check internal links point to /en
    const internalLinks = page.locator('a[href^="/"], a[href^="./"]');
    const linkCount = await internalLinks.count();
    
    for (let i = 0; i < Math.min(linkCount, 10); i++) {
      const href = await internalLinks.nth(i).getAttribute('href');
      if (href && !href.startsWith('/en') && href !== '/' && href !== './') {
        console.warn(`Internal link on /en points to non-EN route: ${href}`);
      }
    }
    
    // Check for console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a bit for potential errors
    await page.waitForTimeout(2000);
    
    if (consoleErrors.length > 0) {
      console.error('Console errors on /en:', consoleErrors);
      throw new Error(`Console errors found: ${consoleErrors.join(', ')}`);
    }
  });

  test('Both routes should have identical DOM structure', async ({ page }) => {
    // Load German page
    await page.goto(`${baseUrl}/`);
    const deStructure = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, main, header, footer')).map(el => ({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        className: el.className || null
      }));
      return sections;
    });
    
    // Load English page
    await page.goto(`${baseUrl}/en`);
    const enStructure = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, main, header, footer')).map(el => ({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        className: el.className || null
      }));
      return sections;
    });
    
    // Compare structures
    expect(enStructure).toHaveLength(deStructure.length);
    
    // Check that main structural elements are present in both
    const deIds = deStructure.map(s => s.id).filter(Boolean);
    const enIds = enStructure.map(s => s.id).filter(Boolean);
    
    for (const id of deIds) {
      expect(enIds).toContain(id);
    }
  });

  test('English page should not contain German text', async ({ page }) => {
    await page.goto(`${baseUrl}/en`);
    
    // Get all visible text
    const visibleText = await page.evaluate(() => {
      return document.body.innerText.toLowerCase();
    });
    
    // German words that should not appear on English page
    const germanWords = [
      'händler', 'aktiv', 'shopify-händler', 'kunden', 'antworten', 
      'automatisch', 'unterstützung', 'hilfe', 'kontakt', 'preise',
      'funktionen', 'demo', 'über', 'warum', 'wie', 'was', 'wo'
    ];
    
    const foundGermanWords = germanWords.filter(word => visibleText.includes(word));
    
    if (foundGermanWords.length > 0) {
      throw new Error(`German words found on English page: ${foundGermanWords.join(', ')}`);
    }
  });
});
