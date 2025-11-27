#!/usr/bin/env node

/**
 * Pre-Render Content Pages for Perfect SEO
 * 
 * Generates static HTML for all 12 content pages (3 pages × 4 languages)
 * Each HTML has correct canonical, hreflang, structured data
 * 
 * WHY: Vercel rewrites all URLs to /index.html (SPA)
 *      Google sees Homepage SEO for all content pages!
 *      This script fixes that by creating real static HTML files
 * 
 * RESULT: Google sees perfect SEO without JavaScript execution!
 */

import fs from "fs";
import path from "path";

const BASE_URL = "https://replainow.com";
const dist = "dist";

// Content page configurations
const contentPages = [
  // ========================================
  // PAGE 1: Shopify Kundensupport Automatisieren
  // ========================================
  {
    url: '/shopify-kundensupport-automatisieren',
    dir: 'shopify-kundensupport-automatisieren',
    lang: 'de',
    locale: 'de-DE',
    title: 'Shopify Kundensupport automatisieren 2025 | 60-80% weniger Aufwand',
    description: '60-80% deines Shopify Kundensupports automatisch bearbeiten. KI beantwortet Produktfragen, Tracking-Anfragen & mehr in 3 Sekunden. 100+ Sprachen. Ab $19/Monat.',
    keywords: 'Shopify Kundensupport automatisieren, KI Kundensupport Shopify, automatischer Support Shopify',
    hreflang: {
      de: '/shopify-kundensupport-automatisieren',
      en: '/en/automate-shopify-customer-support',
      es: '/es/automatizar-soporte-cliente-shopify',
      fr: '/fr/automatiser-support-client-shopify'
    }
  },
  {
    url: '/en/automate-shopify-customer-support',
    dir: 'en/automate-shopify-customer-support',
    lang: 'en',
    locale: 'en-US',
    title: 'Automate Shopify Customer Support 2025 | 60-80% Less Effort',
    description: 'Automate 60-80% of your Shopify customer support. AI answers product questions, tracking requests & more in 3 seconds. 100+ languages. From $19/month.',
    keywords: 'automate Shopify customer support, AI customer support Shopify, support automation Shopify',
    hreflang: {
      de: '/shopify-kundensupport-automatisieren',
      en: '/en/automate-shopify-customer-support',
      es: '/es/automatizar-soporte-cliente-shopify',
      fr: '/fr/automatiser-support-client-shopify'
    }
  },
  {
    url: '/es/automatizar-soporte-cliente-shopify',
    dir: 'es/automatizar-soporte-cliente-shopify',
    lang: 'es',
    locale: 'es-ES',
    title: 'Automatizar Soporte Cliente Shopify 2025 | 60-80% Menos Esfuerzo',
    description: 'Automatiza el 60-80% de tu soporte Shopify. IA responde preguntas de productos, seguimiento y más en 3 segundos. 100+ idiomas. Desde $19/mes.',
    keywords: 'automatizar soporte Shopify, IA soporte cliente Shopify, automatización soporte',
    hreflang: {
      de: '/shopify-kundensupport-automatisieren',
      en: '/en/automate-shopify-customer-support',
      es: '/es/automatizar-soporte-cliente-shopify',
      fr: '/fr/automatiser-support-client-shopify'
    }
  },
  {
    url: '/fr/automatiser-support-client-shopify',
    dir: 'fr/automatiser-support-client-shopify',
    lang: 'fr',
    locale: 'fr-FR',
    title: 'Automatiser Support Client Shopify 2025 | 60-80% Moins d\'Effort',
    description: 'Automatisez 60-80% de votre support Shopify. L\'IA répond aux questions produits, suivi et plus en 3 secondes. 100+ langues. À partir de $19/mois.',
    keywords: 'automatiser support Shopify, IA support client Shopify, automatisation support',
    hreflang: {
      de: '/shopify-kundensupport-automatisieren',
      en: '/en/automate-shopify-customer-support',
      es: '/es/automatizar-soporte-cliente-shopify',
      fr: '/fr/automatiser-support-client-shopify'
    }
  },
  
  // ========================================
  // PAGE 2: 24/7 Kundensupport Shopify
  // ========================================
  {
    url: '/24-7-kundensupport-shopify',
    dir: '24-7-kundensupport-shopify',
    lang: 'de',
    locale: 'de-DE',
    title: '24/7 Kundensupport für Shopify 2025 | Ohne Nachtschichten',
    description: 'Biete 24/7 Shopify Support ohne teure Nachtschichten. KI beantwortet Kundenanfragen rund um die Uhr in 100+ Sprachen. $10,000+/Monat sparen.',
    keywords: '24/7 Shopify Support, rund um die Uhr Kundensupport, Shopify Nachtschichten',
    hreflang: {
      de: '/24-7-kundensupport-shopify',
      en: '/en/24-7-customer-support-shopify',
      es: '/es/soporte-24-7-shopify',
      fr: '/fr/support-24-7-shopify'
    }
  },
  {
    url: '/en/24-7-customer-support-shopify',
    dir: 'en/24-7-customer-support-shopify',
    lang: 'en',
    locale: 'en-US',
    title: '24/7 Customer Support for Shopify 2025 | No Night Shifts',
    description: 'Provide 24/7 Shopify support without expensive night shifts. AI answers customer requests around the clock in 100+ languages. Save $10,000+/month.',
    keywords: '24/7 Shopify support, round the clock customer support, Shopify night shifts',
    hreflang: {
      de: '/24-7-kundensupport-shopify',
      en: '/en/24-7-customer-support-shopify',
      es: '/es/soporte-24-7-shopify',
      fr: '/fr/support-24-7-shopify'
    }
  },
  {
    url: '/es/soporte-24-7-shopify',
    dir: 'es/soporte-24-7-shopify',
    lang: 'es',
    locale: 'es-ES',
    title: 'Soporte 24/7 para Shopify 2025 | Sin Turnos Nocturnos',
    description: 'Ofrece soporte Shopify 24/7 sin costosos turnos nocturnos. IA responde consultas las 24 horas en 100+ idiomas. Ahorra $10,000+/mes.',
    keywords: 'soporte 24/7 Shopify, atención cliente 24 horas, turnos nocturnos Shopify',
    hreflang: {
      de: '/24-7-kundensupport-shopify',
      en: '/en/24-7-customer-support-shopify',
      es: '/es/soporte-24-7-shopify',
      fr: '/fr/support-24-7-shopify'
    }
  },
  {
    url: '/fr/support-24-7-shopify',
    dir: 'fr/support-24-7-shopify',
    lang: 'fr',
    locale: 'fr-FR',
    title: 'Support 24/7 pour Shopify 2025 | Sans Équipes de Nuit',
    description: 'Offrez un support Shopify 24/7 sans équipes de nuit coûteuses. L\'IA répond aux demandes 24h/24 en 100+ langues. Économisez $10,000+/mois.',
    keywords: 'support 24/7 Shopify, service client 24 heures, équipes de nuit Shopify',
    hreflang: {
      de: '/24-7-kundensupport-shopify',
      en: '/en/24-7-customer-support-shopify',
      es: '/es/soporte-24-7-shopify',
      fr: '/fr/support-24-7-shopify'
    }
  },
  
  // ========================================
  // PAGE 3: Shopify Support Kosten Senken
  // ========================================
  {
    url: '/shopify-support-kosten-senken',
    dir: 'shopify-support-kosten-senken',
    lang: 'de',
    locale: 'de-DE',
    title: 'Shopify Support Kosten senken 2025 | 76-97% Ersparnis',
    description: 'Senke deine Shopify Support-Kosten um 76-97% durch KI-Automatisierung. Detaillierte ROI-Analyse. Typical savings: $10,000-15,000/Monat.',
    keywords: 'Shopify Support Kosten senken, Kundensupport Kosten reduzieren, ROI AI Support',
    hreflang: {
      de: '/shopify-support-kosten-senken',
      en: '/en/reduce-shopify-support-costs',
      es: '/es/reducir-costos-soporte-shopify',
      fr: '/fr/reduire-couts-support-shopify'
    }
  },
  {
    url: '/en/reduce-shopify-support-costs',
    dir: 'en/reduce-shopify-support-costs',
    lang: 'en',
    locale: 'en-US',
    title: 'Reduce Shopify Support Costs 2025 | 76-97% Savings',
    description: 'Reduce your Shopify support costs by 76-97% through AI automation. Detailed ROI analysis. Typical savings: $10,000-15,000/month.',
    keywords: 'reduce Shopify support costs, lower customer support costs, ROI AI support',
    hreflang: {
      de: '/shopify-support-kosten-senken',
      en: '/en/reduce-shopify-support-costs',
      es: '/es/reducir-costos-soporte-shopify',
      fr: '/fr/reduire-couts-support-shopify'
    }
  },
  {
    url: '/es/reducir-costos-soporte-shopify',
    dir: 'es/reducir-costos-soporte-shopify',
    lang: 'es',
    locale: 'es-ES',
    title: 'Reducir Costos Soporte Shopify 2025 | 76-97% Ahorro',
    description: 'Reduce los costos de soporte Shopify en 76-97% con automatización IA. Análisis ROI detallado. Ahorro típico: $10,000-15,000/mes.',
    keywords: 'reducir costos soporte Shopify, reducir gastos atención cliente, ROI IA soporte',
    hreflang: {
      de: '/shopify-support-kosten-senken',
      en: '/en/reduce-shopify-support-costs',
      es: '/es/reducir-costos-soporte-shopify',
      fr: '/fr/reduire-couts-support-shopify'
    }
  },
  {
    url: '/fr/reduire-couts-support-shopify',
    dir: 'fr/reduire-couts-support-shopify',
    lang: 'fr',
    locale: 'fr-FR',
    title: 'Réduire Coûts Support Shopify 2025 | 76-97% d\'Économies',
    description: 'Réduisez vos coûts de support Shopify de 76-97% grâce à l\'automatisation IA. Analyse ROI détaillée. Économies typiques: $10,000-15,000/mois.',
    keywords: 'réduire coûts support Shopify, réduire coûts service client, ROI IA support',
    hreflang: {
      de: '/shopify-support-kosten-senken',
      en: '/en/reduce-shopify-support-costs',
      es: '/es/reducir-costos-soporte-shopify',
      fr: '/fr/reduire-couts-support-shopify'
    }
  }
];

