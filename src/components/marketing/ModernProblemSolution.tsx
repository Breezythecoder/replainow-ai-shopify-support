import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { t } from "@/i18n";

const ModernProblemSolution = () => {
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
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            Dein Shop schläft nie. Dein Verkaufsteam auch nicht.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sieh den Unterschied zwischen traditionellem Support und AI-Power
          </p>
        </motion.div>
        
        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without ReplAInow */}
          <motion.div
            className="bg-red-50 rounded-2xl p-8 border-2 border-red-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">😴</div>
              <h3 className="text-2xl font-bold text-red-900">
                Während Du schläfst
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Besucher verlassen verwirrt die Seite</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Warenkorbabbruch bei 70%</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Support-Tickets häufen sich</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Verpasste Verkaufschancen</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hohe Support-Kosten</span>
              </li>
            </ul>
          </motion.div>
          
          {/* With ReplAInow */}
          <motion.div
            className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                ✨ Die Lösung
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🚀</div>
              <h3 className="text-2xl font-bold text-green-900">
                ReplAInow arbeitet
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Antworten in &lt;1 Sekunde</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rettet 25% der Warenkörbe</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Löst 91% sofort</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">16,4% Chat-zu-Verkauf-Rate</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">75% Kostenersparnis</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Über <span className="font-bold text-primary-purple">50.000 Shopify-Händler</span> nutzen bereits ReplAInow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProblemSolution;
