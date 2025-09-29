import fs from "fs";
import path from "path";

const BASE = "https://replainow.com";
const dist = "dist";
const deFile = path.join(dist, "index.html");
const enDir  = path.join(dist, "en");
const enFile = path.join(enDir, "index.html");

const html = fs.readFileSync(deFile, "utf8");

// Hilfsfunktion: inject/replace simple head tags safely
function ensureLangAndLinks(src, lang, canonicalHref) {
  let out = src;

  // <html lang="...">
  out = out.replace(/<html([^>]*?)lang="[^"]*"([^>]*?)>/i, `<html$1lang="${lang}"$2>`);
  if (!/<html[^>]*lang="/i.test(out)) {
    out = out.replace(/<html([^>]*)>/i, `<html$1 lang="${lang}">`);
  }

  // canonical
  if (out.includes('rel="canonical"')) {
    out = out.replace(/<link[^>]+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonicalHref}">`);
  } else {
    out = out.replace(/<\/head>/i,
      `  <link rel="canonical" href="${canonicalHref}">\n</head>`);
  }

  // hreflang set (de, en, x-default) – dupliziere/ersetze simple
  out = out.replace(/<link[^>]+rel="alternate"[^>]*>/gi, ""); // cleanup
  out = out.replace(/<\/head>/i, [
    `  <link rel="alternate" hreflang="de" href="${BASE}/">`,
    `  <link rel="alternate" hreflang="en" href="${BASE}/en">`,
    `  <link rel="alternate" hreflang="x-default" href="${BASE}/">`,
    `</head>`
  ].join("\n"));

  // Complete JSON-LD schemas for all locales
  if (!/application\/ld\+json/.test(out)) {
    const isEnglish = lang === 'en';

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ReplAInow",
      "description": isEnglish
        ? "AI-powered Shopify customer support: automated responses with GPT-4.1, 3-second response time, 32+ languages, GDPR-compliant, 75% cost savings."
        : "KI-gestützter Kundensupport für Shopify: automatisierte Antworten mit GPT-4.1, 3-Sekunden Antwortzeit, 32+ Sprachen, DSGVO-konform, 75% Kosteneinsparung.",
      "url": BASE,
      "logo": `${BASE}/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png`,
      "telephone": "+49-30-123-456-789",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Ruben Calabrese"
      }
    };

    // SoftwareApplication Schema
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ReplAInow AI Helpdesk",
      "description": isEnglish
        ? "AI-powered Shopify customer support with GPT-4 technology"
        : "KI-gestützter Kundensupport für Shopify mit GPT-4 Technologie",
      "url": BASE,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "price": "19",
      "priceCurrency": "EUR",
      "ratingValue": "4.9",
      "ratingCount": "280"
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ReplAInow",
      "url": BASE,
      "description": isEnglish
        ? "AI Shopify Helpdesk - Automated Customer Support"
        : "AI Shopify Helpdesk - Automatisierter Kundensupport",
      "inLanguage": isEnglish ? "en-US" : "de-DE",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    out = out.replace(/<\/head>/i, [
      `  <script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`,
      `  <script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>`,
      `  <script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`,
      `</head>`
    ].join("\n"));
  }

  return out;
}

// DE: sicherstellen lang/canonical/hreflang
const deOut = ensureLangAndLinks(html, "de", `${BASE}/`);
fs.writeFileSync(deFile, deOut, "utf8");

// EN: Ordner & Datei erzeugen, lang/canonical/hreflang anpassen
fs.mkdirSync(enDir, { recursive: true });
const enOut = ensureLangAndLinks(html, "en", `${BASE}/en`);
fs.writeFileSync(enFile, enOut, "utf8");

console.log("✅ Multi-page HTML generated: /index.html and /en/index.html");
