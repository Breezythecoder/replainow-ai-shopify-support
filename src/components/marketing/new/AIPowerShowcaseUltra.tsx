/**
 * 🚀 AI POWER SHOWCASE - BENTO GRID REDESIGN
 * Modern asymmetric layout with dramatic cards
 */

import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const AIPowerShowcaseUltra = () => {
  const { t, getTranslation } = useTranslation();

  const features = [
    {
      icon: Brain,
      gradient: "from-purple-500 to-violet-600",
      key: "wissen",
      shadowColor: "rgba(139, 92, 246, 0.5)",
    },
    {
      icon: Zap,
      gradient: "from-violet-500 to-purple-600",
      key: "handeln",
      shadowColor: "rgba(124, 58, 237, 0.5)",
    },
    {
      icon: TrendingUp,
      gradient: "from-purple-600 to-violet-500",
      key: "lernen",
      shadowColor: "rgba(109, 40, 217, 0.5)",
    },
  ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32"
      data-section="ai-power-showcase"
    >
      {/* Gradient mesh overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 30% 50%, rgba(139,92,246,0.08), transparent 60%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("marketing.aiPowerShowcase.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("marketing.aiPowerShowcase.subtitle")}
          </p>
        </motion.div>

        {/* 3 CLEAN CARDS - Equal Size, Better Structure */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const translationKey = feature.key as "wissen" | "handeln" | "lernen";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-violet-50/0 group-hover:from-purple-50 group-hover:to-violet-50 rounded-3xl transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      <div
                        className={`p-5 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-2xl`}
                        style={{
                          boxShadow: `0 20px 60px ${feature.shadowColor}`,
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {t(`marketing.aiPowerShowcase.${translationKey}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {t(`marketing.aiPowerShowcase.${translationKey}.desc`)}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {(
                        getTranslation(
                          `marketing.aiPowerShowcase.${translationKey}.features`
                        ) as string[] || []
                      ).map((item: string, i: number) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Highlight Badge */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-700">
                          {t(`marketing.aiPowerShowcase.${translationKey}.highlight`)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIPowerShowcaseUltra;
