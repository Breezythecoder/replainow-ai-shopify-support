import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync("dist/index.html", "utf8");
writeFileSync("dist/404.html", html);
console.log("[OK] 404.html created for SPA fallback");
