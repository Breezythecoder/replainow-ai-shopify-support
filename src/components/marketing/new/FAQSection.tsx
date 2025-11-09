import { motion, AnimatePresence } from "framer-motion";
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

        {/* FAQ Accordion - Glasmorphic */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-float transition-all duration-500 border-2 border-white/40 hover:border-purple-200/60"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/50 transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-900 pr-8 group-hover:text-purple-600 transition-colors">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 bg-gradient-to-b from-white/50 to-transparent">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;









