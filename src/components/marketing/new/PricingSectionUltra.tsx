/**
 * 💰 PRICING SECTION - FINAL VERSION
 * Genau nach dem HTML das der User gegeben hat
 */

import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  aiAnswers: string;
  ticketRange: string;
  extraCost?: string;
  cta: string;
  highlighted?: boolean;
  badge?: string;
  premium?: boolean;
  features: string[];
}

const PricingSectionUltra = () => {
  const { t, getTranslation } = useTranslation();
  const plans = getTranslation("marketing.pricing.plans") || [];

  return (
    <div
      id="pricing"
      className="relative overflow-hidden clean-bg-section py-20 md:py-32"
    >
      {/* Subtle Background Gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(139,92,246,0.08), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 clean-badge-purple-light mb-6">
            <Sparkles className="w-4 h-4" />
            {t("marketing.pricing.badge")}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold clean-text-primary mb-4 md:mb-6">
            {t("marketing.pricing.title")}
          </h2>
          <p className="text-lg md:text-xl clean-text-secondary max-w-3xl mx-auto">
            {t("marketing.pricing.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-6">
          {plans.map((plan: PricingPlan, index: number) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="clean-text-secondary text-sm md:text-base">
            {t("marketing.pricing.bottomNote")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Individual Pricing Card Component
const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  const isPopular = plan.highlighted;
  const isPremium = plan.premium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group overflow-visible ${
        isPopular ? "md:scale-110 md:-translate-y-4" : ""
      }`}
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 rounded-3xl blur-2xl transition-opacity duration-500 ${
          isPopular
            ? "bg-gradient-to-br from-purple-500/40 to-violet-500/40 opacity-100"
            : isPremium
            ? "bg-gradient-to-br from-amber-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100"
            : "bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Badge - Exactly on the edge! */}
      {(isPopular || isPremium) && plan.badge && (
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className={`px-6 py-2 rounded-full shadow-elevation-4 border-2 flex items-center gap-2 ${
              isPremium
                ? "bg-gradient-to-r from-amber-400 to-yellow-400 border-amber-500"
                : "bg-white border-purple-300"
            }`}
          >
            {isPopular && <Zap className="w-4 h-4 text-purple-700" />}
            {isPremium && <Sparkles className="w-4 h-4 text-amber-900" />}
            <span
              className={`text-xs font-black tracking-wide ${
                isPremium ? "text-amber-900" : "text-purple-700"
              }`}
            >
              {plan.badge}
            </span>
          </motion.div>
        </div>
      )}

      {/* Card Container */}
      <div
        className={`relative rounded-3xl border-2 h-full overflow-hidden transition-all duration-300 ${
          isPopular
            ? "bg-gradient-to-br from-purple-600 to-violet-600 text-white border-purple-400 shadow-elevation-5"
            : isPremium
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white shadow-elevation-5"
            : "bg-white text-gray-900 border-gray-200 shadow-card-strong hover:shadow-white-card-hover hover:border-purple-400"
        }`}
      >
        <div className="p-6">
          {/* Plan Name */}
          <h3
            className={`text-xl font-bold mb-2 ${
              isPopular || isPremium ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.name}
          </h3>

          {/* Description */}
          <p
            className={`text-xs mb-4 leading-relaxed ${
              isPopular
                ? "text-white"
                : isPremium
                ? "text-gray-200"
                : "text-gray-600"
            }`}
          >
            {plan.description}
          </p>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span
                className={`text-5xl font-light ${
                  isPopular || isPremium
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-purple-600 to-gray-900"
                }`}
              >
                {plan.price}€
              </span>
              <span
                className={`text-sm ${
                  isPopular
                    ? "text-white/95"
                    : isPremium
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                /Monat
              </span>
            </div>
          </div>

          {/* AI Answers Box */}
          <div
            className={`mb-4 pb-4 border-b ${
              isPopular
                ? "border-white/20"
                : isPremium
                ? "border-gray-700"
                : "border-gray-200"
            }`}
          >
            <div
              className={`text-sm font-semibold mb-1 ${
                isPopular || isPremium ? "text-white" : "text-purple-700"
              }`}
            >
              {plan.aiAnswers}
            </div>
            {plan.extraCost && (
              <div
                className={`text-xs ${
                  isPopular
                    ? "text-white/95"
                  : isPremium
                  ? "text-gray-300"
                  : "text-gray-600"
                }`}
              >
                {plan.extraCost}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a href={OAUTH_URL}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all mb-4 ${
                isPopular
                  ? "bg-white text-purple-700 hover:bg-gray-50 shadow-white-button hover:shadow-white-button-hover"
                  : isPremium
                  ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 shadow-elevation-3"
                  : "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-elevation-3 hover:shadow-elevation-4"
              }`}
            >
              {plan.cta}
            </motion.button>
          </a>

          {/* Features Header */}
          <div
            className={`text-xs font-bold mb-3 ${
              isPopular || isPremium ? "text-white" : "text-gray-900"
            }`}
          >
            Alles inklusive
          </div>

          {/* Features List */}
          <ul className="space-y-2 text-xs">
            {plan.features.slice(0, 8).map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <Check
                  className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                    isPopular || isPremium ? "text-white" : "text-purple-700"
                  }`}
                />
                <span
                  className={`leading-tight ${
                    isPopular
                      ? "text-white"
                      : isPremium
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
            {plan.features.length > 8 && (
              <li
                className={`text-xs italic pl-5 ${
                  isPopular
                    ? "text-white/95"
                    : isPremium
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                Und viele weitere Features...
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingSectionUltra;
