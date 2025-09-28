import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const html = readFileSync(join(dist, "index.html"), "utf8");

// Exakt 1 Modul-Script auf assets/**
const scriptTags = (html.match(/<script[^>]+type="module"[^>]+assets\/[^>]+>/g) || []).length;
if (scriptTags !== 1) {
  console.error(`[FAIL] Expected exactly 1 module script tag, got ${scriptTags}`);
  process.exit(1);
}

// Keine "5000" irgendwo im dist
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

console.log("[OK] postbuild verification passed.");
