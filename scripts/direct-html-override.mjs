#!/usr/bin/env node

/**
 * DIRECT HTML OVERRIDE - Force English text directly in HTML
 * This bypasses all JavaScript and React issues
 */

import fs from 'fs';
import path from 'path';

const directReplacements = {
  // Direct German to English replacements in HTML
  "Kundensupport": "Customer Support",
  "KI": "AI", 
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

async function directHtmlOverride() {
  console.log('🚀 DIRECT HTML OVERRIDE - Force English text in HTML files...');
  
  // Process dist/en/index.html
  const enHtmlPath = 'dist/en/index.html';
  if (fs.existsSync(enHtmlPath)) {
    let content = fs.readFileSync(enHtmlPath, 'utf8');
    let replacements = 0;
    
    // Replace each German word with English
    for (const [german, english] of Object.entries(directReplacements)) {
      const regex = new RegExp(german.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, english);
        replacements += matches.length;
        console.log(`  📝 ${enHtmlPath}: ${german} → ${english} (${matches.length}x)`);
      }
    }
    
    if (replacements > 0) {
      fs.writeFileSync(enHtmlPath, content, 'utf8');
      console.log(`✅ Fixed: ${enHtmlPath} (${replacements} replacements)`);
    }
  }
  
  // Also process the main index.html for consistency
  const mainHtmlPath = 'dist/index.html';
  if (fs.existsSync(mainHtmlPath)) {
    let content = fs.readFileSync(mainHtmlPath, 'utf8');
    let replacements = 0;
    
    // Only replace if it's clearly German text that shouldn't be there
    const criticalReplacements = {
      "KI": "AI",
      "Kundensupport": "Customer Support",
      "Sekunden": "seconds",
      "Sprachen": "languages",
      "DSGVO": "GDPR",
      "kostenlos": "free",
      "testen": "test"
    };
    
    for (const [german, english] of Object.entries(criticalReplacements)) {
      const regex = new RegExp(german.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, english);
        replacements += matches.length;
        console.log(`  📝 ${mainHtmlPath}: ${german} → ${english} (${matches.length}x)`);
      }
    }
    
    if (replacements > 0) {
      fs.writeFileSync(mainHtmlPath, content, 'utf8');
      console.log(`✅ Fixed: ${mainHtmlPath} (${replacements} replacements)`);
    }
  }
  
  console.log(`\n🚀 DIRECT HTML OVERRIDE COMPLETE!`);
  console.log('🎯 This bypasses all JavaScript and React issues!');
}

directHtmlOverride().catch(console.error);
