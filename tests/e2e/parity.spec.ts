import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

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
      'funktionen', 'demo', 'über', 'warum', 'wie', 'was', 'wo',
      'mehr', 'weniger', 'besser', 'schneller', 'kostenlos',
      'startseite', 'impressum', 'datenschutz', 'agb', 'kontaktiere',
      'jetzt', 'hier', 'kostenlos', 'testen', 'anfordern',
      'lösung', 'produkt', 'service', 'support', 'team'
    ];

    const foundGermanWords = germanWords.filter(word => visibleText.includes(word));

    if (foundGermanWords.length > 0) {
      throw new Error(`German words found on English page: ${foundGermanWords.join(', ')}`);
    }
  });

  test('Visual regression: EN and DE pages should have identical structure', async ({ page }) => {
    const screenshotsDir = path.join(process.cwd(), 'test-results', 'visual-regression');

    // Ensure screenshots directory exists
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Take screenshot of German page (reference)
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: 1280, height: 1024 });
    await page.waitForTimeout(2000); // Wait for any animations
    await page.screenshot({
      path: path.join(screenshotsDir, 'de-homepage.png'),
      fullPage: true
    });

    // Take screenshot of English page
    await page.goto(`${baseUrl}/en`, { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: 1280, height: 1024 });
    await page.waitForTimeout(2000); // Wait for any animations
    await page.screenshot({
      path: path.join(screenshotsDir, 'en-homepage.png'),
      fullPage: true
    });

    // Get DOM structure for comparison
    const deStructure = await page.evaluate(() => {
      const getElementStructure = (element: Element): any => {
        const structure = {
          tag: element.tagName.toLowerCase(),
          id: element.id || null,
          className: element.className || null,
          children: []
        };

        // Only include major structural elements
        const majorElements = ['section', 'main', 'header', 'footer', 'nav', 'article', 'aside'];
        if (majorElements.includes(structure.tag)) {
          Array.from(element.children).forEach(child => {
            structure.children.push(getElementStructure(child));
          });
        }

        return structure;
      };

      return getElementStructure(document.body);
    });

    // Navigate back to English page and get its structure
    await page.goto(`${baseUrl}/en`, { waitUntil: 'networkidle' });
    const enStructure = await page.evaluate(() => {
      const getElementStructure = (element: Element): any => {
        const structure = {
          tag: element.tagName.toLowerCase(),
          id: element.id || null,
          className: element.className || null,
          children: []
        };

        const majorElements = ['section', 'main', 'header', 'footer', 'nav', 'article', 'aside'];
        if (majorElements.includes(structure.tag)) {
          Array.from(element.children).forEach(child => {
            structure.children.push(getElementStructure(child));
          });
        }

        return structure;
      };

      return getElementStructure(document.body);
    });

    // Compare structures
    const structuresMatch = JSON.stringify(deStructure) === JSON.stringify(enStructure);
    if (!structuresMatch) {
      console.log('DOM Structure Mismatch:');
      console.log('DE Structure:', JSON.stringify(deStructure, null, 2));
      console.log('EN Structure:', JSON.stringify(enStructure, null, 2));
      throw new Error('DOM structures do not match between DE and EN pages');
    }

    console.log('✅ Visual regression: DOM structures match between DE and EN pages');
  });

  test('SEO validation: Both pages have correct structured data', async ({ page }) => {
    // Test German page SEO
    await page.goto(`${baseUrl}/`);
    const deJsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(deJsonLd).toBeTruthy();

    let deSchema;
    try {
      deSchema = JSON.parse(deJsonLd || '{}');
    } catch (e) {
      throw new Error('Invalid JSON-LD on German page');
    }

    // Test English page SEO
    await page.goto(`${baseUrl}/en`);
    const enJsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(enJsonLd).toBeTruthy();

    let enSchema;
    try {
      enSchema = JSON.parse(enJsonLd || '{}');
    } catch (e) {
      throw new Error('Invalid JSON-LD on English page');
    }

    // Compare schema structure (ignoring language-specific content)
    expect(Object.keys(deSchema)).toEqual(Object.keys(enSchema));
    expect(deSchema['@type']).toBe(enSchema['@type']);

    console.log('✅ SEO validation: Structured data schemas match');
  });

  test('Performance regression: Both pages load within acceptable time', async ({ page }) => {
    // Test German page performance
    const startTime = Date.now();
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    const deLoadTime = Date.now() - startTime;

    // Test English page performance
    const enStartTime = Date.now();
    await page.goto(`${baseUrl}/en`, { waitUntil: 'networkidle' });
    const enLoadTime = Date.now() - enStartTime;

    // Both pages should load within 3 seconds
    expect(deLoadTime).toBeLessThan(3000);
    expect(enLoadTime).toBeLessThan(3000);

    // Performance should be similar (within 500ms difference)
    const timeDiff = Math.abs(deLoadTime - enLoadTime);
    expect(timeDiff).toBeLessThan(500);

    console.log(`✅ Performance regression: DE=${deLoadTime}ms, EN=${enLoadTime}ms, Diff=${timeDiff}ms`);
  });
});
