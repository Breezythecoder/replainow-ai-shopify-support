import fs from "fs";
import path from "path";

const fail = (m) => { console.error("❌", m); process.exit(1); };
const warn = (m) => console.warn("⚠️", m);
const ok = (m) => console.log("✅", m);

// Enhanced verification for EN parity deployment
console.log("🔍 Running comprehensive postbuild verification...");
console.log("================================================");

// Essential files check
const requiredFiles = [
  "dist/index.html",
  "dist/en/index.html",
  "dist/sitemap.xml",
  "dist/robots.txt",
  "dist/sw.js"
];

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) fail(`Required file missing: ${file}`);
  ok(`File exists: ${file}`);
});

// Language and canonical validation
function validateHtml(html, locale, expectedCanonical) {
  // HTML lang attribute
  if (!/<html[^>]*lang="[^"]*"/i.test(html)) fail(`${locale}: html lang attribute missing`);
  if (!/<html[^>]*lang="[^"]*${locale}[^"]*"/i.test(html)) {
    // More flexible check for exact locale match
    const langMatch = html.match(/<html[^>]*lang="([^"]*)"/i);
    if (langMatch && !langMatch[1].includes(locale)) {
      fail(`${locale}: html lang should contain '${locale}', got '${langMatch[1]}'`);
    }
  }

  // Canonical URL
  if (!/rel="canonical"[^>]+href="[^"]*"/i.test(html)) fail(`${locale}: canonical link missing`);
  const canonicalMatch = html.match(/rel="canonical"[^>]+href="([^"]*)"/i);
  if (!canonicalMatch || !canonicalMatch[1].includes(expectedCanonical.replace(/\/$/, ''))) {
    fail(`${locale}: canonical should contain '${expectedCanonical}', got '${canonicalMatch?.[1] || 'none'}'`);
  }

  // Hreflang validation
  if (!/rel="alternate"[^>]+hreflang="de"/i.test(html)) fail(`${locale}: hreflang de missing`);
  if (!/rel="alternate"[^>]+hreflang="en"/i.test(html)) fail(`${locale}: hreflang en missing`);
  if (!/rel="alternate"[^>]+hreflang="x-default"/i.test(html)) fail(`${locale}: hreflang x-default missing`);

  // JSON-LD structured data
  if (!/<script[^>]+type="application\/ld\+json"/i.test(html)) warn(`${locale}: JSON-LD structured data missing`);

  // Single module script
  const scriptMatches = html.match(/<script[^>]+type="module"[^>]*>/gi) || [];
  if (scriptMatches.length !== 1) fail(`${locale}: should have exactly 1 module script, found ${scriptMatches.length}`);

  return true;
}

// Validate German page
const deHtml = fs.readFileSync("dist/index.html", "utf8");
validateHtml(deHtml, "de", "https://replainow.com/");

// Validate English page
const enHtml = fs.readFileSync("dist/en/index.html", "utf8");
validateHtml(enHtml, "en", "https://replainow.com/en");

// Service Worker validation (disabled - SW is now empty stub)
const swContent = fs.readFileSync("dist/sw.js", "utf8");
// SW is now intentionally empty/minimal - no validation needed
console.log("✅ Service Worker: Empty stub (intentionally disabled)");

// Sitemap validation
const sitemapContent = fs.readFileSync("dist/sitemap.xml", "utf8");
const requiredUrls = [
  "https://replainow.com/",
  "https://replainow.com/en"
];

requiredUrls.forEach(url => {
  if (!sitemapContent.includes(`<loc>${url}</loc>`)) fail(`Sitemap: ${url} missing`);
});

if (!/<lastmod>/.test(sitemapContent)) fail("Sitemap: lastmod elements missing");
if (!/<priority>/.test(sitemapContent)) warn("Sitemap: priority elements missing");

// Robots.txt validation
const robotsContent = fs.readFileSync("dist/robots.txt", "utf8");
if (!/Allow: \//.test(robotsContent)) fail("Robots.txt: Allow / directive missing");
if (!/Sitemap: https:\/\/replainow\.com\/sitemap\.xml/.test(robotsContent)) fail("Robots.txt: Sitemap directive missing");

// Bundle size check
function checkBundleSize() {
  const assetsDir = "dist/assets";
  if (!fs.existsSync(assetsDir)) {
    warn("Assets directory not found - skipping bundle size check");
    return;
  }

  const files = fs.readdirSync(assetsDir);
  let totalSize = 0;
  let largestFile = { name: '', size: 0 };

  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;

    if (sizeKB > largestFile.size) {
      largestFile = { name: file, size: sizeKB };
    }

    totalSize += stats.size;
  });

  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

  if (parseFloat(totalSizeMB) > 2.0) {
    warn(`Bundle size warning: ${totalSizeMB}MB total (consider optimization)`);
  } else {
    ok(`Bundle size: ${totalSizeMB}MB`);
  }

  ok(`Largest asset: ${largestFile.name} (${largestFile.size.toFixed(1)}KB)`);
}

checkBundleSize();

// Cross-page consistency check
function validateCrossPageConsistency() {
  // Count major sections using regex
  const deSections = (deHtml.match(/<(section|main|header|footer)[^>]*>/gi) || []).length;
  const enSections = (enHtml.match(/<(section|main|header|footer)[^>]*>/gi) || []).length;

  if (deSections !== enSections) {
    warn(`Section count mismatch: DE=${deSections}, EN=${enSections}`);
  } else {
    ok(`Section count match: ${deSections} sections`);
  }

  // Both should have same meta description length (roughly)
  const deDesc = deHtml.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  const enDesc = enHtml.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i);

  if (deDesc && enDesc) {
    const deLength = deDesc[1].length;
    const enLength = enDesc[1].length;
    const diff = Math.abs(deLength - enLength);

    if (diff > 50) {
      warn(`Meta description length difference: DE=${deLength}, EN=${enLength} (${diff} chars)`);
    } else {
      ok(`Meta descriptions: DE=${deLength} chars, EN=${enLength} chars`);
    }
  }
}

validateCrossPageConsistency();

// Final summary
console.log("================================================");
ok("Postbuild verification completed successfully!");
console.log("🎉 Ready for deployment!");
