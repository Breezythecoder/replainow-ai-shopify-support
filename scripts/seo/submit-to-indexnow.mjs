#!/usr/bin/env node

/**
 * IndexNow API Submission Script
 * Fast-track indexing in Bing, Yandex, and other search engines
 * https://www.indexnow.org/
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const host = 'replainow.com';
const baseUrl = `https://${host}`;

// Generate or load IndexNow key
const getIndexNowKey = () => {
  const keyFile = 'indexnow-key.txt';
  
  if (fs.existsSync(keyFile)) {
    return fs.readFileSync(keyFile, 'utf8').trim();
  }
  
  // Generate new key (32 character hex)
  const key = crypto.randomBytes(16).toString('hex');
  fs.writeFileSync(keyFile, key);
  console.log('✅ Generated new IndexNow key:', key);
  
  return key;
};

// Submit URL to IndexNow
const submitToIndexNow = async (urls) => {
  const key = getIndexNowKey();
  
  const payload = {
    host: host,
    key: key,
    keyLocation: `${baseUrl}/${key}.txt`,
    urlList: urls
  };
  
  console.log('📤 Submitting to IndexNow API...');
  console.log(`   URLs: ${urls.length}`);
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.status === 200) {
      console.log('✅ Successfully submitted to IndexNow!');
      console.log('   Bing, Yandex, and others will be notified.');
    } else {
      console.log(`⚠️  IndexNow returned status: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error.message);
  }
};

// URLs to submit (all important pages)
const urlsToSubmit = [
  `${baseUrl}/`,
  `${baseUrl}/en`,
  `${baseUrl}/es`,
  `${baseUrl}/fr`,
  `${baseUrl}/ai-shopify-helpdesk`,
  `${baseUrl}/multilingual-support`,
  `${baseUrl}/shopify-customer-service`,
  `${baseUrl}/gorgias-alternative`,
  `${baseUrl}/intercom-alternative`,
  `${baseUrl}/shopify-ai-support`,
  `${baseUrl}/privacy`,
  `${baseUrl}/terms`,
  `${baseUrl}/cookies`,
  `${baseUrl}/impressum`,
  `${baseUrl}/security`,
  `${baseUrl}/refund`,
  `${baseUrl}/uninstall`
];

// Export functions
export { getIndexNowKey, submitToIndexNow };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  submitToIndexNow(urlsToSubmit);
}

