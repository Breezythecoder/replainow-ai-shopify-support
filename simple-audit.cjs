const playwright = require('playwright');
const fs = require('fs');

async function simpleAudit() {
  console.log('🚀 STARTING SIMPLE REPLAINOW.COM AUDIT...');
  
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the website
    console.log('📱 Navigating to replainow.com...');
    await page.goto('https://replainow.com', { waitUntil: 'domcontentloaded' });
    
    // Wait for page to load completely
    await page.waitForTimeout(3000);
    
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
    
    // 2. UMLAUT CHECK
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
        { pattern: /Kmpfer/g, correct: 'Kämpfer' },
        { pattern: /Sprche/g, correct: 'Sprachen' },
        { pattern: /berfllte/g, correct: 'überfüllte' },
        { pattern: /berarbeitete/g, correct: 'überarbeitete' },
        { pattern: /berforderte/g, correct: 'überforderte' },
        { pattern: /Lsungen/g, correct: 'Lösungen' },
        { pattern: /berfllten/g, correct: 'überfüllten' }
      ];
      
      patterns.forEach(({ pattern, correct }) => {
        const matches = textContent.match(pattern);
        if (matches) {
          issues.push({
            found: matches[0],
            correct: correct,
            context: textContent.substring(
              Math.max(0, textContent.indexOf(matches[0]) - 100),
              textContent.indexOf(matches[0]) + matches[0].length + 100
            )
          });
        }
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/02-umlaut-issues.json`, JSON.stringify(umlautIssues, null, 2));
    
    // 3. CONTRAST ANALYSIS
    console.log('🎨 Running Contrast Analysis...');
    const contrastIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, button');
      
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;
        const text = el.textContent?.trim();
        
        if (text && text.length > 3 && bgColor && textColor && 
            bgColor !== 'rgba(0, 0, 0, 0)' && textColor !== 'rgba(0, 0, 0, 0)') {
          
          const bgRgb = bgColor.match(/\d+/g);
          const textRgb = textColor.match(/\d+/g);
          
          if (bgRgb && textRgb && bgRgb.length >= 3 && textRgb.length >= 3) {
            const bgLuminance = (0.299 * parseInt(bgRgb[0]) + 0.587 * parseInt(bgRgb[1]) + 0.114 * parseInt(bgRgb[2])) / 255;
            const textLuminance = (0.299 * parseInt(textRgb[0]) + 0.587 * parseInt(textRgb[1]) + 0.114 * parseInt(textRgb[2])) / 255;
            const contrast = Math.max(bgLuminance, textLuminance) / Math.min(bgLuminance, textLuminance);
            
            if (contrast < 4.5 && contrast > 0) {
              issues.push({
                element: el.tagName,
                className: el.className,
                text: text.substring(0, 100),
                contrast: contrast.toFixed(2),
                bgColor,
                textColor,
                needsFix: contrast < 3 ? 'CRITICAL' : 'WARNING'
              });
            }
          }
        }
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/03-contrast-issues.json`, JSON.stringify(contrastIssues, null, 2));
    
    // 4. COLOR ANALYSIS
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
    
    fs.writeFileSync(`${auditDir}/04-color-analysis.json`, JSON.stringify(colorAnalysis, null, 2));
    
    // 5. ACCESSIBILITY CHECK
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
      
      // Check for missing aria-labels on buttons
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        if (!btn.getAttribute('aria-label') && !btn.textContent.trim()) {
          issues.push({
            type: 'missing-aria-label',
            element: 'button',
            className: btn.className
          });
        }
      });
      
      return issues;
    });
    
    fs.writeFileSync(`${auditDir}/05-accessibility-issues.json`, JSON.stringify(accessibilityIssues, null, 2));
    
    // 6. GENERATE SUMMARY REPORT
    console.log('📊 Generating Summary Report...');
    const summary = {
      timestamp: new Date().toISOString(),
      url: 'https://replainow.com',
      issues: {
        contrast: contrastIssues.length,
        umlauts: umlautIssues.length,
        accessibility: accessibilityIssues.length
      },
      criticalIssues: contrastIssues.filter(issue => issue.needsFix === 'CRITICAL').length,
      warningIssues: contrastIssues.filter(issue => issue.needsFix === 'WARNING').length,
      recommendations: []
    };
    
    // Add recommendations based on findings
    if (contrastIssues.length > 0) {
      summary.recommendations.push(`🔴 CRITICAL: Fix ${summary.criticalIssues} contrast issues (ratio < 3.0)`);
      summary.recommendations.push(`🟡 WARNING: Fix ${summary.warningIssues} contrast issues (ratio < 4.5)`);
    }
    if (umlautIssues.length > 0) {
      summary.recommendations.push(`🔤 Fix ${umlautIssues.length} German umlaut encoding issues`);
    }
    if (accessibilityIssues.length > 0) {
      summary.recommendations.push(`♿ Fix ${accessibilityIssues.length} accessibility issues`);
    }
    
    fs.writeFileSync(`${auditDir}/00-AUDIT-SUMMARY.json`, JSON.stringify(summary, null, 2));
    
    console.log('✅ SIMPLE AUDIT FINISHED!');
    console.log(`📁 Results saved in: ${auditDir}/`);
    console.log(`📊 Found ${contrastIssues.length} contrast issues (${summary.criticalIssues} critical, ${summary.warningIssues} warnings)`);
    console.log(`🔤 Found ${umlautIssues.length} umlaut issues`);
    console.log(`♿ Found ${accessibilityIssues.length} accessibility issues`);
    
    // Print detailed findings
    if (umlautIssues.length > 0) {
      console.log('\n🔤 UMLAUT ISSUES FOUND:');
      umlautIssues.forEach((issue, i) => {
        console.log(`${i+1}. "${issue.found}" should be "${issue.correct}"`);
        console.log(`   Context: "${issue.context.substring(0, 80)}..."`);
      });
    }
    
    if (contrastIssues.length > 0) {
      console.log('\n🎨 CONTRAST ISSUES FOUND:');
      contrastIssues.slice(0, 10).forEach((issue, i) => {
        console.log(`${i+1}. ${issue.needsFix}: ${issue.element} (contrast: ${issue.contrast})`);
        console.log(`   Text: "${issue.text.substring(0, 60)}..."`);
        console.log(`   Colors: ${issue.bgColor} / ${issue.textColor}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Audit failed:', error);
  } finally {
    await browser.close();
  }
}

simpleAudit().catch(console.error);
