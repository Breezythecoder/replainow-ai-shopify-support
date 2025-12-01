/**
 * 🔧 INTEGRATION STEPS - FLOW-BASIERTES DESIGN
 * Zeigt den nahtlosen Installation Flow - elegant & clean
 */

import { motion } from "framer-motion";
import { Clock, Sparkles, CheckCircle2, ArrowRight, Settings, Users, Mail, Image } from "lucide-react";
import { useTranslation } from "@/i18n";

const IntegrationStepsSection = () => {
  const { t, getTranslation } = useTranslation();

  const stepIcons = [Clock, Sparkles, CheckCircle2];
  const stepsData = getTranslation("marketing.integration.steps") || [];
  const steps = stepsData.map((step: any, idx: number) => ({
    ...step,
    icon: stepIcons[idx] || Clock,
  }));

  // 4. Step - Customization
  const customizationData = getTranslation("marketing.integration.customization") || {};
  const customizationStep = {
    num: 4,
    icon: Settings,
    title: customizationData.title || "Ihr Support, Ihre Marke",
    desc: customizationData.desc || "Vollständige Kontrolle über Aussehen und Verhalten – vom Logo bis zur E-Mail Adresse.",
    features: [
      { 
        icon: Users, 
        text: customizationData.features?.team?.text || "Team-Mitglieder", 
        detail: customizationData.features?.team?.detail || "Unbegrenzt einladen" 
      },
      { 
        icon: Mail, 
        text: customizationData.features?.email?.text || "Eigene E-Mail", 
        detail: customizationData.features?.email?.detail || "support@ihr-shop.replainow.com" 
      },
      { 
        icon: Image, 
        text: customizationData.features?.branding?.text || "Branding", 
        detail: customizationData.features?.branding?.detail || "Logo, Namen, Fotos anpassen" 
      },
    ],
    bottomBadge: customizationData.bottomBadge || "Vollständige Anpassung in den Einstellungen"
  };

  return (
    <div
      id="integration"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("marketing.integration.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("marketing.integration.subtitle")}
          </p>
        </div>

        {/* FLOW STEPS 1-3 - Vertical Progressive */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step: any, i: number) => {
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="relative">
                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-purple-200 -mb-8" />
                )}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Step Container */}
                  <div className="flex gap-6 items-start">
                    {/* Left: Number Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.2, type: "spring" }}
                      className="relative z-10 flex-shrink-0"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-xl">
                        <span className="text-2xl font-black text-white">
                          {step.num}
                        </span>
                      </div>
                    </motion.div>

                    {/* Right: Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                    >
                      {/* Icon + Title Row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4 ml-13">
                        {step.desc}
                      </p>

                      {/* Time Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-purple-200 ml-13">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-bold text-purple-700">
                          {step.time}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Flow Arrow between steps */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                    className="flex justify-center my-4 relative z-10"
                  >
                    <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Success Indicator - Live in 60 Sekunden */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center my-8"
        >
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl shadow-xl">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold text-lg">Live in 60 Sekunden</span>
          </div>
        </motion.div>

        {/* 4. STEP - CUSTOMIZATION (Expanded) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="relative mt-8 max-w-3xl mx-auto"
        >
          <div className="flex gap-6 items-start">
            {/* Left: Number Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
              className="flex-shrink-0"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-xl">
                <span className="text-2xl font-black text-white">4</span>
              </div>
            </motion.div>

            {/* Right: Expanded Customization Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex-1 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              {/* Header */}
              <div className="mb-6 pb-6 border-b-2 border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-lg">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {customizationStep.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {customizationStep.desc}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-6">
                {customizationStep.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm mb-1">
                        {feature.text}
                      </div>
                      <div className="text-xs text-gray-600">
                        {feature.detail}
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-xl shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold">
                  {customizationStep.bottomBadge}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            {t("marketing.integration.bottomText")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationStepsSection;
