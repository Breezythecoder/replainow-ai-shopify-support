import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const UltraPricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "€19",
      features: ["300 AI-Antworten/Monat", "Basis AI", "E-Mail Support", "95+ Sprachen"],
      popular: false
    },
    {
      name: "Growth",
      price: "€49",
      features: ["1.500 AI-Antworten/Monat", "Erweiterte AI", "WhatsApp", "Priority Support", "Analytics"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unbegrenzt", "Custom AI Training", "Dedicated CSM", "White Label", "SLA"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32" style={{ background: '#111218' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFFFFF' }}>
            Transparente 
            <span className="ultra-text-neon-purple" style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}> Preise</span>
          </h2>
          <p className="text-xl" style={{ color: '#94A3B8' }}>
            7 Tage kostenlos • Keine Kreditkarte • Jederzeit kündbar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-10"
              style={{
                background: tier.popular 
                  ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: tier.popular 
                  ? '2px solid #9333EA'
                  : '1px solid rgba(147, 51, 234, 0.2)',
                boxShadow: tier.popular
                  ? `
                      0 40px 120px rgba(147, 51, 234, 0.4),
                      0 0 80px rgba(147, 51, 234, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `
                  : `
                      0 20px 60px rgba(0, 0, 0, 0.4),
                      0 0 40px rgba(147, 51, 234, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05)
                    `,
                transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                position: 'relative',
                transition: 'all 0.4s ease'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span 
                    className="px-6 py-2 rounded-full font-bold text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
                      color: 'white',
                      boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)'
                    }}
                  >
                    ⭐ Beliebteste
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                {tier.name}
              </h3>
              <div className="text-6xl font-black mb-8" style={{ 
                color: tier.popular ? '#FFFFFF' : '#E2E8F0'
              }}>
                {tier.price}
                {tier.price !== "Custom" && <span className="text-2xl font-medium">/mo</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0" style={{
                      color: tier.popular ? '#10B981' : '#9333EA'
                    }} />
                    <span style={{ color: '#94A3B8' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={OAUTH_URL}
                className="block w-full text-center px-6 py-4 font-bold rounded-xl transition-all"
                style={tier.popular ? {
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
                } : {
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: 'white',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = tier.popular 
                    ? '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
                    : '0 4px 14px rgba(16, 185, 129, 0.3)';
                }}
              >
                Jetzt starten
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraPricing;

