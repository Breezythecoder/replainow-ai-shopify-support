import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Clock, ArrowRight } from "lucide-react";

const InformationCollectionSection = () => {
  const steps = [
    {
      stage: "Schritt 1",
      badge: "AI sammelt Info",
      badgeColor: "blue",
      customer: "Das Produkt ist kaputt!",
      ai: "Verstehe! Damit ich helfen kann: Bestellnummer? Welches Produkt? Foto?",
      status: "Informationen sammeln..."
    },
    {
      stage: "Schritt 2",
      badge: "Fast komplett",
      badgeColor: "yellow",
      customer: "Bestellung #5678, blaue Sneakers, hier das Foto",
      ai: "Danke! Notiert: Bestellung #5678, blaue Sneakers, Foto da. Rückerstattung oder Ersatz?",
      status: "Noch 1 Info fehlt"
    },
    {
      stage: "Schritt 3",
      badge: "Bereit für Sie",
      badgeColor: "green",
      customer: "Rückerstattung bitte",
      ai: "Perfekt! Unser Team bearbeitet Ihre Rückerstattung innerhalb von 24 Stunden.",
      status: "✅ Alle Infos komplett"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 bg-mesh-blue opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            AI fragt nach, <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Sie bekommen alles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nie wieder unvollständige Infos. AI sammelt Bestellnummer, Telefon, Fotos – 
            wenn es bei Ihnen landet, ist alles da.
          </p>
        </motion.div>

        {/* 3-Step Flow */}
        <div className="space-y-12 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                
                {/* Left: Conversation */}
                <div className="relative">
                  {/* Step Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-4 py-2 bg-gray-900 text-white rounded-xl font-bold text-sm">
                      {step.stage}
                    </div>
                    <div className={`
                      px-4 py-2 rounded-xl font-bold text-sm
                      ${step.badgeColor === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                      ${step.badgeColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${step.badgeColor === 'green' ? 'bg-green-100 text-green-700' : ''}
                    `}>
                      {step.badge}
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                    {/* Customer Message */}
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white rounded-lg p-4 max-w-[85%] shadow-sm">
                        <div className="text-xs text-white/95 mb-1">Kunde</div>
                        <p className="text-sm">{step.customer}</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-purple-700" />
                      </div>
                      <div className="bg-white border border-purple-200 rounded-lg p-4 max-w-[85%] shadow-elevation-2">
                        <div className="text-xs text-gray-600 mb-1">ReplAI</div>
                        <p className="text-sm text-gray-800">{step.ai}</p>
                      </div>
                    </div>

                    {/* Status */}
                    <div className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold
                      ${step.badgeColor === 'blue' ? 'bg-blue-50 text-blue-700' : ''}
                      ${step.badgeColor === 'yellow' ? 'bg-yellow-50 text-yellow-700' : ''}
                      ${step.badgeColor === 'green' ? 'bg-green-50 text-green-700' : ''}
                    `}>
                      <Clock className="w-4 h-4" />
                      {step.status}
                    </div>
                  </div>

                  {/* Arrow to next step */}
                  {i < steps.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <ArrowRight className="w-8 h-8 text-purple-400 rotate-90" />
                    </div>
                  )}
                </div>

                {/* Right: What Agent Sees (only on final step) */}
                {i === steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl p-8 text-white shadow-2xl">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        Was SIE sehen
                      </h4>

                      {/* Collected Info */}
                      <div className="space-y-4 mb-6">
                        {[
                          { label: "Bestellnummer", value: "#5678", icon: "✓" },
                          { label: "Produkt", value: "Blaue Sneakers", icon: "✓" },
                          { label: "Foto", value: "Angehängt", icon: "✓" },
                          { label: "Lösung gewünscht", value: "Rückerstattung", icon: "✓" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white/10 backdrop-blur rounded-lg p-3">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                                {item.icon}
                              </div>
                              <span className="text-sm font-medium">{item.label}:</span>
                            </div>
                            <span className="text-sm font-bold">{item.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button className="w-full px-6 py-4 bg-white text-purple-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-white-button hover:shadow-white-button-hover flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Rückerstattung durchführen
                      </button>

                      <p className="text-xs text-white/95 mt-4 text-center">
                        Order automatisch geladen • Ein Klick und fertig
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: MessageCircle,
              stat: "Kein",
              label: "Email-Pingpong",
              desc: "AI erledigt die Fragerei"
            },
            {
              icon: CheckCircle2,
              stat: "100%",
              label: "Vollständig",
              desc: "Alle Infos gesammelt"
            },
            {
              icon: Clock,
              stat: "3 Min",
              label: "Statt 30 Min",
              desc: "80% Zeit gespart"
            },
            {
              icon: ArrowRight,
              stat: "Direkt",
              label: "Zum Handeln",
              desc: "Sie bekommen Info-Pakete"
            }
          ].map((benefit, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <benefit.icon className="w-8 h-8 text-purple-700 mx-auto mb-3" />
              <div className="text-3xl font-light text-gray-900 mb-1">{benefit.stat}</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">{benefit.label}</div>
              <p className="text-xs text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-600">AI ist Ihr Info-Sammler</span> –{' '}
            Sie bekommen nur noch <span className="font-bold text-violet-600">vollständige Tickets</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InformationCollectionSection;

