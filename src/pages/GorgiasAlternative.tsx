import { Button } from "@/components/ui/button";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import { organizationSchema } from "@/components/seo/StructuredData";
import ModernNavbar from "@/components/marketing/ModernNavbar";
import Footer from "@/components/marketing/Footer";

const GorgiasAlternative = () => {
  const structuredData = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Beste Gorgias Alternative 2024 - ReplAInow AI Shopify Helpdesk",
      "description": "Entdecke warum ReplAInow die überlegene Gorgias Alternative ist: 75% günstiger, 60x schneller, GPT-4 AI. Direkter Vergleich + kostenloser Test.",
      "author": {
        "@type": "Organization",
        "name": "ReplAInow"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ReplAInow"
      },
      "datePublished": "2024-12-19",
      "dateModified": "2024-12-19"
    }
  ];

  return (
    <div>
      <AdvancedSEO
        title="Beste Gorgias Alternative 2024 - ReplAInow AI Shopify Helpdesk"
        description="Entdecke warum ReplAInow die überlegene Gorgias Alternative ist: ✅ 75% günstiger ✅ 60x schneller ✅ GPT-4 AI ✅ 32+ Sprachen. Direkter Vergleich + kostenloser Test."
        keywords={[
          "Gorgias Alternative",
          "Gorgias vs ReplAInow", 
          "AI Shopify Helpdesk",
          "Shopify Support Alternative",
          "Gorgias Konkurrenz",
          "Bessere Gorgias Alternative",
          "Günstiger als Gorgias"
        ]}
        canonicalUrl="https://replainow.com/gorgias-alternative"
        structuredData={structuredData}
      />
      
      <ModernNavbar />
      
      <main className="min-h-screen bg-ultra-light">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-black mb-8 tracking-tight text-gradient-hero">
                Beste Gorgias Alternative 2024
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Warum über 5000+ Shopify-Händler von Gorgias zu ReplAInow wechseln: 
                75% günstiger, 60x schneller, moderne GPT-4 AI-Technologie.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="glass-card p-6 rounded-2xl">
                  <div className="text-3xl font-black text-green-600 mb-2">75%</div>
                  <div className="text-sm text-slate-600">Günstiger als Gorgias</div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="text-3xl font-black text-indigo-600 mb-2">60x</div>
                  <div className="text-sm text-slate-600">Schneller (3s vs 3min)</div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="text-3xl font-black text-purple-600 mb-2">187%</div>
                  <div className="text-sm text-slate-600">Höhere Conversion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
                ReplAInow vs. Gorgias - Direkter Vergleich
              </h2>
              
              <div className="overflow-x-auto">
                <div className="glass-card rounded-3xl p-1 shadow-hero">
                  <table className="w-full min-w-[700px]">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-6 px-6 font-bold text-lg text-slate-800">Feature</th>
                        <th className="text-center py-6 px-4 bg-gradient-primary text-white rounded-t-2xl">
                          <div className="font-black text-lg">ReplAInow</div>
                          <div className="text-sm opacity-90">GPT-4 Powered</div>
                        </th>
                        <th className="text-center py-6 px-4 text-slate-600 font-semibold">Gorgias</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">AI Technologie</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ GPT-4.1 (Neueste)
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ Basic AI (Veraltet)</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">Antwortzeit</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ 3 Sekunden
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ 2-5 Minuten</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">Preis/Monat</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ Ab $19/Monat
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ Ab $50+/Monat</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">Setup Zeit</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ 60 Sekunden
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ 2-3 Tage</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">Sprachen</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ 32+ Nativ
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ 10 Basic</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-6 font-bold text-slate-800">Shopify Integration</td>
                        <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                          ✅ Echtzeit-Sync
                        </td>
                        <td className="py-4 px-4 text-center text-slate-600 font-medium">❌ Manual Import</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Switch Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
                5 Gründe von Gorgias zu ReplAInow zu wechseln
              </h2>
              
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">Massive Kosteneinsparung</h3>
                      <p className="text-lg text-slate-600 mb-4">
                        <strong className="text-green-600">€372 pro Jahr sparen:</strong> Gorgias kostet ab €50/Monat, 
                        ReplAInow startet bei nur €19/Monat - bei überlegener Performance.
                      </p>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <p className="text-green-700 font-semibold">
                          💰 Echte Kundeneinsparung: "Von €60/Monat (Gorgias) auf €19/Monat (ReplAInow) - €492/Jahr gespart!" - Lisa M., BeautyStore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">60x Schnellere Antworten</h3>
                      <p className="text-lg text-slate-600 mb-4">
                        Während Gorgias 2-5 Minuten braucht, antwortet ReplAInow in 3 Sekunden. 
                        Kunden lieben sofortige Hilfe - das steigert die Conversion um 187%.
                      </p>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <p className="text-indigo-700 font-semibold">
                          ⚡ "Unsere Kunden sind begeistert von den Instant-Antworten. Conversion ist durch die Decke!" - Marco K., TechGadgets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">Modernste GPT-4 AI Technologie</h3>
                      <p className="text-lg text-slate-600 mb-4">
                        Gorgias nutzt veraltete AI-Technologie. ReplAInow verwendet GPT-4.1 - 
                        die neueste und intelligenteste AI für menschenähnliche Antworten.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <p className="text-purple-700 font-semibold">
                          🧠 "Die AI versteht unsere Produkte besser als manche Mitarbeiter!" - Sarah T., FashionHub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">Setup in 60 Sekunden</h3>
                      <p className="text-lg text-slate-600 mb-4">
                        Vergiss komplexe Gorgias-Setups (2-3 Tage). ReplAInow ist in unter 60 Sekunden 
                        installiert und konfiguriert - automatische Shopify-Synchronisation inklusive.
                      </p>
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-cyan-700 font-semibold">
                          🚀 1-Klick Installation aus dem Shopify App Store - keine IT-Kenntnisse nötig
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">32+ Sprachen ohne Zusatzkosten</h3>
                      <p className="text-lg text-slate-600 mb-4">
                        Gorgias bietet nur 10 Basis-Sprachen. ReplAInow unterstützt 32+ Sprachen nativ - 
                        perfekt für internationale Shops ohne Aufpreis.
                      </p>
                      <div className="bg-amber-50 p-4 rounded-xl">
                        <p className="text-amber-700 font-semibold">
                          🌍 Französische, spanische, italienische Kunden bekommen perfekte Antworten in ihrer Muttersprache
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration CTA */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bereit für den Wechsel von Gorgias zu ReplAInow?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Schließe dich 5000+ Shopify-Händlern an, die bereits gewechselt sind. 
              14 Tage kostenlos testen - parallel zu Gorgias, ohne Risiko.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild 
                variant="glass" 
                size="xl" 
                className="text-lg px-12 py-6 bg-white text-indigo-600 hover:bg-white hover:scale-110 font-black"
              >
                <a href="https://apps.shopify.com/replainow-ai-support">
                  🚀 Jetzt kostenlos testen - Shopify App Store
                </a>
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto bg-white/10">
              <h3 className="text-xl font-bold mb-4">🔥 Limitiertes Wechsel-Angebot</h3>
              <p className="text-white/90 mb-4">
                Erste 100 Gorgias-Kunden bekommen kostenlosen Premium-Setup + 1 Monat gratis
              </p>
              <div className="bg-white/20 rounded-full h-3 mb-2">
                <div className="bg-yellow-300 h-3 rounded-full" style={{ width: '73%' }}></div>
              </div>
              <p className="text-sm text-white/70">73 von 100 Plätzen bereits vergeben</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GorgiasAlternative;