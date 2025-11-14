#!/usr/bin/env node

/**
 * Copy index.html to 404.html for GitHub Pages SPA routing
 * This allows React Router to handle all routes via the 404 fallback
 */

import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

console.log('📄 Copying index.html to 404.html for SPA routing...');

try {
  // Read index.html
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Write to 404.html (exact copy)
  fs.writeFileSync(notFoundPath, indexContent, 'utf8');
  
  console.log('✅ Successfully copied index.html → 404.html');
  console.log('🎯 GitHub Pages will now serve the full React app for all routes!');
} catch (error) {
  console.error('❌ Error copying index.html to 404.html:', error);
  process.exit(1);
}