// Generate HTML for a content page
function generateContentPageHTML(page, baseHTML) {
  let html = baseHTML;
  
  // Update lang attribute
  html = html.replace(/<html[^>]*>/i, `<html lang="${page.locale}">`);
  
  // Update title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  
  // Add/Update meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"/i,
      `<meta name="description" content="${page.description}"`
    );
  } else {
    html = html.replace(
      /<meta name="robots"/i,
      `<meta name="description" content="${page.description}" />\n    <meta name="robots"`
    );
  }
  
  // Add keywords
  if (!html.includes('name="keywords"')) {
    html = html.replace(
      /<meta name="robots"/i,
      `<meta name="keywords" content="${page.keywords}" />\n    <meta name="robots"`
    );
  }
  
  // Remove old canonical tag if exists
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  
  // Remove old hreflang tags
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"[^>]*>/gi, '');
  
  // Remove old structured data
  html = html.replace(/<script\s+type="application\/ld\+json">.*?<\/script>/gis, '');
  
  // Generate canonical URL
  const canonicalUrl = `${BASE_URL}${page.url}`;
  
  // Generate hreflang tags
  const hreflangTags = Object.entries(page.hreflang).map(([lang, url]) =>
    `  <link rel="alternate" hreflang="${lang}" href="${BASE_URL}${url}" />`
  ).join('\n');
  
  // Add x-default
  const xDefaultTag = `  <link rel="alternate" hreflang="x-default" href="${BASE_URL}${page.hreflang.en}" />`;
  
  // Generate structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": page.title,
    "description": page.description,
    "datePublished": "2025-11-14T00:00:00Z",
    "dateModified": "2025-11-27T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "ReplAInow",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "ReplAInow",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "image": `${BASE_URL}/dashboard-screenshots/Screenshot-1-livechat.png`,
    "inLanguage": page.lang
  };
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "ReplAInow",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png`
    },
    "sameAs": [
      "https://apps.shopify.com/replainow-ai-support"
    ]
  };
  
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ReplAInow AI Helpdesk",
    "applicationCategory": "CustomerSupport",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "19",
      "highPrice": "399",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "280"
    }
  };
  
  // Inject everything before </head>
  const seoInjection = `
  <!-- Content Page SEO - Pre-rendered for Google -->
  <link rel="canonical" href="${canonicalUrl}" />
  
  <!-- Hreflang tags for multilingual SEO -->
