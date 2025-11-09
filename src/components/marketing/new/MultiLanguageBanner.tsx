import { motion } from "framer-motion";
import { Globe, Sparkles, CheckCircle2, Languages } from "lucide-react";

const MultiLanguageBanner = () => {
  const topLanguages = [
    { code: "DE", name: "Deutsch", example: "Hallo! Wie kann ich helfen?" },
    { code: "EN", name: "English", example: "Hello! How can I help?" },
    { code: "FR", name: "Français", example: "Bonjour! Comment puis-je aider?" },
    { code: "ES", name: "Español", example: "¡Hola! ¿Cómo puedo ayudarte?" },
    { code: "IT", name: "Italiano", example: "Ciao! Come posso aiutarti?" },
    { code: "NL", name: "Nederlands", example: "Hallo! Hoe kan ik helpen?" },
    { code: "PT", name: "Português", example: "Olá! Como posso ajudar?" },
    { code: "PL", name: "Polski", example: "Cześć! Jak mogę pomóc?" },
    { code: "ZH", name: "中文", example: "你好！我能帮你什么？" }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-semibold">Wirklich international</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Widget in 41 Sprachen. AI antwortet in 100+ Sprachen. Alles automatisch.
          </p>
        </motion.div>

        {/* 2-Column Explanation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Widget Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 rounded-xl">
                  <Languages className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Widget-Interface</h3>
                  <p className="text-sm text-purple-600 font-semibold">41 Sprachen</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Buttons, Tabs, Labels im Widget passen sich automatisch 
                Ihrer Shopify Shop-Sprache an.
              </p>

              <div className="space-y-3">
                {[
                  "Deutscher Shop → Widget auf Deutsch",
                  "Französischer Shop → Widget auf Französisch",
                  "Japanischer Shop → Widget auf Japanisch"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Europa • Asien • Naher Osten • Amerika – 41 Sprachen verfügbar
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI Response Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-violet-50 rounded-xl">
                  <Sparkles className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI-Antworten</h3>
                  <p className="text-sm text-violet-600 font-semibold">100+ Sprachen</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                AI kann in JEDER Sprache antworten. Kunde schreibt Arabisch? 
                AI antwortet Arabisch. Automatische Erkennung.
              </p>

              <div className="space-y-3">
                {[
                  "Kunde schreibt Chinesisch → AI antwortet Chinesisch",
                  "Kunde schreibt Arabisch → AI antwortet Arabisch",
                  "Kunde schreibt Türkisch → AI antwortet Türkisch"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Alle Weltsprachen + Dialekte – kein Limit
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Language Examples - Top 9 Languages */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {topLanguages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.05 }}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-bold rounded">
                  {lang.code}
                </div>
                <span className="text-sm font-semibold text-gray-900">{lang.name}</span>
              </div>
              <p className="text-sm text-gray-600 italic">{lang.example}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Sparkles,
              title: "Automatische Erkennung",
              desc: "AI erkennt die Sprache sofort – keine Einstellung nötig"
            },
            {
              icon: Globe,
              title: "Native Qualität",
              desc: "Nicht robotische Übersetzungen, sondern fließende Antworten"
            },
            {
              icon: CheckCircle2,
              title: "Kulturelle Anpassung",
              desc: "Du/Sie, Tu/Vous – kulturell korrekte Ansprache"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 rounded-2xl p-8 border border-purple-100"
        >
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl font-light text-gray-900 mb-2">41</div>
              <div className="text-sm font-semibold text-purple-600 mb-2">Widget-Sprachen</div>
              <p className="text-xs text-gray-600">Interface passt sich Ihrem Shop an</p>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-2">100+</div>
              <div className="text-sm font-semibold text-violet-600 mb-2">AI-Antwort-Sprachen</div>
              <p className="text-xs text-gray-600">AI passt sich Ihren Kunden an</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiLanguageBanner;









