/**
 * AGENT PRODUCTIVITY - GLASSMORPHIC REDESIGN
 * Modern glass cards, unified purple, 6 features
 */

import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  MessageSquare,
  Eye,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";
import { useTranslation } from "@/i18n";

const AgentProductivity = () => {
  const { t, getTranslation } = useTranslation();

  // Reduced to 6 most important features
  const featureIcons = [
    Package,
    MapPin,
    MessageSquare,
    Eye,
    TrendingUp,
    Sparkles,
  ];

  const featuresData =
    getTranslation("marketing.agentProductivity.features") || [];
  const features = featuresData.slice(0, 6).map((feature: any, i: number) => ({
    ...feature,
    icon: featureIcons[i] || Package,
  }));

  return (
    <div
      className="relative overflow-hidden bg-white pt-16 pb-32"
      data-section="agent-productivity"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header - CLEAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("marketing.agentProductivity.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("marketing.agentProductivity.subtitle")}
          </p>
        </motion.div>

        {/* MODERN FEATURE GRID - Clean Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group"
            >
              <div className="h-full bg-gray-50 rounded-xl p-6 hover:bg-white border border-gray-200 hover:shadow-lg transition-all duration-200">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h4 className="font-semibold text-gray-900 text-base mb-2">
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI INSIGHTS - COMPLETE 2-PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative mb-20"
        >
          {/* Container */}
          <div className="relative bg-gray-50 rounded-3xl p-10 border border-gray-200">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">{t("marketing.agentProductivity.aiInsights.badge")}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t("marketing.agentProductivity.aiInsights.title")}
              </h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t("marketing.agentProductivity.aiInsights.subtitle")}
              </p>
            </div>

            {/* 2-Column Panels */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT: AI Insights Panel - COMPLETE */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    {t("marketing.agentProductivity.aiInsights.panelTitle")}
                  </h4>
                </div>

                <div className="space-y-3.5">
                  {/* Sentiment - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <span className="text-base">😊</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.sentiment")}
                      </span>
                    </div>
                      <span className="text-sm font-bold text-green-600">
                      {t("marketing.agentProductivity.aiInsights.sentimentValue")}
                    </span>
                  </div>

                  {/* Topic - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🎯</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.topic")}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.topicValue")}
                    </span>
                  </div>

                  {/* Confidence - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2">
                      <span className="text-base">⚡</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.confidence")}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-purple-600">
                      {t("marketing.agentProductivity.aiInsights.confidenceValue")}
                    </span>
                  </div>

                  {/* Action - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🚨</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.action")}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-700">
                      {t("marketing.agentProductivity.aiInsights.actionValue")}
                    </span>
                  </div>

                  {/* Conversation - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-base">💬</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.conversation")}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {t("marketing.agentProductivity.aiInsights.conversationValue")}
                    </span>
                  </div>

                  {/* Language - with emoji */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🌍</span>
                      <span className="text-xs font-medium text-gray-600">
                        {t("marketing.agentProductivity.aiInsights.language")}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.languageValue")}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Customer Context Panel */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    {t("marketing.agentProductivity.aiInsights.contextTitle")}
                  </h4>
                </div>

                <div className="space-y-3">
                  {/* Journey */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-gray-500">
                        {t("marketing.agentProductivity.aiInsights.journey")}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.journeyValue")}
                    </p>
                  </div>

                  {/* Cart - WICHTIG! */}
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-gray-500">
                        {t("marketing.agentProductivity.aiInsights.cart")}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.cartValue")}
                    </p>
                  </div>

                  {/* Orders */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-medium text-gray-500">
                        {t("marketing.agentProductivity.aiInsights.orders")}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.ordersValue")}
                    </p>
                  </div>

                  {/* Device */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-medium text-gray-500">
                        {t("marketing.agentProductivity.aiInsights.device")}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {t("marketing.agentProductivity.aiInsights.deviceValue")}
                    </p>
                  </div>

                  {/* Agent Required */}
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold text-sm text-orange-700">
                        {t("marketing.agentProductivity.aiInsights.agentRequired")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          {/* Statement Box */}
          <div className="inline-block bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-8 shadow-lg max-w-3xl">
            <p className="text-lg md:text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
              Kein Hin und Her zwischen Shopify und Helpdesk. Alles was Sie in Shopify machen können, können Sie direkt über unser Dashboard machen.
          </p>

            {/* Simple Pills with Checkmarks */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {t("marketing.agentProductivity.highlights.noTabSwitching")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {t("marketing.agentProductivity.highlights.fullContext")}
                </span>
            </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {t("marketing.agentProductivity.highlights.aiPowered")}
                </span>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentProductivity;
