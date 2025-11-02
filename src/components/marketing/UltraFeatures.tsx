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
    <section id="features" className="py-32" style={{ background: '#F5F3FF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Alles, was du
            <span style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
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
                className="rounded-3xl p-10"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(30px)',
                  border: '2px solid rgba(107, 70, 193, 0.1)',
                  boxShadow: '0 20px 60px rgba(107, 70, 193, 0.08)',
                  transition: 'all 0.4s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 40px 100px rgba(107, 70, 193, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(107, 70, 193, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-ultra-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div 
                  className="inline-block px-4 py-2 rounded-lg font-bold text-sm"
                  style={{
                    background: 'rgba(107, 70, 193, 0.1)',
                    color: '#6B46C1'
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

