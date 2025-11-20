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
} from "lucide-react";
import { useTranslation } from "@/i18n";

const OmnichannelUnified = () => {
  const { t, getTranslation } = useTranslation();

  const liveChatFeatures = getTranslation(
    "marketing.omnichannelUnified.liveChatFeatures"
  ) || [
    "AI antwortet in 100+ Sprachen, Widget-Interface in 41 Sprachen",
    "Produktkarten mit Bildern & Preisen",
    "Rabatt-Codes mit 1-Klick kopieren",
    "Proaktive Nachrichten auf allen Seiten",
  ];

  const emailFeatures = getTranslation(
    "marketing.omnichannelUnified.emailFeatures"
  ) || [
    "AI-Score 90+: Automatisch gesendet",
    "Qualitäts-Schwellenwert einstellbar",
    "AI sammelt alle Infos vor Eskalation",
    "Thread-basiert wie Gmail",
  ];
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      data-section="omnichannel-unified"
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-mesh-purple opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            {t("marketing.omnichannelUnified.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("marketing.omnichannelUnified.subtitle")}
          </p>
        </motion.div>

        {/* LIVE CHAT Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Chat Widget Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-3xl blur-3xl"></div>

              <div className="relative max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  <img
                    src="/dashboard-screenshots/Hometab-widget-nobackground.png"
                    alt="ReplAInow Live Chat Widget - Multi-Tab Interface mit AI-Antworten"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Chat Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-5 py-2.5 rounded-full mb-6 shadow-neon-purple">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold tracking-wide">
                    {t("marketing.omnichannelUnified.liveChatBadge")}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("marketing.omnichannelUnified.liveChatTitle")}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("marketing.omnichannelUnified.liveChatDesc")}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {liveChatFeatures.map((text, i) => {
                  const icons = [Globe, Package, Gift, Zap];
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-purple-50 rounded-xl">
                        <Icon className="w-6 h-6 text-purple-700" />
                      </div>
                      <span className="text-gray-800 font-medium text-lg">
                        {text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* E-MAIL Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Email Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white px-5 py-2.5 rounded-full mb-6 shadow-neon-purple">
                  <Mail className="w-5 h-5" />
                  <span className="font-bold tracking-wide">
                    {t("marketing.omnichannelUnified.emailBadge")}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("marketing.omnichannelUnified.emailTitle")}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("marketing.omnichannelUnified.emailDesc")}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {emailFeatures.map((text, i) => {
                  const icons = [CheckCircle2, TrendingUp, Brain, Mail];
                  const colors = ["green", "violet", "blue", "purple"];
                  const color = colors[i];
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`
                      p-3 rounded-xl
                      ${color === "green" ? "bg-green-50" : ""}
                      ${color === "violet" ? "bg-violet-50" : ""}
                      ${color === "blue" ? "bg-blue-50" : ""}
                      ${color === "purple" ? "bg-purple-50" : ""}
                    `}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            color === "green" ? "text-green-700" : ""
                          } ${color === "violet" ? "text-violet-700" : ""} ${
                            color === "blue" ? "text-blue-700" : ""
                          } ${color === "purple" ? "text-purple-700" : ""}`}
                        />
                      </div>
                      <span className="text-gray-800 font-medium text-lg">
                        {text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Email Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-200/40 to-blue-200/40 rounded-3xl blur-3xl"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                <img
                  src="/dashboard-screenshots/Screenshot-1-maildashboard-new.png"
                  alt="ReplAInow E-Mail Dashboard - Thread-basiert mit AI Quality Scoring"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Connection Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>

          <div className="relative bg-gradient-to-r from-purple-50 via-violet-50 to-blue-50 rounded-3xl p-10 border-2 border-purple-200">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {/* Chat Icon */}
              <div className="flex flex-col items-center">
                <div className="p-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-neon-purple mb-3">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <span className="font-bold text-gray-900">Live Chat</span>
              </div>

              {/* Connection Arrow with "+" */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1 w-24 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"
                ></motion.div>
                <span className="text-4xl font-black text-purple-600">+</span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="h-1 w-24 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full"
                ></motion.div>
              </div>

              {/* Email Icon */}
              <div className="flex flex-col items-center">
                <div className="p-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl shadow-neon-purple mb-3">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <span className="font-bold text-gray-900">E-Mail</span>
              </div>

              {/* Equals */}
              <span className="text-4xl font-black text-gray-400">=</span>

              {/* Unified System */}
              <div className="flex flex-col items-center">
                <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-float mb-3">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <span className="font-bold text-gray-900">
                  {t("marketing.omnichannelUnified.unifiedLabel")}
                </span>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-gray-700 font-medium mt-8">
              {t("marketing.omnichannelUnified.unifiedSync")}
            </p>
          </div>
        </motion.div>

        {/* Unified Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 bg-purple-50 rounded-xl mb-6">
              <Globe className="w-8 h-8 text-purple-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {t("marketing.omnichannelUnified.unifiedFeature1Title")}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t("marketing.omnichannelUnified.unifiedFeature1Desc")}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 bg-violet-50 rounded-xl mb-6">
              <Package className="w-8 h-8 text-violet-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {t("marketing.omnichannelUnified.unifiedFeature2Title")}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t("marketing.omnichannelUnified.unifiedFeature2Desc")}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 bg-blue-50 rounded-xl mb-6">
              <Zap className="w-8 h-8 text-blue-700" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {t("marketing.omnichannelUnified.unifiedFeature3Title")}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t("marketing.omnichannelUnified.unifiedFeature3Desc")}
            </p>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-gray-900">
            {t("marketing.omnichannelUnified.bottomStatement")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OmnichannelUnified;
