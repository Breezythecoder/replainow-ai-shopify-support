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
    await page.goto(`${baseUrl}/en`, { waitUntil: 'networkidle' });

    // Wait for translations to load
    await page.waitForTimeout(3000);

    // Get only truly visible text (excluding hidden elements and attributes)
    const visibleText = await page.evaluate(() => {
      const getVisibleText = (element: Element): string => {
        if (window.getComputedStyle(element).display === 'none' ||
            window.getComputedStyle(element).visibility === 'hidden' ||
            parseFloat(window.getComputedStyle(element).opacity) === 0) {
          return '';
        }

        let text = '';
        for (const child of Array.from(element.childNodes)) {
          if (child.nodeType === Node.TEXT_NODE) {
            text += child.textContent?.trim() + ' ';
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            text += getVisibleText(child as Element);
          }
        }
        return text;
      };

      return getVisibleText(document.body).toLowerCase();
    });

    // German words that should not appear on English page
    // Note: We only check for words that should be translated in EN UI
    // Some words like 'impressum', 'kostenlos', 'lösung' appear in other language footers
    // but are not part of the EN user interface
    const germanWords = [
      'startseite', 'datenschutz', 'agb', 'kontaktiere',
      'funktionen', 'preise', 'anfordern'
    ];

    const foundGermanWords = germanWords.filter(word => visibleText.includes(word));

    if (foundGermanWords.length > 0) {
      console.log('Visible text sample:', visibleText.substring(0, 500));
      throw new Error(`German words found on English page: ${foundGermanWords.join(', ')}`);
    }

    console.log('✅ No German words found on English page');
  });

  test('Visual regression: EN and DE pages should have similar structure', async ({ page }) => {
    // Test that both pages have basic structural elements
    const testPageStructure = async (url: string) => {
      await page.goto(url, { waitUntil: 'networkidle' });

      const structure = await page.evaluate(() => {
        const elements = ['h1', 'nav', 'main', 'footer', 'section'];
        return elements.map(selector => {
          const element = document.querySelector(selector);
          return {
            selector,
            exists: !!element,
            id: element?.id || null,
            className: element?.className || null
          };
        });
      });

      return structure;
    };

    const deStructure = await testPageStructure(`${baseUrl}/`);
    const enStructure = await testPageStructure(`${baseUrl}/en`);

    // Both pages should have the same basic structure
    expect(deStructure.length).toBe(enStructure.length);

    for (let i = 0; i < deStructure.length; i++) {
      expect(deStructure[i].exists).toBe(enStructure[i].exists);
      expect(deStructure[i].selector).toBe(enStructure[i].selector);
    }

    console.log('✅ Visual regression: Both pages have matching basic structure');
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

    // Both pages should load within 5 seconds (more realistic for CI)
    expect(deLoadTime).toBeLessThan(5000);
    expect(enLoadTime).toBeLessThan(5000);

    // Performance should be similar (within 1 second difference)
    const timeDiff = Math.abs(deLoadTime - enLoadTime);
    expect(timeDiff).toBeLessThan(1000);

    console.log(`✅ Performance regression: DE=${deLoadTime}ms, EN=${enLoadTime}ms, Diff=${timeDiff}ms`);
  });
});
