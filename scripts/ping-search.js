#!/usr/bin/env node

// IndexNow + Google-Sitemap-Ping (Deploy-Hook)
import fetch from "node-fetch";

const SITE = process.env.SITE_ORIGIN || "https://replainow.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY; // optional
const URLS = (process.env.CHANGED_URLS || "").split(",").filter(Boolean);
const SITEMAP = `${SITE}/sitemap.xml`;

async function googlePing() {
  try {
    const response = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`);
    if (response.ok) {
      console.log("✓ Google sitemap ping successful");
    } else {
      console.log("⚠ Google sitemap ping failed:", response.status);
    }
  } catch (error) {
    console.log("⚠ Google sitemap ping error:", error.message);
  }
}

async function indexNow() {
  if (!INDEXNOW_KEY || URLS.length === 0) {
    console.log("IndexNow skipped - no key or URLs");
    return;
  }
  
  try {
    const body = {
      host: SITE.replace(/^https?:\/\//,""),
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: URLS
    };
    
    const response = await fetch("https://api.indexnow.org/indexnow", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(body)
    });
    
    console.log("IndexNow response:", response.status, await response.text());
  } catch (error) {
    console.log("IndexNow error:", error.message);
  }
}

async function main() {
  console.log("🔔 Pinging search engines...");
  console.log("Site:", SITE);
  console.log("Sitemap:", SITEMAP);
  console.log("URLs to ping:", URLS.length);
  
  await googlePing();
  await indexNow();
  
  console.log("✅ Search engine ping completed");
}

main().catch(console.error);
