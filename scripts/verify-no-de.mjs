// scripts/verify-no-de.mjs
import fs from "fs";
import path from "path";

const root = "dist/en";
const blacklist = /\b(Händler|Über|Kontakt|Impressum|Datenschutz|Jetzt|Bewertung|Ä|Ö|Ü|ß|Größe|Rückgabe|Montage|Pflegetipps|Kompatibilität|Antworten|innerhalb|Stunden|verfügbar|Nachricht|senden|gesendet|Fehler|Danke|melden|zeitnah|Häufige|Fragen|Installation|Sprachen|unterstützt|trainieren|sicher|Daten)\b/;

let hits = [];

function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.log("⚠️  EN build directory not found:", dir);
    return;
  }
  
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(html|js|css|json)$/.test(f)) {
      const txt = fs.readFileSync(p, "utf8");
      if (blacklist.test(txt)) {
        const matches = txt.match(blacklist);
        hits.push({ file: p, matches: matches });
      }
    }
  }
}

walk(root);

if (hits.length) {
  console.error("❌ German tokens found in EN build:");
  hits.forEach(hit => {
    console.error(`  ${hit.file}: ${hit.matches.join(', ')}`);
  });
  process.exit(1);
} else {
  console.log("✅ No German tokens in EN build");
}
