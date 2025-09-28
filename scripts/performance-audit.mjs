#!/usr/bin/env node

/**
 * Performance Audit Script
 * Analyzes bundle size, asset optimization, and performance metrics
 */

import fs from 'fs';
import path from 'path';

console.log('⚡ Performance Audit Script');
console.log('===========================\n');

// Analyze bundle sizes
const analyzeBundleSizes = () => {
  console.log('📦 Bundle Size Analysis:');
  console.log('------------------------');
  
  const distDir = 'dist/assets';
  if (!fs.existsSync(distDir)) {
    console.log('❌ dist/assets directory not found. Run build first.');
    return;
  }
  
  const files = fs.readdirSync(distDir);
  let totalSize = 0;
  const fileStats = [];
  
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    totalSize += stats.size;
    
    fileStats.push({
      name: file,
      size: stats.size,
      sizeKB: sizeKB
    });
  });
  
  // Sort by size
  fileStats.sort((a, b) => b.size - a.size);
  
  fileStats.forEach(file => {
    const size = file.sizeKB > 1000 
      ? `${(file.sizeKB / 1024).toFixed(1)} MB`
      : `${file.sizeKB} KB`;
    
    const status = file.sizeKB > 500 ? '⚠️' : '✅';
    console.log(`${status} ${file.name}: ${size}`);
  });
  
  console.log(`\n📊 Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  // Check for large bundles
  const largeFiles = fileStats.filter(f => f.sizeKB > 500);
  if (largeFiles.length > 0) {
    console.log('\n⚠️ Large bundles detected:');
    largeFiles.forEach(file => {
      console.log(`  • ${file.name}: ${file.sizeKB} KB`);
    });
    console.log('\n💡 Consider code-splitting for better performance');
  } else {
    console.log('\n✅ All bundles are reasonably sized');
  }
};

// Check for code-splitting
const checkCodeSplitting = () => {
  console.log('\n🔀 Code-Splitting Analysis:');
  console.log('----------------------------');
  
  const distDir = 'dist/assets';
  if (!fs.existsSync(distDir)) {
    console.log('❌ dist/assets directory not found.');
    return;
  }
  
  const files = fs.readdirSync(distDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  console.log(`✅ JavaScript chunks: ${jsFiles.length}`);
  console.log(`✅ CSS chunks: ${cssFiles.length}`);
  
  // Check for vendor chunks
  const vendorChunks = jsFiles.filter(f => 
    f.includes('vendor') || 
    f.includes('react') || 
    f.includes('ui-')
  );
  
  if (vendorChunks.length > 0) {
    console.log(`✅ Vendor chunks detected: ${vendorChunks.length}`);
    vendorChunks.forEach(chunk => {
      console.log(`  • ${chunk}`);
    });
  } else {
    console.log('⚠️ No vendor chunks detected - consider manual chunking');
  }
};

// Check asset optimization
const checkAssetOptimization = () => {
  console.log('\n🖼️ Asset Optimization:');
  console.log('----------------------');
  
  const distDir = 'dist';
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  
  let totalImageSize = 0;
  let imageCount = 0;
  
  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        walkDir(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          totalImageSize += stats.size;
          imageCount++;
          
          const sizeKB = Math.round(stats.size / 1024);
          const status = sizeKB > 100 ? '⚠️' : '✅';
          console.log(`${status} ${filePath.replace('dist/', '')}: ${sizeKB} KB`);
        }
      }
    });
  };
  
  walkDir(distDir);
  
  console.log(`\n📊 Total images: ${imageCount}`);
  console.log(`📊 Total image size: ${(totalImageSize / 1024 / 1024).toFixed(2)} MB`);
  
  if (totalImageSize / imageCount > 100 * 1024) { // 100KB average
    console.log('⚠️ Large images detected - consider optimization');
  } else {
    console.log('✅ Images are reasonably sized');
  }
};

// Check performance hints
const checkPerformanceHints = () => {
  console.log('\n🚀 Performance Hints:');
  console.log('---------------------');
  
  const indexPath = 'dist/index.html';
  if (!fs.existsSync(indexPath)) {
    console.log('❌ index.html not found');
    return;
  }
  
  const content = fs.readFileSync(indexPath, 'utf8');
  
  const checks = [
    { name: 'Preconnect hints', pattern: 'rel="preconnect"' },
    { name: 'DNS prefetch', pattern: 'rel="dns-prefetch"' },
    { name: 'Font preload', pattern: 'rel="preload".*font' },
    { name: 'Critical CSS preload', pattern: 'rel="preload".*critical' },
    { name: 'Resource preload', pattern: 'rel="preload".*as=' }
  ];
  
  checks.forEach(check => {
    const found = content.includes(check.pattern) || 
                 (check.pattern.includes('preload') && content.includes('rel="preload"'));
    console.log(`${found ? '✅' : '❌'} ${check.name}`);
  });
};

// Main execution
const runAudit = () => {
  try {
    analyzeBundleSizes();
    checkCodeSplitting();
    checkAssetOptimization();
    checkPerformanceHints();
    
    console.log('\n🎯 Performance Audit Summary:');
    console.log('==============================');
    console.log('✅ Bundle analysis completed');
    console.log('✅ Code-splitting analysis completed');
    console.log('✅ Asset optimization analysis completed');
    console.log('✅ Performance hints analysis completed');
    
    console.log('\n💡 Recommendations:');
    console.log('• Monitor Core Web Vitals in production');
    console.log('• Use Lighthouse for detailed performance analysis');
    console.log('• Consider implementing service worker for caching');
    console.log('• Optimize images with modern formats (WebP, AVIF)');
    
  } catch (error) {
    console.error('❌ Performance audit failed:', error.message);
    process.exit(1);
  }
};

runAudit();
