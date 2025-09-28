#!/usr/bin/env node

/**
 * ULTIMATE FIX - Replace ALL remaining German text with English
 * This is the most aggressive approach to fix the German text issue
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const ultimateReplacements = {
  // Direct German to English replacements
  "KI": "AI",
  "Kundensupport": "Customer Support", 
  "Sekunden": "seconds",
  "Sprachen": "languages",
  "DSGVO": "GDPR",
  "kostenlos": "free",
  "testen": "test",
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
  "Startseite": "Home",
  "Zum Hauptinhalt springen": "Skip to main content",
  "Zu den Funktionen": "To Features",
  "Zur Live-Demo": "To Live Demo",
  "Zu den Preisen": "To Pricing",
  "Über uns": "About Us",
  "Kosteneinsparung": "Cost Savings",
  "Deine KI kennt": "Your AI knows",
  "KI aktiv": "AI active",
  "KI-Performance": "AI performance",
  "KI-Technologie": "AI technology",
  "ber uns": "About Us",
  "ReplAInow ist ein Produkt der": "ReplAInow is a product of",
  "Unsere Mission": "Our Mission",
  "Shopify-Hndlern Zeit sparen": "Save time for Shopify merchants",
  "Kundenerlebnisse": "customer experiences",
  "moderner": "modern",
  "nachhaltig verbessern": "sustainably improve",
  "Warum 75% weniger bezahlen": "Why pay 75% less",
  "beste": "best",
  "bekommen": "get",
  "ReplAInow verbindet sich direkt": "ReplAInow connects directly",
  "deinem Shopify-Store": "your Shopify store",
  "zieht in Echtzeit": "pulls in real-time",
  "alle relevanten Daten": "all relevant data",
  "um Kundenanfragen sofort": "to answer customer queries immediately",
  "przise zu beantworten": "and precisely",
  "KI-gestützter": "AI-powered",
  "Shopify Support mit GPT-4.1 Technologie": "Shopify Support with GPT-4.1 technology",
  "automatisierten Kundenservice": "automated customer service"
};

async function ultimateFix() {
  console.log('🚀 ULTIMATE FIX - Replacing ALL remaining German text...');
  
  // Find all relevant files
  const files = await glob('src/**/*.{tsx,ts,json}', {
    ignore: ['src/i18n/locales/de.json', 'src/i18n/locales/fr.json', 'src/i18n/locales/es.json']
  });
  
  let totalReplacements = 0;
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let replacements = 0;
    
    // Replace each German word with English
    for (const [german, english] of Object.entries(ultimateReplacements)) {
      const regex = new RegExp(german.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
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
  
  console.log(`\n🚀 ULTIMATE FIX COMPLETE: ${totalReplacements} total replacements`);
  console.log('🎯 This should FINALLY eliminate ALL German text!');
}

ultimateFix().catch(console.error);
