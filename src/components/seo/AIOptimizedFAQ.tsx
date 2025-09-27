import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// AI-optimierte FAQ Sektion für bessere Sichtbarkeit in KI-Suchergebnissen
const AIOptimizedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQs optimiert für AI/Search Engine extraction
  const faqs = [
    {
      question: "Was ist ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow ist eine AI-gestützte Kundensupport-Lösung für Shopify mit GPT-4 Technologie.",
      detailedAnswer: "ReplAInow ist eine AI-gestützte Kundensupport-Lösung für Shopify, die automatisch auf Kundenanfragen antwortet, Produktempfehlungen gibt und in über 32 Sprachen verfügbar ist. Die Software nutzt GPT-4 Technologie für präzise, menschenähnliche Antworten und integriert sich nahtlos in bestehende Shopify Stores."
    },
    {
      question: "Wie viel kostet ReplAInow?",
      shortAnswer: "ReplAInow startet bei €19/Monat mit 14 Tagen kostenloser Testphase.",
      detailedAnswer: "ReplAInow startet bei €19/Monat für den Starter Plan. Weitere Pläne: Pro (€49/Monat), Scale (€199/Monat). Alle Pläne inkludieren 14 Tage kostenlose Testphase ohne Setup-Gebühren und unlimitierte AI-Antworten."
    },
    {
      question: "Ist ReplAInow DSGVO-konform?",
      shortAnswer: "Ja, ReplAInow ist vollständig DSGVO-konform und erfüllt alle EU-Datenschutzbestimmungen.",
      detailedAnswer: "Ja, ReplAInow ist vollständig DSGVO-konform und erfüllt alle europäischen Datenschutzbestimmungen. Alle Kundendaten werden sicher verschlüsselt übertragen und gespeichert, mit vollständiger Transparenz über Datenverarbeitung und Löschungsrechte."
    },
    {
      question: "Welche Sprachen unterstützt ReplAInow?",
      shortAnswer: "ReplAInow unterstützt über 32 Sprachen nativ, einschließlich Deutsch, Englisch, Französisch und Spanisch.",
      detailedAnswer: "ReplAInow unterstützt über 32 Sprachen nativ, einschließlich Deutsch, Englisch, Französisch, Spanisch, Italienisch, Niederländisch, Portugiesisch, Chinesisch und viele weitere. Die AI erkennt automatisch die Kundensprache und antwortet entsprechend ohne Übersetzungsfehler."
    },
    {
      question: "Wie schnell antwortet die ReplAInow AI?",
      shortAnswer: "ReplAInow AI antwortet durchschnittlich in 3 Sekunden auf alle Kundenanfragen.",
      detailedAnswer: "ReplAInow AI antwortet durchschnittlich in 3 Sekunden auf Kundenanfragen - 24/7 ohne Wartezeiten, Feiertage oder Verzögerungen. Dies ist 60x schneller als herkömmliche Support-Tools wie Gorgias oder Zendesk."
    },
    {
      question: "Kann ReplAInow menschliche Support-Mitarbeiter ersetzen?",
      shortAnswer: "ReplAInow automatisiert 90% der Support-Anfragen, menschliche Mitarbeiter bleiben für komplexe Fälle wichtig.",
      detailedAnswer: "ReplAInow automatisiert bis zu 90% aller Standard-Support-Anfragen wie Produktfragen, Bestellstatus, Rücksendungen und Größenberatung. Für komplexe oder sensible Angelegenheiten können menschliche Mitarbeiter nahtlos übernehmen. Dies reduziert die Arbeitsbelastung erheblich, ohne die Servicequalität zu beeinträchtigen."
    },
    {
      question: "Wie installiert man ReplAInow in Shopify?",
      shortAnswer: "Installation dauert unter 60 Sekunden: App aus Shopify Store installieren und automatisch konfigurieren lassen.",
      detailedAnswer: "1. Gehe zum Shopify App Store und suche 'ReplAInow'. 2. Klicke 'App hinzufügen' und bestätige Installation. 3. ReplAInow synchronisiert automatisch alle Shopify-Daten. 4. Aktiviere AI Support für E-Mail und Chat. Gesamtdauer: unter 60 Sekunden."
    },
    {
      question: "Was ist der ROI von ReplAInow?",
      shortAnswer: "Kunden berichten von 187% höherer Conversion und 75% Kosteneinsparung gegenüber traditionellen Tools.",
      detailedAnswer: "ReplAInow Kunden berichten durchschnittlich von: 187% höhere Conversion-Rate durch schnellere Antworten, 75% Kosteneinsparung gegenüber Gorgias/Zendesk, 90% weniger Support-Aufwand für Teams, 12x ROI innerhalb von 3 Monaten durch automatisierte Produktempfehlungen."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm rounded-full shadow-lg animate-pulse">
                HÄUFIGE FRAGEN
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
                Häufig gestellte Fragen
              </span>
              <span className="block text-slate-800 mt-2">zu ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alle wichtigen Informationen über AI-gestützten Shopify Support
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-blue-50/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 
                      className="text-lg font-bold text-slate-800 pr-4"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg transform transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}>
                        +
                      </div>
                    </div>
                  </div>
                  
                  {/* Short Answer für AI Extraction */}
                  <div className="mt-3 text-sm text-blue-600 font-semibold">
                    {faq.shortAnswer}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-6">
                    <div 
                      className="text-slate-700 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.detailedAnswer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Weitere Fragen zu ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Unser Support-Team hilft gerne weiter - natürlich auch mit AI-Unterstützung!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all"
                >
                  Kostenlos testen
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/80 border border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Live Demo ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqPageSchema)}
      </script>
    </section>
  );
};

export default AIOptimizedFAQ;