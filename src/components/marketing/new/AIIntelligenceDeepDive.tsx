import { motion } from "framer-motion";
import { Shield, Database, Eye, CheckCircle2, AlertTriangle, Clock, Sparkles, ShoppingCart, TrendingUp, Smartphone } from "lucide-react";
import { useState } from "react";

type TabType = "quality" | "collection" | "journey";

const AIIntelligenceDeepDive = () => {
  const [activeTab, setActiveTab] = useState<TabType>("quality");

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
      data-section="ai-intelligence-deepdive"
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 px-5 py-2.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-700" />
            <span className="text-sm font-bold text-purple-900">ENTERPRISE AI INTELLIGENCE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Mehr als nur ein{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Chatbot
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-Level AI Intelligence: Selbstkontrolle, Informationssammlung, 
            Kundenverständnis – das bekommen Sie nirgendwo sonst
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-xl border-2 border-gray-200 gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("quality")}
              className={`
                px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === "quality" 
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Qualitäts-Garantie</span>
                <span className="sm:hidden">Qualität</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("collection")}
              className={`
                px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === "collection" 
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Database className="w-4 h-4" />
                <span className="hidden sm:inline">Informations-Sammlung</span>
                <span className="sm:hidden">Info-Sammlung</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("journey")}
              className={`
                px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === "journey" 
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Kunden-Verständnis</span>
                <span className="sm:hidden">Kunden-Journey</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="relative w-full">
          {/* Tab 1: Quality Guarantee */}
          {activeTab === "quality" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Visual */}
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-3xl blur-3xl"></div>
                
                {/* Score Display */}
                <div className="relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-48 h-48 rounded-full border-[12px] border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 mb-6 shadow-inner">
                      <div>
                        <div className="text-6xl font-black text-green-600">94</div>
                        <div className="text-sm font-bold text-gray-600">/100</div>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 bg-green-100 px-5 py-2.5 rounded-full mb-4">
                      <CheckCircle2 className="w-5 h-5 text-green-700" />
                      <span className="font-bold text-green-900">AUTO-SEND</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm">
                      Score ≥ 90: Perfekte Qualität, automatisch gesendet
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Explanation */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI kontrolliert sich selbst
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Jede Antwort wird auf 5 Dimensionen bewertet: Antwortqualität, Kontext-Abdeckung, 
                  Informations-Genauigkeit, Sprachfluss, Gesamt-Konfidenz. Nur Score ≥ 90 wird automatisch gesendet.
                </p>

                <div className="space-y-4">
                  {[
                    { score: "90-100", label: "Exzellent", color: "green", action: "Automatisch gesendet" },
                    { score: "80-89", label: "Gut", color: "gray", action: "Je nach Schwellenwert" },
                    { score: "70-79", label: "Befriedigend", color: "yellow", action: "Zur Prüfung" },
                    { score: "<70", label: "Unsicher", color: "red", action: "Sie schreiben neu" }
                  ].map((range, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                      <div className={`
                        w-16 text-center font-bold text-sm py-2 rounded-lg
                        ${range.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                        ${range.color === 'gray' ? 'bg-gray-100 text-gray-700' : ''}
                        ${range.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                        ${range.color === 'red' ? 'bg-red-100 text-red-700' : ''}
                      `}>
                        {range.score}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{range.label}</div>
                        <div className="text-xs text-gray-600">{range.action}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-purple-700 font-bold">Sie kontrollieren die Qualität:</span>{" "}
                    Schwellenwert 80, 85 oder 90? Sie entscheiden. Höher = mehr Kontrolle, niedriger = schneller.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Information Collection */}
          {activeTab === "collection" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI fragt nach – Sie bekommen alles
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nie wieder unvollständige Infos. AI sammelt systematisch alle Details, 
                  bevor es bei Ihnen landet.
                </p>
              </div>

              {/* 3-Step Process */}
              <div className="space-y-8">
                {[
                  {
                    step: "Schritt 1",
                    badge: "AI sammelt Info",
                    badgeColor: "blue",
                    customer: "Das Produkt ist kaputt!",
                    ai: "Verstehe! Damit ich helfen kann: Bestellnummer? Welches Produkt? Foto?",
                    status: "Informationen sammeln..."
                  },
                  {
                    step: "Schritt 2",
                    badge: "Fast komplett",
                    badgeColor: "yellow",
                    customer: "Bestellung #5678, blaue Sneakers, hier das Foto",
                    ai: "Danke! Notiert: Bestellung #5678, blaue Sneakers, Foto da. Rückerstattung oder Ersatz?",
                    status: "Noch 1 Info fehlt"
                  },
                  {
                    step: "Schritt 3",
                    badge: "Bereit für Sie",
                    badgeColor: "green",
                    customer: "Rückerstattung bitte",
                    ai: "Perfekt! Unser Team bearbeitet Ihre Rückerstattung innerhalb von 24 Stunden.",
                    status: "✅ Alle Infos komplett"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-card-strong"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-4 py-2 bg-gray-900 text-white rounded-xl font-bold text-sm">
                        {item.step}
                      </div>
                      <div className={`
                        px-4 py-2 rounded-xl font-bold text-sm
                        ${item.badgeColor === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                        ${item.badgeColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                        ${item.badgeColor === 'green' ? 'bg-green-100 text-green-700' : ''}
                      `}>
                        {item.badge}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Customer Message */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-gray-700">K</span>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-xl px-5 py-3">
                          <p className="text-gray-900 font-medium">{item.customer}</p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-white">AI</span>
                        </div>
                        <div className="flex-1 bg-purple-50 border-2 border-purple-200 rounded-xl px-5 py-3">
                          <p className="text-gray-900 font-medium">{item.ai}</p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 italic">{item.status}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Highlight */}
              <div className="bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-200 mt-12">
                <p className="text-center text-lg font-bold text-gray-900">
                  <span className="text-purple-600">Wenn es bei Ihnen landet:</span>{" "}
                  Bestellnummer ✓ Telefon ✓ Foto ✓ Kundenwunsch ✓ – komplett fertig für Bearbeitung
                </p>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Customer Journey */}
          {activeTab === "journey" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Journey Timeline */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Kunden-Verhalten live sehen
                </h3>
                
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-300 via-violet-300 to-purple-300"></div>
                  
                  <div className="space-y-6">
                    {[
                      { icon: "🏠", page: "Homepage", time: "12s", action: "Gelandet" },
                      { icon: "👗", page: "Summer Dress", time: "45s", action: "80% gescrollt" },
                      { icon: "🛒", page: "Warenkorb", time: "20s", action: "€150 drin" },
                      { icon: "💬", page: "Chat geöffnet", time: "Jetzt", action: "Frage stellt" }
                    ].map((step, i) => (
                      <div key={i} className="relative flex items-start gap-4">
                        {/* Icon Circle */}
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                          {step.icon}
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 bg-white rounded-xl p-5 border-2 border-gray-200 shadow-card-strong">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">{step.page}</h4>
                            <div className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                              {step.time}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{step.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: What AI Sees */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Was Ihre AI sieht
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Eye, label: "Besuchte Seiten", value: "4 Seiten, 1:17 Min" },
                    { icon: ShoppingCart, label: "Warenkorb", value: "€150 (3 Produkte)" },
                    { icon: TrendingUp, label: "Kaufabsicht", value: "Hoch (85/100)" },
                    { icon: Smartphone, label: "Gerät", value: "iPhone 15, iOS" }
                  ].map((insight, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <insight.icon className="w-6 h-6 text-purple-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">{insight.label}</div>
                        <div className="text-sm text-gray-600">{insight.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl p-6 mt-8">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-purple-700 font-bold">AI nutzt Kontext:</span>{" "}
                    "Summer Dress" 45 Sek angeschaut + €150 im Warenkorb = Kaufbereit → 
                    Empfiehlt passende Accessoires!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-2xl font-bold text-gray-900">
            Enterprise-Level{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              AI Intelligence
            </span>
            {" "}– nicht nur Chatbot, sondern intelligenter Support-Mitarbeiter
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AIIntelligenceDeepDive;

