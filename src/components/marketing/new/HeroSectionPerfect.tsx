/**
 * 🎯 HERO SECTION - Clean & Professional Design
 * Schlichter Background, weniger Lila, mehr Focus auf Content
 */

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Zap,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/i18n";
import { ChatWindowProduction } from "@/components/ui/chat-window-production";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const HeroSectionPerfect = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-purple-50/40 to-white pt-20 flex items-center justify-center">
      {/* Schlichter aber sichtbarer Lila Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(139,92,246,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
        {/* DESKTOP: Split-screen | MOBILE: Stack */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Content */}
          <div className="space-y-8">
          {/* Badge - Cleaner ohne purple background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 clean-badge-purple-light"
          >
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">
              {t("marketing.hero.badge")}
            </span>
          </motion.div>

            {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight"
          >
            {t("marketing.hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-700 leading-relaxed"
          >
            {t("marketing.hero.subtitle")}
          </motion.p>

            {/* Stats Bar - Compact horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
          >
            {[
              { value: "87%", label: t("marketing.hero.stats.automation"), icon: TrendingUp },
              { value: "3s", label: t("marketing.hero.stats.response"), icon: Zap },
              { value: "24/7", label: t("marketing.hero.stats.support"), icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: "rgb(139, 92, 246)" }}
                  className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all"
              >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <stat.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 leading-none mb-1">
                  {stat.value}
                </div>
                    <div className="text-xs text-gray-600 font-medium">
                  {stat.label}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

            {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
          >
              {/* Primary CTA - Subtiler Glow */}
            <a href={OAUTH_URL} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                  <Sparkles className="w-6 h-6 flex-shrink-0" />
                  <span className="leading-none">{t("marketing.hero.ctaPrimary")}</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>

              {/* Secondary CTA */}
            <motion.a
              href="#pricing"
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
                <span className="leading-none">{t("marketing.hero.ctaSecondary")}</span>
            </motion.a>
          </motion.div>

            {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-2 text-sm"
          >
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-green-900 font-medium text-xs">
                {t("marketing.hero.trustSignals.freeTrial")}
              </span>
            </div>
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-green-900 font-medium text-xs">
                  {t("marketing.hero.trustSignals.noCard")}
              </span>
            </div>
              <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-blue-900 font-medium text-xs">
                  {t("marketing.hero.trustSignals.iso")}
              </span>
            </div>
          </motion.div>
          </div>

          {/* RIGHT SIDE - Chat Widget - Schlichter Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Schlichter aber sichtbarer Glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-purple-500/15 to-violet-500/15 rounded-full blur-3xl"></div>

            {/* Floating chat - weniger Animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative hover:scale-[1.02] transition-transform duration-300"
            >
              <ChatWindowProduction />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionPerfect;
