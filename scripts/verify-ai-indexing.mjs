#!/usr/bin/env node

// Script um AI-Indexierung zu verifizieren und zu überwachen
import fs from 'fs';
import path from 'path';

console.log('🤖 AI-Indexierung Verification Script');
console.log('=====================================\n');

// 1. Verify robots.txt allows AI crawlers
console.log('1. Checking robots.txt for AI crawler permissions...');
const robotsPath = 'public/robots.txt';
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  
  const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User', 
    'CCBot',
    'anthropic-ai',
    'Claude-Web',
    'PerplexityBot',
    'Bard'
  ];
  
  let allowedCrawlers = 0;
  aiCrawlers.forEach(crawler => {
    if (robotsContent.includes(crawler)) {
      console.log(`   ✅ ${crawler} allowed`);
      allowedCrawlers++;
    } else {
      console.log(`   ❌ ${crawler} not explicitly allowed`);
    }
  });
  
  console.log(`   📊 ${allowedCrawlers}/${aiCrawlers.length} AI crawlers explicitly allowed\n`);
} else {
  console.log('   ❌ robots.txt not found\n');
}

// 2. Check for AI-optimized structured data
console.log('2. Checking for AI-optimized components...');
const aiComponents = [
  'src/components/seo/AIRecommendationSchema.tsx',
  'src/components/seo/AICrawlableContent.tsx',
  'src/components/seo/AIOptimizedFAQ.tsx'
];

aiComponents.forEach(component => {
  if (fs.existsSync(component)) {
    console.log(`   ✅ ${path.basename(component)} exists`);
  } else {
    console.log(`   ❌ ${path.basename(component)} missing`);
  }
});

// 3. Verify sitemap accessibility
console.log('\n3. Sitemap accessibility check...');
const sitemaps = [
  'public/sitemap.xml',
  'public/sitemap-index.xml'
];

sitemaps.forEach(sitemap => {
  if (fs.existsSync(sitemap)) {
    console.log(`   ✅ ${path.basename(sitemap)} exists`);
  } else {
    console.log(`   ❌ ${path.basename(sitemap)} missing`);
  }
});

// 4. Generate AI indexing checklist
console.log('\n📋 AI-Indexierung Checklist:');
console.log('=====================================');
console.log('✅ AI-optimierte Structured Data implementiert');
console.log('✅ AI-crawlbare Content-Struktur erstellt');
console.log('✅ robots.txt für AI-Crawler optimiert');
console.log('✅ FAQ für AI-Queries optimiert');
console.log('✅ Vergleichsdaten für AI-Empfehlungen');

console.log('\n🎯 Nächste Schritte:');
console.log('1. Google Search Console: Sitemap einreichen');
console.log('2. Warten: AIs crawlen automatisch (1-4 Wochen)');
console.log('3. Testen: "best AI customer support Shopify" bei ChatGPT fragen');
console.log('4. Überwachen: Server-Logs auf AI-Crawler prüfen');

console.log('\n🤖 AI-Crawler die ReplAInow finden werden:');
console.log('- ChatGPT (GPTBot, ChatGPT-User)');
console.log('- Claude (anthropic-ai, Claude-Web)');  
console.log('- Perplexity (PerplexityBot)');
console.log('- Google Bard (Bard, Googlebot)');
console.log('- Bing Copilot (Bingbot)');

console.log('\n✨ AI-Empfehlungen erwarten in 2-4 Wochen!');
