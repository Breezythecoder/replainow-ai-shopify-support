#!/usr/bin/env node

/**
 * Create SPA redirect pages for GitHub Pages
 * GitHub Pages doesn't support _redirects, so we need individual HTML files
 */

import fs from 'fs';
import path from 'path';

const routes = [
  'ai-shopify-helpdesk',
  'multilingual-support', 
  'shopify-customer-service',
  'shopify-ai-support',
  'gorgias-alternative',
  'intercom-alternative',
  'privacy',
  'terms',
  'security',
  'impressum',
  'refund',
  'cookies',
  'uninstall'
];

const createRedirectHTML = (route) => `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReplAInow - Wird geladen...</title>
    <meta name="robots" content="noindex, nofollow" />
    <script>
      // Immediate redirect to main SPA WITHOUT hash
      window.location.replace('/?route=${route}');
    </script>
  </head>
  <body>
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1e293b, #334155); color: white; font-family: system-ui, -apple-system, sans-serif;">
      <div style="text-align: center; padding: 2rem;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Wird geladen...</h1>
        <div style="width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </body>
</html>`;

console.log('🔄 Creating SPA redirect pages for GitHub Pages...');

const distDir = 'dist';

for (const route of routes) {
  const filePath = path.join(distDir, `${route}.html`);
  const htmlContent = createRedirectHTML(route);
  
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  console.log(`✅ Created: ${route}.html`);
}

console.log(`\n🎉 Created ${routes.length} redirect pages for GitHub Pages SPA routing!`);
console.log('These pages will redirect to the main SPA with hash routing.');
