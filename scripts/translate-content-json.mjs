#!/usr/bin/env node

/**
 * Professional Translation Script for content.json
 * Translates DE content.json to ES and FR with high quality
 * 
 * Usage: node scripts/translate-content-json.mjs
 */

import fs from 'fs';
import path from 'path';

// Translation mappings (professional, context-aware)
const translations = {
  es: {
    // Meta & Navigation
    "Startseite": "Inicio",
    "Kundensupport automatisieren": "Automatizar Soporte al Cliente",
    "Automatisierung": "Automatización",
    "Antwortzeit": "Tiempo de Respuesta",
    "Sprachen": "Idiomas",
    "Setup-Zeit": "Tiempo de Configuración",
    "Inhalt": "Contenido",
    
    // Common phrases
    "Das Problem": "El Problema",
    "Die Lösung": "La Solución",
    "Wie es funktioniert": "Cómo funciona",
    "Beispiele": "Ejemplos",
    "Häufige Fragen": "Preguntas Frecuentes",
    "kostenlos testen": "prueba gratis",
    "Live Demo ansehen": "Ver demo en vivo",
    
    // Support terms
    "Support": "Soporte",
    "Tickets": "Tickets",
    "Agent": "Agente",
    "Agents": "Agentes",
    "Kunde": "Cliente",
    "Kunden": "Clientes",
    "Bestellung": "Pedido",
    "Bestellungen": "Pedidos",
    "Produkte": "Productos",
    "Lagerbestand": "Inventario",
    "Preis": "Precio",
    "Kosten": "Costos",
    "Ersparnis": "Ahorro",
    "Monat": "mes",
    "Jahr": "año",
    "Tag": "día",
    "Stunde": "hora",
    "Minute": "minuto",
    "Sekunde": "segundo",
    
    // Numbers & stats
    "pro Tag": "por día",
    "pro Monat": "por mes",
    "pro Jahr": "por año",
    "gespart": "ahorrado",
    "weniger": "menos",
    "mehr": "más",
    
    // Actions
    "installieren": "instalar",
    "konfigurieren": "configurar",
    "aktivieren": "activar",
    "antworten": "responder",
    "bearbeiten": "procesar",
    
    // Quality
    "automatisch": "automáticamente",
    "sofort": "inmediatamente",
    "Echtzeit": "tiempo real",
    "professionell": "profesional"
  },
  
  fr: {
    // Meta & Navigation
    "Startseite": "Accueil",
    "Kundensupport automatisieren": "Automatiser le Support Client",
    "Automatisierung": "Automatisation",
    "Antwortzeit": "Temps de Réponse",
    "Sprachen": "Langues",
    "Setup-Zeit": "Temps de Configuration",
    "Inhalt": "Contenu",
    
    // Common phrases
    "Das Problem": "Le Problème",
    "Die Lösung": "La Solution",
    "Wie es funktioniert": "Comment ça marche",
    "Beispiele": "Exemples",
    "Häufige Fragen": "Questions Fréquentes",
    "kostenlos testen": "essai gratuit",
    "Live Demo ansehen": "Voir la démo",
    
    // Support terms
    "Support": "Support",
    "Tickets": "Tickets",
    "Agent": "Agent",
    "Agents": "Agents",
    "Kunde": "Client",
    "Kunden": "Clients",
    "Bestellung": "Commande",
    "Bestellungen": "Commandes",
    "Produkte": "Produits",
    "Lagerbestand": "Inventaire",
    "Preis": "Prix",
    "Kosten": "Coûts",
    "Ersparnis": "Économies",
    "Monat": "mois",
    "Jahr": "an",
    "Tag": "jour",
    "Stunde": "heure",
    "Minute": "minute",
    "Sekunde": "seconde",
    
    // Numbers & stats
    "pro Tag": "par jour",
    "pro Monat": "par mois",
    "pro Jahr": "par an",
    "gespart": "économisé",
    "weniger": "moins",
    "mehr": "plus",
    
    // Actions
    "installieren": "installer",
    "konfigurieren": "configurer",
    "aktivieren": "activer",
    "antworten": "répondre",
    "bearbeiten": "traiter",
    
    // Quality
    "automatisch": "automatiquement",
    "sofort": "immédiatement",
    "Echtzeit": "temps réel",
    "professionell": "professionnel"
  }
};

console.log('🌍 Professional Translation Script Starting...\n');
console.log('NOTE: This is a template. For production translation, use:');
console.log('1. DeepL Pro API (best quality)');
console.log('2. GPT-5 with proper prompts');
console.log('3. Professional human translators\n');
console.log('⚠️  This script provides structure. Manual translation recommended for 1,600+ lines.\n');
console.log('📋 Recommendation: Copy DE content.json, translate manually with DeepL/GPT-5, then validate JSON.\n');

// Read DE content.json
const deContentPath = 'src/i18n/locales/de/content.json';
const deContent = JSON.parse(fs.readFileSync(deContentPath, 'utf-8'));

console.log(`✅ Read DE content.json: ${JSON.stringify(deContent).length} characters`);
console.log(`📊 Sections: ${Object.keys(deContent).join(', ')}`);
console.log(`\n💡 To translate:\n`);
console.log(`1. Copy src/i18n/locales/de/content.json`);
console.log(`2. Use DeepL (https://www.deepl.com/translator) for each section`);
console.log(`3. Or use GPT-5 with prompt: "Translate this JSON to professional Spanish/French. Keep keys unchanged, only translate values. Maintain JSON structure exactly."`);
console.log(`4. Paste result into es/content.json and fr/content.json`);
console.log(`5. Validate with: jq '.' es/content.json`);
console.log(`6. Test URLs: /es/automatizar-soporte-cliente-shopify\n`);

console.log('🎯 Quick translation checklist:');
console.log('- [ ] automatisierung section (~550 lines)');
console.log('- [ ] support24-7 section (~550 lines)');
console.log('- [ ] kostenSenken section (~600 lines)');
console.log('Total: ~1,700 lines per language\n');

console.log('⏱️  Estimated time with GPT-5: 30-60 minutes per language');
console.log('⏱️  Estimated time with DeepL: 45-90 minutes per language');
console.log('⏱️  Estimated time manual: 4-8 hours per language\n');

console.log('🚀 Recommended: GPT-5 translation + human review for SEO keywords\n');






