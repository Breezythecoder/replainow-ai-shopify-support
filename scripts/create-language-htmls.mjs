#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const LANGUAGES = [
  { code: 'de', path: '', lang: 'de' },
  { code: 'en', path: '/en', lang: 'en' },
  { code: 'fr', path: '/fr', lang: 'fr' },
  { code: 'es', path: '/es', lang: 'es' }
];

// Read the base HTML template
const baseHtml = readFileSync('dist/index.html', 'utf8');

// Create language-specific HTML files
LANGUAGES.forEach(({ code, path, lang }) => {
  // Replace lang attribute
  const languageHtml = baseHtml.replace('<html lang="de">', `<html lang="${lang}">`);
  
  // Create directory if needed
  const outputPath = path === '' ? 'dist/index.html' : `dist${path}/index.html`;
  if (path !== '') {
    mkdirSync(`dist${path}`, { recursive: true });
  }
  
  // Write the language-specific HTML
  writeFileSync(outputPath, languageHtml);
  console.log(`✅ Created ${outputPath} with lang="${lang}"`);
});

console.log('🎉 All language-specific HTML files created!');
