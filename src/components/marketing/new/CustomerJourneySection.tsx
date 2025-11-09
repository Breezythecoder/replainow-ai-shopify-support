import { motion } from "framer-motion";
import { Eye, ShoppingCart, Clock, Smartphone, TrendingUp, ArrowRight } from "lucide-react";

const CustomerJourneySection = () => {
  const journeySteps = [
    { icon: "🏠", page: "Homepage", time: "12s", action: "Gelandet" },
    { icon: "👗", page: "Summer Dress", time: "45s", action: "80% gescrollt" },
    { icon: "🛒", page: "Warenkorb", time: "20s", action: "€150 drin" },
    { icon: "💬", page: "Chat geöffnet", time: "Jetzt", action: "Frage" }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Sie sehen <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">was Kunde tut</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Live-Einblick in Kunden-Verhalten: Welche Produkte angeschaut, was im Warenkorb liegt, 
            wie lange auf Seite – Support mit Röntgen-Blick
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-300 via-violet-300 to-purple-300"></div>
              
              <div className="space-y-6">
                {journeySteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                      {step.icon}
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{step.page}</h4>
                        <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">
                          {step.time}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{step.action}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: What Agent Sees */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Was SIE sehen
              </h3>

              <div className="space-y-4 mb-6">
                {[
                  { icon: "👗", label: "Aktuell auf", value: "Summer Dress Produkt-Seite", color: "purple" },
                  { icon: "⏱️", label: "Angeschaut", value: "45 Sekunden, 80% gescrollt", color: "blue" },
                  { icon: "🛒", label: "Warenkorb", value: "3 Artikel • €150,00", color: "green" },
                  { icon: "📱", label: "Gerät", value: "iPhone (Mobile)", color: "violet" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-white/70 mb-1">{item.label}</div>
                        <div className="font-semibold text-white">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Purchase Intent Score */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white">Kauf-Absicht Score:</span>
                  <div className="text-3xl font-bold text-green-400">82/100</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-bold text-green-400">Hoch</span> – Kunde ist bereit zum Kauf!
                </p>
              </div>

              <p className="text-xs text-white/60 mt-6 text-center">
                💡 Tipp: Jetzt Rabatt anbieten = Conversion!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              icon: Eye,
              title: "Sie sehen alles",
              desc: "Produkt, Warenkorb, Zeit, Gerät"
            },
            {
              icon: TrendingUp,
              title: "Kauf-Absicht Score",
              desc: "Wissen Sie: Kunde nur guckt oder kauft?"
            },
            {
              icon: ShoppingCart,
              title: "Warenkorb live",
              desc: "€150 drin? Perfekt für Rabatt-Angebot!"
            },
            {
              icon: ArrowRight,
              title: "Bessere Conversion",
              desc: "Kontext = bessere Empfehlungen"
            }
          ].map((benefit, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <benefit.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{benefit.title}</h4>
              <p className="text-xs text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-600">Kunde zögert?</span> Sie sehen es.{' '}
            <span className="font-bold text-violet-600">Kunde bereit?</span> Sie wissen es.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerJourneySection;

