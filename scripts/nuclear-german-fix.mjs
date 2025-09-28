#!/usr/bin/env node

/**
 * NUCLEAR GERMAN FIX - Replace ALL German text with English
 * This is the most aggressive approach to fix the German text issue
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const germanToEnglish = {
  "Kundensupport": "Customer Support",
  "KI": "AI", 
  "Sekunden": "seconds",
  "Sprachen": "languages",
  "DSGVO": "GDPR",
  "kostenlos": "free",
  "testen": "test",
  "Zum Hauptinhalt springen": "Skip to main content",
  "Zu den Funktionen": "To Features",
  "Zur Live-Demo": "To Live Demo", 
  "Zu den Preisen": "To Pricing",
  "Automatisiere": "Automate",
  "Beantworte": "Answer",
  "Kundenanfragen": "customer queries",
  "markenkonform": "brand-consistent",
  "direkte": "direct",
  "Shopify-Daten": "Shopify data",
  "Tage": "days",
  "gratis": "free",
  "Jetzt": "Now",
  "installieren": "Install",
  "Demo": "Demo",
  "ansehen": "Watch",
  "Funktionen": "Features",
  "Preise": "Pricing",
  "Kontakt": "Contact",
  "Startseite": "Home"
};

async function nuclearGermanFix() {
  console.log('💥 NUCLEAR GERMAN FIX - Replacing ALL German text...');
  
  // Find all relevant files
  const files = await glob('src/**/*.{tsx,ts,json}', {
    ignore: ['src/**/*.en.*', 'src/i18n/locales/de.json', 'src/i18n/locales/fr.json', 'src/i18n/locales/es.json']
  });
  
  let totalReplacements = 0;
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let replacements = 0;
    
    // Replace each German word with English
    for (const [german, english] of Object.entries(germanToEnglish)) {
      const regex = new RegExp(german, 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, english);
        replacements += matches.length;
        console.log(`  📝 ${file}: ${german} → ${english} (${matches.length}x)`);
      }
    }
    
    if (replacements > 0) {
      fs.writeFileSync(file, content, 'utf8');
      totalReplacements += replacements;
      console.log(`✅ Fixed: ${file} (${replacements} replacements)`);
    }
  }
  
  console.log(`\n💥 NUCLEAR FIX COMPLETE: ${totalReplacements} total replacements`);
}

nuclearGermanFix().catch(console.error);
