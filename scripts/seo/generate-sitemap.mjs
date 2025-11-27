#!/usr/bin/env node

/**
 * Advanced Sitemap Generator with Sitemap Index
 * Creates separate sitemaps for different content types and a main index
 */

import fs from "fs";
import path from "path";

const baseUrl = "https://replainow.com";
const currentDate = new Date().toISOString();

// Language-specific sitemaps
const languageSitemaps = [
  {
    name: "main",
    urls: [
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: "daily",
        priority: "1.0",
      },
    ],
  },
  {
    name: "languages",
    urls: [
      {
        loc: `${baseUrl}/en`,
        lastmod: currentDate,
        changefreq: "daily",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/fr`,
        lastmod: currentDate,
        changefreq: "daily",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/es`,
        lastmod: currentDate,
        changefreq: "daily",
        priority: "0.9",
      },
    ],
  },
  {
    name: "content",
    urls: [
      // German content pages
      {
        loc: `${baseUrl}/shopify-kundensupport-automatisieren`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/24-7-kundensupport-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/shopify-support-kosten-senken`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      // English content pages (localized URLs)
      {
        loc: `${baseUrl}/en/automate-shopify-customer-support`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/en/24-7-customer-support-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/en/reduce-shopify-support-costs`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      // Spanish content pages (localized URLs)
      {
        loc: `${baseUrl}/es/automatizar-soporte-cliente-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/es/soporte-24-7-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/es/reducir-costos-soporte-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      // French content pages (localized URLs)
      {
        loc: `${baseUrl}/fr/automatiser-support-client-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/fr/support-24-7-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
      {
        loc: `${baseUrl}/fr/reduire-couts-support-shopify`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: "0.9",
      },
    ],
  },
  {
    name: "legal",
    urls: [
      // German (DE) Legal Pages
      {
        loc: `${baseUrl}/privacy`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/terms`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/cookies`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/impressum`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/security`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/refund`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/uninstall`,
        lastmod: currentDate,
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: `${baseUrl}/contact`,
        lastmod: currentDate,
        changefreq: "monthly",
        priority: "0.6",
      },
    ],
  },
];

// Generate individual sitemap XML with hreflang support for content pages
const generateSitemapXML = (urls, name) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => {
      let urlXml = `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;
      
      // Add hreflang tags for content pages (name === "content")
      if (name === "content" && url.loc.includes('automatisieren') || url.loc.includes('automate') || url.loc.includes('automatizar') || url.loc.includes('automatiser')) {
        // This is "automatisierung" page in some language
        urlXml += `
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/shopify-kundensupport-automatisieren" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/automate-shopify-customer-support" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/automatizar-soporte-cliente-shopify" />
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/automatiser-support-client-shopify" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/automate-shopify-customer-support" />`;
      } else if (name === "content" && url.loc.includes('24-7')) {
        // This is "support247" page in some language
        urlXml += `
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/24-7-kundensupport-shopify" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/24-7-customer-support-shopify" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/soporte-24-7-shopify" />
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/support-24-7-shopify" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/24-7-customer-support-shopify" />`;
      } else if (name === "content" && (url.loc.includes('kosten-senken') || url.loc.includes('reduce') || url.loc.includes('reducir') || url.loc.includes('reduire'))) {
        // This is "kostenSenken" page in some language
        urlXml += `
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/shopify-support-kosten-senken" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/reduce-shopify-support-costs" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/reducir-costos-soporte-shopify" />
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/reduire-couts-support-shopify" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/reduce-shopify-support-costs" />`;
      }
      
      urlXml += `
  </url>`;
      return urlXml;
    }
  )
  .join("\n")}
</urlset>`;
};

// Generate sitemap index
const generateSitemapIndex = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languageSitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${baseUrl}/sitemaps/${sitemap.name}.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;
};

// Generate all sitemaps
const generateAllSitemaps = () => {
  const distDir = "dist";
  const sitemapsDir = path.join(distDir, "sitemaps");

  // Ensure directories exist
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }

  // Generate individual sitemaps
  languageSitemaps.forEach((sitemap) => {
    const sitemapXML = generateSitemapXML(sitemap.urls, sitemap.name);
    const sitemapPath = path.join(sitemapsDir, `${sitemap.name}.xml`);
    fs.writeFileSync(sitemapPath, sitemapXML);
    console.log(
      `✅ Generated sitemap: sitemaps/${sitemap.name}.xml (${sitemap.urls.length} URLs)`
    );
  });

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex();
  const indexPath = path.join(distDir, "sitemap-index.xml");
  fs.writeFileSync(indexPath, sitemapIndex);
  console.log(`✅ Generated sitemap index: sitemap-index.xml`);

  // Generate single sitemap for backward compatibility
  const allUrls = languageSitemaps.flatMap((s) => s.urls);
  const singleSitemap = generateSitemapXML(allUrls, "all");
  const singleSitemapPath = path.join(distDir, "sitemap.xml");
  fs.writeFileSync(singleSitemapPath, singleSitemap);
  console.log(
    `✅ Generated single sitemap: sitemap.xml (${allUrls.length} URLs)`
  );

  console.log(`\n📊 Total URLs indexed: ${allUrls.length}`);
  console.log(`📋 Sitemap structure:`);
  languageSitemaps.forEach((sitemap) => {
    console.log(
      `  • sitemaps/${sitemap.name}.xml: ${sitemap.urls.length} URLs`
    );
  });
};

// Run generation
generateAllSitemaps();
