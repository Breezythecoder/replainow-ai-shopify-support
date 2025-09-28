#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { createWriteStream } from 'node:fs';
import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:4173';
const OUTPUT_DIR = './docs/i18n/PROOF_PARITY';

// Ensure output directory exists
import { mkdirSync } from 'node:fs';
if (!mkdirSync(OUTPUT_DIR, { recursive: true })) {
  console.log('📁 Created output directory:', OUTPUT_DIR);
}

async function fetchPage(url, filename) {
  try {
    console.log(`🔍 Fetching ${url}...`);
    const response = await fetch(url);
    const html = await response.text();
    
    // Save full HTML
    writeFileSync(`${OUTPUT_DIR}/${filename}.html`, html);
    
    // Extract head section
    const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
    const head = headMatch ? headMatch[1] : '';
    writeFileSync(`${OUTPUT_DIR}/${filename}-head.html`, `<head>${head}</head>`);
    
    // Extract JSON-LD
    const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    const jsonLdData = jsonLdMatches ? jsonLdMatches.map(match => {
      const content = match.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
      return JSON.parse(content);
    }) : [];
    writeFileSync(`${OUTPUT_DIR}/${filename}-jsonld.json`, JSON.stringify(jsonLdData, null, 2));
    
    // Extract lang attribute
    const langMatch = html.match(/<html lang="([^"]+)"/);
    const lang = langMatch ? langMatch[1] : 'not found';
    
    return {
      url,
      lang,
      title: html.match(/<title>([^<]+)</)?.[1] || 'not found',
      description: html.match(/<meta name="description" content="([^"]+)"/)?.[1] || 'not found',
      hasHreflang: html.includes('hreflang'),
      jsonLdCount: jsonLdData.length
    };
  } catch (error) {
    console.error(`❌ Error fetching ${url}:`, error.message);
    return null;
  }
}

async function testParity() {
  console.log('🚀 Starting parity test...\n');
  
  // Test both pages
  const dePage = await fetchPage(`${BASE_URL}/`, 'de-page');
  const enPage = await fetchPage(`${BASE_URL}/en`, 'en-page');
  
  if (!dePage || !enPage) {
    console.error('❌ Failed to fetch pages');
    return;
  }
  
  console.log('\n📊 PARITY ANALYSIS RESULTS');
  console.log('='.repeat(50));
  
  // Lang attribute analysis
  console.log('\n🌐 Language Attributes:');
  console.log(`German page: <html lang="${dePage.lang}">`);
  console.log(`English page: <html lang="${enPage.lang}">`);
  
  if (dePage.lang === 'de' && enPage.lang === 'en') {
    console.log('✅ Language attributes are correct');
  } else {
    console.log('❌ Language attributes are incorrect');
  }
  
  // Title analysis
  console.log('\n📝 Page Titles:');
  console.log(`German: ${dePage.title}`);
  console.log(`English: ${enPage.title}`);
  
  // Description analysis
  console.log('\n📄 Meta Descriptions:');
  console.log(`German: ${dePage.description}`);
  console.log(`English: ${enPage.description}`);
  
  // Hreflang analysis
  console.log('\n🔗 Hreflang Tags:');
  console.log(`German has hreflang: ${dePage.hasHreflang ? '✅' : '❌'}`);
  console.log(`English has hreflang: ${enPage.hasHreflang ? '✅' : '❌'}`);
  
  // JSON-LD analysis
  console.log('\n📋 JSON-LD Structured Data:');
  console.log(`German JSON-LD count: ${dePage.jsonLdCount}`);
  console.log(`English JSON-LD count: ${enPage.jsonLdCount}`);
  
  // Generate summary report
  const report = `# Parity Test Results

Generated: ${new Date().toISOString()}

## Summary
- German page lang: ${dePage.lang}
- English page lang: ${enPage.lang}
- German title: ${dePage.title}
- English title: ${enPage.title}
- German description: ${dePage.description}
- English description: ${enPage.description}
- German hreflang: ${dePage.hasHreflang ? 'Present' : 'Missing'}
- English hreflang: ${enPage.hasHreflang ? 'Present' : 'Missing'}
- German JSON-LD: ${dePage.jsonLdCount} scripts
- English JSON-LD: ${enPage.jsonLdCount} scripts

## Issues Found
${dePage.lang !== 'de' ? '- ❌ German page has wrong lang attribute' : '- ✅ German page lang is correct'}
${enPage.lang !== 'en' ? '- ❌ English page has wrong lang attribute' : '- ✅ English page lang is correct'}
${!dePage.hasHreflang ? '- ❌ German page missing hreflang tags' : '- ✅ German page has hreflang tags'}
${!enPage.hasHreflang ? '- ❌ English page missing hreflang tags' : '- ✅ English page has hreflang tags'}
${dePage.jsonLdCount === 0 ? '- ❌ German page missing JSON-LD' : '- ✅ German page has JSON-LD'}
${enPage.jsonLdCount === 0 ? '- ❌ English page missing JSON-LD' : '- ✅ English page has JSON-LD'}

## Files Generated
- de-page.html - Full German page HTML
- de-page-head.html - German page head section
- de-page-jsonld.json - German page JSON-LD data
- en-page.html - Full English page HTML  
- en-page-head.html - English page head section
- en-page-jsonld.json - English page JSON-LD data
`;

  writeFileSync(`${OUTPUT_DIR}/PARITY_REPORT.md`, report);
  console.log(`\n📝 Report saved to: ${OUTPUT_DIR}/PARITY_REPORT.md`);
  
  console.log('\n🎉 Parity test completed!');
}

// Run the test
testParity().catch(console.error);
