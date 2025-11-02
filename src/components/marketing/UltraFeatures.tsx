import { motion } from "framer-motion";
import { Brain, MessageSquare, Globe2, BarChart3 } from "lucide-react";

const UltraFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligente Produktempfehlungen",
      description: "AI versteht Kontext und empfiehlt perfekt passende Produkte",
      stats: "+23% AOV"
    },
    {
      icon: MessageSquare,
      title: "Instant Support",
      description: "Beantwortet Fragen zu Bestellungen, Retouren, FAQ automatisch",
      stats: "91% gelöst"
    },
    {
      icon: Globe2,
      title: "95+ Sprachen",
      description: "Perfekte Antworten in Kundensprache ohne Übersetzungsfehler",
      stats: "Weltweit"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Echtzeit-Insights zu Conversions und Customer Journey",
      stats: "Datengetrieben"
    }
  ];

  return (
    <section id="features" className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Alles, was du
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}> brauchst</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                className="rounded-2xl p-10"
                style={{
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#8B5CF6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                {/* Clean Icon Container */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>
                  {feature.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  {feature.description}
                </p>
                
                {/* Clean Stats Badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-lg font-semibold text-sm"
                  style={{
                    background: '#F5F3FF',
                    color: '#8B5CF6',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  {feature.stats}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraFeatures;

