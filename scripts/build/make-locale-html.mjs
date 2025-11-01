// scripts/make-locale-html.mjs
import fs from "fs";
import path from "path";

const BASE = "https://replainow.com";
const dist = "dist";

function patchHTML(src, lang, canonical) {
  let out = src;

  // lang
  out = out.replace(/<html[^>]*>/i, `<html lang="${lang}">`);

  // canonical
  if (out.includes('rel="canonical"')) {
    out = out.replace(/<link[^>]+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonical}">`);
  } else {
    out = out.replace(/<\/head>/i,
      `  <link rel="canonical" href="${canonical}">\n</head>`);
  }

  // hreflang set
  out = out.replace(/<link[^>]+rel="alternate"[^>]*>/gi, "");
  
  // Add JSON-LD structured data (critical for SEO)
  const jsonLD = generateJSONLD(lang, canonical);
  
  out = out.replace(/<\/head>/i, [
    `  <link rel="alternate" hreflang="de" href="${BASE}/">`,
    `  <link rel="alternate" hreflang="en" href="${BASE}/en">`,
    `  <link rel="alternate" hreflang="es" href="${BASE}/es">`,
    `  <link rel="alternate" hreflang="fr" href="${BASE}/fr">`,
    `  <link rel="alternate" hreflang="x-default" href="${BASE}/">`,
    `  <!-- Structured Data -->`,
    `  <script type="application/ld+json">${JSON.stringify(jsonLD.organization)}</script>`,
    `  <script type="application/ld+json">${JSON.stringify(jsonLD.website)}</script>`,
    `  <script type="application/ld+json">${JSON.stringify(jsonLD.software)}</script>`,
    `</head>`
  ].join("\n"));

  return out;
}

function generateJSONLD(lang, canonical) {
  const isEnglish = lang === 'en';
  
  return {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      "name": "ReplAInow",
      "url": BASE,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/lovable-uploads/ReplAInow_Logo_optimized.png`,
        "caption": "ReplAInow Logo"
      },
      "sameAs": [
        "https://apps.shopify.com/replainow-ai-support"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["de", "en", "es", "fr", "it", "nl", "pt", "zh"]
      }
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${canonical}#website`,
      "url": canonical,
      "name": isEnglish ? "ReplAInow - AI Shopify Helpdesk" : "ReplAInow - AI Shopify Helpdesk",
      "description": isEnglish 
        ? "ReplAInow automates Shopify customer support with GPT-4.1: 3-second responses, 32+ languages, GDPR-compliant, 75% cost savings."
        : "Automatisiere deinen Shopify Customer Support mit GPT-4 AI. 3 Sek Antwortzeit, 32+ Sprachen, DSGVO-konform, 75% günstiger als Gorgias & Zendesk.",
      "publisher": {
        "@id": `${BASE}/#organization`
      },
      "inLanguage": lang
    },
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ReplAInow AI Helpdesk",
      "operatingSystem": "Web-based",
      "applicationCategory": "Customer Support Software",
      "offers": {
        "@type": "Offer",
        "price": "19",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "280"
      },
      "featureList": [
        "GPT-4 AI Integration",
        "3 Second Response Time", 
        "32+ Languages Support",
        "GDPR Compliant",
        "Real-time Shopify Data Sync"
      ]
    }
  };
}

// Read the base HTML (built with German)
const baseFile = path.join(dist, "index.html");
const baseHTML = fs.readFileSync(baseFile, "utf8");

// Generate locale-specific HTML for all supported languages
const locales = [
  { code: 'de', path: '', canonical: `${BASE}/` },
  { code: 'en', path: 'en', canonical: `${BASE}/en` },
  { code: 'es', path: 'es', canonical: `${BASE}/es` },
  { code: 'fr', path: 'fr', canonical: `${BASE}/fr` }
];

for (const locale of locales) {
  if (locale.path === '') {
    // German (default) - update index.html in place
    const deFile = path.join(dist, "index.html");
    fs.writeFileSync(deFile, patchHTML(baseHTML, locale.code, locale.canonical), "utf8");
  } else {
    // Other languages - create subdirectory
    const localeDir = path.join(dist, locale.path);
    fs.mkdirSync(localeDir, { recursive: true });
    const localeFile = path.join(localeDir, "index.html");
    fs.writeFileSync(localeFile, patchHTML(baseHTML, locale.code, locale.canonical), "utf8");
  }
}

console.log("✅ Multi-page HTML generated for all 4 languages:");
console.log("   - /index.html (de)");
console.log("   - /en/index.html");
console.log("   - /es/index.html");
console.log("   - /fr/index.html");