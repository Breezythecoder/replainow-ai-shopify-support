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
    <section className="py-24" style={{ background: '#F9FAFB' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Perfekt für <span style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>deine Branche</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                className="rounded-xl p-8 text-center"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>{industry.title}</h3>
                <div 
                  className="px-4 py-2 rounded-lg font-semibold text-sm"
                  style={{ 
                    background: '#F5F3FF', 
                    color: '#8B5CF6',
                    border: '1px solid #E5E7EB'
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

