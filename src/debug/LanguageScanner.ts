// Language Scanner - Detects non-English text on English pages
// Run in browser console: window.__LANG_SCANNER__.scan()

interface ScanResult {
  germanWords: string[];
  confidence: 'high' | 'medium' | 'low';
  recommendations: string[];
  timestamp: string;
}

export class LanguageScanner {
  private germanWords = new Set([
    // Common German words
    'händler', 'aktiv', 'shopify-händler', 'kunden', 'antworten',
    'automatisch', 'unterstützung', 'hilfe', 'kontakt', 'preise',
    'funktionen', 'demo', 'über', 'warum', 'wie', 'was', 'wo',
    'mehr', 'weniger', 'besser', 'schneller', 'kostenlos',
    'startseite', 'impressum', 'datenschutz', 'agb', 'kontaktiere',
    'jetzt', 'hier', 'kostenlos', 'testen', 'anfordern',
    'lösung', 'produkt', 'service', 'support', 'team',
    'unternehmen', 'firma', 'geschäft', 'business', 'technologie',
    'software', 'plattform', 'system', 'anwendung', 'app',
    'website', 'webseite', 'online', 'digital', 'modern',
    'neu', 'alt', 'groß', 'klein', 'schnell', 'langsam',
    'einfach', 'kompliziert', 'benutzerfreundlich', 'intuitiv',
    'sicher', 'zuverlässig', 'stabil', 'robust', 'flexibel',
    'skalierbar', 'effizient', 'leistungsstark', 'professionell',
    'erfolgreich', 'gewinnen', 'verlieren', 'verbessern', 'optimieren',
    'automatisieren', 'integrieren', 'verbinden', 'synchronisieren',
    'konfigurieren', 'anpassen', 'individualisieren', 'personalisieren'
  ]);

  private englishWords = new Set([
    'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use'
  ]);

  scan(): ScanResult {
    const text = this.extractVisibleText();
    const germanWords = this.findGermanWords(text);
    const confidence = this.calculateConfidence(germanWords, text);

    return {
      germanWords,
      confidence,
      recommendations: this.generateRecommendations(germanWords),
      timestamp: new Date().toISOString()
    };
  }

  private extractVisibleText(): string {
    // Extract text from visible elements only
    const elements = document.querySelectorAll('body *:not(script):not(style):not(meta):not(link)');
    let text = '';

    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const isVisible = computedStyle.display !== 'none' &&
                       computedStyle.visibility !== 'hidden' &&
                       parseFloat(computedStyle.opacity) > 0;

      if (isVisible && element.textContent) {
        text += ' ' + element.textContent.trim();
      }
    });

    return text.toLowerCase();
  }

  private findGermanWords(text: string): string[] {
    const words = text.split(/\s+/);
    const found: string[] = [];

    words.forEach(word => {
      // Clean word (remove punctuation)
      const cleanWord = word.replace(/[^\wäöüß]/g, '');

      if (cleanWord.length > 3 && this.germanWords.has(cleanWord)) {
        found.push(cleanWord);
      }
    });

    return [...new Set(found)]; // Remove duplicates
  }

  private calculateConfidence(germanWords: string[], text: string): 'high' | 'medium' | 'low' {
    const germanCount = germanWords.length;
    const totalWords = text.split(/\s+/).length;
    const ratio = germanCount / totalWords;

    if (germanCount > 10 || ratio > 0.1) return 'high';
    if (germanCount > 5 || ratio > 0.05) return 'medium';
    return 'low';
  }

  private generateRecommendations(germanWords: string[]): string[] {
    const recommendations: string[] = [];

    if (germanWords.length === 0) {
      recommendations.push('✅ No German words detected - page appears to be properly localized');
    } else {
      recommendations.push(`⚠️ Found ${germanWords.length} German words that should be translated`);
      recommendations.push('Check translation keys for missing English translations');
      recommendations.push('Review UI components for hardcoded German text');
      recommendations.push('Test all user interaction paths');

      if (germanWords.some(word => ['kontakt', 'impressum', 'datenschutz'].includes(word))) {
        recommendations.push('🔍 Check footer/navigation links for untranslated text');
      }

      if (germanWords.some(word => ['demo', 'kostenlos', 'jetzt'].includes(word))) {
        recommendations.push('🔍 Check CTA buttons for untranslated text');
      }
    }

    return recommendations;
  }

  // Console helper method
  consoleScan(): void {
    const result = this.scan();
    console.log('🔍 Language Scanner Results:');
    console.log(`Confidence: ${result.confidence.toUpperCase()}`);
    console.log(`German words found: ${result.germanWords.length}`);

    if (result.germanWords.length > 0) {
      console.log('German words:', result.germanWords);
    }

    console.log('Recommendations:');
    result.recommendations.forEach(rec => console.log(`  ${rec}`));

    console.log('Scan completed at:', result.timestamp);

    // Store result globally for further inspection
    (window as any).__LANG_SCAN_RESULT__ = result;
  }
}

// Global instance for console access
const scanner = new LanguageScanner();

// Make available globally
if (typeof window !== 'undefined') {
  (window as any).__LANG_SCANNER__ = scanner;
}

export { scanner };
