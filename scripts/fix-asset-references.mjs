#!/usr/bin/env node

/**
 * Fix Asset References - Update HTML files to use correct asset names
 * This fixes the 404 errors caused by mismatched asset names
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing asset references in HTML files...');

const distDir = 'dist';

// Get the actual asset names from the dist/assets directory
const assetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('❌ Assets directory not found:', assetsDir);
  process.exit(1);
}

const assetFiles = fs.readdirSync(assetsDir);

// Get the newest assets (by modification time)
const jsAssets = assetFiles.filter(file => file.startsWith('index-') && file.endsWith('.js'));
const cssAssets = assetFiles.filter(file => file.startsWith('index-') && file.endsWith('.css'));

const getNewestAsset = (assets) => {
  return assets
    .map(file => ({
      name: file,
      mtime: fs.statSync(path.join(assetsDir, file)).mtime
    }))
    .sort((a, b) => b.mtime - a.mtime)[0]?.name;
};

const jsAsset = getNewestAsset(jsAssets);
const cssAsset = getNewestAsset(cssAssets);

if (!jsAsset || !cssAsset) {
  console.error('❌ Could not find index assets:', { jsAsset, cssAsset });
  process.exit(1);
}

console.log('📄 Found assets:', { jsAsset, cssAsset });

// Update all HTML files in dist directory
const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));

let totalReplacements = 0;

for (const htmlFile of htmlFiles) {
  const filePath = path.join(distDir, htmlFile);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;
  
  // Replace any old asset references with the correct ones
  const jsRegex = /\/assets\/index-[a-zA-Z0-9_-]+\.js/g;
  const cssRegex = /\/assets\/index-[a-zA-Z0-9_-]+\.css/g;
  
  const jsMatches = content.match(jsRegex);
  const cssMatches = content.match(cssRegex);
  
  if (jsMatches) {
    content = content.replace(jsRegex, `/assets/${jsAsset}`);
    fileReplacements += jsMatches.length;
  }
  
  if (cssMatches) {
    content = content.replace(cssRegex, `/assets/${cssAsset}`);
    fileReplacements += cssMatches.length;
  }
  
  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${htmlFile}: ${fileReplacements} asset references updated`);
    totalReplacements += fileReplacements;
  }
}

console.log(`\n🎉 Asset reference fix complete! Updated ${totalReplacements} references across ${htmlFiles.length} HTML files.`);
console.log(`📄 Using assets: ${jsAsset}, ${cssAsset}`);
