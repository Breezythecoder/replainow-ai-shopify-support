import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Sparkles, Home } from "lucide-react";

const UltraIndustryExamples = () => {
  const industries = [
    { icon: ShoppingBag, title: "Fashion", result: "+45% Conversion" },
    { icon: Smartphone, title: "Tech & Elektronik", result: "+67% Zufriedenheit" },
    { icon: Sparkles, title: "Beauty & Kosmetik", result: "+52% Upselling" },
    { icon: Home, title: "Home & Garden", result: "-55% Support" }
  ];

  return (
    <section className="py-32" style={{ background: '#111218' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#FFFFFF' }}>
            Perfekt für <span className="ultra-text-neon-purple" style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #E879F9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}>deine Branche</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-8 text-center"
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
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `
                    0 40px 100px rgba(0, 0, 0, 0.5),
                    0 0 80px rgba(147, 51, 234, 0.3)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(147, 51, 234, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
                    boxShadow: '0 0 40px rgba(147, 51, 234, 0.5)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>{industry.title}</h3>
                <div 
                  className="px-4 py-2 rounded-lg font-bold text-sm"
                  style={{ 
                    background: 'rgba(147, 51, 234, 0.2)', 
                    color: '#E879F9',
                    border: '1px solid rgba(147, 51, 234, 0.3)'
                  }}
                >
                  {industry.result}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraIndustryExamples;

