import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { CheckCircle, Zap, Brain, Clock, Globe, Shield, Users, TrendingUp, MessageSquare, Headphones, Cpu } from 'lucide-react';

const ShopifyAISupport = () => {
  const faqs = [
    {
      question: "Was ist Shopify AI Support?",
      answer: "Shopify AI Support ist ein automatisiertes Kundenservice-System, das künstliche Intelligenz nutzt, um customer queries in Shopify Stores zu beantworten. ReplAInow bietet den fortschrittlichsten AI Support mit GPT-4.1 Technologie."
    },
    {
      question: "Wie funktioniert ReplAInow als Shopify AI Support?",
      answer: "ReplAInow integriert sich nahtlos in Shopify und nutzt GPT-4.1, um intelligente Antworten auf customer queries zu generieren. Es lernt aus deinen Produktdaten, FAQs und Kundeninteraktionen für personalisierte Unterstützung."
    },
    {
      question: "Welche AI-Features bietet ReplAInow für Shopify?",
      answer: "ReplAInow bietet umfassende AI-Features: 3-seconds Antwortzeiten, 32+ languages, automatische Spracherkennung, Produktempfehlungen, Bestellstatus-Updates, Retouren-Handling und nahtlose Escalation zu menschlichen Agenten."
    },
    {
      question: "Ist ReplAInow GDPR-konform für Shopify Stores?",
      answer: "Ja, ReplAInow ist vollständig GDPR-konform und speziell für europäische Shopify Stores entwickelt. Alle Kundendaten werden sicher verarbeitet und den europäischen Datenschutzstandards entsprechend behandelt."
    }
  ];

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "GPT-4.1 Technologie",
      description: "Die neueste AI-Technologie für intelligenteste Antworten"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "3-seconds Antworten",
      description: "Blitzschnelle Reaktion auf alle customer queries"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "32+ languages",
      description: "Automatische Spracherkennung und mehrsprachige Antworten"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Intelligente Automatisierung",
      description: "Lernt aus Kundeninteraktionen für bessere Antworten"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "GDPR-konform",
      description: "Vollständige Compliance mit europäischen Datenschutzstandards"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: "75% Cost Savings",
      description: "Drastische Reduzierung der Support-Kosten"
    }
  ];

  return (
    <>
      <SEOHead
        title="Shopify AI Support | Automate Kundenservice mit GPT-4.1 - ReplAInow"
        description="Der fortschrittlichste Shopify AI Support mit GPT-4.1. 3-seconds Antworten, 32+ languages, 24/7 Verfügbarkeit, GDPR-konform. Now free test!"
        canonical="/shopify-ai-support"
        keywords="Shopify AI Support, AI Kundenservice, GPT-4.1, automatischer Support, AI Chatbot, Shopify Automatisierung"
        generateOG={true}
        structuredData={[
          organizationSchema,
          generateFAQSchema(faqs)
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Shopify AI Support", url: "/shopify-ai-support" }
        ]}
      />

      <main className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Box */}
          <div className="bg-blue-800/30 border border-blue-600/50 rounded-2xl p-6 mb-12 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">TL;DR: Shopify AI Support mit ReplAInow</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              ReplAInow bietet den fortschrittlichsten Shopify AI Support mit GPT-4.1 Technologie. Erlebe 3-seconds Antwortzeiten, 24/7 Verfügbarkeit in 32+ languages und spare dabei 75% deiner Support-Kosten. Perfekt für Shopify-Händler, die modernste AI-Technologie für ihren Kundenservice nutzen wollen. <a href="#/pricing" className="text-blue-400 hover:underline">Now free test!</a>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-center mb-12 leading-tight">
            Der <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Shopify AI Support</span>, der deine Kunden begeistert
          </h1>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Was ist Shopify AI Support?</h2>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              Shopify AI Support revolutioniert den Kundenservice durch künstliche Intelligenz. ReplAInow nutzt die neueste GPT-4.1 Technologie, um intelligente, personalisierte Antworten zu generieren und deine Kunden rund um die Uhr zu betreuen.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Wie funktioniert ReplAInow AI Support?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Intelligente Anfragenerkennung</h3>
                    <p className="text-slate-300">ReplAInow analysiert automatisch customer queries und erkennt Intent, Sprache und Dringlichkeit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. GPT-4.1 Antwortgenerierung</h3>
                    <p className="text-slate-300">Die neueste AI-Technologie generiert präzise, hilfreiche Antworten basierend auf deinen Produktdaten.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Nahtlose Escalation</h3>
                    <p className="text-slate-300">Bei komplexen Anfragen wird automatisch an menschliche Agenten übergeben.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-6">AI Support Statistiken</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Durchschnittliche Antwortzeit</span>
                    <span className="text-blue-400 font-bold">3 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">AI-Genauigkeit</span>
                    <span className="text-green-400 font-bold">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">languages unterstützt</span>
                    <span className="text-purple-400 font-bold">32+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Verfügbarkeit</span>
                    <span className="text-orange-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Cost Savings</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">AI-Features für Shopify Stores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-6">Produktberatung</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Automatische Produktempfehlungen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Größen- und Fit-Beratung
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Verfügbarkeitsprüfung
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Preis- und Rabattinformationen
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-6">Bestellungsunterstützung</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Bestellstatus-Updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Versandverfolgung
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Retouren-Handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Zahlungsprobleme lösen
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Häufig gestellte Fragen</h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl mb-4 border border-blue-700/30">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für AI-gestützten Support?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Starte noch heute mit ReplAInow und erlebe die Zukunft des Shopify Kundenservices. 14 days free test, keine Kreditkarte erforderlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow-ai-support" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Headphones className="w-6 h-6 mr-2" />
                AI Support test
              </a>
              <a 
                href="/contact" 
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Demo anfragen
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ShopifyAISupport;
