// scripts/postbuild-verify-mpages.mjs
import fs from "fs";

function fail(msg) { console.error("❌", msg); process.exit(1); }
function ok(msg)   { console.log("✅", msg); }

if (!fs.existsSync("dist/index.html")) fail("dist/index.html missing");
if (!fs.existsSync("dist/en/index.html")) fail("dist/en/index.html missing");

const de = fs.readFileSync("dist/index.html","utf8");
const en = fs.readFileSync("dist/en/index.html","utf8");

if (!/<html[^>]*lang="de"/i.test(de)) fail("DE lang missing");
if (!/<html[^>]*lang="en"/i.test(en)) fail("EN lang missing");

if (!/rel="canonical"[^>]+href="https:\/\/replainow\.com\/"/i.test(de)) fail("DE canonical wrong");
if (!/rel="canonical"[^>]+href="https:\/\/replainow\.com\/en"/i.test(en)) fail("EN canonical wrong");

const rxScript = /<script[^>]+type="module"[^>]+assets\/[^>]+>/gi;
if ((de.match(rxScript)||[]).length !== 1) fail("DE: wrong number of module scripts");
if ((en.match(rxScript)||[]).length !== 1) fail("EN: wrong number of module scripts");

const sm = fs.existsSync("dist/sitemap.xml") ? fs.readFileSync("dist/sitemap.xml","utf8") : "";
if (!/<loc>https:\/\/replainow\.com\/<\/loc>/.test(sm)) fail("sitemap: / missing");
if (!/<loc>https:\/\/replainow\.com\/en<\/loc>/.test(sm)) fail("sitemap: /en missing");
if (!/lastmod/.test(sm)) fail("sitemap: lastmod missing");

const robots = fs.existsSync("dist/robots.txt") ? fs.readFileSync("dist/robots.txt","utf8") : "";
if (!/Allow:\s*\/\b/.test(robots)) fail("robots: Allow / missing");
if (!/Sitemap:\s*https:\/\/replainow\.com\/sitemap\.xml/.test(robots)) fail("robots: Sitemap hint missing");

ok("Multi-page verify passed");