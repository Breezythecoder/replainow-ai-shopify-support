import { motion } from "framer-motion";
import { Mail, CheckCircle2, Clock, TrendingUp } from "lucide-react";

const EmailHelpdeskBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 bg-mesh-purple opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            E-Mail Helpdesk <span className="font-semibold">mit Qualitäts-Garantie</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI schreibt Antworten, bewertet sich selbst (0-100), sendet nur perfekte Emails (90+) automatisch. 
            Sie kontrollieren die Qualität.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: CheckCircle2,
                  title: "AI bewertet sich selbst",
                  desc: "Score 90+? Automatisch gesendet! Score unter 90? Sie prüfen zuerst.",
                  stat: "90+ Auto-Send",
                  color: "green"
                },
                {
                  icon: TrendingUp,
                  title: "Sie stellen Qualität ein",
                  desc: "Mindest-Score 80, 85 oder 90? Sie entscheiden. Höher = mehr Kontrolle, niedriger = schneller.",
                  stat: "Einstellbar",
                  color: "purple"
                },
                {
                  icon: Clock,
                  title: "AI sammelt alle Infos",
                  desc: "Bestellnummer, Telefon, Fotos – AI fragt nach. Wenn es bei Ihnen landet: alles da.",
                  stat: "Vollständig",
                  color: "blue"
                },
                {
                  icon: Mail,
                  title: "Thread-basiert wie Gmail",
                  desc: "Alle E-Mails einer Konversation übersichtlich gruppiert. Professionelles Interface.",
                  stat: "Gmail-Style",
                  color: "violet"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`
                    p-3 rounded-xl flex-shrink-0
                    ${feature.color === 'green' ? 'bg-green-50' : ''}
                    ${feature.color === 'purple' ? 'bg-purple-50' : ''}
                    ${feature.color === 'blue' ? 'bg-blue-50' : ''}
                    ${feature.color === 'violet' ? 'bg-violet-50' : ''}
                  `}>
                    <feature.icon className={`
                      w-6 h-6
                      ${feature.color === 'green' ? 'text-green-600' : ''}
                      ${feature.color === 'purple' ? 'text-purple-600' : ''}
                      ${feature.color === 'blue' ? 'text-blue-600' : ''}
                      ${feature.color === 'violet' ? 'text-violet-600' : ''}
                    `} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <span className={`
                        px-2 py-0.5 text-xs font-bold rounded
                        ${feature.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                        ${feature.color === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                        ${feature.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                        ${feature.color === 'violet' ? 'bg-violet-100 text-violet-700' : ''}
                      `}>
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-200/40 to-blue-200/40 rounded-3xl blur-2xl"></div>
              
              {/* Email Dashboard Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gray-900 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">E-Mail Dashboard</span>
                  </div>
                </div>

                {/* Thread List Preview */}
                <div className="p-4 space-y-2 bg-gray-50">
                  {/* Thread Item 1 */}
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">
                          MS
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Maria Schmidt</div>
                          <div className="text-xs text-gray-500">Frage zu Rückgabe</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-green-700">94</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">AI-Antwort bereit • Exzellente Qualität</div>
                  </div>

                  {/* Thread Item 2 */}
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                          TM
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Thomas Meyer</div>
                          <div className="text-xs text-gray-500">Wo ist meine Bestellung?</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                        AUTO-SENT
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">Automatisch versendet • 2 Min</div>
                  </div>

                  {/* Thread Item 3 */}
                  <div className="bg-white rounded-lg p-3 border border-yellow-200 bg-yellow-50/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-xs font-bold text-pink-600">
                          SK
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Sarah Klein</div>
                          <div className="text-xs text-gray-500">Beschwerde</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">
                        REVIEW
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">Prüfung empfohlen • Hohe Priorität</div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-px bg-gray-200 p-3">
                  <div className="bg-white p-3 rounded text-center">
                    <div className="text-lg font-bold text-gray-900">87%</div>
                    <div className="text-[10px] text-gray-500 uppercase">Auto-Send</div>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <div className="text-lg font-bold text-gray-900">94</div>
                    <div className="text-[10px] text-gray-500 uppercase">Avg Score</div>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <div className="text-lg font-bold text-gray-900">&lt;5Min</div>
                    <div className="text-[10px] text-gray-500 uppercase">Antwort</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmailHelpdeskBanner;