${hreflangTags}
${xDefaultTag}
  
  <!-- Open Graph for Social Media -->
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${BASE_URL}/dashboard-screenshots/Screenshot-1-livechat.png" />
  <meta property="og:locale" content="${page.locale.replace('-', '_')}" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${page.title}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="${BASE_URL}/dashboard-screenshots/Screenshot-1-livechat.png" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  `;
  
  html = html.replace(/<\/head>/i, `${seoInjection}\n</head>`);
  
  return html;
}

// Main execution
function prerenderContentPages() {
  console.log('\n🚀 Pre-rendering content pages for perfect SEO...\n');
  
  // Read base HTML template
  const baseHTMLPath = path.join(dist, 'index.html');
  if (!fs.existsSync(baseHTMLPath)) {
    console.error('❌ ERROR: dist/index.html not found. Run vite build first!');
    process.exit(1);
  }
  
  const baseHTML = fs.readFileSync(baseHTMLPath, 'utf8');
  
  // Generate HTML for each content page
  let successCount = 0;
  
  for (const page of contentPages) {
    try {
      // Generate HTML with perfect SEO
      const pageHTML = generateContentPageHTML(page, baseHTML);
      
      // Create directory
      const pageDir = path.join(dist, page.dir);
      fs.mkdirSync(pageDir, { recursive: true });
      
      // Write index.html
      const htmlPath = path.join(pageDir, 'index.html');
      fs.writeFileSync(htmlPath, pageHTML, 'utf8');
      
      console.log(`✅ ${page.url}`);
      console.log(`   → ${htmlPath}`);
      console.log(`   Lang: ${page.lang}, Canonical: ${BASE_URL}${page.url}`);
      
      successCount++;
    } catch (error) {
      console.error(`❌ ERROR generating ${page.url}:`, error.message);
    }
  }
  
  console.log(`\n📊 Pre-rendering complete:`);
  console.log(`✅ ${successCount}/${contentPages.length} content pages generated`);
  console.log(`\n🎯 Google will now see perfect SEO without JavaScript!`);
  console.log(`   Each page has:`);
  console.log(`   ✅ Correct canonical URL`);
  console.log(`   ✅ Correct hreflang tags (4 languages)`);
  console.log(`   ✅ Structured data (Organization, Software, Article)`);
  console.log(`   ✅ Open Graph & Twitter Cards`);
  console.log(`   ✅ Language-specific meta tags`);
  console.log(`\n🚀 Ready for deployment!`);
}

// Run
prerenderContentPages();

