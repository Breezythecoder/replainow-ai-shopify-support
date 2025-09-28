#!/usr/bin/env node

/**
 * Advanced Robots.txt Generator
 * Creates optimized robots.txt with multiple sitemap references
 */

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://replainow.com';

// Generate robots.txt content
const generateRobotsTxt = () => {
  return `# Robots.txt for ReplAInow
# Generated automatically - do not edit manually

# Allow all crawlers
User-agent: *
Allow: /

# Disallow sensitive directories
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /src/
Disallow: /scripts/
Disallow: /tests/
Disallow: /.git/
Disallow: /.github/

# Disallow development files
Disallow: /*.env*
Disallow: /*.config.*
Disallow: /*.lock
Disallow: /*.log

# Allow important assets
Allow: /assets/
Allow: /images/
Allow: /fonts/
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap*.xml

# Sitemap references
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml

# Additional sitemaps
Sitemap: ${baseUrl}/sitemaps/main.xml
Sitemap: ${baseUrl}/sitemaps/languages.xml
Sitemap: ${baseUrl}/sitemaps/pillars.xml
Sitemap: ${baseUrl}/sitemaps/legal.xml

# Crawl delay (optional - be respectful)
Crawl-delay: 1
`;
};

// Write robots.txt to dist directory
const writeRobotsTxt = () => {
  const distDir = 'dist';
  const robotsContent = generateRobotsTxt();
  const robotsPath = path.join(distDir, 'robots.txt');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt generated:', robotsPath);
  
  // Also write to root for development
  fs.writeFileSync('robots.txt', robotsContent);
  console.log('✅ Robots.txt copied to root');
  
  return robotsContent;
};

// Run generation
const robotsContent = writeRobotsTxt();

// Display summary
console.log('\n📋 Robots.txt Summary:');
console.log('=====================');
console.log('✅ All crawlers allowed');
console.log('✅ Sensitive directories blocked');
console.log('✅ Development files blocked');
console.log('✅ Important assets allowed');
console.log('✅ Multiple sitemap references');
console.log('✅ Crawl delay set to 1 second');
