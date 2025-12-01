#!/usr/bin/env node

/**
 * Advanced Robots.txt Generator
 * Creates optimized robots.txt with multiple sitemap references
 */

import fs from "fs";
import path from "path";

const baseUrl = "https://replainow.com";

// Generate robots.txt content
const generateRobotsTxt = () => {
  return `# Robots.txt for ReplAInow
# Generated automatically - do not edit manually
# Last updated: ${new Date().toISOString().split("T")[0]}

# ============================================
# GOOGLE & TRADITIONAL SEARCH ENGINES
# ============================================

# Allow all crawlers
User-agent: *
Allow: /

# Disallow sensitive directories
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /src/
Disallow: /scripts/
Disallow: /tests/
Disallow: /.git/
Disallow: /.github/

# Disallow development files
Disallow: /*.env*
Disallow: /*.config.*
Disallow: /*.lock
Disallow: /*.log

# Allow important assets
Allow: /assets/
Allow: /images/
Allow: /fonts/
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap*.xml
Allow: /.well-known/

# Crawl delay (be respectful to servers)
Crawl-delay: 1

# ============================================
# AI CRAWLERS - 2025 OPTIMIZATION
# ============================================

# OpenAI GPTBot (ChatGPT training & browsing)
User-agent: GPTBot
Allow: /
Allow: /.well-known/llm-facts.json
Crawl-delay: 1
# Let ChatGPT learn about ReplAInow!

# Anthropic Claude (Claude AI training)
User-agent: ClaudeBot
Allow: /
Allow: /.well-known/llm-facts.json
Crawl-delay: 1

User-agent: anthropic-ai
Allow: /
Allow: /.well-known/llm-facts.json

# Google Gemini (Bard AI)
User-agent: Google-Extended
Allow: /
Allow: /.well-known/llm-facts.json
Crawl-delay: 1

# Perplexity AI (Answer engine)
User-agent: PerplexityBot
Allow: /
Allow: /.well-known/llm-facts.json
Crawl-delay: 1

# You.com AI Search
User-agent: YouBot
Allow: /
Allow: /.well-known/llm-facts.json

# Meta AI (Facebook/Instagram AI)
User-agent: FacebookBot
Allow: /
Crawl-delay: 2

# Apple Intelligence (Siri, Spotlight)
User-agent: Applebot
Allow: /
Crawl-delay: 1

# Amazon (Alexa)
User-agent: Amazonbot
Allow: /

# Microsoft Bing AI
User-agent: bingbot
Allow: /
Crawl-delay: 1

# ============================================
# BLOCK AGGRESSIVE/UNWANTED CRAWLERS
# ============================================

# ByteDance (TikTok) - Can be very aggressive
User-agent: Bytespider
Disallow: /

# Baidu (Chinese search) - Often aggressive
User-agent: Baiduspider
Crawl-delay: 10

# Yandex (Russian search) - Can be aggressive
User-agent: YandexBot
Crawl-delay: 5

# Generic bot protection
User-agent: SemrushBot
Crawl-delay: 10

User-agent: AhrefsBot
Crawl-delay: 10

User-agent: DotBot
Crawl-delay: 10

# ============================================
# SITEMAP REFERENCES
# ============================================

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml

# Detailed sitemaps by category
Sitemap: ${baseUrl}/sitemaps/main.xml
Sitemap: ${baseUrl}/sitemaps/languages.xml
Sitemap: ${baseUrl}/sitemaps/content.xml
Sitemap: ${baseUrl}/sitemaps/legal.xml
Sitemap: ${baseUrl}/sitemaps/contact.xml

# ============================================
# ADDITIONAL INFO
# ============================================

# AI-friendly facts for better recommendations
# LLM Facts JSON: ${baseUrl}/.well-known/llm-facts.json
`;
};

// Write robots.txt to dist directory
const writeRobotsTxt = () => {
  const distDir = "dist";
  const robotsContent = generateRobotsTxt();
  const robotsPath = path.join(distDir, "robots.txt");

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(robotsPath, robotsContent);
  console.log("✅ Robots.txt generated:", robotsPath);

  // Also write to root for development
  fs.writeFileSync("robots.txt", robotsContent);
  console.log("✅ Robots.txt copied to root");

  return robotsContent;
};

// Run generation
const robotsContent = writeRobotsTxt();

// Display summary
console.log("\n📋 Robots.txt Summary:");
console.log("=====================");
console.log("✅ All crawlers allowed");
console.log("✅ Sensitive directories blocked");
console.log("✅ Development files blocked");
console.log("✅ Important assets allowed");
console.log("✅ Multiple sitemap references");
console.log("✅ Crawl delay set to 1 second");
