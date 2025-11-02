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
    <section className="py-32 relative overflow-hidden" style={{ background: '#F5F3FF' }}>
      {/* Subtle Purple Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div style={{
          background: `radial-gradient(at 50% 50%, rgba(107, 70, 193, 0.08) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                {/* Glass Card */}
                <div 
                  className="ultra-glass-card p-10 text-center group cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '24px',
                    border: '2px solid rgba(107, 70, 193, 0.1)',
                    boxShadow: '0 20px 60px rgba(107, 70, 193, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 40px 100px rgba(107, 70, 193, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(107, 70, 193, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.1)';
                  }}
                >
                  {/* Step Number */}
                  <div className="text-6xl font-black mb-6" style={{ color: '#6B46C1', opacity: 0.2 }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)'
                    }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-ultra-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg font-semibold mb-2" style={{ color: '#6B46C1' }}>
                    {step.description}
                  </p>
                  <p className="text-gray-600">
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

