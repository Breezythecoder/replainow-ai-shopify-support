import fs from "fs";
const fail = (m)=>{ console.error("❌", m); process.exit(1); };
const ok = (m)=> console.log("✅", m);

// Files
if (!fs.existsSync("dist/index.html")) fail("dist/index.html missing");
if (!fs.existsSync("dist/en/index.html")) fail("dist/en/index.html missing");

// Lang & canonical
const de = fs.readFileSync("dist/index.html","utf8");
if (!/<html[^>]*lang="de"/i.test(de)) fail("DE html lang not de");
if (!/rel="canonical"[^>]+href="https:\/\/replainow\.com\/"/i.test(de)) fail("DE canonical missing");

const en = fs.readFileSync("dist/en/index.html","utf8");
if (!/<html[^>]*lang="en"/i.test(en)) fail("EN html lang not en");
if (!/rel="canonical"[^>]+href="https:\/\/replainow\.com\/en"/i.test(en)) fail("EN canonical missing");

// Single module script in each
const rxScript = /<script[^>]+type="module"[^>]+assets\/[^>]+>/gi;
if ((de.match(rxScript)||[]).length !== 1) fail("DE should have exactly 1 module script");
if ((en.match(rxScript)||[]).length !== 1) fail("EN should have exactly 1 module script");

// Sitemap & robots
const sm = fs.existsSync("dist/sitemap.xml") ? fs.readFileSync("dist/sitemap.xml","utf8") : "";
if (!/<loc>https:\/\/replainow\.com\/<\/loc>/.test(sm)) fail("sitemap: / missing");
if (!/<loc>https:\/\/replainow\.com\/en<\/loc>/.test(sm)) fail("sitemap: /en missing");
if (!/lastmod/.test(sm)) fail("sitemap: lastmod missing");

const robots = fs.existsSync("dist/robots.txt") ? fs.readFileSync("dist/robots.txt","utf8") : "";
if (!/Allow:\s*\/\b/.test(robots)) fail("robots: Allow / missing");
if (!/Sitemap:\s*https:\/\/replainow\.com\/sitemap\.xml/.test(robots)) fail("robots: Sitemap hint missing");

ok("Multi-page verify passed.");
