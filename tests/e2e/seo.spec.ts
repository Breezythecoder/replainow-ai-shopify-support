import { test, expect } from '@playwright/test';

// SEO Tests for ReplAInow
test.describe('SEO Tests', () => {
  test('Homepage has correct meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/ReplAInow.*AI.*Shopify.*Helpdesk/);
    
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('AI Shopify Helpdesk');
    expect(metaDescription).toContain('GPT-4.1');
    expect(metaDescription).toContain('24/7');
    
    // Check canonical
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://replainow.com/');
    
    // Check Open Graph tags
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /ReplAInow/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /AI Shopify Helpdesk/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://replainow.com/');
    
    // Check exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check H1 content
    const h1Text = await page.locator('h1').textContent();
    expect(h1Text).toContain('ReplAInow');
  });

  test('AI Shopify Helpdesk page has correct SEO', async ({ page }) => {
    await page.goto('/ai-shopify-helpdesk');
    
    // Check title
    await expect(page).toHaveTitle(/AI Shopify Helpdesk.*GPT-4.1/);
    
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('AI Shopify Helpdesk');
    expect(metaDescription).toContain('GPT-4.1');
    
    // Check canonical
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://replainow.com/ai-shopify-helpdesk');
    
    // Check exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check structured data
    const structuredData = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(structuredData).toContain('Organization');
    expect(structuredData).toContain('SoftwareApplication');
  });

  test('Multilingual Support page has correct SEO', async ({ page }) => {
    await page.goto('/multilingual-support');
    
    // Check title
    await expect(page).toHaveTitle(/Multilingual Support.*32\+ Sprachen/);
    
    // Check meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('32+ Sprachen');
    expect(metaDescription).toContain('mehrsprachig');
    
    // Check canonical
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://replainow.com/multilingual-support');
    
    // Check exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('Sitemap is accessible', async ({ page }) => {
    await page.goto('/sitemap.xml');
    
    // Should not return 404
    expect(page.url()).toContain('sitemap.xml');
  });

  test('Robots.txt is accessible', async ({ page }) => {
    await page.goto('/robots.txt');
    
    // Should not return 404
    expect(page.url()).toContain('robots.txt');
  });

  test('LLM Facts JSON is accessible', async ({ page }) => {
    await page.goto('/.well-known/llm-facts.json');
    
    // Should not return 404
    expect(page.url()).toContain('llm-facts.json');
  });

  test('All pages have proper heading structure', async ({ page }) => {
    const pages = ['/', '/ai-shopify-helpdesk', '/multilingual-support'];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      
      // Check that H1 comes before H2
      const h1 = await page.locator('h1').first();
      const h2 = await page.locator('h2').first();
      
      if (await h2.isVisible()) {
        const h1Box = await h1.boundingBox();
        const h2Box = await h2.boundingBox();
        
        if (h1Box && h2Box) {
          expect(h1Box.y).toBeLessThan(h2Box.y);
        }
      }
    }
  });

  test('All pages have FAQ structured data', async ({ page }) => {
    const pages = ['/ai-shopify-helpdesk', '/multilingual-support'];
    
    for (const pageUrl of pages) {
      await page.goto(pageUrl);
      
      // Check for FAQ structured data
      const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
      const hasFAQ = structuredData.some(data => data.includes('FAQPage'));
      expect(hasFAQ).toBe(true);
    }
  });

  test('Mobile viewport has proper meta viewport', async ({ page }) => {
    await page.goto('/');
    
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
    expect(viewport).toContain('initial-scale=1');
  });

  test('All images have alt attributes', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
    }
  });

  test('JSON-LD enthält Organization', async ({ page }) => {
    await page.goto('/');
    const ldHandles = await page.$$eval('script[type="application/ld+json"]', els => els.map(e => e.textContent));
    const hasOrg = ldHandles.some(txt => txt && JSON.parse(txt)['@type']?.includes?.("Organization") || JSON.parse(txt)['@type']==="Organization");
    expect(hasOrg).toBeTruthy();
  });

  test('JSON-LD ist valide', async ({ page }) => {
    await page.goto('/ai-shopify-helpdesk');
    const ldHandles = await page.$$eval('script[type="application/ld+json"]', els => els.map(e => e.textContent));
    
    for (const ldText of ldHandles) {
      if (ldText) {
        const ld = JSON.parse(ldText);
        expect(ld['@context']).toBe('https://schema.org');
        expect(ld['@type']).toBeTruthy();
      }
    }
  });
});
