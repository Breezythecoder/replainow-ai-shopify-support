/**
 * 🚀 FINAL CTA - Clean & Modern B2B SaaS Design
 * Professional, light, clean - perfect match for the new website design
 */

import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const FinalCTASection = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50 py-20 md:py-32"
    >
      {/* Subtle Background Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.15), transparent 50%), radial-gradient(circle at 70% 80%, rgba(124,58,237,0.1), transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 clean-badge-purple-light mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold">Start Your Transformation</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clean-text-primary mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            {t("marketing.finalCta.title")}
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl clean-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("marketing.finalCta.subtitle")}
          </p>

          {/* CTA Button - Green like Growth plan */}
          <div className="mb-10">
            <a href={OAUTH_URL}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all clean-btn-primary shadow-button hover:shadow-button-hover"
              >
                <span>{t("marketing.finalCta.cta")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>

          {/* Guarantee */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="clean-text-secondary text-sm md:text-base mb-12 font-medium"
          >
            {t("marketing.finalCta.guarantee")}
          </motion.p>

          {/* Trust Badges - Clean Pills */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-sm hover:shadow-md hover:border-purple-300 transition-all"
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="font-medium clean-text-primary text-sm md:text-base">
                {t("marketing.finalCta.trustDsgvo")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-sm hover:shadow-md hover:border-purple-300 transition-all"
            >
              <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="font-medium clean-text-primary text-sm md:text-base">
                {t("marketing.finalCta.trustIso")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-sm hover:shadow-md hover:border-purple-300 transition-all"
            >
              <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="font-medium clean-text-primary text-sm md:text-base">
                {t("marketing.finalCta.trustMerchants")}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;
