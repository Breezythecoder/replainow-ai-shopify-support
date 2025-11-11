import { motion } from "framer-motion";
import { Brain, Zap, TrendingUp, MessageSquare, Package, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const AIPowerShowcase = () => {
  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
      data-section="ai-power-showcase"
    >
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-mesh-purple opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Ihre AI kann mehr als jeder{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Support-Mitarbeiter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kein einfacher Chatbot – Ihre AI ist ein vollwertiger Support-Mitarbeiter, 
            der jeden Aspekt Ihres Shops kennt und intelligent handelt
          </p>
        </motion.div>

        {/* 3-Column Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Column 1: WISSEN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 shadow-card-strong group-hover:shadow-float h-full">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex p-5 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-neon-purple">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wissen
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Kennt <span className="font-semibold text-gray-900">jeden Aspekt</span> Ihres Shops – automatisch synchronisiert
              </p>
              
              {/* Feature List */}
              <ul className="space-y-3">
                {[
                  "Alle Produkte, Varianten, Preise",
                  "Bestellungen der letzten 60 Tage",
                  "Kundenprofile & Präferenzen",
                  "Richtlinien & Shop-Seiten"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Bottom highlight */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                  <Sparkles className="w-4 h-4" />
                  <span>Echtzeit-Sync – automatisch</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: HANDELN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 group-hover:border-violet-400 transition-all duration-300 shadow-card-strong group-hover:shadow-float h-full">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex p-5 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl shadow-neon-purple">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Handeln
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Beantwortet Fragen <span className="font-semibold text-gray-900">intelligent & kontextbewusst</span> – wie ein erfahrener Agent
              </p>
              
              {/* Feature List */}
              <ul className="space-y-3">
                {[
                  "Produktempfehlungen mit Bildern",
                  "Order-Tracking mit Lieferstatus",
                  "Rabattcodes & Checkout-Links",
                  "Eskalation bei Komplexität"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Bottom highlight */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-violet-700">
                  <MessageSquare className="w-4 h-4" />
                  <span>Antwortzeit: Sofort</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: LERNEN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-card-strong group-hover:shadow-float h-full">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex p-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-neon-purple">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lernen
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Wird mit jedem Gespräch <span className="font-semibold text-gray-900">besser & präziser</span> – ohne Ermüdung
              </p>
              
              {/* Feature List */}
              <ul className="space-y-3">
                {[
                  "Analysiert Kundenverhalten",
                  "Erkennt Kaufabsichten",
                  "Passt Antworten kontextual an",
                  "99.8% Genauigkeit"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Bottom highlight */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <Clock className="w-4 h-4" />
                  <span>24/7 aktiv, nie müde</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative mb-20"
        >
          {/* Connecting arrows */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden md:block pointer-events-none">
            <div className="max-w-5xl mx-auto relative h-1">
              {/* Horizontal line */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-violet-300 to-blue-300 h-1 rounded-full"></div>
              
              {/* Animated dots */}
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-3 h-3 bg-purple-500 rounded-full -top-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center relative">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl mb-4 border-2 border-purple-300">
                <Package className="w-12 h-12 text-purple-700" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">1. Shop-Daten lesen</h4>
              <p className="text-sm text-gray-600">
                AI importiert automatisch alle Produkte, Bestellungen & Richtlinien
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-violet-100 to-blue-100 rounded-2xl mb-4 border-2 border-violet-300">
                <MessageSquare className="w-12 h-12 text-violet-700" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2. Kunden antworten</h4>
              <p className="text-sm text-gray-600">
                Präzise, kontextbewusste Antworten – sofort und intelligent
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 border-2 border-blue-300">
                <ArrowRight className="w-12 h-12 text-blue-700" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">3. Intelligente Übergabe</h4>
              <p className="text-sm text-gray-600">
                Bei Komplexität: Nahtloser Handoff an Ihr Team mit vollem Kontext
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement - The Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 rounded-3xl p-12 border-2 border-purple-200 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Was{" "}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  3 Vollzeit-Mitarbeiter
                </span>{" "}
                leisten —
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                Ihre AI macht es in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Sekunden
                </span>
              </p>
              
              <div className="mt-8 inline-flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Null Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Null Wartung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Null Fehler</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIPowerShowcase;

