import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from "node:fs";

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

// Create language-specific HTML files
import { execSync } from 'child_process';
try {
  execSync('node scripts/create-language-htmls.mjs', { stdio: 'inherit' });
  console.log("[OK] Language-specific HTML files created");
} catch (error) {
  console.error("[ERROR] Failed to create language-specific HTML files:", error.message);
}
