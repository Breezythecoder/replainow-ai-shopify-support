import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
const html = readFileSync("dist/index.html", "utf8");
writeFileSync("dist/404.html", html);
console.log("[OK] 404.html created for SPA fallback");

// Copy robots.txt to dist
copyFileSync("robots.txt", "dist/robots.txt");
console.log("[OK] robots.txt copied to dist");
