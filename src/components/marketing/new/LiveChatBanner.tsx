import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Globe, Zap } from "lucide-react";

const LiveChatBanner = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Live-Chat <span className="font-semibold">mit KI-Power</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professionelles Chat-Widget mit intelligenter KI – 
            antwortet in Sekunden, rund um die Uhr
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Widget Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            {/* Widget Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-sm mx-auto">
                {/* Widget Header */}
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Live Chat</div>
                        <div className="text-xs text-white/80">AI + Team</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 bg-gray-50">
                  <div className="flex-1 text-center py-3 text-sm font-semibold text-purple-600 border-b-2 border-purple-600">
                    Nachrichten
                  </div>
                  <div className="flex-1 text-center py-3 text-sm text-gray-500">
                    Chats
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 h-64 overflow-hidden bg-gray-50/50">
                  {/* AI Message */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                      <div className="text-xs text-gray-500 mb-1">ReplAI</div>
                      <div className="text-sm text-gray-800">
                        Hallo! Wie kann ich Ihnen heute helfen? 👋
                      </div>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-purple-600 rounded-lg p-3 max-w-[80%]">
                      <div className="text-sm text-white">
                        Habt ihr das Kleid in Größe M?
                      </div>
                    </div>
                  </div>

                  {/* AI Message with Product Card Preview */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">ReplAI</div>
                        <div className="text-sm text-gray-800">
                          Ja! Das Summer Dress ist in Größe M verfügbar. 
                          Noch 12 auf Lager! ✅
                        </div>
                      </div>
                      {/* Product Card Mini */}
                      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <div className="h-20 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                        <div className="p-2">
                          <div className="text-xs font-semibold text-gray-900">Summer Dress</div>
                          <div className="text-xs text-gray-600">€49.90</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-200 bg-white">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                    <input 
                      type="text" 
                      placeholder="Nachricht eingeben..." 
                      className="flex-1 bg-transparent text-sm outline-none"
                      disabled
                    />
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Mehr als nur ein Chat-Widget
              </h3>

              {[
                {
                  icon: MessageSquare,
                  title: "Multi-Tab Interface",
                  desc: "Home, Nachrichten, Chat-Historie – alles übersichtlich",
                  color: "purple"
                },
                {
                  icon: Sparkles,
                  title: "Intelligente KI",
                  desc: "Versteht Kontext, empfiehlt Produkte, kennt Bestellungen",
                  color: "violet"
                },
                {
                  icon: Globe,
                  title: "100+ Sprachen",
                  desc: "Automatische Erkennung – antwortet in Kundensprache",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Proaktive Nachrichten",
                  desc: "Begrüßung, Warenkorb-Erinnerungen, Flash-Sales",
                  color: "pink"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className={`
                    p-3 rounded-xl flex-shrink-0
                    ${feature.color === 'purple' ? 'bg-purple-50' : ''}
                    ${feature.color === 'violet' ? 'bg-violet-50' : ''}
                    ${feature.color === 'blue' ? 'bg-blue-50' : ''}
                    ${feature.color === 'pink' ? 'bg-pink-50' : ''}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <feature.icon className={`
                      w-6 h-6
                      ${feature.color === 'purple' ? 'text-purple-600' : ''}
                      ${feature.color === 'violet' ? 'text-violet-600' : ''}
                      ${feature.color === 'blue' ? 'text-blue-600' : ''}
                      ${feature.color === 'pink' ? 'text-pink-600' : ''}
                    `} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">&lt;2s</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Antwortzeit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">100+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Sprachen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Online</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatBanner;









