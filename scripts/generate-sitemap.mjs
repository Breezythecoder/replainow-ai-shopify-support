import fs from 'fs';
import path from 'path';

const baseUrl = 'https://replainow.com';
const currentDate = new Date().toISOString();

// Define all URLs with their metadata
const urls = [
  {
    loc: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: `${baseUrl}/en`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/ai-shopify-helpdesk`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/multilingual-support`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/shopify-customer-service`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/gorgias-alternative`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/intercom-alternative`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${baseUrl}/shopify-ai-support`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
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
    loc: `${baseUrl}/security`,
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    loc: `${baseUrl}/impressum`,
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: '0.3'
  }
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to dist directory
const sitemap = generateSitemap();
const distDir = 'dist';
const sitemapPath = path.join(distDir, 'sitemap.xml');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated:', sitemapPath);
console.log(`📊 Generated ${urls.length} URLs with proper lastmod timestamps`);
