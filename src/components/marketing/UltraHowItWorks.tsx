import { motion } from "framer-motion";
import { Download, Settings, TrendingUp } from "lucide-react";

const UltraHowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Installation",
      description: "5 Minuten Shopify Setup",
      detail: "Klick, Sync, Fertig"
    },
    {
      number: "02",
      icon: Settings,
      title: "Anpassen",
      description: "AI lernt deine Marke",
      detail: "Automatisch & Intelligent"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Wachsen",
      description: "Mehr Umsatz, weniger Arbeit",
      detail: "AI arbeitet 24/7"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: '#111218' }}>
      {/* NEON Purple Mesh */}
      <div className="absolute inset-0">
        <div style={{
          background: `radial-gradient(at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4" style={{ color: '#FFFFFF' }}>
            So einfach 
            <span className="ultra-text-neon-purple" style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}> geht's</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            In 3 Schritten zu automatisiertem Support
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* DARK GLASS CARD */}
                <div 
                  className="p-10 text-center group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(147, 51, 234, 0.2)',
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.4),
                      0 0 40px rgba(147, 51, 234, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05)
                    `,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
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
                  {/* Step Number - NEON */}
                  <div className="text-6xl font-black mb-6" style={{ color: '#9333EA', opacity: 0.3 }}>
                    {step.number}
                  </div>

                  {/* Icon - NEON GLOW */}
                  <div 
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
                      boxShadow: '0 0 40px rgba(147, 51, 234, 0.5)'
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                    {step.title}
                  </h3>
                  <p className="text-lg font-semibold mb-2 ultra-text-neon-purple" style={{
                    background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {step.description}
                  </p>
                  <p style={{ color: '#94A3B8' }}>
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraHowItWorks;

