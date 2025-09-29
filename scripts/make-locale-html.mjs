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
  out = out.replace(/<\/head>/i, [
    `  <link rel="alternate" hreflang="de" href="${BASE}/">`,
    `  <link rel="alternate" hreflang="en" href="${BASE}/en">`,
    `  <link rel="alternate" hreflang="x-default" href="${BASE}/">`,
    `</head>`
  ].join("\n"));

  return out;
}

// DE
const deFile = path.join(dist, "index.html");
const deHTML = fs.readFileSync(deFile, "utf8");
fs.writeFileSync(deFile, patchHTML(deHTML, "de", `${BASE}/`), "utf8");

// EN
const enDir = path.join(dist, "en");
fs.mkdirSync(enDir, { recursive: true });
const enFile = path.join(enDir, "index.html");
fs.writeFileSync(enFile, patchHTML(deHTML, "en", `${BASE}/en`), "utf8");

console.log("✅ Multi-page HTML generated: /index.html and /en/index.html");