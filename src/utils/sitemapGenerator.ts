// Sitemap Generator for ReplAInow
import { contentPageUrls } from '@/i18n/contentUrls';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternate?: Array<{ hrefLang: string; href: string }>;
}

const baseUrl = 'https://replainow.com';

// Get current date in ISO format
const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

// Main sitemap URLs
export const generateSitemapUrls = (): SitemapUrl[] => {
  const currentDate = getCurrentDate();
  
  return [
    // Homepage and main pages
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
      alternate: [
        { hrefLang: 'de-DE', href: `${baseUrl}/` },
        { hrefLang: 'en-US', href: `${baseUrl}/en` },
        { hrefLang: 'es-ES', href: `${baseUrl}/es` },
        { hrefLang: 'fr-FR', href: `${baseUrl}/fr` },
        { hrefLang: 'pt-PT', href: `${baseUrl}/pt` },
        { hrefLang: 'it-IT', href: `${baseUrl}/it` },
        { hrefLang: 'nl-NL', href: `${baseUrl}/nl` },
        { hrefLang: 'zh-CN', href: `${baseUrl}/zh` }
      ]
    },
    
    // Pillar pages (main content hubs)
    {
      loc: `${baseUrl}/ai-shopify-helpdesk`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/multilingual-support`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/order-lookup`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/vergleich/gorgias-intercom-vs-replainow`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/dsgvo-shopify-ai`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    
    // Core pages
    {
      loc: `${baseUrl}/pricing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Legal pages
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/security`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/impressum`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/refund`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/cookies`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/uninstall`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    
    // Content Pages - SEO-optimized articles (12 URLs: 3 pages × 4 languages)
    // Page 1: Shopify Kundensupport automatisieren
    {
      loc: `${baseUrl}${contentPageUrls.automatisierung.de}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.automatisierung.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.automatisierung.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.automatisierung.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.automatisierung.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.automatisierung.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.automatisierung.en}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.automatisierung.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.automatisierung.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.automatisierung.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.automatisierung.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.automatisierung.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.automatisierung.es}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.automatisierung.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.automatisierung.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.automatisierung.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.automatisierung.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.automatisierung.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.automatisierung.fr}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.automatisierung.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.automatisierung.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.automatisierung.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.automatisierung.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.automatisierung.en}` }
      ]
    },
    
    // Page 2: 24/7 Kundensupport
    {
      loc: `${baseUrl}${contentPageUrls.support247.de}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.support247.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.support247.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.support247.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.support247.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.support247.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.support247.en}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.support247.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.support247.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.support247.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.support247.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.support247.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.support247.es}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.support247.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.support247.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.support247.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.support247.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.support247.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.support247.fr}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.support247.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.support247.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.support247.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.support247.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.support247.en}` }
      ]
    },
    
    // Page 3: Support Kosten senken
    {
      loc: `${baseUrl}${contentPageUrls.kostenSenken.de}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.kostenSenken.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.kostenSenken.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.kostenSenken.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.kostenSenken.en}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.kostenSenken.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.kostenSenken.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.kostenSenken.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.kostenSenken.es}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.kostenSenken.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.kostenSenken.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.kostenSenken.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` }
      ]
    },
    {
      loc: `${baseUrl}${contentPageUrls.kostenSenken.fr}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternate: [
        { hrefLang: 'de', href: `${baseUrl}${contentPageUrls.kostenSenken.de}` },
        { hrefLang: 'en', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` },
        { hrefLang: 'es', href: `${baseUrl}${contentPageUrls.kostenSenken.es}` },
        { hrefLang: 'fr', href: `${baseUrl}${contentPageUrls.kostenSenken.fr}` },
        { hrefLang: 'x-default', href: `${baseUrl}${contentPageUrls.kostenSenken.en}` }
      ]
    }
  ];
};

// Generate XML sitemap
export const generateSitemapXML = (): string => {
  const urls = generateSitemapUrls();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
  const xmlFooter = '</urlset>';
  
  const urlEntries = urls.map(url => {
    const lastmod = url.lastmod || getCurrentDate();
    let xml = `\n  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>`;
    
    // Add alternate language links if present
    if (url.alternate) {
      url.alternate.forEach(alt => {
        xml += `\n    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`;
      });
    }
    
    xml += '\n  </url>';
    return xml;
  }).join('');
  
  return xmlHeader + urlEntries + '\n' + xmlFooter;
};

// Generate sitemap index for multiple languages
export const generateSitemapIndex = (): string => {
  const currentDate = getCurrentDate();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</sitemapindex>';
  
  const sitemaps = [
    { loc: `${baseUrl}/sitemap.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-de.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemap-en.xml`, lastmod: currentDate }
  ];
  
  const sitemapEntries = sitemaps.map(sitemap => 
    `\n  <sitemap>\n    <loc>${sitemap.loc}</loc>\n    <lastmod>${sitemap.lastmod}</lastmod>\n  </sitemap>`
  ).join('');
  
  return xmlHeader + sitemapEntries + '\n' + xmlFooter;
};

// Language-specific sitemap generator
export const generateLanguageSitemap = (language: 'de' | 'en'): string => {
  const urls = generateSitemapUrls();
  const currentDate = getCurrentDate();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</urlset>';
  
  // Filter URLs for specific language
  const languageUrls = language === 'de' 
    ? urls.filter(url => {
        const safeLoc = (url.loc ?? '').toString();
        return safeLoc.includes('/de') || !safeLoc.match(/\/(en|es|fr|pt|it|nl|zh)/);
      })
    : urls.filter(url => {
        const safeLoc = (url.loc ?? '').toString();
        return safeLoc.includes(`/${language}`);
      });
  
  const urlEntries = languageUrls.map(url => {
    const lastmod = url.lastmod || currentDate;
    return `\n  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`;
  }).join('');
  
  return xmlHeader + urlEntries + '\n' + xmlFooter;
};
