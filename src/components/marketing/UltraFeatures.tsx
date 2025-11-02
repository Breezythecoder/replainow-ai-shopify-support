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
    <section id="features" className="py-32" style={{ background: '#111218' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFFFFF' }}>
            Alles, was du
            <span className="ultra-text-neon-purple" style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}> brauchst</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                className="rounded-3xl p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(147, 51, 234, 0.2)',
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(147, 51, 234, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `
                    0 40px 100px rgba(0, 0, 0, 0.5),
                    0 0 80px rgba(147, 51, 234, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(147, 51, 234, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
                }}
              >
                {/* NEON Icon Container */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
                    boxShadow: '0 0 40px rgba(147, 51, 234, 0.5)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {feature.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#94A3B8' }}>
                  {feature.description}
                </p>
                
                {/* NEON Stats Badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-lg font-bold text-sm"
                  style={{
                    background: 'rgba(147, 51, 234, 0.2)',
                    color: '#E879F9',
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                    border: '1px solid rgba(147, 51, 234, 0.3)'
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

