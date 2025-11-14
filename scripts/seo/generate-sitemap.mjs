#!/usr/bin/env node

/**
 * Advanced Sitemap Generator with Sitemap Index
 * Creates separate sitemaps for different content types and a main index
 */

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://replainow.com';
const currentDate = new Date().toISOString();

// Language-specific sitemaps
const languageSitemaps = [
  {
    name: 'main',
    urls: [
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: '1.0'
      }
    ]
  },
  {
    name: 'languages',
    urls: [
      {
        loc: `${baseUrl}/en`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: '0.9'
      },
      {
        loc: `${baseUrl}/fr`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: '0.9'
      },
      {
        loc: `${baseUrl}/es`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: '0.9'
      }
    ]
  },
  {
    name: 'legal',
    urls: [
      {
        loc: `${baseUrl}/privacy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/terms`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/cookies`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/impressum`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/security`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/refund`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      },
      {
        loc: `${baseUrl}/uninstall`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3'
      }
    ]
  }
];

// Generate individual sitemap XML
const generateSitemapXML = (urls, name) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

// Generate sitemap index
const generateSitemapIndex = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languageSitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}/sitemaps/${sitemap.name}.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
};

// Generate all sitemaps
const generateAllSitemaps = () => {
  const distDir = 'dist';
  const sitemapsDir = path.join(distDir, 'sitemaps');
  
  // Ensure directories exist
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }
  
  // Generate individual sitemaps
  languageSitemaps.forEach(sitemap => {
    const sitemapXML = generateSitemapXML(sitemap.urls, sitemap.name);
    const sitemapPath = path.join(sitemapsDir, `${sitemap.name}.xml`);
    fs.writeFileSync(sitemapPath, sitemapXML);
    console.log(`✅ Generated sitemap: sitemaps/${sitemap.name}.xml (${sitemap.urls.length} URLs)`);
  });
  
  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex();
  const indexPath = path.join(distDir, 'sitemap-index.xml');
  fs.writeFileSync(indexPath, sitemapIndex);
  console.log(`✅ Generated sitemap index: sitemap-index.xml`);
  
  // Generate single sitemap for backward compatibility
  const allUrls = languageSitemaps.flatMap(s => s.urls);
  const singleSitemap = generateSitemapXML(allUrls, 'all');
  const singleSitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(singleSitemapPath, singleSitemap);
  console.log(`✅ Generated single sitemap: sitemap.xml (${allUrls.length} URLs)`);
  
  console.log(`\n📊 Total URLs indexed: ${allUrls.length}`);
  console.log(`📋 Sitemap structure:`);
  languageSitemaps.forEach(sitemap => {
    console.log(`  • sitemaps/${sitemap.name}.xml: ${sitemap.urls.length} URLs`);
  });
};

// Run generation
generateAllSitemaps();
