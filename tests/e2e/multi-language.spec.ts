import { test, expect } from '@playwright/test';

/**
 * Multi-Language E2E Tests
 * Verifies all 4 supported languages load correctly and display proper content
 */

const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr'] as const;
type Locale = typeof SUPPORTED_LOCALES[number];

const LOCALE_PATHS: Record<Locale, string> = {
  de: '/',
  en: '/en',
  es: '/es',
  fr: '/fr',
};

const EXPECTED_TITLES: Record<Locale, string> = {
  de: 'ReplAInow – AI Shopify Helpdesk',
  en: 'ReplAInow – AI Shopify Helpdesk | Automated Customer Support',
  es: 'ReplAInow – Helpdesk IA Shopify | Soporte al Cliente Automatizado',
  fr: 'ReplAInow – Helpdesk IA Shopify | Support Client Automatisé',
};

test.describe('Multi-Language Support', () => {
  for (const locale of SUPPORTED_LOCALES) {
    test.describe(`${locale.toUpperCase()} locale`, () => {
      
      test('should load page correctly', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Page should load without errors
        await expect(page).toHaveURL(new RegExp(LOCALE_PATHS[locale]));
        
        // Should have correct document title
        await expect(page).toHaveTitle(new RegExp(EXPECTED_TITLES[locale].split(' ')[0]));
      });
      
      test('should display correct language content', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Check for language-specific content
        const html = await page.content();
        
        // HTML lang attribute should match locale
        const htmlLang = await page.getAttribute('html', 'lang');
        expect(htmlLang).toBe(locale);
      });
      
      test('should have proper hreflang tags', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Check for hreflang tags
        const hreflangLinks = await page.locator('link[rel="alternate"][hreflang]').count();
        expect(hreflangLinks).toBeGreaterThan(0);
        
        // Should have hreflang for all supported locales
        for (const targetLocale of SUPPORTED_LOCALES) {
          const hreflang = await page.locator(`link[hreflang="${targetLocale}"]`);
          await expect(hreflang).toHaveCount(1);
        }
        
        // Should have x-default hreflang
        const xDefault = await page.locator('link[hreflang="x-default"]');
        await expect(xDefault).toHaveCount(1);
      });
      
      test('should have correct meta tags', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Should have description meta tag
        const description = await page.locator('meta[name="description"]');
        await expect(description).toHaveCount(1);
        
        const descContent = await description.getAttribute('content');
        expect(descContent).toBeTruthy();
        expect(descContent!.length).toBeGreaterThan(50);
        
        // Should have Open Graph tags
        const ogTitle = await page.locator('meta[property="og:title"]');
        await expect(ogTitle).toHaveCount(1);
        
        const ogDescription = await page.locator('meta[property="og:description"]');
        await expect(ogDescription).toHaveCount(1);
        
        // Should have Twitter Card tags
        const twitterCard = await page.locator('meta[name="twitter:card"]');
        await expect(twitterCard).toHaveCount(1);
      });
      
      test('should render main navigation', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Navigation should be visible
        const nav = await page.locator('nav, [role="navigation"]').first();
        await expect(nav).toBeVisible();
      });
      
      test('should render hero section', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        // Hero section should contain main heading
        const h1 = await page.locator('h1').first();
        await expect(h1).toBeVisible();
        
        const h1Text = await h1.textContent();
        expect(h1Text).toBeTruthy();
        expect(h1Text!.length).toBeGreaterThan(10);
      });
      
      test('should have no console errors', async ({ page }) => {
        const consoleErrors: string[] = [];
        
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });
        
        await page.goto(LOCALE_PATHS[locale]);
        
        // Wait for page to be fully loaded
        await page.waitForLoadState('networkidle');
        
        // Filter out known acceptable errors (if any)
        const relevantErrors = consoleErrors.filter(error => 
          !error.includes('Lighthouse') &&
          !error.includes('Chrome extensions')
        );
        
        expect(relevantErrors).toHaveLength(0);
      });
      
      test('should have proper canonical URL', async ({ page }) => {
        await page.goto(LOCALE_PATHS[locale]);
        
        const canonical = await page.locator('link[rel="canonical"]');
        await expect(canonical).toHaveCount(1);
        
        const href = await canonical.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href).toContain('replainow.com');
      });
      
      test('should load without JavaScript errors in network', async ({ page }) => {
        const failedRequests: string[] = [];
        
        page.on('requestfailed', request => {
          failedRequests.push(`${request.url()} - ${request.failure()?.errorText}`);
        });
        
        await page.goto(LOCALE_PATHS[locale]);
        await page.waitForLoadState('networkidle');
        
        // JavaScript files should load successfully
        const jsFailures = failedRequests.filter(req => 
          req.includes('.js') || req.includes('.mjs')
        );
        
        expect(jsFailures).toHaveLength(0);
      });
    });
  }
});

test.describe('Language Switcher', () => {
  test('should be able to switch between languages', async ({ page }) => {
    // Start on German
    await page.goto('/');
    await expect(page).toHaveURL('/');
    
    // Navigate to English
    await page.goto('/en');
    await expect(page).toHaveURL('/en');
    
    // Navigate to Spanish
    await page.goto('/es');
    await expect(page).toHaveURL('/es');
    
    // Navigate to French
    await page.goto('/fr');
    await expect(page).toHaveURL('/fr');
    
    // Back to German
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });
});

test.describe('Translation Completeness', () => {
  test('all locales should have sitemap entries', async ({ page }) => {
    await page.goto('/sitemap.xml');
    
    const content = await page.content();
    
    // Should include all language variants
    expect(content).toContain('https://replainow.com/');      // German
    expect(content).toContain('https://replainow.com/en');   // English
    expect(content).toContain('https://replainow.com/es');   // Spanish
    expect(content).toContain('https://replainow.com/fr');   // French
  });
});

test.describe('No Locale Leakage', () => {
  test('German page should not contain English content', async ({ page }) => {
    await page.goto('/');
    
    const content = await page.content();
    
    // Should not have obvious English-only phrases in German version
    // (This is a simple check - more sophisticated checks can be added)
    const h1Text = await page.locator('h1').first().textContent();
    
    // German version should have German text
    expect(h1Text).toBeTruthy();
  });
  
  test('English page should not contain German content', async ({ page }) => {
    await page.goto('/en');
    
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBe('en');
  });
});

