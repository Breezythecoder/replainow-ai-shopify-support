import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const UltraComparison = () => {
  const rows = [
    { feature: "AI Technologie", us: "GPT-4.1", others: "Basic" },
    { feature: "Antwortzeit", us: "<1s", others: "2-10min" },
    { feature: "Sprachen", us: "95+", others: "10-20" },
    { feature: "Preis", us: "€19", others: "€60-115" },
    { feature: "Setup", us: "5min", others: "Tage-Wochen" },
  ];

  return (
    <section className="py-32" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Warum <span style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>ReplAInow?</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{
            background: 'white',
            border: '2px solid rgba(107, 70, 193, 0.1)',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6" style={{ background: 'rgba(107, 70, 193, 0.05)' }}>
              <div className="font-bold text-ultra-black">Feature</div>
              <div className="text-center font-bold" style={{ color: '#9333EA' }}>ReplAInow ✨</div>
              <div className="text-center font-bold text-gray-500">Andere</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-6 border-t border-gray-100">
                <div className="font-semibold text-gray-700">{row.feature}</div>
                <div className="text-center flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#10B981' }} />
                  <span className="font-bold" style={{ color: '#9333EA' }}>{row.us}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraComparison;

