import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Wie lange dauert die Installation?",
      a: "Die Installation dauert unter 60 Sekunden. Ein Klick im Shopify App Store, und ReplAInow beginnt automatisch, Ihre Shop-Daten zu importieren. Keine manuelle Konfiguration erforderlich."
    },
    {
      q: "Muss ich die KI trainieren?",
      a: "Nein! Die KI lernt automatisch aus Ihren Shopify-Daten. Sie kennt sofort alle Produkte, Richtlinien, Bestellungen und Kundendaten. Null Setup-Zeit, null Wartung."
    },
    {
      q: "Kann ich die KI-Antworten vor dem Versand prüfen?",
      a: "Ja! Sie kontrollieren den Auto-Send-Schwellenwert. Setzen Sie ihn auf 90 für konservativ (mehr manuelle Prüfungen) oder 80 für ausgewogen (mehr Automatisierung). AI-Antworten unter dem Schwellenwert landen in der Prüfwarteschlange."
    },
    {
      q: "Welche Sprachen werden unterstützt?",
      a: "Die KI unterstützt 100+ Sprachen und erkennt automatisch, in welcher Sprache der Kunde schreibt. Deutsch, Englisch, Französisch, Spanisch, Arabisch, Chinesisch – alles automatisch, ohne Konfiguration."
    },
    {
      q: "Wie funktioniert die Übergabe an menschliche Agenten?",
      a: "Die KI weiß, wann sie nicht helfen kann. Bei komplexen Fragen, Beschwerden oder wenn der Kunde explizit nach einem Menschen fragt, übergibt die KI nahtlos an Ihr Team – mit vollem Kontext und gesammelten Informationen."
    },
    {
      q: "Werden meine Kundendaten sicher gespeichert?",
      a: "Ja! Wir sind ISO 27001 zertifiziert und DSGVO-konform. Alle Daten werden verschlüsselt gespeichert, und Sie haben volle Kontrolle über Ihre Daten. Uninstall = komplette Datenlöschung."
    },
    {
      q: "Kann ich das Chat-Widget anpassen?",
      a: "Ja! Sie können Ihr Logo hochladen, Markenfarben setzen, die KI-Begrüßung anpassen und die Widget-Position wählen. Vollständige Anpassung an Ihr Branding."
    },
    {
      q: "Was passiert, wenn ich kündige?",
      a: "Keine Vertragsbindung – Sie können jederzeit kündigen. Bei Uninstall werden alle Ihre Daten automatisch gelöscht. Keine versteckten Kosten, keine Kündigungsfrist."
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Häufig gestellte <span className="font-semibold">Fragen</span>
          </h2>
          <p className="text-lg text-gray-600">
            Alles, was Sie wissen müssen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-purple-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown className={`
                  w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300
                  ${openIndex === i ? 'rotate-180' : ''}
                `} />
              </button>
              
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;









