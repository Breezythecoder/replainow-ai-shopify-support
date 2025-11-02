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
    <section className="py-32" style={{ background: '#F5F3FF' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ultra-black mb-6">
            Perfekt für <span style={{
              background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
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
                className="rounded-2xl p-8 text-center"
                style={{
                  background: 'white',
                  border: '2px solid rgba(107, 70, 193, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(107, 70, 193, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ultra-black mb-3">{industry.title}</h3>
                <div 
                  className="px-4 py-2 rounded-lg font-bold text-sm"
                  style={{ background: 'rgba(107, 70, 193, 0.1)', color: '#6B46C1' }}
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

