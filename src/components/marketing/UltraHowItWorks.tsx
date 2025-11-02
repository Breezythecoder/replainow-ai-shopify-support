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
    <section className="py-24 relative overflow-hidden" style={{ background: '#F9FAFB' }}>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
            So einfach 
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}> geht's</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
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
                {/* CLEAN CARD */}
                <div 
                  className="p-10 text-center group cursor-pointer"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
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
                  {/* Step Number */}
                  <div className="text-5xl font-black mb-6" style={{ color: '#8B5CF6', opacity: 0.2 }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#111827' }}>
                    {step.title}
                  </h3>
                  <p className="text-base font-semibold mb-2" style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {step.description}
                  </p>
                  <p style={{ color: '#6B7280' }}>
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

