import { Button } from "@/components/ui/button";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import { organizationSchema, howToSchema, faqPageSchema } from "@/components/seo/StructuredData";
import ModernNavbar from "@/components/marketing/ModernNavbar";
import Footer from "@/components/marketing/Footer";

const WasIstAiShopifyHelpdesk = () => {
  const structuredData = [
    organizationSchema,
    howToSchema,
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Was ist AI Shopify Helpdesk? - Vollständiger Guide 2024",
      "description": "Erfahre alles über AI Shopify Helpdesk: Definition, Features, Vorteile und wie ReplAInow deinen Customer Support revolutioniert.",
      "author": {
        "@type": "Organization",
        "name": "ReplAInow"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ReplAInow",
        "logo": {
          "@type": "ImageObject",
          "url": "https://replainow.com/assets/100738e9-73dd-442e-b79a-8b064b5b00c3.png"
        }
      },
      "datePublished": "2024-12-19",
      "dateModified": "2024-12-19",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://replainow.com/was-ist-ai-shopify-helpdesk"
      }
    }
  ];

  return (
    <div>
      <AdvancedSEO
        title="Was ist AI Shopify Helpdesk? - Vollständiger Guide 2024"
        description="Erfahre alles über AI Shopify Helpdesk: Definition, Features, Vorteile und wie ReplAInow deinen Customer Support revolutioniert. ✅ GPT-4 AI ✅ 32+ languages ✅ 3 Sek Antwortzeit"
        keywords={[
          "Was ist AI Shopify Helpdesk",
          "AI Shopify Helpdesk",
          "Shopify AI Support",
          "AI Customer Support Shopify",
          "Automatisierter Shopify Support",
          "AI Helpdesk Definition",
          "Shopify Support Automatisierung"
        ]}
        canonicalUrl="https://replainow.com/was-ist-ai-shopify-helpdesk"
        structuredData={structuredData}
      />
      
      <ModernNavbar />
      
      <main className="min-h-screen bg-ultra-light">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-black mb-8 tracking-tight text-gradient-hero">
                Was ist AI Shopify Helpdesk?
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Der komplette Guide zu AI-gestütztem Customer Support für Shopify Stores - 
                Definition, Features und warum es die Zukunft des E-Commerce ist.
              </p>
              <div className="glass-card p-6 rounded-2xl inline-block">
                <p className="text-lg font-semibold text-gradient-primary">
                  <strong>Kurze Antwort:</strong> Ein AI Shopify Helpdesk automatisiert Customer Support mit GPT-4 Technologie, 
                  antwortet in 3 seconds auf alle Anfragen und steigert die Conversion um bis zu 187%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-slate-800">
                AI Shopify Helpdesk Definition
              </h2>
              
              <div className="glass-card p-8 rounded-3xl mb-12">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Ein <strong>AI Shopify Helpdesk</strong> ist eine intelligente Customer Support-Lösung, 
                  die künstliche Intelligenz (speziell GPT-4) nutzt, um automatisch auf customer queries 
                  zu antworten, Produktempfehlungen zu geben und Support-Tickets zu bearbeiten.
                </p>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-indigo-700">
                    Die 3 Kernfunktionen eines AI Shopify Helpdesks:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">🤖</span>
                      <span><strong>Automatische Antworten:</strong> AI versteht customer queries und antwortet intelligent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">🛍️</span>
                      <span><strong>Produktempfehlungen:</strong> AI kennt alle Shop-Daten und empfiehlt passende Produkte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">🌍</span>
                      <span><strong>Mehrsprachig:</strong> Unterstützung für 32+ languages ohne Übersetzungsfehler</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
                Wie funktioniert ein AI Shopify Helpdesk?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Traditioneller Support</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Kunde wartet 2-24 Stunden auf Antwort</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Support-Agent muss manuell antworten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Begrenzte Arbeitszeiten (9-17 Uhr)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <span>Hohe Personalkosten (€2000+/Monat)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card p-6 rounded-2xl border-2 border-indigo-200">
                  <h3 className="text-xl font-bold mb-4 text-indigo-700">AI Shopify Helpdesk</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Antwort in 3 seconds, 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>AI antwortet automatisch und intelligent</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Immer verfügbar, keine Feiertage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Kosten ab $19/Monat (96% günstiger)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ReplAInow Advantage */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
                Warum ReplAInow das <span className="text-gradient-primary">best</span> AI Shopify Helpdesk ist
              </h2>
              
              <div className="glass-card p-8 rounded-3xl mb-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-black text-gradient-primary mb-2">3 Sek</div>
                    <div className="text-slate-600">Durchschnittliche Antwortzeit</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gradient-primary mb-2">187%</div>
                    <div className="text-slate-600">Höhere Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gradient-primary mb-2">32+</div>
                    <div className="text-slate-600">Unterstützte languages</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">GPT-4.1 Intelligence</h3>
                    <p className="text-slate-600">
                      Nutzt die neueste AI-Technologie für menschenähnliche, kontextbewusste Antworten 
                      die deine Kunden begeistern.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Nahtlose Shopify Integration</h3>
                    <p className="text-slate-600">
                      Installation in unter 60 seconds. AI kennt automatisch alle deine Produkte, 
                      Pricing, Lagerbestände und Shop-Policies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">GDPR-Konform & Sicher</h3>
                    <p className="text-slate-600">
                      Vollständig europäische Datenschutzbestimmungen konform. 
                      Alle Daten werden verschlüsselt und sicher verarbeitet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für das best AI Shopify Helpdesk?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Über 280+ Shopify-Händler nutzen bereits ReplAInow. 
              Starte jetzt deine 14-tägige freee Testphase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="glass" 
                size="xl" 
                className="text-lg px-12 py-6 bg-white text-indigo-600 hover:bg-white hover:scale-110 font-black"
              >
                <a href="https://apps.shopify.com/replainow-ai-support">
                  🚀 Kostenlos test - Shopify App Store
                </a>
              </Button>
            </div>
            
            <p className="text-sm opacity-75 mt-6">
              ✅ 14 days free • ✅ Keine Setup-Gebühren • ✅ Jederzeit kündbar
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WasIstAiShopifyHelpdesk;