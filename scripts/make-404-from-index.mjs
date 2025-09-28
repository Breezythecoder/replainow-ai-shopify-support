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

// Create /en directory and copy index.html for GitHub Pages SPA fallback
// Use the built index.html (with hashed assets) instead of the source
if (existsSync("public/en/index.html")) {
  mkdirSync("dist/en", { recursive: true });
  // Copy the built index.html (with correct asset paths) instead of source
  copyFileSync("dist/index.html", "dist/en/index.html");
  console.log("[OK] /en/index.html created for GitHub Pages SPA fallback");
}
