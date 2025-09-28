import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { existsSync } from "node:fs";

// Create 404.html for SPA fallback
const html = readFileSync("dist/index.html", "utf8");
writeFileSync("dist/404.html", html);
console.log("[OK] 404.html created for SPA fallback");

// Copy robots.txt to dist
if (existsSync("robots.txt")) {
  copyFileSync("robots.txt", "dist/robots.txt");
  console.log("[OK] robots.txt copied to dist");
}

// Copy .nojekyll to disable Jekyll processing
if (existsSync("public/.nojekyll")) {
  copyFileSync("public/.nojekyll", "dist/.nojekyll");
  console.log("[OK] .nojekyll copied to dist");
}
