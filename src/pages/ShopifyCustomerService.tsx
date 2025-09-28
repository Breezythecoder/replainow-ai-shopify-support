import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { CheckCircle, Zap, Brain, Clock, Globe, Shield, Users, TrendingUp, MessageSquare, Headphones } from 'lucide-react';

const ShopifyCustomerService = () => {
  const faqs = [
    {
      question: "Was ist Shopify Customer Service?",
      answer: "Shopify Customer Service umfasst alle Maßnahmen zur Kundenbetreuung in Shopify Stores. ReplAInow automatisiert diesen Service mit AI-Technologie für 24/7 Verfügbarkeit, schnelle Antwortzeiten und mehrsprachige Unterstützung."
    },
    {
      question: "Wie verbessert ReplAInow den Shopify Customer Service?",
      answer: "ReplAInow revolutioniert den Shopify Customer Service durch GPT-4.1 Technologie: 3-seconds Antwortzeiten, automatische Spracherkennung in 32+ languages, 75% Kosteneinsparung und nahtlose Shopify-Integration."
    },
    {
      question: "Welche Customer Service Features bietet ReplAInow?",
      answer: "ReplAInow bietet umfassende Customer Service Features: Live-Chat, FAQ-Automation, Bestellstatus-Updates, Retouren-Handling, Produktberatung, technischer Support und Escalation zu menschlichen Agenten bei komplexen Anfragen."
    },
    {
      question: "Ist ReplAInow GDPR-konform für europäische Shopify Stores?",
      answer: "Ja, ReplAInow ist vollständig GDPR-konform und speziell für europäische Shopify Stores entwickelt. Alle Kundendaten werden sicher verarbeitet und den europäischen Datenschutzstandards entsprechend behandelt."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "3-seconds Antworten",
      description: "Sofortige Reaktion auf customer queries mit GPT-4.1 Technologie"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "32+ languages",
      description: "Automatische Spracherkennung und mehrsprachige Antworten"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "AI-gestützte Antworten",
      description: "Intelligente, kontextbezogene Lösungen für alle customer queries"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: "24/7 Verfügbarkeit",
      description: "Rund-um-die-Uhr Customer Service ohne Pausen"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "GDPR-konform",
      description: "Vollständige Compliance mit europäischen Datenschutzstandards"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "75% Kosteneinsparung",
      description: "Drastische Reduzierung der Customer Service Kosten"
    }
  ];

  return (
    <>
      <SEOHead
        title="Shopify Customer Service | Automate Customer Support mit AI - ReplAInow"
        description="Revolutioniere deinen Shopify Customer Service mit ReplAInow. 3-seconds Antworten, 32+ languages, 24/7 Verfügbarkeit, GDPR-konform. Now free test!"
        canonical="/shopify-customer-service"
        keywords="Shopify Customer Service, Kundenservice automatisiert, AI Support, 24/7 Chat, mehrsprachig, GDPR"
        generateOG={true}
        structuredData={[
          organizationSchema,
          generateFAQSchema(faqs)
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Shopify Customer Service", url: "/shopify-customer-service" }
        ]}
      />

      <main className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Box */}
          <div className="bg-blue-800/30 border border-blue-600/50 rounded-2xl p-6 mb-12 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">TL;DR: Shopify Customer Service mit ReplAInow</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              ReplAInow automatisiert deinen kompletten Shopify Customer Service mit modernster AI-Technologie. Erlebe 3-seconds Antwortzeiten, 24/7 Verfügbarkeit in 32+ languages und spare dabei 75% deiner Support-Kosten. Perfekt für Shopify-Händler, die professionellen Kundenservice ohne Personalaufwand bieten wollen. <a href="#/pricing" className="text-blue-400 hover:underline">Now free test!</a>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-center mb-12 leading-tight">
            Der <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Shopify Customer Service</span>, der deine Kunden begeistert
          </h1>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Was ist Shopify Customer Service?</h2>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              Shopify Customer Service umfasst alle Maßnahmen zur professionellen Kundenbetreuung in Online-Shops. ReplAInow revolutioniert diesen Service durch vollständige Automatisierung mit künstlicher Intelligenz, die menschliche Qualität mit digitaler Effizienz verbindet.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Wie funktioniert ReplAInow Customer Service?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Intelligente customer queries</h3>
                    <p className="text-slate-300">ReplAInow erkennt automatisch die Art der Anfrage und leitet sie an die richtige Lösung weiter.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. AI-gestützte Antworten</h3>
                    <p className="text-slate-300">GPT-4.1 generiert präzise, hilfreiche Antworten basierend auf deinen Produktdaten.</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Customer Service Statistiken</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Durchschnittliche Antwortzeit</span>
                    <span className="text-blue-400 font-bold">3 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Verfügbarkeit</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Kundenzufriedenheit</span>
                    <span className="text-purple-400 font-bold">4.9/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Kosteneinsparung</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für besseren Customer Service?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Starte noch heute mit ReplAInow und automatisiere deinen Shopify Customer Service. 14 days free test, keine Kreditkarte erforderlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow-ai-support" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Headphones className="w-6 h-6 mr-2" />
                Now free test
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

export default ShopifyCustomerService;
