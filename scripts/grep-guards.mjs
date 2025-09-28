#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'node:path';

console.log('🔍 Grep Guards - German Text Detection');
console.log('======================================\n');

// German words that should not appear in English builds
const forbiddenGermanWords = [
  'händler', 'aktiv', 'shopify-händler', 'kunden', 'antworten',
  'automatisch', 'unterstützung', 'hilfe', 'kontakt', 'preise',
  'funktionen', 'über', 'warum', 'wie', 'was',
  'häufig', 'gestellte', 'fragen', 'einfach', 'dominierst',
  'installieren', 'verbindung', 'sofort', 'profits', 'explodieren',
  'neuigkeiten', 'bewertungen', 'kostenlos', 'testen', 'jetzt',
  'starten', 'herunterladen', 'anmelden', 'registrieren'
];

// Technical words that are allowed
const allowedWords = [
  'shopify', 'gpt', 'ai', 'api', 'json', 'html', 'css', 'js',
  'react', 'vite', 'npm', 'github', 'seo', 'og', 'twitter',
  'schema', 'ld', 'robots', 'sitemap', 'favicon', 'png', 'jpg',
  'svg', 'ico', 'woff', 'ttf', 'webp', 'avif', 'demo', 'wo'
];

function scanFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8').toLowerCase();
    const foundWords = [];
    
    forbiddenGermanWords.forEach(word => {
      if (content.includes(word.toLowerCase())) {
        // Check if it's not part of an allowed word
        const isAllowed = allowedWords.some(allowed => 
          content.includes(allowed.toLowerCase()) && 
          content.indexOf(word.toLowerCase()) >= content.indexOf(allowed.toLowerCase()) - 10
        );
        
        if (!isAllowed) {
          foundWords.push(word);
        }
      }
    });
    
    return foundWords;
  } catch (error) {
    console.warn(`⚠️  Could not read ${filePath}: ${error.message}`);
    return [];
  }
}

function scanDirectory(dirPath) {
  const results = [];
  
  try {
    const items = readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = join(dirPath, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build artifacts
        if (['node_modules', '.git', '.vite', 'dist'].includes(item)) {
          continue;
        }
        results.push(...scanDirectory(fullPath));
      } else if (stat.isFile()) {
        // Only scan relevant file types
        if (item.match(/\.(js|jsx|ts|tsx|json|html|css)$/)) {
          const foundWords = scanFile(fullPath);
          if (foundWords.length > 0) {
            results.push({
              file: fullPath,
              words: foundWords
            });
          }
        }
      }
    }
  } catch (error) {
    console.warn(`⚠️  Could not scan directory ${dirPath}: ${error.message}`);
  }
  
  return results;
}

function main() {
  console.log('📁 Scanning build directory for German text...');
  
  const distResults = scanDirectory('dist');
  const srcResults = scanDirectory('src');
  
  console.log('\n📊 Results:');
  console.log('============');
  
  if (distResults.length === 0 && srcResults.length === 0) {
    console.log('✅ No German text found in English build');
    return;
  }
  
  let totalIssues = 0;
  
  if (distResults.length > 0) {
    console.log('\n❌ German text found in dist/ (CRITICAL):');
    distResults.forEach(result => {
      console.log(`   ${result.file}: ${result.words.join(', ')}`);
      totalIssues += result.words.length;
    });
  }
  
  if (srcResults.length > 0) {
    console.log('\n⚠️  German text found in src/ (WARNING):');
    srcResults.forEach(result => {
      console.log(`   ${result.file}: ${result.words.join(', ')}`);
      totalIssues += result.words.length;
    });
  }
  
  console.log(`\n📈 Total issues found: ${totalIssues}`);
  
  if (distResults.length > 0) {
    console.log('\n🚨 CRITICAL: German text found in production build!');
    process.exit(1);
  }
}

main();
