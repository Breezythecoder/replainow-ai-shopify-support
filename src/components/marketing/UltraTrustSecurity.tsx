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
    <section className="py-16" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                className="text-center p-6 rounded-xl"
                style={{
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#8B5CF6' }} />
                <div className="font-semibold text-sm" style={{ color: '#111827' }}>{badge.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraTrustSecurity;

