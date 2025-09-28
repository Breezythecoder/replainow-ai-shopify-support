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

  // Minimal Organization JSON-LD (nur falls nicht vorhanden)
  if (!/application\/ld\+json/.test(out)) {
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ReplAInow",
      "url": BASE
    };
    out = out.replace(/<\/head>/i,
      `  <script type="application/ld+json">${JSON.stringify(org)}</script>\n</head>`);
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
