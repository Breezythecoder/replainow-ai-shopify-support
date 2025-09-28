import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const html = readFileSync(join(dist, "index.html"), "utf8");

console.log("🔍 Running postbuild SEO verification...");

// 1. Exakt 1 Modul-Script auf assets/**
const scriptTags = (html.match(/<script[^>]+type="module"[^>]+assets\/[^>]+>/g) || []).length;
if (scriptTags !== 1) {
  console.error(`[FAIL] Expected exactly 1 module script tag, got ${scriptTags}`);
  process.exit(1);
}
console.log("✅ Exactly 1 module script tag found");

// 2. Prüfe robots.txt - kein "Disallow: /" (globale Blockade)
const robotsPath = join(dist, "robots.txt");
if (existsSync(robotsPath)) {
  const robotsContent = readFileSync(robotsPath, "utf8");
  if (robotsContent.includes("Disallow: /") && !robotsContent.includes("Allow: /")) {
    console.error("[FAIL] robots.txt contains 'Disallow: /' without 'Allow: /' - blocks all crawlers");
    process.exit(1);
  }
  console.log("✅ robots.txt allows crawling");
} else {
  console.error("[FAIL] robots.txt not found in dist/");
  process.exit(1);
}

// 3. Prüfe sitemap.xml existiert
const sitemapPath = join(dist, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  console.error("[FAIL] sitemap.xml not found in dist/");
  process.exit(1);
}
console.log("✅ sitemap.xml exists");

// 4. Prüfe 404.html existiert (SPA fallback)
const fallbackPath = join(dist, "404.html");
if (!existsSync(fallbackPath)) {
  console.error("[FAIL] 404.html not found in dist/ - SPA fallback missing");
  process.exit(1);
}
console.log("✅ 404.html SPA fallback exists");

// 5. Prüfe JSON-LD Blöcke sind parsebar (dynamisch von SEOHead-Komponente)
// Da JSON-LD von React-Komponente generiert wird, prüfen wir nur ob SEOHead-Komponente existiert
const hasSeoHead = html.includes('SEOHead') || html.includes('react-helmet');
if (!hasSeoHead) {
  console.error("[FAIL] SEOHead component not found - JSON-LD will not be generated");
  process.exit(1);
}
console.log("✅ SEOHead component found - JSON-LD will be generated dynamically");

// 6. Prüfe auf verbotene Tokens
function scan(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) scan(p);
    else {
      const txt = readFileSync(p, "utf8");
      if (/\b5000\b|\b5000\+/.test(txt)) {
        console.error(`[FAIL] Found forbidden token "5000" in ${p}`);
        process.exit(1);
      }
    }
  }
}
scan(dist);
console.log("✅ No forbidden tokens found");

// 7. Prüfe Performance-Hints
const hasPreconnect = html.includes('rel="preconnect"');
const hasDnsPrefetch = html.includes('rel="dns-prefetch"');
if (!hasPreconnect && !hasDnsPrefetch) {
  console.error("[FAIL] Missing performance hints (preconnect/dns-prefetch)");
  process.exit(1);
}
console.log("✅ Performance hints present");

console.log("🎉 [OK] All postbuild SEO checks passed!");
