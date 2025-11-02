import { motion } from "framer-motion";
import { Download, Settings, TrendingUp } from "lucide-react";
import { t } from "@/i18n";

const ModernHowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Installation",
      description: "5-Minuten Shopify Setup",
      detail: "Einfache 1-Klick Installation aus dem Shopify App Store"
    },
    {
      number: "2",
      icon: Settings,
      title: "Anpassen",
      description: "Deine Marke lehren",
      detail: "AI lernt deine Produkte und deinen Tone of Voice"
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Wachsen",
      description: "Mehr Verkäufe beobachten",
      detail: "AI arbeitet 24/7, während du dich auf das Wachstum konzentrierst"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-section font-bold text-gray-900 mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 3 einfachen Schritten zu automatisiertem Support
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Connection Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-purple to-purple-300 z-0"></div>
                )}

                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-purple-400 rounded-full opacity-10"></div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-lg"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-purple to-purple-600 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-primary-purple font-semibold mb-3">
                  {step.description}
                </p>
                <p className="text-gray-600">
                  {step.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600">
            Durchschnittliche Setup-Zeit: <span className="font-bold text-primary-purple">4 Minuten 37 Sekunden</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHowItWorks;
