import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { Globe, CheckCircle, Zap, Brain, ArrowRight } from 'lucide-react';

const MultilingualSupport = () => {
  const supportedLanguages = [
    { code: 'de', name: 'Deutsch', native: 'Deutsch' },
    { code: 'en', name: 'Englisch', native: 'English' },
    { code: 'es', name: 'Spanisch', native: 'Español' },
    { code: 'fr', name: 'Französisch', native: 'Français' },
    { code: 'pt', name: 'Portugiesisch', native: 'Português' },
    { code: 'it', name: 'Italienisch', native: 'Italiano' },
    { code: 'nl', name: 'Niederländisch', native: 'Nederlands' },
    { code: 'zh', name: 'Chinesisch', native: '中文' },
    { code: 'ja', name: 'Japanisch', native: '日本語' },
    { code: 'ko', name: 'Koreanisch', native: '한국어' },
    { code: 'ru', name: 'Russisch', native: 'Русский' },
    { code: 'ar', name: 'Arabisch', native: 'العربية' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'tr', name: 'Türkisch', native: 'Türkçe' },
    { code: 'pl', name: 'Polnisch', native: 'Polski' },
    { code: 'sv', name: 'Schwedisch', native: 'Svenska' },
    { code: 'da', name: 'Dänisch', native: 'Dansk' },
    { code: 'no', name: 'Norwegisch', native: 'Norsk' },
    { code: 'fi', name: 'Finnisch', native: 'Suomi' },
    { code: 'cs', name: 'Tschechisch', native: 'Čeština' },
    { code: 'hu', name: 'Ungarisch', native: 'Magyar' },
    { code: 'ro', name: 'Rumänisch', native: 'Română' },
    { code: 'bg', name: 'Bulgarisch', native: 'Български' },
    { code: 'hr', name: 'Kroatisch', native: 'Hrvatski' },
    { code: 'sk', name: 'Slowakisch', native: 'Slovenčina' },
    { code: 'sl', name: 'Slowenisch', native: 'Slovenščina' },
    { code: 'et', name: 'Estnisch', native: 'Eesti' },
    { code: 'lv', name: 'Lettisch', native: 'Latviešu' },
    { code: 'lt', name: 'Litauisch', native: 'Lietuvių' },
    { code: 'el', name: 'Griechisch', native: 'Ελληνικά' },
    { code: 'he', name: 'Hebräisch', native: 'עברית' },
    { code: 'th', name: 'Thai', native: 'ไทย' }
  ];

  const faqs = [
    {
      question: "Welche Sprachen unterstützt ReplAInow?",
      answer: "ReplAInow unterstützt über 32 Sprachen nativ, darunter alle wichtigen europäischen Sprachen, asiatische Sprachen wie Chinesisch, Japanisch und Koreanisch, sowie weitere globale Sprachen wie Arabisch, Hindi und Russisch."
    },
    {
      question: "Wie erkennt ReplAInow die Sprache des Kunden?",
      answer: "ReplAInow nutzt fortschrittliche KI-Technologie, um automatisch die Sprache des Kunden aus der Anfrage zu erkennen. Die Erkennung erfolgt in Echtzeit und ist zu über 99% akkurat."
    },
    {
      question: "Kann ich die Sprachen für meinen Store anpassen?",
      answer: "Ja, Sie können in den Einstellungen festlegen, welche Sprachen für Ihren Store aktiviert sein sollen. ReplAInow passt sich automatisch an Ihre gewünschten Sprachen an."
    },
    {
      question: "Werden Produktinformationen auch in anderen Sprachen übersetzt?",
      answer: "Ja, ReplAInow kann automatisch Produktinformationen, Beschreibungen und sogar technische Details in die Sprache des Kunden übersetzen, während der ursprüngliche Kontext erhalten bleibt."
    },
    {
      question: "Ist die Übersetzungsqualität vergleichbar mit menschlichen Übersetzern?",
      answer: "ReplAInow nutzt GPT-4.1 Technologie, die eine Übersetzungsqualität bietet, die mit professionellen menschlichen Übersetzern vergleichbar ist. Die KI versteht Kontext und Nuancen."
    },
    {
      question: "Funktioniert mehrsprachiger Support auch bei komplexen Anfragen?",
      answer: "Ja, ReplAInow kann auch komplexe Kundenanfragen wie Retouren, technische Probleme oder spezielle Produktanfragen in der jeweiligen Sprache des Kunden bearbeiten."
    }
  ];

  return (
    <>
      <SEOHead
        title="Multilingual Support für Shopify | 32+ Sprachen mit AI - ReplAInow"
        description="Automatischer mehrsprachiger Support für Shopify Stores. 32+ Sprachen nativ unterstützt, automatische Spracherkennung, DSGVO-konform. Jetzt testen!"
        canonical="/multilingual-support"
        keywords="multilingual support, mehrsprachiger support, shopify sprachen, ai übersetzung, automatische spracherkennung"
        structuredData={[
          organizationSchema,
          generateFAQSchema(faqs)
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Multilingual Support", url: "/multilingual-support" }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Multilingual</span> Support
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Automatischer mehrsprachiger Kundenservice für globale Shopify Stores. 
              Unterstützung für 32+ Sprachen mit KI-gestützter Übersetzung.
            </p>
            
            {/* TL;DR Box */}
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-12 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">🌍 TL;DR</h2>
              <p className="text-blue-100 text-lg">
                ReplAInow unterstützt <strong>32+ Sprachen nativ</strong> mit automatischer Spracherkennung 
                und <strong>99%+ Übersetzungsgenauigkeit</strong>. Ihre Kunden erhalten Support in ihrer 
                Muttersprache ohne zusätzliche Kosten. <a href="/pricing" className="text-blue-400 hover:text-blue-300">Ab €19/Monat</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4">
                <a href="https://apps.shopify.com/replainow-ai-support">
                  <Globe className="w-5 h-5 mr-2" />
                  Jetzt installieren
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white px-8 py-4">
                <a href="#languages">
                  <Brain className="w-5 h-5 mr-2" />
                  Sprachen ansehen
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Multilingual Support */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Was ist Multilingual Support?</h2>
            <div className="bg-white/95 rounded-2xl p-8">
              <p className="text-lg text-slate-700 mb-6">
                <strong>Multilingual Support</strong> bedeutet, dass Ihr Kundenservice automatisch in der 
                Sprache des Kunden antwortet. ReplAInow erkennt die Sprache der Kundenanfrage und 
                generiert passende Antworten in der jeweiligen Muttersprache.
              </p>
              <p className="text-lg text-slate-700">
                Im Gegensatz zu traditionellen Übersetzungsdiensten versteht ReplAInow Kontext, 
                kulturelle Nuancen und branchenspezifische Begriffe, um authentische und hilfreiche 
                Antworten zu liefern.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Wie funktioniert mehrsprachiger Support?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/95 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Sprache erkennen</h3>
                <p className="text-slate-600">KI erkennt automatisch die Sprache der Kundenanfrage mit 99%+ Genauigkeit</p>
              </div>
              <div className="bg-white/95 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Kontext verstehen</h3>
                <p className="text-slate-600">GPT-4.1 versteht die Anfrage und den kulturellen Kontext der Sprache</p>
              </div>
              <div className="bg-white/95 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Antworten generieren</h3>
                <p className="text-slate-600">Natürliche, hilfreiche Antworten in der Muttersprache des Kunden</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section id="languages" className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Unterstützte Sprachen</h2>
            <div className="bg-white/95 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {supportedLanguages.map((lang, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 text-center hover:bg-slate-100 transition-colors">
                    <div className="text-2xl mb-2">{lang.native}</div>
                    <div className="text-sm text-slate-600">{lang.name}</div>
                    <div className="text-xs text-slate-500 uppercase">{lang.code}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Vorteile für internationale Stores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/95 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Globale Reichweite</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Kunden weltweit in ihrer Muttersprache bedienen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Kulturelle Sensibilität und lokale Gewohnheiten verstehen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Automatische Erkennung ohne manuelle Konfiguration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/95 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Kosteneffizienz</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Keine separaten Übersetzer oder mehrsprachige Teams nötig</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Ein System für alle Sprachen und Märkte</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Skalierbar für neue Märkte und Sprachen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/95 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für globale Kunden?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Erweitern Sie Ihren Shopify Store mit mehrsprachigem AI-Support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4">
                <a href="https://apps.shopify.com/replainow-ai-support">
                  <Globe className="w-5 h-5 mr-2" />
                  Jetzt installieren
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white px-8 py-4">
                <a href="/pricing">
                  <Zap className="w-5 h-5 mr-2" />
                  Preise ansehen
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MultilingualSupport;
