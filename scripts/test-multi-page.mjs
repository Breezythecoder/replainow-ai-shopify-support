#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:4173';

async function testMultiPage() {
  console.log('🚀 Testing Multi-Page Static HTML Generation\n');
  
  // Test 1: Lang attributes and canonical URLs
  console.log('📋 Test 1: Lang Attributes & Canonical URLs');
  console.log('='.repeat(50));
  
  try {
    const deResponse = await fetch(`${BASE_URL}/`);
    const deHtml = await deResponse.text();
    
    const enResponse = await fetch(`${BASE_URL}/en`);
    const enHtml = await enResponse.text();
    
    // Check German page
    const deLangMatch = deHtml.match(/<html[^>]*lang="de"/);
    const deCanonicalMatch = deHtml.match(/<link rel="canonical" href="https:\/\/replainow\.com\/"/);
    
    console.log(`German page lang="de": ${deLangMatch ? '✅' : '❌'}`);
    console.log(`German page canonical="/": ${deCanonicalMatch ? '✅' : '❌'}`);
    
    // Check English page
    const enLangMatch = enHtml.match(/<html[^>]*lang="en"/);
    const enCanonicalMatch = enHtml.match(/<link rel="canonical" href="https:\/\/replainow\.com\/en"/);
    
    console.log(`English page lang="en": ${enLangMatch ? '✅' : '❌'}`);
    console.log(`English page canonical="/en": ${enCanonicalMatch ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error testing pages:', error.message);
  }
  
  // Test 2: Hreflang tags
  console.log('\n📋 Test 2: Hreflang Tags');
  console.log('='.repeat(50));
  
  try {
    const deResponse = await fetch(`${BASE_URL}/`);
    const deHtml = await deResponse.text();
    
    const hasDeHreflang = deHtml.includes('hreflang="de"');
    const hasEnHreflang = deHtml.includes('hreflang="en"');
    const hasXDefaultHreflang = deHtml.includes('hreflang="x-default"');
    
    console.log(`German page has hreflang="de": ${hasDeHreflang ? '✅' : '❌'}`);
    console.log(`German page has hreflang="en": ${hasEnHreflang ? '✅' : '❌'}`);
    console.log(`German page has hreflang="x-default": ${hasXDefaultHreflang ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error testing hreflang:', error.message);
  }
  
  // Test 3: JSON-LD
  console.log('\n📋 Test 3: JSON-LD Structured Data');
  console.log('='.repeat(50));
  
  try {
    const deResponse = await fetch(`${BASE_URL}/`);
    const deHtml = await deResponse.text();
    
    const hasJsonLd = deHtml.includes('application/ld+json');
    const hasOrganization = deHtml.includes('"@type":"Organization"');
    const hasReplAInow = deHtml.includes('"name":"ReplAInow"');
    
    console.log(`German page has JSON-LD: ${hasJsonLd ? '✅' : '❌'}`);
    console.log(`German page has Organization schema: ${hasOrganization ? '✅' : '❌'}`);
    console.log(`German page has ReplAInow name: ${hasReplAInow ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error testing JSON-LD:', error.message);
  }
  
  // Test 4: Sitemap
  console.log('\n📋 Test 4: Sitemap');
  console.log('='.repeat(50));
  
  try {
    const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
    const sitemapXml = await sitemapResponse.text();
    
    const hasRootUrl = sitemapXml.includes('<loc>https://replainow.com/</loc>');
    const hasEnUrl = sitemapXml.includes('<loc>https://replainow.com/en</loc>');
    const hasLastmod = sitemapXml.includes('<lastmod>');
    
    console.log(`Sitemap contains root URL: ${hasRootUrl ? '✅' : '❌'}`);
    console.log(`Sitemap contains /en URL: ${hasEnUrl ? '✅' : '❌'}`);
    console.log(`Sitemap has lastmod dates: ${hasLastmod ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error testing sitemap:', error.message);
  }
  
  // Test 5: Robots.txt
  console.log('\n📋 Test 5: Robots.txt');
  console.log('='.repeat(50));
  
  try {
    const robotsResponse = await fetch(`${BASE_URL}/robots.txt`);
    const robotsTxt = await robotsResponse.text();
    
    const hasAllowRoot = robotsTxt.includes('Allow: /');
    const hasSitemap = robotsTxt.includes('Sitemap: https://replainow.com/sitemap.xml');
    
    console.log(`Robots.txt allows root: ${hasAllowRoot ? '✅' : '❌'}`);
    console.log(`Robots.txt has sitemap reference: ${hasSitemap ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error testing robots.txt:', error.message);
  }
  
  // Test 6: File existence
  console.log('\n📋 Test 6: File Existence');
  console.log('='.repeat(50));
  
  try {
    const deExists = readFileSync('dist/index.html', 'utf8');
    const enExists = readFileSync('dist/en/index.html', 'utf8');
    
    console.log(`dist/index.html exists: ${deExists ? '✅' : '❌'}`);
    console.log(`dist/en/index.html exists: ${enExists ? '✅' : '❌'}`);
    
  } catch (error) {
    console.error('❌ Error checking file existence:', error.message);
  }
  
  console.log('\n🎉 Multi-page testing completed!');
}

// Run the test
testMultiPage().catch(console.error);
