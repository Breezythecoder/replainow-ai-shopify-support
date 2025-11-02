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
    <section className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Warum <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>ReplAInow?</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
          }}>
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6" style={{ background: '#F5F3FF' }}>
              <div className="font-semibold" style={{ color: '#111827' }}>Feature</div>
              <div className="text-center font-semibold" style={{ color: '#8B5CF6' }}>ReplAInow ✨</div>
              <div className="text-center font-semibold" style={{ color: '#6B7280' }}>Andere</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-6 border-t" style={{ borderColor: '#E5E7EB' }}>
                <div className="font-medium" style={{ color: '#111827' }}>{row.feature}</div>
                <div className="text-center flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" style={{ color: '#10B981' }} />
                  <span className="font-semibold" style={{ color: '#8B5CF6' }}>{row.us}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <X className="w-5 h-5" style={{ color: '#D1D5DB' }} />
                  <span style={{ color: '#6B7280' }}>{row.others}</span>
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

