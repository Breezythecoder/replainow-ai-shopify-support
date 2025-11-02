import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const TrustSecurity2025 = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC2 Type II",
      description: "Höchste Sicherheitsstandards für Unternehmensdaten"
    },
    {
      icon: Lock,
      title: "DSGVO-konform",
      description: "100% konform mit europäischen Datenschutzgesetzen"
    },
    {
      icon: Award,
      title: "Shopify Partner",
      description: "Offiziell verifizierter Shopify App Partner"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Zuverlässige Verfügbarkeit, 24/7 monitored"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Sicherheit & Vertrauen
            </h3>
            <p className="text-gray-600">
              Enterprise-Grade Sicherheit für deine Kundendaten
            </p>
          </motion.div>

          {/* Security Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-green" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity2025;

