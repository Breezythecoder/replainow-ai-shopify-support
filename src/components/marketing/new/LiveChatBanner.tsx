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
            Live-Chat <span className="font-semibold">der mehr kann</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nicht nur Text-Chat: Produkt-Karten mit Bildern, Rabatt-Codes, Tracking-Links, 
            vorgefüllte Warenkörbe – modernes Widget, kein 90er Jahre Ding
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
            {/* Widget Mockup with Glass */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-3xl blur-2xl"></div>
              
              <div className="glass-card rounded-3xl shadow-float-lg border-2 border-white/50 overflow-hidden max-w-sm mx-auto relative">
                {/* Widget Header with animated gradient */}
                <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-[length:200%_100%] animate-gradient p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Live Chat</div>
                        <div className="text-xs text-white/80">AI + Team</div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 left-0"></div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 bg-white/50 backdrop-blur-sm">
                  <div className="flex-1 text-center py-3 text-sm font-semibold text-purple-600 border-b-2 border-purple-600">
                    Nachrichten
                  </div>
                  <div className="flex-1 text-center py-3 text-sm text-gray-500">
                    Chats
                  </div>
                </div>

                {/* Messages with staggered animation */}
                <div className="p-4 space-y-3 h-64 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
                  {/* AI Message 1 */}
                  <motion.div 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%] border border-gray-100">
                      <div className="text-xs text-gray-500 mb-1">ReplAI</div>
                      <div className="text-sm text-gray-800">
                        Hallo! Wie kann ich Ihnen heute helfen? 👋
                      </div>
                    </div>
                  </motion.div>

                  {/* Customer Message */}
                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg p-3 max-w-[80%] shadow-lg">
                      <div className="text-sm text-white">
                        Habt ihr das Kleid in Größe M?
                      </div>
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 1.5, repeat: Infinity }}
                    className="flex gap-2"
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* AI Message with Product Card Preview */}
                  <motion.div 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">ReplAI</div>
                        <div className="text-sm text-gray-800">
                          Ja! Das Summer Dress ist in Größe M verfügbar. 
                          Noch 12 auf Lager! ✅
                        </div>
                      </div>
                      {/* Product Card Mini - Glass */}
                      <motion.div 
                        className="glass-card rounded-lg overflow-hidden shadow-float border-2 border-purple-200/40"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-20 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                        <div className="p-2">
                          <div className="text-xs font-semibold text-gray-900">Summer Dress</div>
                          <div className="text-xs text-gray-600">€49.90</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-200 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center gap-2 glass-card rounded-lg px-3 py-2 border-2 border-purple-100/50">
                    <input 
                      type="text" 
                      placeholder="Nachricht eingeben..." 
                      className="flex-1 bg-transparent text-sm outline-none"
                      disabled
                    />
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </motion.div>
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
                <div className="text-3xl font-light text-gray-900 mb-1">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Tabs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Online</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Card Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 mb-3">
              Mehr als nur Text
            </h3>
            <p className="text-gray-600">
              Support mit Bildern, Buttons und Ein-Klick-Aktionen
            </p>
          </div>

          {/* 4 Card Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
                  👗
                </div>
              </div>
              <div className="p-4">
                <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded inline-block mb-2">
                  PRODUKT-KARTE
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Summer Dress</h4>
                <p className="text-xs text-gray-600 mb-3">€49,90 • Noch 12 auf Lager</p>
                <button className="w-full px-3 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg group-hover:bg-purple-600 transition-colors">
                  Ansehen
                </button>
              </div>
            </motion.div>

            {/* Discount Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 p-6 group"
            >
              <div className="text-3xl mb-3">🎁</div>
              <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded inline-block mb-3">
                RABATT-CODE
              </div>
              <div className="mb-3">
                <div className="font-mono font-bold text-gray-900 text-sm mb-1">AI20-XYZ123</div>
                <div className="text-xs text-green-600 font-semibold">20% OFF</div>
              </div>
              <button className="w-full px-3 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg group-hover:bg-green-700 transition-colors">
                Kopieren
              </button>
            </motion.div>

            {/* Tracking Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 p-6 group"
            >
              <div className="text-3xl mb-3">📦</div>
              <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded inline-block mb-3">
                TRACKING
              </div>
              <div className="mb-3">
                <div className="text-xs text-gray-600 mb-1">DHL Express</div>
                <div className="font-mono text-xs text-gray-900 font-semibold">DE123456789</div>
              </div>
              <button className="w-full px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg group-hover:bg-blue-700 transition-colors">
                Tracking öffnen
              </button>
            </motion.div>

            {/* Checkout Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 p-6 group"
            >
              <div className="text-3xl mb-3">🛒</div>
              <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded inline-block mb-3">
                CHECKOUT-LINK
              </div>
              <div className="mb-3">
                <div className="text-xs text-gray-600 mb-2">3 Artikel</div>
                <div className="font-bold text-gray-900 text-sm">€159,70</div>
                <div className="text-xs text-green-600 font-semibold">+ 15% Rabatt</div>
              </div>
              <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold rounded-lg group-hover:from-purple-700 group-hover:to-violet-700 transition-colors">
                Jetzt kaufen
              </button>
            </motion.div>
          </div>

          {/* Bottom Benefit */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-purple-600">Visual = mehr Conversions</span> –{' '}
              Kunde klickt, kauft, fertig
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveChatBanner;









