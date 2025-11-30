/**
 * 🌐 OMNICHANNEL - SPLIT SECTIONS DESIGN
 * Live Chat oben (Widget links, Text rechts)
 * Email Helpdesk unten (Screenshot links, Text rechts)
 */

import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Globe,
  Sparkles,
  CheckCircle2,
  Zap,
  Gift,
  Package,
  Brain,
  TrendingUp,
  Newspaper,
  Image,
  Users,
  Layers,
  Truck,
  LayoutGrid,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const OmnichannelUnified = () => {
  const { t, getTranslation } = useTranslation();

  const liveChatFeatures =
    getTranslation("marketing.omnichannelUnified.liveChatFeatures") || [];
  const emailFeatures =
    getTranslation("marketing.omnichannelUnified.emailFeatures") || [];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24"
      data-section="omnichannel-unified"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("marketing.omnichannelUnified.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("marketing.omnichannelUnified.subtitle")}
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════ */}
        {/* LIVE CHAT SECTION - Widget Links, Text Rechts */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Widget Screenshot with Glow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-3xl blur-3xl"></div>
              
              {/* Widget Container */}
              <div className="relative max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  <img
                    src="/dashboard-screenshots/Hometab-widget-nobackground.png"
                    alt="ReplAInow Live Chat Widget"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-5 py-2.5 rounded-full mb-6 shadow-lg">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold tracking-wide">
                    {t("marketing.omnichannelUnified.liveChatBadge")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("marketing.omnichannelUnified.liveChatTitle")}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("marketing.omnichannelUnified.liveChatDesc")}
                </p>
              </motion.div>

              {/* Features - EXPANDED & BETTER CONTRAST! */}
              <div className="space-y-3">
                {/* Original Features from translations */}
                {liveChatFeatures.map((text: string, i: number) => {
                  const icons = [Globe, Package, Gift, Zap];
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium text-base">
                        {text}
                      </span>
                    </motion.div>
                  );
                })}
                
                {/* Additional Features - Hardcoded */}
                {[
                  { icon: Truck, text: "Schön designte Tracking-Kacheln" },
                  { icon: Image, text: "Eigenes Logo hochladbar" },
                  { icon: Users, text: "Online-Status von Agenten sichtbar" },
                  { icon: Newspaper, text: "Integriertes Newsfeed-System" },
                ].map((feature, idx) => (
                  <motion.div
                    key={`extra-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-base">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* EMAIL SECTION - Feature-Based Design */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Mail className="w-5 h-5" />
              <span className="font-bold">
                {t("marketing.omnichannelUnified.emailBadge")}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("marketing.omnichannelUnified.emailTitle")}
            </h3>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("marketing.omnichannelUnified.emailDesc")}
            </p>
          </div>

          {/* AI SCORE SYSTEM - Prominent Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 border-2 border-violet-200 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              {/* Left: Score Display */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-3xl font-black text-white">96</div>
                  <div className="text-xs text-white/90 font-medium">AI Score</div>
                </div>
              </div>

              {/* Right: Explanation */}
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  AI-Qualitäts-Scoring
                </h4>
                <p className="text-gray-700 mb-4">
                  KI bewertet jede Antwort von 0-100. Nur perfekte E-Mails (90+) werden automatisch versendet. Niedrigere Scores landen in der Prüfwarteschlange.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1.5 bg-green-100 border border-green-300 rounded-lg text-xs font-semibold text-green-700">
                    90-100: Auto-Send
                  </div>
                  <div className="px-3 py-1.5 bg-yellow-100 border border-yellow-300 rounded-lg text-xs font-semibold text-yellow-700">
                    70-89: Review
                  </div>
                  <div className="px-3 py-1.5 bg-red-100 border border-red-300 rounded-lg text-xs font-semibold text-red-700">
                    &lt;70: Rewrite
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Original Translation Features */}
            {emailFeatures.map((text: string, i: number) => {
              const icons = [CheckCircle2, TrendingUp, Brain, Mail];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <span className="text-gray-800 font-medium text-base leading-relaxed">
                      {text}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Additional Features from Documentation */}
            {[
              { icon: Users, text: "Thread-basiert wie Gmail – alle E-Mails gruppiert" },
              { icon: Sparkles, text: "Rich-Text Editor mit Formatierung & Attachments" },
            ].map((feature, idx) => (
              <motion.div
                key={`extra-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + idx * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-gray-800 font-medium text-base leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Unified Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-8 py-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <span className="font-semibold text-gray-900">
              {t("marketing.omnichannelUnified.unifiedSync")}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OmnichannelUnified;
