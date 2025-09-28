import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, generateFAQSchema } from '@/components/seo/StructuredData';
import { CheckCircle, X, Zap, Brain, Clock, Globe, Shield, DollarSign, Users, TrendingUp } from 'lucide-react';

const GorgiasAlternative = () => {
  const faqs = [
    {
      question: "Warum ist ReplAInow eine bessere Alternative zu Gorgias?",
      answer: "ReplAInow bietet 75% Cost Savings gegenüber Gorgias, 3-seconds Antwortzeiten statt Minuten, 32+ languages nativ unterstützt und vollständige GDPR-Compliance. Gorgias ist teuer, langsam und nur in wenigen languages verfügbar."
    },
    {
      question: "Was kostet ReplAInow im Vergleich zu Gorgias?",
      answer: "ReplAInow Starter Plan: €19/Monat vs. Gorgias Starter: €60/Monat. Das sind 75% Ersparnis bei besseren Features. Gorgias verlangt zusätzlich für erweiterte AI-Features, die bei ReplAInow inklusive sind."
    },
    {
      question: "Welche Features hat ReplAInow, die Gorgias nicht bietet?",
      answer: "ReplAInow bietet GPT-4.1 Technologie, 32+ languages, 3-seconds Antwortzeiten, vollständige GDPR-Compliance und nahtlose Shopify-Integration. Gorgias ist auf Englisch beschränkt und bietet nur grundlegende AI-Features."
    },
    {
      question: "Ist die Migration von Gorgias zu ReplAInow einfach?",
      answer: "Ja, die Migration ist sehr einfach. ReplAInow importiert automatisch deine Gorgias-Daten, FAQ-Inhalte und Kundeninteraktionen. Die Einrichtung dauert nur wenige Minuten und du kannst sofort starten."
    }
  ];

  const comparisonData = [
    {
      feature: "Preis pro Monat",
      replainow: "€19",
      gorgias: "€60",
      winner: "replainow"
    },
    {
      feature: "Antwortzeit",
      replainow: "3 seconds",
      gorgias: "2-5 Minuten",
      winner: "replainow"
    },
    {
      feature: "languages",
      replainow: "32+ languages",
      gorgias: "5 languages",
      winner: "replainow"
    },
    {
      feature: "AI-Technologie",
      replainow: "GPT-4.1",
      gorgias: "GPT-3.5",
      winner: "replainow"
    },
    {
      feature: "GDPR-Compliance",
      replainow: "Vollständig",
      gorgias: "Teilweise",
      winner: "replainow"
    },
    {
      feature: "Shopify-Integration",
      replainow: "Nahtlos",
      gorgias: "Komplex",
      winner: "replainow"
    },
    {
      feature: "24/7 Verfügbarkeit",
      replainow: "Ja",
      gorgias: "Ja",
      winner: "tie"
    },
    {
      feature: "Kundenzufriedenheit",
      replainow: "4.9/5",
      gorgias: "4.2/5",
      winner: "replainow"
    }
  ];

  return (
    <>
      <SEOHead
        title="Gorgias Alternative | ReplAInow - 75% günstiger, 10x schneller - ReplAInow"
        description="ReplAInow ist die bessere Gorgias Alternative: 75% Cost Savings, 3-seconds Antworten, 32+ languages, GPT-4.1. Einfache Migration, bessere Features. Now wechseln!"
        canonical="/gorgias-alternative"
        keywords="Gorgias Alternative, Gorgias Ersatz, günstiger als Gorgias, ReplAInow vs Gorgias, Kundenservice Alternative"
        generateOG={true}
        structuredData={[
          organizationSchema,
          generateFAQSchema(faqs)
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gorgias Alternative", url: "/gorgias-alternative" }
        ]}
      />

      <main className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TL;DR Box */}
          <div className="bg-red-800/30 border border-red-600/50 rounded-2xl p-6 mb-12 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-red-200 mb-4">TL;DR: ReplAInow vs Gorgias</h2>
            <p className="text-lg text-red-100 leading-relaxed">
              ReplAInow schlägt Gorgias in allen wichtigen Bereichen: 75% günstiger (€19 vs €60), 10x schneller (3s vs 2-5min), 32+ languages vs 5 languages, GPT-4.1 vs GPT-3.5, vollständige GDPR-Compliance. Einfache Migration, bessere Features, niedrigere Kosten. <a href="#/pricing" className="text-red-400 hover:underline">Now wechseln und sparen!</a>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-center mb-12 leading-tight">
            Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Gorgias Alternative</span>, die dich 75% sparen lässt
          </h1>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Warum ReplAInow statt Gorgias?</h2>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              Gorgias war einmal der Marktführer, aber ReplAInow übertrifft sie in allen wichtigen Bereichen. Bessere Technologie, niedrigere Kosten, mehr Features - alles was du brauchst für modernen Kundenservice.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-green-700/30 shadow-lg">
                <DollarSign className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">75% Cost Savings</h3>
                <p className="text-slate-300">€19 vs €60 pro Monat - spare über €500 im Jahr</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-700/30 shadow-lg">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">10x Schneller</h3>
                <p className="text-slate-300">3 seconds vs 2-5 Minuten Antwortzeit</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-700/30 shadow-lg">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">6x Mehr languages</h3>
                <p className="text-slate-300">32+ languages vs nur 5 bei Gorgias</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Direkter Vergleich: ReplAInow vs Gorgias</h2>
            <div className="bg-slate-800/50 rounded-2xl border border-blue-700/30 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-slate-700/50">
                <div className="text-lg font-bold text-slate-300">Feature</div>
                <div className="text-lg font-bold text-green-400">ReplAInow</div>
                <div className="text-lg font-bold text-red-400">Gorgias</div>
              </div>
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-slate-700/50">
                  <div className="text-slate-300 font-medium">{item.feature}</div>
                  <div className={`flex items-center ${item.winner === 'replainow' ? 'text-green-400' : item.winner === 'tie' ? 'text-blue-400' : 'text-slate-400'}`}>
                    {item.winner === 'replainow' && <CheckCircle className="w-5 h-5 mr-2" />}
                    {item.winner === 'tie' && <TrendingUp className="w-5 h-5 mr-2" />}
                    {item.replainow}
                  </div>
                  <div className={`flex items-center ${item.winner === 'gorgias' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.winner === 'gorgias' && <CheckCircle className="w-5 h-5 mr-2" />}
                    {item.winner !== 'gorgias' && <X className="w-5 h-5 mr-2" />}
                    {item.gorgias}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Migration von Gorgias zu ReplAInow</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Datenexport aus Gorgias</h3>
                    <p className="text-slate-300">Exportiere deine Kundeninteraktionen, FAQ-Inhalte und Einstellungen aus Gorgias.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. Automatischer Import</h3>
                    <p className="text-slate-300">ReplAInow importiert automatisch alle deine Daten und lernt aus deinen Gorgias-Interaktionen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Sofortiger Start</h3>
                    <p className="text-slate-300">Nach wenigen Minuten ist ReplAInow einsatzbereit und übertrifft Gorgias sofort.</p>
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
                    <span className="text-slate-300">75% Cost Savings</span>
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
              Spare 75% deiner Kosten und erlebe besseren Kundenservice. Migration in wenigen Minuten, 14 days free test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.shopify.com/replainow-ai-support" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                <DollarSign className="w-6 h-6 mr-2" />
                Now sparen und wechseln
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

export default GorgiasAlternative;