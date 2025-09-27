const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

async function completeAudit() {
  console.log('🚀 STARTING COMPLETE REPLAINOW.COM AUDIT...');
  
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the website
    console.log('📱 Navigating to replainow.com...');
    await page.goto('https://replainow.com', { waitUntil: 'networkidle' });
    
    // Wait for page to load completely
    await page.waitForTimeout(5000);
    
    // Create audit directory
    const auditDir = `audit-${new Date().toISOString().split('T')[0]}`;
    if (!fs.existsSync(auditDir)) {
      fs.mkdirSync(auditDir);
    }
    
    // 1. FULL PAGE SCREENSHOT
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({ 
      path: `${auditDir}/01-full-page.png`, 
      fullPage: true 
    });
    
    // 2. HERO SECTION
    console.log('🎯 Auditing Hero Section...');
    const heroSection = await page.locator('section').first();
    await heroSection.screenshot({ path: `${auditDir}/02-hero-section.png` });
    
    // 3. NAVIGATION
    console.log('🧭 Auditing Navigation...');
    const nav = await page.locator('header');
    await nav.screenshot({ path: `${auditDir}/03-navigation.png` });
    
    // 4. PROBLEM/SOLUTION SECTION
    console.log('⚡ Auditing Problem/Solution Section...');
    const problemSection = await page.locator('section').nth(1);
    await problemSection.screenshot({ path: `${auditDir}/04-problem-solution.png` });
    
    // 5. FEATURES SECTION
    console.log('🚀 Auditing Features Section...');
    const featuresSection = await page.locator('#features');
    await featuresSection.screenshot({ path: `${auditDir}/05-features.png` });
    
    // 6. LIVE DEMO SECTION
    console.log('💬 Auditing Live Demo Section...');
    const demoSection = await page.locator('#live-demo');
    await demoSection.screenshot({ path: `${auditDir}/06-live-demo.png` });
    
    // 7. COMPARISON SECTION
    console.log('⚔️ Auditing Comparison Section...');
    const comparisonSection = await page.locator('section').nth(3);
    await comparisonSection.screenshot({ path: `${auditDir}/07-comparison.png` });
    
    // 8. FAQ SECTION
    console.log('❓ Auditing FAQ Section...');
    const faqSection = await page.locator('section').nth(4);
    await faqSection.screenshot({ path: `${auditDir}/08-faq.png` });
    
    // 9. FOOTER
    console.log('📞 Auditing Footer...');
    const footer = await page.locator('footer');
    await footer.screenshot({ path: `${auditDir}/09-footer.png` });
    
    // 10. CONTRAST ANALYSIS
    console.log('🎨 Running Contrast Analysis...');
    const contrastIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('*');
      
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;
        
        // Simple contrast check
        if (bgColor && textColor && bgColor !== 'rgba(0, 0, 0, 0)' && textColor !== 'rgba(0, 0, 0, 0)') {
          const bgRgb = bgColor.match(/\d+/g);
          const textRgb = textColor.match(/\d+/g);
          
          if (bgRgb && textRgb) {
            const bgLuminance = (0.299 * bgRgb[0] + 0.587 * bgRgb[1] + 0.114 * bgRgb[2]) / 255;
            const textLuminance = (0.299 * textRgb[0] + 0.587 * textRgb[1] + 0.114 * textRgb[2]) / 255;
            const contrast = Math.max(bgLuminance, textLuminance) / Math.min(bgLuminance, textLuminance);
            
            if (contrast < 4.5) {
              issues.push({
                element: el.tagName,
                className: el.className,
                text: el.textContent?.substring(0, 50),
                contrast: contrast.toFixed(2),
                bgColor,
                textColor
              });
            }
          }
        }
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/10-contrast-issues.json`, JSON.stringify(contrastIssues, null, 2));
    
    // 11. UMLAUT CHECK
    console.log('🔤 Checking for Umlaut Issues...');
    const umlautIssues = await page.evaluate(() => {
      const issues = [];
      const textContent = document.body.textContent;
      
      // Check for common umlaut problems
      const patterns = [
        { pattern: /berforder/g, correct: 'überforder' },
        { pattern: /Lsung/g, correct: 'Lösung' },
        { pattern: /berfllt/g, correct: 'überfüllt' },
        { pattern: /berarbeitet/g, correct: 'überarbeitet' },
        { pattern: /hher/g, correct: 'höher' },
        { pattern: /zerstr/g, correct: 'zerstör' },
        { pattern: /Revolutionre/g, correct: 'Revolutionäre' },
        { pattern: /perfekte/g, correct: 'perfekte' },
        { pattern: /Kmpfer/g, correct: 'Kämpfer' },
        { pattern: /Sprche/g, correct: 'Sprachen' }
      ];
      
      patterns.forEach(({ pattern, correct }) => {
        const matches = textContent.match(pattern);
        if (matches) {
          issues.push({
            found: matches[0],
            correct: correct,
            context: textContent.substring(
              Math.max(0, textContent.indexOf(matches[0]) - 50),
              textContent.indexOf(matches[0]) + matches[0].length + 50
            )
          });
        }
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/11-umlaut-issues.json`, JSON.stringify(umlautIssues, null, 2));
    
    // 12. COLOR ANALYSIS
    console.log('🌈 Running Color Analysis...');
    const colorAnalysis = await page.evaluate(() => {
      const colors = new Set();
      const elements = document.querySelectorAll('*');
      
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;
        const borderColor = styles.borderColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') colors.add(`bg: ${bgColor}`);
        if (textColor && textColor !== 'rgba(0, 0, 0, 0)') colors.add(`text: ${textColor}`);
        if (borderColor && borderColor !== 'rgba(0, 0, 0, 0)') colors.add(`border: ${borderColor}`);
      });
      
      return Array.from(colors);
    });
    
    fs.writeFileSync(`${auditDir}/12-color-analysis.json`, JSON.stringify(colorAnalysis, null, 2));
    
    // 13. ACCESSIBILITY CHECK
    console.log('♿ Running Accessibility Check...');
    const accessibilityIssues = await page.evaluate(() => {
      const issues = [];
      
      // Check for missing alt texts
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          issues.push({
            type: 'missing-alt',
            element: 'img',
            src: img.src,
            className: img.className
          });
        }
      });
      
      // Check for missing aria-labels
      const interactiveElements = document.querySelectorAll('button, a, input');
      interactiveElements.forEach(el => {
        if (!el.getAttribute('aria-label') && !el.textContent.trim()) {
          issues.push({
            type: 'missing-aria-label',
            element: el.tagName,
            className: el.className
          });
        }
      });
      
      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach(heading => {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        if (currentLevel > lastLevel + 1) {
          issues.push({
            type: 'heading-hierarchy',
            element: heading.tagName,
            text: heading.textContent.substring(0, 50),
            expected: `h${lastLevel + 1}`,
            actual: heading.tagName
          });
        }
        lastLevel = currentLevel;
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/13-accessibility-issues.json`, JSON.stringify(accessibilityIssues, null, 2));
    
    // 14. PERFORMANCE METRICS
    console.log('⚡ Collecting Performance Metrics...');
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
        totalResources: performance.getEntriesByType('resource').length
      };
    });
    
    fs.writeFileSync(`${auditDir}/14-performance-metrics.json`, JSON.stringify(performanceMetrics, null, 2));
    
    // 15. GENERATE SUMMARY REPORT
    console.log('📊 Generating Summary Report...');
    const summary = {
      timestamp: new Date().toISOString(),
      url: 'https://replainow.com',
      issues: {
        contrast: contrastIssues.length,
        umlauts: umlautIssues.length,
        accessibility: accessibilityIssues.length,
        performance: performanceMetrics.loadTime > 3000 ? 1 : 0
      },
      screenshots: [
        '01-full-page.png',
        '02-hero-section.png', 
        '03-navigation.png',
        '04-problem-solution.png',
        '05-features.png',
        '06-live-demo.png',
        '07-comparison.png',
        '08-faq.png',
        '09-footer.png'
      ],
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (contrastIssues.length > 0) {
      summary.recommendations.push(`Fix ${contrastIssues.length} contrast issues for better readability`);
    }
    if (umlautIssues.length > 0) {
      summary.recommendations.push(`Fix ${umlautIssues.length} German umlaut encoding issues`);
    }
    if (accessibilityIssues.length > 0) {
      summary.recommendations.push(`Fix ${accessibilityIssues.length} accessibility issues`);
    }
    if (performanceMetrics.loadTime > 3000) {
      summary.recommendations.push('Optimize page load time (currently > 3s)');
    }
    
    fs.writeFileSync(`${auditDir}/00-AUDIT-SUMMARY.json`, JSON.stringify(summary, null, 2));
    
    console.log('✅ COMPLETE AUDIT FINISHED!');
    console.log(`📁 Results saved in: ${auditDir}/`);
    console.log(`📊 Found ${contrastIssues.length} contrast issues`);
    console.log(`🔤 Found ${umlautIssues.length} umlaut issues`);
    console.log(`♿ Found ${accessibilityIssues.length} accessibility issues`);
    
  } catch (error) {
    console.error('❌ Audit failed:', error);
  } finally {
    await browser.close();
  }
}

completeAudit().catch(console.error);
