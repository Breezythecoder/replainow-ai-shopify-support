import { motion } from "framer-motion";
import { Globe, Sparkles, CheckCircle2 } from "lucide-react";

const MultiLanguageBanner = () => {
  const languages = [
    { code: "DE", name: "Deutsch", example: "Hallo! Wie kann ich helfen?" },
    { code: "EN", name: "English", example: "Hello! How can I help?" },
    { code: "FR", name: "Français", example: "Bonjour! Comment puis-je aider?" },
    { code: "ES", name: "Español", example: "¡Hola! ¿Cómo puedo ayudarte?" },
    { code: "IT", name: "Italiano", example: "Ciao! Come posso aiutarti?" },
    { code: "NL", name: "Nederlands", example: "Hallo! Hoe kan ik helpen?" }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="font-semibold">100+ Sprachen</span> automatisch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Die KI erkennt automatisch die Sprache Ihrer Kunden und 
            antwortet fließend – ohne Konfiguration
          </p>
        </motion.div>

        {/* Globe Visualization */}
        <div className="relative mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative p-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full shadow-2xl">
                <Globe className="w-20 h-20 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Language Examples Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
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
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: "Automatische Erkennung",
              desc: "AI erkennt die Sprache sofort – keine Einstellung nötig"
            },
            {
              icon: Globe,
              title: "Native Fluency",
              desc: "Nicht Übersetzungen, sondern native Qualität in jeder Sprache"
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
              transition={{ delay: 1.0 + i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageBanner;









