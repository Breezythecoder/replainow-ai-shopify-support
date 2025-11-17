import { motion } from "framer-motion";
import { Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n";

const IntegrationStepsSection = () => {
  const { t, getTranslation } = useTranslation();

  // Icon mapping for steps
  const stepIcons = [Clock, Sparkles, CheckCircle2];

  const stepsData = getTranslation("marketing.integration.steps") || [
    {
      num: 1,
      title: "App installieren",
      desc: "1-Klick Installation aus dem Shopify App Store",
      time: "30 Sekunden",
    },
    {
      num: 2,
      title: "KI lernt automatisch",
      desc: "Automatisches Training anhand Ihrer Shopify-Daten",
      time: "Vollautomatisch",
    },
    {
      num: 3,
      title: "Support läuft",
      desc: "KI beantwortet Anfragen eigenständig",
      time: "Sofort live",
    },
  ];

  // Map icons to steps based on index
  const steps = stepsData.map((step, idx) => ({
    ...step,
    icon: stepIcons[idx] || Clock,
  }));

  return (
    <div
      id="integration"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 bg-mesh-blue opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            {t("marketing.integration.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("marketing.integration.subtitle")}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent hidden md:block"></div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Step number - floating glass circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="absolute -inset-3 bg-purple-500/20 rounded-full blur-xl"></div>
                  <motion.div
                    className="glass-card w-16 h-16 rounded-full flex items-center justify-center relative border-4 border-white shadow-float"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent">
                      {step.num}
                    </span>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-2xl p-8 hover:shadow-white-card-hover transition-all duration-300 group border-2 border-gray-200 hover:border-purple-400 shadow-card-strong">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl shadow-elevation-2 flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      <div className="bg-white inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-purple-200 shadow-elevation-2">
                        <Clock className="w-4 h-4 text-purple-700" />
                        <span className="text-sm font-bold text-purple-900">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-4">
            {t("marketing.integration.bottomText")}
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full border border-green-200">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {t("marketing.integration.bottomBadge")}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationStepsSection;
