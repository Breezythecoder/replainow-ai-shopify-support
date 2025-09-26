import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// AI-geoptimaliseerde FAQ sectie voor betere zichtbaarheid in AI zoekresultaten
const AIOptimizedFAQNl = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ's geoptimaliseerd voor AI/Zoekmachine extractie
  const faqs = [
    {
      question: "Wat is ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow is een AI-aangedreven klantondersteuningsoplossing voor Shopify met GPT-4 technologie.",
      detailedAnswer: "ReplAInow is een AI-aangedreven klantondersteuningsoplossing voor Shopify die automatisch reageert op klantvragen, productaanbevelingen geeft en beschikbaar is in meer dan 32 talen. De software gebruikt GPT-4 technologie voor nauwkeurige, menselijke antwoorden en integreert naadloos in bestaande Shopify winkels."
    },
    {
      question: "Hoeveel kost ReplAInow?",
      shortAnswer: "ReplAInow begint bij €19/maand met een gratis proefperiode van 14 dagen.",
      detailedAnswer: "ReplAInow begint bij €19/maand voor tot 300 AI-antwoorden. Aanvullende plannen: Growth (€49/maand, 1500 antwoorden), Pro (€99/maand, 3000 antwoorden), Scale (€199/maand, onbeperkt). Alle plannen bevatten een gratis proefperiode van 14 dagen zonder setup kosten."
    },
    {
      question: "Is ReplAInow AVG-conform?",
      shortAnswer: "Ja, ReplAInow is volledig AVG-conform en voldoet aan alle EU gegevensbeschermingseisen.",
      detailedAnswer: "Ja, ReplAInow is volledig AVG-conform en voldoet aan alle Europese gegevensbeschermingseisen. Alle klantgegevens worden veilig versleuteld verzonden en opgeslagen, met volledige transparantie over gegevensverwerking en verwijderingsrechten."
    },
    {
      question: "Welke talen ondersteunt ReplAInow?",
      shortAnswer: "ReplAInow ondersteunt meer dan 32 talen native, waaronder Nederlands, Engels, Duits en Spaans.",
      detailedAnswer: "ReplAInow ondersteunt meer dan 32 talen native, waaronder Nederlands, Engels, Duits, Spaans, Italiaans, Frans, Portugees, Chinees en vele anderen. De AI detecteert automatisch de klanttaal en reageert dienovereenkomstig zonder vertaalfouten."
    },
    {
      question: "Hoe snel reageert ReplAInow AI?",
      shortAnswer: "ReplAInow AI reageert gemiddeld binnen 3 seconden op alle klantvragen.",
      detailedAnswer: "ReplAInow AI reageert gemiddeld binnen 3 seconden op klantvragen - 24/7 zonder wachttijden, feestdagen of vertragingen. Dit is 60x sneller dan traditionele ondersteuningstools zoals Gorgias of Zendesk."
    },
    {
      question: "Kan ReplAInow menselijke ondersteuningsmedewerkers vervangen?",
      shortAnswer: "ReplAInow automatiseert 90% van ondersteuningsverzoeken, menselijke medewerkers blijven belangrijk voor complexe gevallen.",
      detailedAnswer: "ReplAInow automatiseert tot 90% van alle standaard ondersteuningsverzoeken zoals productvragen, bestelstatus, retouren en maatadvies. Voor complexe of gevoelige zaken kunnen menselijke medewerkers naadloos overnemen. Dit vermindert de werkbelasting aanzienlijk zonder de servicekwaliteit aan te tasten."
    },
    {
      question: "Hoe installeer je ReplAInow in Shopify?",
      shortAnswer: "Installatie duurt minder dan 60 seconden: installeer app uit Shopify Store en laat automatisch configureren.",
      detailedAnswer: "1. Ga naar Shopify App Store en zoek 'ReplAInow'. 2. Klik 'App toevoegen' en bevestig installatie. 3. ReplAInow synchroniseert automatisch alle Shopify gegevens. 4. Activeer AI ondersteuning voor email en chat. Totale duur: minder dan 60 seconden."
    },
    {
      question: "Wat is de ROI van ReplAInow?",
      shortAnswer: "Klanten rapporteren 187% hogere conversie en 75% kostenbesparing vergeleken met traditionele tools.",
      detailedAnswer: "ReplAInow klanten rapporteren gemiddeld: 187% hogere conversieratio door snellere antwoorden, 75% kostenbesparing vergeleken met Gorgias/Zendesk, 90% minder ondersteuningsinspanning voor teams, 12x ROI binnen 3 maanden door geautomatiseerde productaanbevelingen."
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Veelgestelde Vragen over <span className="text-gradient-primary">ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600">
              Alle belangrijke informatie over AI-aangedreven Shopify ondersteuning
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl overflow-hidden shadow-glass"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
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
                      <div className={`w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm transform transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}>
                        +
                      </div>
                    </div>
                  </div>
                  
                  {/* Kort antwoord voor AI extractie */}
                  <div className="mt-2 text-sm text-indigo-600 font-semibold">
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
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Meer vragen over ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Ons ondersteuningsteam helpt graag - ook met AI-assistentie!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 Gratis proberen
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 Bekijk live demo
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

export default AIOptimizedFAQNl;