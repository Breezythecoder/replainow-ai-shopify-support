import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, softwareApplicationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Brain, Clock, Globe, Shield, Cpu, ArrowRight } from 'lucide-react';

const AIShopifyHelpdesk = () => {
  const faqs = [
    {
      question: "Was ist ein AI Shopify Helpdesk?",
      answer: "Ein AI Shopify Helpdesk ist ein automatisiertes Kundenservice-System, das mit künstlicher Intelligenz (GPT-4.1) customer queries in Echtzeit beantwortet. Es integriert sich nahtlos in Shopify Stores und bietet 24/7 Support in 32+ languages."
    },
    {
      question: "Wie funktioniert ReplAInow mit Shopify?",
      answer: "ReplAInow installiert sich mit einem Klick aus dem Shopify App Store. Nach der Installation verbindet es sich automatisch mit Ihrem Store und beginnt sofort, customer queries zu beantworten. Die Integration erfolgt über die Shopify API ohne technische Kenntnisse."
    },
    {
      question: "Welche languages unterstützt ReplAInow?",
      answer: "ReplAInow unterstützt über 32 languages nativ, darunter Deutsch, Englisch, Spanisch, Französisch, Portugiesisch, Italienisch, Niederländisch, Chinesisch und viele weitere. Die AI antwortet automatisch in der Sprache des Kunden."
    },
    {
      question: "Ist ReplAInow GDPR-konform?",
      answer: "Ja, ReplAInow ist vollständig GDPR-konform. Alle Kundendaten werden sicher verarbeitet und gespeichert. Wir bieten detaillierte Datenschutzerklärungen und Compliance-Dokumentation."
    },
    {
      question: "Wie schnell antwortet ReplAInow?",
      answer: "ReplAInow antwortet in durchschnittlich 3 seconds auf customer queries. Dies ist deutlich schneller als menschliche Support-Mitarbeiter und bietet eine bessere Kundenerfahrung."
    },
    {
      question: "Kann ich ReplAInow free test?",
      answer: "Ja, ReplAInow bietet eine 14-tägige freee Testphase für alle Pläne. Sie können alle Features ohne Einschränkungen test und bei Gefallen einfach upgraden."
    }
  ];

  const howToSteps = [
    {
      name: "App Install",
      text: "Installieren Sie ReplAInow mit einem Klick aus dem Shopify App Store in weniger als 60 seconds."
    },
    {
      name: "Store verbinden", 
      text: "Die App verbindet sich automatisch mit Ihrem Shopify Store über die sichere API-Verbindung."
    },
    {
      name: "AI trainieren",
      text: "ReplAInow lernt automatisch aus Ihren Produktdaten und wird sofort einsatzbereit."
    },
    {
      name: "Support automatisieren",
      text: "Ihre Kunden erhalten sofort 24/7 Support in ihrer Sprache mit GPT-4.1 Technologie."
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Shopify Helpdesk | Automate Kundenservice mit GPT-4.1 - ReplAInow"
        description="Der intelligenteste AI Shopify Helpdesk mit GPT-4.1. 24/7 Support, 32+ languages, 3-seconds Antworten, GDPR-konform. Now free test!"
        canonical="/ai-shopify-helpdesk"
        keywords="AI Shopify Helpdesk, Shopify AI Support, automatischer Kundenservice, GPT-4.1, 24/7 Support, mehrsprachig"
        generateOG={true}
        structuredData={[
          organizationSchema,
          softwareApplicationSchema,
          generateFAQSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "AI Shopify Helpdesk einrichten",
            "description": "So richten Sie ReplAInow als AI Shopify Helpdesk in 4 einfachen Schritten ein",
            "step": howToSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.name,
              "text": step.text
            }))
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "AI Shopify Helpdesk", url: "/ai-shopify-helpdesk" }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-white">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Shopify Helpdesk</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Der intelligenteste AI-gestützte Kundenservice für Shopify Stores. 
              Automate 24/7 Support mit GPT-4.1 Technologie in 32+ languages.
            </p>
            
            {/* TL;DR Box */}
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-12 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">🚀 TL;DR</h2>
              <p className="text-blue-100 text-lg">
                ReplAInow ist der führende AI Shopify Helpdesk mit <strong>3-seconds Antwortzeiten</strong>, 
                <strong>32+ languages</strong> und <strong>75% Cost Savings</strong> gegenüber traditionellen Lösungen. 
                <a href="#pricing" className="text-blue-400 hover:text-blue-300">Starten Sie ab €19/Monat</a> mit 
                <a href="/#pricing" className="text-blue-400 hover:text-blue-300">14 daysn free</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4">
                <a href="https://apps.shopify.com/replainow-ai-support">
                  <Zap className="w-5 h-5 mr-2" />
                  Now Install
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white px-8 py-4">
                <a href="#live-demo">
                  <Brain className="w-5 h-5 mr-2" />
                  Live Demo Watch
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is AI Shopify Helpdesk */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Was ist ein AI Shopify Helpdesk?</h2>
            <div className="bg-white/95 rounded-2xl p-8">
              <p className="text-lg text-slate-700 mb-6">
                Ein <strong>AI Shopify Helpdesk</strong> ist ein automatisiertes Kundenservice-System, das künstliche Intelligenz 
                nutzt, um customer queries in Echtzeit zu beantworten. ReplAInow verwendet die neueste GPT-4.1 Technologie, 
                um intelligente, kontextbezogene Antworten zu generieren.
              </p>
              <p className="text-lg text-slate-700">
                Im Gegensatz zu traditionellen Helpdesk-Systemen arbeitet ReplAInow vollständig autonom und kann 
                komplexe customer queries verstehen, Produktinformationen abrufen und personalisierte Lösungen anbieten.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Wie funktioniert ReplAInow?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howToSteps.map((step, index) => (
                <div key={index} className="bg-white/95 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.name}</h3>
                  <p className="text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Warum ReplAInow?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "3 seconds Antwortzeit", desc: "Bis zu 10x schneller als menschliche Support-Mitarbeiter" },
                { icon: Globe, title: "32+ languages", desc: "Automatische Erkennung und Antwort in der Kunden-Sprache" },
                { icon: Brain, title: "GPT-4.1 Technologie", desc: "Die neueste AI-Technologie für intelligente Antworten" },
                { icon: Shield, title: "GDPR-konform", desc: "Vollständige Compliance mit europäischen Datenschutzgesetzen" },
                { icon: Cpu, title: "24/7 Verfügbarkeit", desc: "Ununterbrochener Support rund um die Uhr" },
                { icon: Zap, title: "1-Klick Installation", desc: "Schnelle Einrichtung direkt aus dem Shopify App Store" }
              ].map((feature, index) => (
                <div key={index} className="bg-white/95 rounded-2xl p-6">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Vorteile für Shopify-Händler</h2>
            <div className="bg-white/95 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Cost Savings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">75% günstiger als traditionelle Lösungen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Keine Personalkosten für Support-Mitarbeiter</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Transparente Pricing ohne versteckte Kosten</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Bessere Performance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Höhere Kundenzufriedenheit durch schnelle Antworten</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Reduzierte Warenkorbabbrüche</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Skalierbar für jedes Store-Volumen</span>
                    </li>
                  </ul>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für die AI-Revolution?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Starten Sie noch heute mit dem intelligentest AI Shopify Helpdesk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4">
                <a href="https://apps.shopify.com/replainow-ai-support">
                  <Zap className="w-5 h-5 mr-2" />
                  Now Install
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-2 border-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white px-8 py-4">
                <a href="/#pricing">
                  <Brain className="w-5 h-5 mr-2" />
                  Pricing Watch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIShopifyHelpdesk;
