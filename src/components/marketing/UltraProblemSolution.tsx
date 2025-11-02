import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const UltraProblemSolution = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      {/* Subtle Purple Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Dein Shop schläft nie.
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dein Support auch nicht.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without */}
          <motion.div
            className="rounded-3xl p-10"
            style={{
              background: 'white',
              border: '2px solid rgba(239, 68, 68, 0.2)',
              boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6">😴</div>
            <h3 className="text-2xl font-bold text-red-900 mb-6">Ohne ReplAInow</h3>
            
            <ul className="space-y-4">
              {[
                'Besucher verlassen verwirrt',
                'Warenkorbabbruch 70%',
                'Tickets häufen sich',
                'Verpasste Verkäufe',
                'Hohe Kosten'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            className="rounded-3xl p-10 relative"
            style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              border: '2px solid rgba(107, 70, 193, 0.2)',
              boxShadow: '0 20px 60px rgba(107, 70, 193, 0.3)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span 
                className="px-6 py-2 rounded-full font-bold text-sm"
                style={{
                  background: 'white',
                  color: '#9333EA',
                  boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)'
                }}
              >
                ✨ Die Lösung
              </span>
            </div>

            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-6">Mit ReplAInow</h3>
            
            <ul className="space-y-4">
              {[
                'Antworten in <1 Sekunde',
                'Rettet 25% der Warenkörbe',
                'Löst 91% automatisch',
                '16.4% Chat-zu-Verkauf',
                '75% Kostenersparnis'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UltraProblemSolution;

