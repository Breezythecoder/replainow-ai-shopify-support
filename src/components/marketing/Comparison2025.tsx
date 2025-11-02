import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const Comparison2025 = () => {
  const comparisons = [
    {
      feature: "AI Technologie",
      replainow: { text: "GPT-4.1 neueste Generation", icon: true },
      gorgias: { text: "Basis-Automation", icon: false },
      zendesk: { text: "Veraltete AI", icon: false },
      intercom: { text: "Limitierte AI", icon: false }
    },
    {
      feature: "Antwortzeit",
      replainow: { text: "< 1 Sekunde", icon: true },
      gorgias: { text: "2-5 Minuten", icon: false },
      zendesk: { text: "10+ Minuten", icon: false },
      intercom: { text: "5-10 Minuten", icon: false }
    },
    {
      feature: "Sprachen",
      replainow: { text: "95+ nativ", icon: true },
      gorgias: { text: "10 Sprachen basic", icon: false },
      zendesk: { text: "20 Sprachen basic", icon: false },
      intercom: { text: "15 Sprachen basic", icon: false }
    },
    {
      feature: "Shopify Integration",
      replainow: { text: "Echtzeit Sync", icon: true },
      gorgias: { text: "Manueller Import", icon: false },
      zendesk: { text: "Komplexes Setup", icon: false },
      intercom: { text: "Basis-Anbindung", icon: false }
    },
    {
      feature: "Preis / Monat",
      replainow: { text: "€19 pauschal", icon: true },
      gorgias: { text: "€60+ pro Agent", icon: false },
      zendesk: { text: "€115+ pro Agent", icon: false },
      intercom: { text: "€74+ pro Seat", icon: false }
    },
    {
      feature: "Setup Zeit",
      replainow: { text: "5 Minuten", icon: true },
      gorgias: { text: "2-3 Tage", icon: false },
      zendesk: { text: "2 Wochen", icon: false },
      intercom: { text: "1 Woche", icon: false }
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-primary-purple font-semibold">⚔ VERGLEICH</span>
          </div>
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Warum ReplAInow die beste Wahl ist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direkter Vergleich mit Gorgias, Intercom & Zendesk
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-6xl mx-auto overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-6 bg-gray-50 border-b-2 border-gray-200">
              <div className="font-bold text-gray-900">Feature</div>
              <div className="text-center">
                <div className="font-bold text-primary-purple text-lg mb-1">ReplAInow</div>
                <div className="text-xs text-green-600 font-semibold">✨ Empfohlen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700">Gorgias</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700">Zendesk</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-700">Intercom</div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-5 gap-4 p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="font-semibold text-gray-900">{row.feature}</div>
                
                {/* ReplAInow */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-sm font-medium text-gray-900">{row.replainow.text}</span>
                  </div>
                </div>

                {/* Competitors */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-2">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-600">{row.gorgias.text}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-2">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-600">{row.zendesk.text}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-2">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-600">{row.intercom.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-6 text-center border-2 border-green-200">
            <div className="text-4xl font-bold text-accent-green mb-2">75%</div>
            <div className="text-gray-600 font-medium">Günstiger</div>
            <p className="text-sm text-gray-500 mt-2">Spare über €500/Jahr</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border-2 border-blue-200">
            <div className="text-4xl font-bold text-accent-blue mb-2">60×</div>
            <div className="text-gray-600 font-medium">Schneller</div>
            <p className="text-sm text-gray-500 mt-2">&lt;1s statt Minuten</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border-2 border-purple-200">
            <div className="text-4xl font-bold text-primary-purple mb-2">5×</div>
            <div className="text-gray-600 font-medium">Mehr Sprachen</div>
            <p className="text-sm text-gray-500 mt-2">95+ vs ~20</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison2025;

