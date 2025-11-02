import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const UltraProblemSolution = () => {
  return (
    <section className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Dein Shop schläft nie.
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dein Support auch nicht.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without */}
          <motion.div
            className="rounded-2xl p-10"
            style={{
              background: '#FFFFFF',
              border: '2px solid #FCA5A5',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.1)'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6">😴</div>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#B91C1C' }}>Ohne ReplAInow</h3>
            
            <ul className="space-y-4">
              {[
                'Besucher verlassen verwirrt',
                'Warenkorbabbruch 70%',
                'Tickets häufen sich',
                'Verpasste Verkäufe',
                'Hohe Kosten'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span style={{ color: '#6B7280' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            className="rounded-2xl p-10 relative"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              border: 'none',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span 
                className="px-6 py-2 rounded-full font-semibold text-sm"
                style={{
                  background: 'white',
                  color: '#7C3AED',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)'
                }}
              >
                ✨ Die Lösung
              </span>
            </div>

            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-xl font-bold text-white mb-6">Mit ReplAInow</h3>
            
            <ul className="space-y-4">
              {[
                'Antworten in <1 Sekunde',
                'Rettet 25% der Warenkörbe',
                'Löst 91% automatisch',
                '16.4% Chat-zu-Verkauf',
                '75% Kostenersparnis'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-200 flex-shrink-0 mt-0.5" />
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

