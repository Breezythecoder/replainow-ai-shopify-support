import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Shield, Award, Users } from "lucide-react";
import { useTranslation } from "@/i18n";

const FinalCTASection = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            {t("marketing.finalCta.title")}
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("marketing.finalCta.subtitle")}
          </p>

          {/* CTA Button */}
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-40"></div>
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 30px 80px rgba(147, 51, 234, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-6 rounded-xl font-bold text-lg transition-all shadow-float-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t("marketing.finalCta.cta")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </motion.button>
          </div>

          {/* Guarantee Text */}
          <p className="text-gray-700 text-sm mb-10 font-medium">
            {t("marketing.finalCta.guarantee")}
          </p>

          {/* Trust Icons */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-700" />
              <span className="font-medium">
                {t("marketing.finalCta.trustDsgvo")}
              </span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-700" />
              <span className="font-medium">
                {t("marketing.finalCta.trustIso")}
              </span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-700" />
              <span className="font-medium">
                {t("marketing.finalCta.trustMerchants")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTASection;
