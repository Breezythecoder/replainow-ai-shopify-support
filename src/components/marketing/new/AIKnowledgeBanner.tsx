import { motion } from "framer-motion";
import { Database, Zap, CheckCircle2, TrendingUp, Package, Users, FileText, ShoppingBag, Truck, Globe } from "lucide-react";

const AIKnowledgeBanner = () => {
  const dataSourcesLeft = [
    { 
      icon: Package, 
      title: "Produkte", 
      desc: "Katalog, Varianten, Preise", 
      color: "purple",
      stats: "Real-time"
    },
    { 
      icon: ShoppingBag, 
      title: "Bestellungen", 
      desc: "Status, Tracking, Historie", 
      color: "blue",
      stats: "60 Tage"
    },
    { 
      icon: Users, 
      title: "Kunden", 
      desc: "Profile, Präferenzen", 
      color: "violet",
      stats: "Lifetime"
    }
  ];

  const dataSourcesRight = [
    { 
      icon: FileText, 
      title: "Richtlinien", 
      desc: "Rückgabe, Versand, AGB", 
      color: "pink",
      stats: "Auto-Sync"
    },
    { 
      icon: Truck, 
      title: "Versand", 
      desc: "Carrier, Tracking-Links", 
      color: "purple",
      stats: "Live"
    },
    { 
      icon: Globe, 
      title: "Content", 
      desc: "Seiten, FAQs, Blog", 
      color: "blue",
      stats: "Voll"
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Ihre KI kennt <span className="font-semibold">Ihren Shop</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ReplAInow synchronisiert sich automatisch mit allen Shopify-Daten – 
            ohne manuelle Arbeit
          </p>
        </motion.div>

        {/* Main Data Flow Visualization */}
        <div className="relative mb-20">
          
          {/* Connection Lines - Animated */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-center -translate-y-1/2 pointer-events-none">
            <div className="w-full max-w-5xl relative h-px">
              {/* Horizontal lines */}
              <div className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-300"></div>
              <div className="absolute right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-purple-300 to-purple-300"></div>
              
              {/* Animated flow dots */}
              <motion.div
                animate={{ x: [0, 200, 200], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-2 h-2 bg-purple-500 rounded-full"
              />
              <motion.div
                animate={{ x: [0, -200, -200], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                className="absolute right-0 w-2 h-2 bg-purple-500 rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Data Sources */}
            <div className="space-y-4">
              {dataSourcesLeft.map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`
                    absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur
                    ${source.color === 'purple' ? 'bg-purple-500/20' : ''}
                    ${source.color === 'blue' ? 'bg-blue-500/20' : ''}
                    ${source.color === 'violet' ? 'bg-violet-500/20' : ''}
                  `}></div>
                  
                  <div className="relative bg-white rounded-xl p-5 border border-gray-200 group-hover:border-purple-200 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-3 rounded-lg
                        ${source.color === 'purple' ? 'bg-purple-50' : ''}
                        ${source.color === 'blue' ? 'bg-blue-50' : ''}
                        ${source.color === 'violet' ? 'bg-violet-50' : ''}
                      `}>
                        <source.icon className={`
                          w-6 h-6
                          ${source.color === 'purple' ? 'text-purple-600' : ''}
                          ${source.color === 'blue' ? 'text-blue-600' : ''}
                          ${source.color === 'violet' ? 'text-violet-600' : ''}
                        `} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{source.title}</h4>
                        <p className="text-xs text-gray-600">{source.desc}</p>
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700">
                        {source.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center - Shopify Admin Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-3xl blur-3xl animate-pulse"></div>
                
                {/* Main Hub */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 rounded-3xl p-10 shadow-2xl border border-gray-700">
                  <div className="text-center">
                    <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-xl shadow-purple-500/50 mb-4">
                      <Database className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Shopify Admin</h3>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-bold">ECHTZEIT SYNC</span>
                    </div>
                    <div className="text-xs text-gray-400">Vollautomatisch</div>
                  </div>
                </div>

                {/* Sync Arrows */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
                  <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
                
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <svg className="w-8 h-8 text-purple-400 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Data Sources */}
            <div className="space-y-4">
              {dataSourcesRight.map((source, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`
                    absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur
                    ${source.color === 'pink' ? 'bg-pink-500/20' : ''}
                    ${source.color === 'purple' ? 'bg-purple-500/20' : ''}
                    ${source.color === 'blue' ? 'bg-blue-500/20' : ''}
                  `}></div>
                  
                  <div className="relative bg-white rounded-xl p-5 border border-gray-200 group-hover:border-purple-200 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-3 rounded-lg
                        ${source.color === 'pink' ? 'bg-pink-50' : ''}
                        ${source.color === 'purple' ? 'bg-purple-50' : ''}
                        ${source.color === 'blue' ? 'bg-blue-50' : ''}
                      `}>
                        <source.icon className={`
                          w-6 h-6
                          ${source.color === 'pink' ? 'text-pink-600' : ''}
                          ${source.color === 'purple' ? 'text-purple-600' : ''}
                          ${source.color === 'blue' ? 'text-blue-600' : ''}
                        `} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{source.title}</h4>
                        <p className="text-xs text-gray-600">{source.desc}</p>
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700">
                        {source.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Zap,
              title: "Echtzeit-Updates",
              desc: "Shopify-Änderungen synchronisieren sich innerhalb von Sekunden",
              color: "purple"
            },
            {
              icon: CheckCircle2,
              title: "Null Wartung",
              desc: "Keine manuellen Updates, keine Wissensdatenbank-Pflege",
              color: "violet"
            },
            {
              icon: TrendingUp,
              title: "99.8% Genauigkeit",
              desc: "AI kennt exakte Daten, keine Schätzungen oder Raten",
              color: "blue"
            }
          ].map((benefit, i) => (
            <div key={i} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200">
                <benefit.icon className={`
                  w-8 h-8
                  ${benefit.color === 'purple' ? 'text-purple-600' : ''}
                  ${benefit.color === 'violet' ? 'text-violet-600' : ''}
                  ${benefit.color === 'blue' ? 'text-blue-600' : ''}
                `} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 rounded-2xl p-8 border border-purple-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Database, label: "Datenquellen", value: "12+", color: "purple" },
              { icon: Zap, label: "Sync-Zeit", value: "<5 Sek", color: "violet" },
              { icon: CheckCircle2, label: "Wartung", value: "0 Min", color: "blue" },
              { icon: TrendingUp, label: "Genauigkeit", value: "99.8%", color: "pink" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className={`
                  w-6 h-6 mx-auto mb-3
                  ${stat.color === 'purple' ? 'text-purple-600' : ''}
                  ${stat.color === 'violet' ? 'text-violet-600' : ''}
                  ${stat.color === 'blue' ? 'text-blue-600' : ''}
                  ${stat.color === 'pink' ? 'text-pink-600' : ''}
                `} />
                <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 font-medium">
            <span className="font-bold text-purple-600">Automatischer Import</span> bei Installation →{' '}
            <span className="font-bold text-violet-600">Live in 60 Sekunden</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AIKnowledgeBanner;