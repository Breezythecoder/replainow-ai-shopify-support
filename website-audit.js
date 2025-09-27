import { chromium } from 'playwright';
import fs from 'fs';

const auditWebsite = async () => {
  console.log('🔍 Starting comprehensive website audit...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set viewport for consistent screenshots
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to the website
  await page.goto('http://localhost:8082/');
  await page.waitForLoadState('networkidle');
  
  console.log('📸 Taking full page screenshot...');
  await page.screenshot({ 
    path: 'website-full-audit.png', 
    fullPage: true 
  });
  
  // Take section screenshots
  const sections = [
    { name: 'hero', selector: 'section:first-of-type' },
    { name: 'features', selector: '[id*="feature"], [class*="feature"]' },
    { name: 'demo', selector: '[id*="demo"], [class*="demo"]' },
    { name: 'pricing', selector: '[id*="pricing"], [class*="pricing"]' },
    { name: 'contact', selector: '[id*="contact"], [class*="contact"]' }
  ];
  
  for (const section of sections) {
    try {
      const element = await page.$(section.selector);
      if (element) {
        await element.screenshot({ 
          path: `audit-${section.name}.png` 
        });
        console.log(`✅ Screenshot: ${section.name}`);
      }
    } catch (error) {
      console.log(`❌ Could not screenshot: ${section.name}`);
    }
  }
  
  // Analyze colors and contrast
  console.log('🎨 Analyzing colors and contrast...');
  const colorAnalysis = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const colors = new Set();
    const contrastIssues = [];
    
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      const bgColor = style.backgroundColor;
      const textColor = style.color;
      
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        colors.add(bgColor);
      }
      if (textColor && textColor !== 'rgba(0, 0, 0, 0)') {
        colors.add(textColor);
      }
      
      // Check for potential contrast issues
      if (bgColor && textColor && 
          (bgColor.includes('255, 255, 255') && textColor.includes('255, 255, 255')) ||
          (bgColor.includes('0, 0, 0') && textColor.includes('0, 0, 0'))) {
        contrastIssues.push({
          element: el.tagName,
          bgColor,
          textColor,
          text: el.textContent?.substring(0, 50)
        });
      }
    });
    
    return {
      uniqueColors: Array.from(colors),
      contrastIssues,
      totalElements: elements.length
    };
  });
  
  // Check for emojis and unprofessional content
  console.log('🔍 Checking for unprofessional content...');
  const contentAnalysis = await page.evaluate(() => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
    const allText = document.body.innerText;
    const emojis = allText.match(emojiRegex) || [];
    
    const boldElements = document.querySelectorAll('b, strong, [style*="font-weight: bold"], [style*="font-weight: 700"]');
    
    return {
      emojiCount: emojis.length,
      emojis: [...new Set(emojis)],
      boldElementCount: boldElements.length,
      totalTextLength: allText.length
    };
  });
  
  // Performance metrics
  console.log('⚡ Analyzing performance...');
  const performanceMetrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  });
  
  // Generate comprehensive report
  const report = {
    timestamp: new Date().toISOString(),
    url: 'http://localhost:8082/',
    colorAnalysis,
    contentAnalysis,
    performanceMetrics,
    recommendations: []
  };
  
  // Add recommendations based on analysis
  if (contentAnalysis.emojiCount > 10) {
    report.recommendations.push({
      priority: 'HIGH',
      category: 'Professionalism',
      issue: 'Too many emojis detected',
      count: contentAnalysis.emojiCount,
      suggestion: 'Remove emojis and use professional icons instead'
    });
  }
  
  if (contentAnalysis.boldElementCount > 20) {
    report.recommendations.push({
      priority: 'MEDIUM',
      category: 'Typography',
      issue: 'Too many bold elements',
      count: contentAnalysis.boldElementCount,
      suggestion: 'Reduce bold text usage for better hierarchy'
    });
  }
  
  if (colorAnalysis.contrastIssues.length > 0) {
    report.recommendations.push({
      priority: 'HIGH',
      category: 'Accessibility',
      issue: 'Contrast issues detected',
      count: colorAnalysis.contrastIssues.length,
      suggestion: 'Fix color contrast for better accessibility'
    });
  }
  
  if (performanceMetrics.loadTime > 3000) {
    report.recommendations.push({
      priority: 'MEDIUM',
      category: 'Performance',
      issue: 'Slow load time',
      time: performanceMetrics.loadTime,
      suggestion: 'Optimize images and reduce bundle size'
    });
  }
  
  // Save report
  fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
  
  console.log('📊 Audit completed!');
  console.log(`🎨 Unique colors found: ${colorAnalysis.uniqueColors.length}`);
  console.log(`😀 Emojis found: ${contentAnalysis.emojiCount}`);
  console.log(`💪 Bold elements: ${contentAnalysis.boldElementCount}`);
  console.log(`⚠️ Contrast issues: ${colorAnalysis.contrastIssues.length}`);
  console.log(`⚡ Load time: ${performanceMetrics.loadTime.toFixed(2)}ms`);
  
  await browser.close();
  
  return report;
};

auditWebsite().catch(console.error);
