#!/usr/bin/env node

/**
 * Create SPA redirect pages for GitHub Pages
 * GitHub Pages doesn't support _redirects, so we need individual HTML files
 */

import fs from 'fs';
import path from 'path';

// All pages now use 404.html fallback for SPA routing
// This prevents redirect loops and simplifies architecture
// The 404.html is a copy of index.html, so React Router handles all routing
const routes = [
  // No redirect pages needed - 404.html fallback handles everything!
  // Keeping array empty to prevent redirect loops
];

const createRedirectHTML = (route) => `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReplAInow - Loading...</title>
    <meta name="robots" content="noindex, nofollow" />
    <script>
      // Save the requested route and redirect to SPA root
      // React Router will handle the routing based on URL
      sessionStorage.setItem('redirectFrom', '/${route}');
      window.location.replace('/');
    </script>
  </head>
  <body>
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1e293b, #334155); color: white; font-family: system-ui, -apple-system, sans-serif;">
      <div style="text-align: center; padding: 2rem;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Loading...</h1>
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

if (routes.length > 0) {
  console.log(`\n🎉 Created ${routes.length} redirect pages for GitHub Pages SPA routing!`);
  console.log('These pages will redirect to the main SPA with hash routing.');
} else {
  console.log('\n✅ No redirect pages needed - All routes use 404.html fallback!');
  console.log('🎯 Clean architecture: 404.html = index.html → React Router handles everything');
}
