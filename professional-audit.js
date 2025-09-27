#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class ProfessionalWebsiteAudit {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      timestamp: new Date().toISOString(),
      url: 'https://replainow.com',
      summary: {},
      performance: {},
      accessibility: {},
      technical: {},
      ux: {},
      mobile: {},
      desktop: {},
      recommendations: []
    };
  }

  async initialize() {
    console.log('🚀 INITIALIZING PROFESSIONAL AUDIT SYSTEM...');
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    this.page = await this.browser.newPage();
    
    // Set realistic viewport
    await this.page.setViewport({ width: 1920, height: 1080 });
    
    // Enable request interception for performance monitoring
    await this.page.setRequestInterception(true);
    
    let requestCount = 0;
    let totalSize = 0;
    
    this.page.on('request', request => {
      requestCount++;
      request.continue();
    });
    
    this.page.on('response', response => {
      const contentLength = response.headers()['content-length'];
      if (contentLength) {
        totalSize += parseInt(contentLength);
      }
    });
    
    console.log('✅ Audit system initialized');
  }

  async runPerformanceAudit() {
    console.log('⚡ RUNNING PERFORMANCE AUDIT...');
    
    await this.page.goto(this.results.url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Lighthouse metrics
    const performanceMetrics = await this.page.evaluate(() => {
      return new Promise((resolve) => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          
          resolve({
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
            totalPageSize: performance.memory?.usedJSHeapSize || 0
          });
        }
        resolve({});
      });
    });
    
    // Bundle analysis
    const bundleAnalysis = await this.page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      
      return {
        scriptCount: scripts.length,
        stylesheetCount: stylesheets.length,
        externalScripts: scripts.filter(s => !s.src.includes(window.location.hostname)).length,
        externalStylesheets: stylesheets.filter(s => !s.href.includes(window.location.hostname)).length
      };
    });
    
    // Core Web Vitals simulation
    const coreWebVitals = await this.page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {};
          
          entries.forEach(entry => {
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.LCP = entry.startTime;
            }
            if (entry.entryType === 'first-input') {
              vitals.FID = entry.processingStart - entry.startTime;
            }
            if (entry.entryType === 'layout-shift') {
              vitals.CLS = (vitals.CLS || 0) + entry.value;
            }
          });
          
          resolve(vitals);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        
        // Fallback after 5 seconds
        setTimeout(() => resolve({}), 5000);
      });
    });
    
    this.results.performance = {
      metrics: performanceMetrics,
      bundle: bundleAnalysis,
      coreWebVitals,
      score: this.calculatePerformanceScore(performanceMetrics, coreWebVitals)
    };
    
    console.log('✅ Performance audit completed');
  }

  async runAccessibilityAudit() {
    console.log('♿ RUNNING ACCESSIBILITY AUDIT...');
    
    // WCAG compliance check
    const accessibilityIssues = await this.page.evaluate(() => {
      const issues = [];
      
      // Check alt texts
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push({
            type: 'missing-alt-text',
            element: 'img',
            severity: 'high',
            message: `Image ${index + 1} missing alt text`,
            selector: this.getSelector(img)
          });
        }
      });
      
      // Check heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.substring(1));
        if (level > lastLevel + 1) {
          issues.push({
            type: 'heading-skip',
            element: heading.tagName.toLowerCase(),
            severity: 'medium',
            message: `Heading level skipped from ${lastLevel} to ${level}`,
            selector: this.getSelector(heading)
          });
        }
        lastLevel = level;
      });
      
      // Check color contrast (basic check)
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          // Basic contrast check would go here
        }
      });
      
      // Check focus indicators
      const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      focusableElements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.outline === 'none' && !style.boxShadow.includes('rgb')) {
          issues.push({
            type: 'missing-focus-indicator',
            element: el.tagName.toLowerCase(),
            severity: 'high',
            message: 'Focusable element missing visible focus indicator',
            selector: this.getSelector(el)
          });
        }
      });
      
      return issues;
    });
    
    // Screen reader compatibility
    const screenReaderTest = await this.page.evaluate(() => {
      const landmarks = document.querySelectorAll('main, nav, header, footer, aside');
      const hasMain = document.querySelector('main') !== null;
      const hasNavigation = document.querySelector('nav') !== null;
      
      return {
        landmarkCount: landmarks.length,
        hasMain: hasMain,
        hasNavigation: hasNavigation,
        ariaLabels: document.querySelectorAll('[aria-label]').length,
        ariaDescribedBy: document.querySelectorAll('[aria-describedby]').length
      };
    });
    
    this.results.accessibility = {
      issues: accessibilityIssues,
      screenReader: screenReaderTest,
      score: this.calculateAccessibilityScore(accessibilityIssues, screenReaderTest)
    };
    
    console.log('✅ Accessibility audit completed');
  }

  async runTechnicalAudit() {
    console.log('🔧 RUNNING TECHNICAL AUDIT...');
    
    // SEO analysis
    const seoAnalysis = await this.page.evaluate(() => {
      const title = document.querySelector('title')?.textContent || '';
      const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
      const metaKeywords = document.querySelector('meta[name="keywords"]')?.content || '';
      const h1Tags = document.querySelectorAll('h1');
      const h2Tags = document.querySelectorAll('h2');
      const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
      
      return {
        title: {
          text: title,
          length: title.length,
          optimal: title.length >= 30 && title.length <= 60
        },
        metaDescription: {
          text: metaDescription,
          length: metaDescription.length,
          optimal: metaDescription.length >= 120 && metaDescription.length <= 160
        },
        headings: {
          h1Count: h1Tags.length,
          h2Count: h2Tags.length,
          h1Optimal: h1Tags.length === 1
        },
        canonical: canonical.length > 0,
        structuredData: document.querySelectorAll('script[type="application/ld+json"]').length
      };
    });
    
    // Security headers
    const securityHeaders = await this.page.evaluate(() => {
      // This would normally be done server-side, but we can check for security-related elements
      return {
        hasCSP: document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null,
        hasHSTS: false, // Would need server response headers
        hasReferrerPolicy: document.querySelector('meta[name="referrer"]') !== null
      };
    });
    
    // Code quality indicators
    const codeQuality = await this.page.evaluate(() => {
      const inlineStyles = document.querySelectorAll('[style]').length;
      const inlineScripts = document.querySelectorAll('script:not([src])').length;
      const unusedCSS = 0; // Would need more sophisticated analysis
      
      return {
        inlineStyles,
        inlineScripts,
        unusedCSS,
        totalElements: document.querySelectorAll('*').length
      };
    });
    
    this.results.technical = {
      seo: seoAnalysis,
      security: securityHeaders,
      codeQuality,
      score: this.calculateTechnicalScore(seoAnalysis, securityHeaders, codeQuality)
    };
    
    console.log('✅ Technical audit completed');
  }

  async runUXAudit() {
    console.log('🎨 RUNNING UX/UI AUDIT...');
    
    // Design consistency
    const designConsistency = await this.page.evaluate(() => {
      const colors = new Set();
      const fonts = new Set();
      const buttons = document.querySelectorAll('button, .btn, [role="button"]');
      
      // Sample elements for color and font analysis
      const sampleElements = document.querySelectorAll('h1, h2, h3, p, button, a');
      sampleElements.forEach(el => {
        const style = window.getComputedStyle(el);
        colors.add(style.color);
        fonts.add(style.fontFamily);
      });
      
      return {
        uniqueColors: colors.size,
        uniqueFonts: fonts.size,
        buttonCount: buttons.length,
        consistentButtons: this.checkButtonConsistency(buttons)
      };
    });
    
    // User flow analysis
    const userFlow = await this.page.evaluate(() => {
      const ctaButtons = document.querySelectorAll('button, a[href*="shopify"], a[href*="install"]');
      const forms = document.querySelectorAll('form');
      const navigation = document.querySelectorAll('nav a, header a');
      
      return {
        ctaButtons: ctaButtons.length,
        forms: forms.length,
        navigationLinks: navigation.length,
        clearUserPath: ctaButtons.length > 0
      };
    });
    
    // Mobile responsiveness check
    const mobileCheck = await this.page.evaluate(() => {
      const viewport = document.querySelector('meta[name="viewport"]');
      const hasViewport = viewport !== null;
      
      return {
        hasViewport: hasViewport,
        viewportContent: viewport?.content || '',
        touchFriendly: this.checkTouchFriendlyElements()
      };
    });
    
    this.results.ux = {
      design: designConsistency,
      userFlow,
      mobile: mobileCheck,
      score: this.calculateUXScore(designConsistency, userFlow, mobileCheck)
    };
    
    console.log('✅ UX audit completed');
  }

  async runMobileAudit() {
    console.log('📱 RUNNING MOBILE AUDIT...');
    
    // Set mobile viewport
    await this.page.setViewport({ width: 375, height: 667 });
    await this.page.reload({ waitUntil: 'networkidle0' });
    
    // Mobile-specific checks
    const mobileIssues = await this.page.evaluate(() => {
      const issues = [];
      
      // Check touch targets
      const clickableElements = document.querySelectorAll('button, a, [onclick], [role="button"]');
      clickableElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          issues.push({
            type: 'small-touch-target',
            element: el.tagName.toLowerCase(),
            severity: 'high',
            message: `Touch target too small: ${rect.width}x${rect.height}px`,
            selector: this.getSelector(el)
          });
        }
      });
      
      // Check horizontal scroll
      const bodyWidth = document.body.scrollWidth;
      const viewportWidth = window.innerWidth;
      if (bodyWidth > viewportWidth) {
        issues.push({
          type: 'horizontal-scroll',
          severity: 'high',
          message: `Page causes horizontal scroll: ${bodyWidth}px > ${viewportWidth}px`
        });
      }
      
      // Check font sizes
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        if (fontSize < 16 && !el.closest('button, a')) {
          issues.push({
            type: 'small-font',
            element: el.tagName.toLowerCase(),
            severity: 'medium',
            message: `Font size too small: ${fontSize}px`,
            selector: this.getSelector(el)
          });
        }
      });
      
      return issues;
    });
    
    // Mobile performance
    const mobilePerformance = await this.page.evaluate(() => {
      return {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domReady: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      };
    });
    
    this.results.mobile = {
      issues: mobileIssues,
      performance: mobilePerformance,
      score: this.calculateMobileScore(mobileIssues, mobilePerformance)
    };
    
    console.log('✅ Mobile audit completed');
  }

  async runDesktopAudit() {
    console.log('🖥️ RUNNING DESKTOP AUDIT...');
    
    // Set desktop viewport
    await this.page.setViewport({ width: 1920, height: 1080 });
    await this.page.reload({ waitUntil: 'networkidle0' });
    
    // Desktop-specific checks
    const desktopIssues = await this.page.evaluate(() => {
      const issues = [];
      
      // Check keyboard navigation
      const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      let tabIndexIssues = 0;
      
      focusableElements.forEach(el => {
        const tabIndex = el.getAttribute('tabindex');
        if (tabIndex && parseInt(tabIndex) > 0) {
          tabIndexIssues++;
        }
      });
      
      if (tabIndexIssues > 0) {
        issues.push({
          type: 'tabindex-positive',
          severity: 'medium',
          message: `${tabIndexIssues} elements with positive tabindex`
        });
      }
      
      // Check hover states
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      let missingHoverStates = 0;
      
      interactiveElements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (!style.transition.includes('background') && !style.transition.includes('color')) {
          missingHoverStates++;
        }
      });
      
      if (missingHoverStates > 0) {
        issues.push({
          type: 'missing-hover-states',
          severity: 'low',
          message: `${missingHoverStates} elements missing hover states`
        });
      }
      
      return issues;
    });
    
    // Desktop performance
    const desktopPerformance = await this.page.evaluate(() => {
      return {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domReady: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
      };
    });
    
    this.results.desktop = {
      issues: desktopIssues,
      performance: desktopPerformance,
      score: this.calculateDesktopScore(desktopIssues, desktopPerformance)
    };
    
    console.log('✅ Desktop audit completed');
  }

  // Scoring functions
  calculatePerformanceScore(metrics, vitals) {
    let score = 100;
    
    if (metrics.domContentLoaded > 2000) score -= 20;
    if (metrics.loadComplete > 3000) score -= 20;
    if (vitals.LCP > 2500) score -= 20;
    if (vitals.FID > 100) score -= 20;
    if (vitals.CLS > 0.1) score -= 20;
    
    return Math.max(0, score);
  }

  calculateAccessibilityScore(issues, screenReader) {
    let score = 100;
    
    issues.forEach(issue => {
      if (issue.severity === 'high') score -= 15;
      if (issue.severity === 'medium') score -= 10;
      if (issue.severity === 'low') score -= 5;
    });
    
    if (!screenReader.hasMain) score -= 10;
    if (!screenReader.hasNavigation) score -= 5;
    
    return Math.max(0, score);
  }

  calculateTechnicalScore(seo, security, codeQuality) {
    let score = 100;
    
    if (!seo.title.optimal) score -= 10;
    if (!seo.metaDescription.optimal) score -= 10;
    if (!seo.headings.h1Optimal) score -= 15;
    if (!seo.canonical) score -= 10;
    
    if (codeQuality.inlineStyles > 10) score -= 10;
    if (codeQuality.inlineScripts > 5) score -= 10;
    
    return Math.max(0, score);
  }

  calculateUXScore(design, userFlow, mobile) {
    let score = 100;
    
    if (design.uniqueColors > 10) score -= 10;
    if (design.uniqueFonts > 3) score -= 10;
    if (!design.consistentButtons) score -= 15;
    if (!userFlow.clearUserPath) score -= 20;
    if (!mobile.hasViewport) score -= 15;
    
    return Math.max(0, score);
  }

  calculateMobileScore(issues, performance) {
    let score = 100;
    
    issues.forEach(issue => {
      if (issue.severity === 'high') score -= 20;
      if (issue.severity === 'medium') score -= 10;
      if (issue.severity === 'low') score -= 5;
    });
    
    if (performance.loadTime > 3000) score -= 15;
    
    return Math.max(0, score);
  }

  calculateDesktopScore(issues, performance) {
    let score = 100;
    
    issues.forEach(issue => {
      if (issue.severity === 'high') score -= 20;
      if (issue.severity === 'medium') score -= 10;
      if (issue.severity === 'low') score -= 5;
    });
    
    if (performance.loadTime > 2000) score -= 10;
    
    return Math.max(0, score);
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Performance recommendations
    if (this.results.performance.score < 80) {
      recommendations.push({
        category: 'Performance',
        priority: 'High',
        recommendation: 'Optimize Core Web Vitals - focus on LCP, FID, and CLS improvements',
        impact: 'Better user experience and SEO ranking'
      });
    }
    
    // Accessibility recommendations
    if (this.results.accessibility.score < 90) {
      recommendations.push({
        category: 'Accessibility',
        priority: 'High',
        recommendation: 'Fix accessibility issues - add alt texts, improve focus indicators',
        impact: 'WCAG compliance and better user accessibility'
      });
    }
    
    // Technical recommendations
    if (this.results.technical.score < 85) {
      recommendations.push({
        category: 'Technical',
        priority: 'Medium',
        recommendation: 'Improve SEO elements and code quality',
        impact: 'Better search engine ranking and maintainability'
      });
    }
    
    this.results.recommendations = recommendations;
  }

  generateSummary() {
    const scores = {
      performance: this.results.performance.score,
      accessibility: this.results.accessibility.score,
      technical: this.results.technical.score,
      ux: this.results.ux.score,
      mobile: this.results.mobile.score,
      desktop: this.results.desktop.score
    };
    
    const averageScore = Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length;
    
    this.results.summary = {
      overallScore: Math.round(averageScore),
      scores,
      totalIssues: this.countTotalIssues(),
      criticalIssues: this.countCriticalIssues(),
      grade: this.getGrade(averageScore)
    };
  }

  countTotalIssues() {
    let total = 0;
    total += this.results.accessibility.issues?.length || 0;
    total += this.results.mobile.issues?.length || 0;
    total += this.results.desktop.issues?.length || 0;
    return total;
  }

  countCriticalIssues() {
    let critical = 0;
    
    if (this.results.accessibility.issues) {
      critical += this.results.accessibility.issues.filter(i => i.severity === 'high').length;
    }
    if (this.results.mobile.issues) {
      critical += this.results.mobile.issues.filter(i => i.severity === 'high').length;
    }
    if (this.results.desktop.issues) {
      critical += this.results.desktop.issues.filter(i => i.severity === 'high').length;
    }
    
    return critical;
  }

  getGrade(score) {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  }

  async saveResults() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `professional-audit-${timestamp}.json`;
    
    fs.writeFileSync(filename, JSON.stringify(this.results, null, 2));
    console.log(`📁 Results saved to: ${filename}`);
    
    return filename;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async run() {
    try {
      await this.initialize();
      await this.runPerformanceAudit();
      await this.runAccessibilityAudit();
      await this.runTechnicalAudit();
      await this.runUXAudit();
      await this.runMobileAudit();
      await this.runDesktopAudit();
      
      this.generateRecommendations();
      this.generateSummary();
      
      const filename = await this.saveResults();
      
      console.log('\n🎯 PROFESSIONAL AUDIT COMPLETED!');
      console.log(`📊 Overall Score: ${this.results.summary.overallScore}/100 (Grade: ${this.results.summary.grade})`);
      console.log(`🚨 Critical Issues: ${this.results.summary.criticalIssues}`);
      console.log(`📁 Detailed results: ${filename}`);
      
      return this.results;
    } catch (error) {
      console.error('❌ Audit failed:', error);
      throw error;
    } finally {
      await this.cleanup();
    }
  }
}

// Helper functions for page evaluation
function getSelector(element) {
  if (element.id) return `#${element.id}`;
  if (element.className) return `.${element.className.split(' ')[0]}`;
  return element.tagName.toLowerCase();
}

function checkButtonConsistency(buttons) {
  if (buttons.length === 0) return true;
  
  const firstStyle = window.getComputedStyle(buttons[0]);
  const firstPadding = firstStyle.padding;
  const firstBorderRadius = firstStyle.borderRadius;
  
  for (let i = 1; i < buttons.length; i++) {
    const style = window.getComputedStyle(buttons[i]);
    if (style.padding !== firstPadding || style.borderRadius !== firstBorderRadius) {
      return false;
    }
  }
  
  return true;
}

function checkTouchFriendlyElements() {
  const clickableElements = document.querySelectorAll('button, a, [onclick], [role="button"]');
  let touchFriendly = 0;
  
  clickableElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width >= 44 && rect.height >= 44) {
      touchFriendly++;
    }
  });
  
  return touchFriendly / clickableElements.length;
}

// Run the audit
if (require.main === module) {
  const audit = new ProfessionalWebsiteAudit();
  audit.run().catch(console.error);
}

module.exports = ProfessionalWebsiteAudit;
