import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const UltraFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Was ist ReplAInow?", a: "Die intelligenteste AI-Helpdesk Lösung für Shopify mit GPT-4.1 Technologie. Automatische Antworten in 95+ Sprachen." },
    { q: "Wie viel kostet es?", a: "Ab €19/Monat. 7 Tage kostenlos testen, keine Kreditkarte erforderlich." },
    { q: "Wie schnell antwortet die AI?", a: "Unter 1 Sekunde - 60x schneller als traditionelle Support-Tools." },
    { q: "Ist es DSGVO-konform?", a: "Ja, 100% DSGVO-konform mit EU-Datenschutz." },
    { q: "Welche Sprachen?", a: "95+ Sprachen nativ ohne Übersetzungsfehler." },
    { q: "Wie lange dauert Setup?", a: "5 Minuten. Einfache 1-Klick Installation aus Shopify App Store." }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Häufige Fragen
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                border: '2px solid rgba(107, 70, 193, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-ultra-black pr-4">{faq.q}</h3>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#6B46C1' }}
                />
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraFAQ;

