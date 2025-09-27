#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inline SEO utilities for build script
const baseUrl = 'https://replainow.com';

import { execSync } from "child_process";

function lastCommitISO(urlPath) {
  try { 
    return execSync(`git log -1 --pretty=format:%cI -- .${urlPath}`).toString().trim(); 
  } catch { 
    return new Date().toISOString().split('T')[0]; 
  }
}

const generateSitemapXML = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: `${baseUrl}/`, lastmod: lastCommitISO('/'), changefreq: 'daily', priority: 1.0 },
    { loc: `${baseUrl}/ai-shopify-helpdesk`, lastmod: lastCommitISO('/ai-shopify-helpdesk'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/multilingual-support`, lastmod: lastCommitISO('/multilingual-support'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/shopify-customer-service`, lastmod: lastCommitISO('/shopify-customer-service'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/gorgias-alternative`, lastmod: lastCommitISO('/gorgias-alternative'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/intercom-alternative`, lastmod: lastCommitISO('/intercom-alternative'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/shopify-ai-support`, lastmod: lastCommitISO('/shopify-ai-support'), changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/pricing`, lastmod: lastCommitISO('/pricing'), changefreq: 'weekly', priority: 0.8 },
    { loc: `${baseUrl}/faq`, lastmod: lastCommitISO('/faq'), changefreq: 'weekly', priority: 0.7 },
    { loc: `${baseUrl}/privacy`, lastmod: lastCommitISO('/privacy'), changefreq: 'yearly', priority: 0.3 },
    { loc: `${baseUrl}/terms`, lastmod: lastCommitISO('/terms'), changefreq: 'yearly', priority: 0.3 },
    { loc: `${baseUrl}/security`, lastmod: lastCommitISO('/security'), changefreq: 'yearly', priority: 0.3 },
    { loc: `${baseUrl}/impressum`, lastmod: lastCommitISO('/impressum'), changefreq: 'yearly', priority: 0.3 }
  ];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</urlset>';
  
  const urlEntries = urls.map(url => 
    `\n  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
  ).join('');
  
  return xmlHeader + urlEntries + '\n' + xmlFooter;
};

const getRobotsTxt = (environment) => {
  const allowCrawling = environment === 'production';
  const allowAIBots = environment === 'production';
  
  let robots = 'User-agent: *\n';
  if (allowCrawling) {
    robots += 'Allow: /\n';
    robots += 'Disallow: /api/\n';
    robots += 'Disallow: /admin/\n';
    robots += 'Disallow: /_next/\n';
    robots += 'Disallow: /static/\n';
    robots += 'Disallow: /assets/\n';
    robots += 'Disallow: /*.json$\n';
    robots += 'Disallow: /*?*\n';
  } else {
    robots += 'Disallow: /\n';
  }
  
  if (allowAIBots) {
    const aiBots = ['GPTBot', 'OAI-SearchBot', 'PerplexityBot', 'Perplexity-User', 'anthropic-ai', 'ClaudeBot'];
    aiBots.forEach(bot => {
      robots += `\nUser-agent: ${bot}\n`;
      if (allowCrawling) {
        robots += 'Allow: /\n';
        robots += 'Disallow: /api/\n';
        robots += 'Disallow: /admin/\n';
      } else {
        robots += 'Disallow: /\n';
      }
    });
  }
  
  robots += `\nSitemap: ${baseUrl}/sitemap.xml`;
  return robots;
};

const generateLLMFactsJSON = () => {
  const currentDate = new Date().toISOString();
  
  const llmFacts = [
    {
      claim: "ReplAInow provides 3-second response times for customer inquiries",
      proof_url: `${baseUrl}/ai-shopify-helpdesk`,
      last_updated: currentDate,
      category: 'performance',
      confidence: 'high'
    },
    {
      claim: "ReplAInow supports 32+ languages natively for multilingual customer support",
      proof_url: `${baseUrl}/multilingual-support`,
      last_updated: currentDate,
      category: 'features',
      confidence: 'high'
    },
    {
      claim: "ReplAInow uses GPT-4.1 technology for AI-powered customer support",
      proof_url: `${baseUrl}/ai-shopify-helpdesk`,
      last_updated: currentDate,
      category: 'features',
      confidence: 'high'
    },
    {
      claim: "ReplAInow Starter Plan costs €19/month for unlimited AI responses",
      proof_url: `${baseUrl}/pricing`,
      last_updated: currentDate,
      category: 'pricing',
      confidence: 'high'
    },
    {
      claim: "ReplAInow offers 75% cost savings compared to competitors like Gorgias and Intercom",
      proof_url: `${baseUrl}/vergleich/gorgias-intercom-vs-replainow`,
      last_updated: currentDate,
      category: 'pricing',
      confidence: 'high'
    },
    {
      claim: "ReplAInow is GDPR compliant for European Shopify merchants",
      proof_url: `${baseUrl}/dsgvo-shopify-ai`,
      last_updated: currentDate,
      category: 'compliance',
      confidence: 'high'
    },
    {
      claim: "ReplAInow integrates with Shopify via 1-click installation from the App Store",
      proof_url: "https://apps.shopify.com/replainow-ai-support",
      last_updated: currentDate,
      category: 'integration',
      confidence: 'high'
    },
    {
      claim: "ReplAInow was founded in 2024 by Ruben Calabrese, an E-Commerce entrepreneur",
      proof_url: `${baseUrl}/impressum`,
      last_updated: currentDate,
      category: 'features',
      confidence: 'high'
    },
    {
      claim: "ReplAInow provides 24/7 availability for customer support automation",
      proof_url: `${baseUrl}/ai-shopify-helpdesk`,
      last_updated: currentDate,
      category: 'features',
      confidence: 'high'
    },
    {
      claim: "ReplAInow provides a 14-day free trial for all plans",
      proof_url: `${baseUrl}/pricing`,
      last_updated: currentDate,
      category: 'pricing',
      confidence: 'high'
    }
  ];
  
  return JSON.stringify(llmFacts, null, 2);
};

const distDir = path.join(__dirname, '..', 'dist');
const publicDir = path.join(__dirname, '..', 'public');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure .well-known directory exists
const wellKnownDir = path.join(distDir, '.well-known');
const publicWellKnownDir = path.join(publicDir, '.well-known');
if (!fs.existsSync(wellKnownDir)) {
  fs.mkdirSync(wellKnownDir, { recursive: true });
}
if (!fs.existsSync(publicWellKnownDir)) {
  fs.mkdirSync(publicWellKnownDir, { recursive: true });
}

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('🔍 Building SEO utilities...');

try {
  // Generate sitemap.xml
  console.log('📄 Generating sitemap.xml...');
  const sitemapXML = generateSitemapXML();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXML);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML);
  console.log('✅ sitemap.xml generated');

  // Generate sitemap index (simplified)
  console.log('📄 Generating sitemap-index.xml...');
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;
  fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndex);
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
  console.log('✅ sitemap-index.xml generated');

  // Generate robots.txt
  console.log('🤖 Generating robots.txt...');
  const environment = process.env.SEO_ENV || (process.env.NODE_ENV === 'production' ? 'production' : 'development');
  const robotsTxt = getRobotsTxt(environment);
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated');

  // Generate LLM Facts JSON
  console.log('🤖 Generating LLM Facts JSON...');
  const llmFactsJSON = generateLLMFactsJSON();
  fs.writeFileSync(path.join(distDir, '.well-known', 'llm-facts.json'), llmFactsJSON);
  fs.writeFileSync(path.join(publicDir, '.well-known', 'llm-facts.json'), llmFactsJSON);
  console.log('✅ LLM Facts JSON generated');

  // Generate SEO report
  console.log('📊 Generating SEO report...');
  const seoReport = {
    timestamp: new Date().toISOString(),
    sitemap: {
      main: 'sitemap.xml',
      index: 'sitemap-index.xml'
    },
    robots: 'robots.txt',
    llmFacts: '.well-known/llm-facts.json',
    environment: environment,
    filesGenerated: [
      'sitemap.xml',
      'sitemap-index.xml',
      'robots.txt',
      '.well-known/llm-facts.json'
    ]
  };
  
  fs.writeFileSync(
    path.join(distDir, 'seo-report.json'), 
    JSON.stringify(seoReport, null, 2)
  );
  
  console.log('✅ SEO report generated');
  console.log('🎉 SEO build completed successfully!');
  
  // Print summary
  console.log('\n📋 Generated Files:');
  seoReport.filesGenerated.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    console.log(`  - ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  });

} catch (error) {
  console.error('❌ SEO build failed:', error);
  process.exit(1);
}
