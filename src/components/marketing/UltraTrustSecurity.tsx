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
    <section className="py-20" style={{ background: '#F5F3FF' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(107, 70, 193, 0.05)',
                  border: '1px solid rgba(107, 70, 193, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#6B46C1' }} />
                <div className="font-bold text-sm" style={{ color: '#6B46C1' }}>{badge.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UltraTrustSecurity;

