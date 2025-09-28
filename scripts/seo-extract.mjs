#!/usr/bin/env node

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 SEO Extract - Meta Data Comparison');
console.log('=====================================\n');

async function extractSEOData(page, url) {
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  
  const seoData = await page.evaluate(() => {
    // Extract meta tags
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    
    // Extract Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
    const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '';
    const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute('content') || '';
    const ogSiteName = document.querySelector('meta[property="og:site_name"]')?.getAttribute('content') || '';
    
    // Extract Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '';
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '';
    const twitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '';
    
    // Extract hreflang tags
    const hreflangTags = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(link => ({
      hreflang: link.getAttribute('hreflang'),
      href: link.getAttribute('href')
    }));
    
    // Count JSON-LD scripts
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    const jsonLdCount = jsonLdScripts.length;
    
    // Extract JSON-LD content (first few for analysis)
    const jsonLdContent = Array.from(jsonLdScripts).slice(0, 3).map(script => {
      try {
        return JSON.parse(script.textContent);
      } catch (e) {
        return null;
      }
    }).filter(Boolean);
    
    // Extract HTML lang attribute
    const htmlLang = document.documentElement.getAttribute('lang') || '';
    
    return {
      title,
      description,
      keywords,
      canonical,
      og: {
        title: ogTitle,
        description: ogDescription,
        image: ogImage,
        url: ogUrl,
        type: ogType,
        siteName: ogSiteName
      },
      twitter: {
        card: twitterCard,
        title: twitterTitle,
        description: twitterDescription,
        image: twitterImage
      },
      hreflang: hreflangTags,
      jsonLd: {
        count: jsonLdCount,
        content: jsonLdContent
      },
      htmlLang
    };
  });
  
  return seoData;
}

async function generateSEOReport() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('📊 Extracting SEO data from / (DE)...');
    const deSEO = await extractSEOData(page, 'http://localhost:4173/');
    
    console.log('📊 Extracting SEO data from /en (EN)...');
    const enSEO = await extractSEOData(page, 'http://localhost:4173/en');
    
    console.log('\n📋 SEO Comparison Table:');
    console.log('========================');
    
    const comparison = [
      ['Metric', 'DE (/)', 'EN (/en)', 'Status'],
      ['HTML Lang', deSEO.htmlLang, enSEO.htmlLang, deSEO.htmlLang === 'de' && enSEO.htmlLang === 'en' ? '✅' : '❌'],
      ['Title', deSEO.title, enSEO.title, deSEO.title !== enSEO.title ? '✅' : '❌'],
      ['Description', deSEO.description, enSEO.description, deSEO.description !== enSEO.description ? '✅' : '❌'],
      ['Canonical', deSEO.canonical, enSEO.canonical, deSEO.canonical.includes('/') && enSEO.canonical.includes('/en') ? '✅' : '❌'],
      ['OG Title', deSEO.og.title, enSEO.og.title, deSEO.og.title !== enSEO.og.title ? '✅' : '❌'],
      ['OG Description', deSEO.og.description, enSEO.og.description, deSEO.og.description !== enSEO.og.description ? '✅' : '❌'],
      ['Twitter Title', deSEO.twitter.title, enSEO.twitter.title, deSEO.twitter.title !== enSEO.twitter.title ? '✅' : '❌'],
      ['JSON-LD Count', deSEO.jsonLd.count, enSEO.jsonLd.count, deSEO.jsonLd.count === enSEO.jsonLd.count ? '✅' : '❌'],
      ['Hreflang Count', deSEO.hreflang.length, enSEO.hreflang.length, deSEO.hreflang.length === enSEO.hreflang.length ? '✅' : '❌']
    ];
    
    // Print table
    comparison.forEach(row => {
      const col1 = String(row[1] || '').substring(0, 40).padEnd(40);
      const col2 = String(row[2] || '').substring(0, 40).padEnd(40);
      console.log(`| ${row[0].padEnd(20)} | ${col1} | ${col2} | ${row[3]} |`);
    });
    
    // Detailed analysis
    console.log('\n🔍 Detailed Analysis:');
    console.log('====================');
    
    // Check hreflang implementation
    const deHreflang = deSEO.hreflang.find(h => h.hreflang === 'en');
    const enHreflang = enSEO.hreflang.find(h => h.hreflang === 'de');
    const deDefault = deSEO.hreflang.find(h => h.hreflang === 'x-default');
    const enDefault = enSEO.hreflang.find(h => h.hreflang === 'x-default');
    
    console.log(`DE → EN hreflang: ${deHreflang ? '✅' : '❌'} ${deHreflang?.href || 'Missing'}`);
    console.log(`EN → DE hreflang: ${enHreflang ? '✅' : '❌'} ${enHreflang?.href || 'Missing'}`);
    console.log(`DE x-default: ${deDefault ? '✅' : '❌'} ${deDefault?.href || 'Missing'}`);
    console.log(`EN x-default: ${enDefault ? '✅' : '❌'} ${enDefault?.href || 'Missing'}`);
    
    // Check JSON-LD types
    const deTypes = deSEO.jsonLd.content.map(item => item['@type']).filter(Boolean);
    const enTypes = enSEO.jsonLd.content.map(item => item['@type']).filter(Boolean);
    
    console.log(`DE JSON-LD types: ${deTypes.join(', ')}`);
    console.log(`EN JSON-LD types: ${enTypes.join(', ')}`);
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      comparison: {
        de: deSEO,
        en: enSEO
      },
      analysis: {
        hreflang: {
          deToEn: !!deHreflang,
          enToDe: !!enHreflang,
          deDefault: !!deDefault,
          enDefault: !!enDefault
        },
        jsonLd: {
          deTypes,
          enTypes,
          countMatch: deSEO.jsonLd.count === enSEO.jsonLd.count
        }
      }
    };
    
    // Save report
    const reportPath = join('docs', 'i18n', 'seo-comparison-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
    
  } catch (error) {
    console.error('❌ Error during SEO extraction:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run extraction
generateSEOReport().catch(console.error);
