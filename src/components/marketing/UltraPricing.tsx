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
    <section id="pricing" className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Transparente 
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}> Preise</span>
          </h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            7 Tage kostenlos • Keine Kreditkarte • Jederzeit kündbar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-10"
              style={{
                background: '#FFFFFF',
                border: tier.popular 
                  ? '2px solid #8B5CF6'
                  : '1px solid #E5E7EB',
                boxShadow: tier.popular
                  ? '0 8px 24px rgba(139, 92, 246, 0.15)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span 
                    className="px-6 py-2 rounded-full font-semibold text-sm"
                    style={{
                      background: '#8B5CF6',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    ⭐ Beliebteste
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-4" style={{ color: '#111827' }}>
                {tier.name}
              </h3>
              <div className="text-5xl font-black mb-8" style={{ 
                color: '#111827'
              }}>
                {tier.price}
                {tier.price !== "Custom" && <span className="text-xl font-medium">/mo</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{
                      color: '#8B5CF6'
                    }} />
                    <span style={{ color: '#6B7280' }}>
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

