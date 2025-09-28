import { test, expect } from '@playwright/test';

test.describe('EN Route Smoke Tests', () => {
  test('should load /en without errors', async ({ page }) => {
    // Intercept console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to /en
    await page.goto('http://localhost:4173/en');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for JavaScript errors
    expect(consoleErrors).toHaveLength(0);
    
    // Check page title
    await expect(page).toHaveTitle(/ReplAInow|AI Shopify Helpdesk/);
    
    // Check for English content
    const h1 = await page.locator('h1').first();
    await expect(h1).toBeVisible();
    
    // Check for English-specific content (not German)
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('Händler');
    expect(bodyText).not.toContain('Aktive');
    expect(bodyText).not.toContain('Shopify-Händler');
    
    // Check for English content
    expect(bodyText).toContain('Shopify');
    expect(bodyText).toContain('AI');
  });

  test('should have correct HTML lang attribute', async ({ page }) => {
    await page.goto('http://localhost:4173/en');
    await page.waitForLoadState('networkidle');
    
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBe('en');
  });

  test('should have correct canonical URL', async ({ page }) => {
    await page.goto('http://localhost:4173/en');
    await page.waitForLoadState('networkidle');
    
    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    expect(canonical).toBe('https://replainow.com/en');
  });

  test('should have hreflang tags', async ({ page }) => {
    await page.goto('http://localhost:4173/en');
    await page.waitForLoadState('networkidle');
    
    const hreflangTags = await page.locator('link[hreflang]').all();
    expect(hreflangTags.length).toBeGreaterThan(0);
    
    // Check for specific hreflang tags
    const hreflangEn = await page.getAttribute('link[hreflang="en"]', 'href');
    expect(hreflangEn).toBe('https://replainow.com/en');
    
    const hreflangDe = await page.getAttribute('link[hreflang="de"]', 'href');
    expect(hreflangDe).toBe('https://replainow.com/');
  });

  test('should have JSON-LD structured data', async ({ page }) => {
    await page.goto('http://localhost:4173/en');
    await page.waitForLoadState('networkidle');
    
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').all();
    expect(jsonLdScripts.length).toBeGreaterThan(0);
    
    // Check for Organization schema
    const organizationScript = await page.locator('script[type="application/ld+json"]').first();
    const jsonContent = await organizationScript.textContent();
    expect(jsonContent).toContain('"@type": "Organization"');
    expect(jsonContent).toContain('"name": "ReplAInow"');
  });

  test('should not have #/en links', async ({ page }) => {
    await page.goto('http://localhost:4173/en');
    await page.waitForLoadState('networkidle');
    
    // Check that no links contain #/en
    const links = await page.locator('a[href*="#/en"]').all();
    expect(links).toHaveLength(0);
  });

  test('should load / without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://localhost:4173/');
    await page.waitForLoadState('networkidle');
    
    expect(consoleErrors).toHaveLength(0);
    
    // Check for German content
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Shopify');
  });
});
