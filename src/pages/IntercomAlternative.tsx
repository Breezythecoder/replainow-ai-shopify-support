import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { CheckCircle, X, Zap, Brain, Clock, Globe, Shield, DollarSign, Users, TrendingUp, MessageSquare } from 'lucide-react';

const IntercomAlternative = () => {
  const faqs = [
    {
      question: "Warum ist ReplAInow eine bessere Alternative zu Intercom?",
      answer: "ReplAInow bietet 80% Cost Savings gegenüber Intercom, 3-seconds Antwortzeiten statt Minuten, 32+ languages nativ unterstützt und vollständige GDPR-Compliance. Intercom ist überteuert, langsam und nur in wenigen languages verfügbar."
    },
    {
      question: "Was kostet ReplAInow im Vergleich zu Intercom?",
      answer: "ReplAInow Starter Plan: €19/Monat vs. Intercom Starter: €99/Monat. Das sind 80% Ersparnis bei besseren Features. Intercom verlangt zusätzlich für erweiterte AI-Features, die bei ReplAInow inklusive sind."
    },
    {
      question: "Welche Features hat ReplAInow, die Intercom nicht bietet?",
      answer: "ReplAInow bietet GPT-4.1 Technologie, 32+ languages, 3-seconds Antwortzeiten, vollständige GDPR-Compliance und nahtlose Shopify-Integration. Intercom ist auf Englisch beschränkt und bietet nur grundlegende AI-Features."
    },
    {
      question: "Ist die Migration von Intercom zu ReplAInow einfach?",
      answer: "Ja, die Migration ist sehr einfach. ReplAInow importiert automatisch deine Intercom-Daten, FAQ-Inhalte und Kundeninteraktionen. Die Einrichtung dauert nur wenige Minuten und du kannst sofort starten."
    }
  ];

  const comparisonData = [
    {
      feature: "Preis pro Monat",
      replainow: "€19",
      intercom: "€99",
      winner: "replainow"
    },
    {
      feature: "Antwortzeit",
      replainow: "3 seconds",
      intercom: "5-15 Minuten",
      winner: "replainow"
    },
    {
      feature: "languages",
      replainow: "32+ languages",
      intercom: "8 languages",
      winner: "replainow"
    },
    {
      feature: "AI-Technologie",
      replainow: "GPT-4.1",
      intercom: "GPT-3.5",
      winner: "replainow"
    },
    {
      feature: "GDPR-Compliance",
      replainow: "Vollständig",
      intercom: "Teilweise",
      winner: "replainow"
    },
    {
      feature: "Shopify-Integration",
      replainow: "Nahtlos",
      intercom: "Komplex",
      winner: "replainow"
    },
    {
      feature: "24/7 Verfügbarkeit",
      replainow: "Ja",
      intercom: "Ja",
      winner: "tie"
    },
    {
      feature: "Kundenzufriedenheit",
      replainow: "4.9/5",
      intercom: "4.1/5",
      winner: "replainow"
    }
  ];

  return (
    <>
      <SEOHead
        title="Intercom Alternative | ReplAInow - 80% günstiger, 10x schneller - ReplAInow"
        description="ReplAInow ist die bessere Intercom Alternative: 80% Cost Savings, 3-seconds Antworten, 32+ languages, GPT-4.1. Einfache Migration, bessere Features. Now wechseln!"
        canonical="/intercom-alternative"
        keywords="Intercom Alternative, Intercom Ersatz, günstiger als Intercom, ReplAInow vs Intercom, Kundenservice Alternative"
        generateOG={true}
        structuredData={[
          organizationSchema,
          generateFAQSchema(faqs)
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Intercom Alternative", url: "/intercom-alternative" }
        ]}
      />

      <main className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Box */}
          <div className="bg-red-800/30 border border-red-600/50 rounded-2xl p-6 mb-12 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-red-200 mb-4">TL;DR: ReplAInow vs Intercom</h2>
            <p className="text-lg text-red-100 leading-relaxed">
              ReplAInow schlägt Intercom in allen wichtigen Bereichen: 80% günstiger (€19 vs €99), 10x schneller (3s vs 5-15min), 32+ languages vs 8 languages, GPT-4.1 vs GPT-3.5, vollständige GDPR-Compliance. Einfache Migration, bessere Features, drastisch niedrigere Kosten. <a href="#/pricing" className="text-red-400 hover:underline">Now wechseln und €960/Jahr sparen!</a>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-center mb-12 leading-tight">
            Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Intercom Alternative</span>, die dich 80% sparen lässt
          </h1>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Warum ReplAInow statt Intercom?</h2>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              Intercom war einmal innovativ, aber ReplAInow übertrifft sie in allen wichtigen Bereichen. Bessere Technologie, 80% niedrigere Kosten, mehr Features - alles was du brauchst für modernen Kundenservice.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-green-700/30 shadow-lg">
                <DollarSign className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">80% Cost Savings</h3>
                <p className="text-slate-300">€19 vs €99 pro Monat - spare über €960 im Jahr</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30 shadow-lg">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">20x Schneller</h3>
                <p className="text-slate-300">3 seconds vs 5-15 Minuten Antwortzeit</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-700/30 shadow-lg">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">4x Mehr languages</h3>
                <p className="text-slate-300">32+ languages vs nur 8 bei Intercom</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Direkter Vergleich: ReplAInow vs Intercom</h2>
            <div className="bg-slate-800/50 rounded-2xl border border-blue-700/30 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-slate-700/50">
                <div className="text-lg font-bold text-slate-300">Feature</div>
                <div className="text-lg font-bold text-green-400">ReplAInow</div>
                <div className="text-lg font-bold text-red-400">Intercom</div>
              </div>
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-slate-700/50">
                  <div className="text-slate-300 font-medium">{item.feature}</div>
                  <div className={`flex items-center ${item.winner === 'replainow' ? 'text-green-400' : item.winner === 'tie' ? 'text-blue-400' : 'text-slate-400'}`}>
                    {item.winner === 'replainow' && <CheckCircle className="w-5 h-5 mr-2" />}
                    {item.winner === 'tie' && <TrendingUp className="w-5 h-5 mr-2" />}
                    {item.replainow}
                  </div>
                  <div className={`flex items-center ${item.winner === 'intercom' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.winner === 'intercom' && <CheckCircle className="w-5 h-5 mr-2" />}
                    {item.winner !== 'intercom' && <X className="w-5 h-5 mr-2" />}
                    {item.intercom}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Migration von Intercom zu ReplAInow</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Datenexport aus Intercom</h3>
                    <p className="text-slate-300">Exportiere deine Kundeninteraktionen, FAQ-Inhalte und Einstellungen aus Intercom.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. Automatischer Import</h3>
                    <p className="text-slate-300">ReplAInow importiert automatisch alle deine Daten und lernt aus deinen Intercom-Interaktionen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Sofortiger Start</h3>
                    <p className="text-slate-300">Nach wenigen Minuten ist ReplAInow einsatzbereit und übertrifft Intercom sofort.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-6">Migration Vorteile</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Keine Datenverluste</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Automatische Konfiguration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Bessere Performance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">80% Cost Savings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">24/7 Support</span>
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
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für den Wechsel?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Spare 80% deiner Kosten und erlebe besseren Kundenservice. Migration in wenigen Minuten, 14 days free test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow-ai-support" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <DollarSign className="w-6 h-6 mr-2" />
                Now €960/Jahr sparen
              </a>
              <a 
                href="/contact" 
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Migration planen
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default IntercomAlternative;
