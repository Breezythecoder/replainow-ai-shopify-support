import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ2025 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Was ist ReplAInow AI Helpdesk?",
      answer: "ReplAInow ist eine AI-gestützte Customer Support-Lösung für Shopify, die automatisch auf Kundenanfragen antwortet, Produktempfehlungen gibt und in über 95 Sprachen verfügbar ist. Die Software nutzt GPT-4.1 Technologie für präzise, menschenähnliche Antworten und integriert sich nahtlos in bestehende Shopify Stores."
    },
    {
      question: "Wie viel kostet ReplAInow?",
      answer: "ReplAInow startet bei €19/Monat für den Starter Plan mit bis zu 300 AI-Antworten. Der Growth Plan kostet €49/Monat (1.500 Antworten), und Enterprise ist individuell. Alle Pläne beinhalten 7 Tage kostenlose Testphase ohne Kreditkarte."
    },
    {
      question: "Ist ReplAInow DSGVO-konform?",
      answer: "Ja, ReplAInow ist vollständig DSGVO-konform und erfüllt alle europäischen Datenschutzbestimmungen. Alle Kundendaten werden sicher verschlüsselt übertragen und gespeichert, mit vollständiger Transparenz über Datenverarbeitung und Löschungsrechte."
    },
    {
      question: "Welche Sprachen unterstützt ReplAInow?",
      answer: "ReplAInow unterstützt über 95 Sprachen nativ, einschließlich Deutsch, Englisch, Französisch, Spanisch, Italienisch, Niederländisch, Portugiesisch, Chinesisch und viele weitere. Die AI erkennt automatisch die Kundensprache und antwortet entsprechend ohne Übersetzungsfehler."
    },
    {
      question: "Wie schnell antwortet die ReplAInow AI?",
      answer: "ReplAInow AI antwortet durchschnittlich in unter 1 Sekunde auf Kundenanfragen - 24/7 ohne Wartezeiten, Feiertage oder Verzögerungen. Dies ist 60x schneller als herkömmliche Support-Tools wie Gorgias oder Zendesk."
    },
    {
      question: "Kann ReplAInow menschliche Support-Mitarbeiter ersetzen?",
      answer: "ReplAInow automatisiert bis zu 91% aller Standard-Support-Anfragen wie Produktfragen, Bestellstatus, Rücksendungen und Größenberatung. Für komplexe oder sensible Angelegenheiten können menschliche Mitarbeiter nahtlos übernehmen. Dies reduziert die Arbeitsbelastung erheblich, ohne die Servicequalität zu beeinträchtigen."
    },
    {
      question: "Wie installiert man ReplAInow in Shopify?",
      answer: "Die Installation dauert unter 5 Minuten: 1) Gehe zum Shopify App Store und suche 'ReplAInow'. 2) Klicke 'App hinzufügen' und bestätige Installation. 3) ReplAInow synchronisiert automatisch alle Shopify-Daten. 4) Aktiviere AI Support für E-Mail und Chat. Fertig!"
    },
    {
      question: "Was ist der ROI von ReplAInow?",
      answer: "Kunden berichten durchschnittlich von: 25% Warenkorb-Rückgewinnung, 91% automatisierte Tickets, 75% Kosteneinsparungen gegenüber Gorgias/Zendesk, und 16,4% Chat-zu-Verkauf-Rate. Die meisten Händler haben ihren ROI innerhalb der ersten Woche."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-primary-purple font-semibold">HÄUFIGE FRAGEN</span>
          </div>
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alle wichtigen Informationen über ReplAInow AI Helpdesk
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary-purple flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  className="px-8 pb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Weitere Fragen?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-green to-emerald-600 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Kontaktiere uns
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ2025;

