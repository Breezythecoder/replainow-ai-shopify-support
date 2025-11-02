import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const UltraTrustSecurity = () => {
  const badges = [
    { icon: Shield, title: "SOC2 Type II" },
    { icon: Lock, title: "DSGVO-konform" },
    { icon: Award, title: "Shopify Partner" },
    { icon: CheckCircle, title: "99.9% Uptime" }
  ];

  return (
    <section className="py-20" style={{ background: '#111218' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(147, 51, 234, 0.2)',
                  boxShadow: `
                    0 10px 30px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(147, 51, 234, 0.1)
                  `
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#9333EA' }} />
                <div className="font-bold text-sm" style={{ color: '#E2E8F0' }}>{badge.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraTrustSecurity;

