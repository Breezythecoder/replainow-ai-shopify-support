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
    <div className="bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-mesh-purple opacity-15"></div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            AI kennt <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">JEDEN Aspekt</span> Ihres Shops
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Produkte, Bestellungen, Kunden, Richtlinien – alles automatisch synchronisiert. 
            Sie ändern etwas? AI weiß es sofort. Null Wartung.
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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`
                    absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg
                    ${source.color === 'purple' ? 'bg-purple-500/20' : ''}
                    ${source.color === 'blue' ? 'bg-blue-500/20' : ''}
                    ${source.color === 'violet' ? 'bg-violet-500/20' : ''}
                  `}></div>
                  
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 shadow-card-strong group-hover:shadow-white-card-hover relative">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-3 rounded-lg
                        ${source.color === 'purple' ? 'bg-purple-50' : ''}
                        ${source.color === 'blue' ? 'bg-blue-50' : ''}
                        ${source.color === 'violet' ? 'bg-violet-50' : ''}
                      `}>
                        <source.icon className={`
                          w-6 h-6
                          ${source.color === 'purple' ? 'text-purple-700' : ''}
                          ${source.color === 'blue' ? 'text-blue-700' : ''}
                          ${source.color === 'violet' ? 'text-violet-600' : ''}
                        `} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{source.title}</h4>
                        <p className="text-xs text-gray-600">{source.desc}</p>
                      </div>
                      <div className="bg-purple-50 px-2 py-1 rounded border-2 border-purple-300 text-xs font-bold text-gray-900">
                        {source.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center - 3D Glass Sphere */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              whileInView={{ scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                {/* Outer glow layers */}
                <div className="absolute -inset-12 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -inset-8 bg-violet-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Glass sphere container */}
                <motion.div 
                  className="relative w-64 h-64 mx-auto transform-gpu transition-transform duration-700 hover:scale-110"
                  whileHover={{ rotateY: 12 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Inner dark sphere */}
                  <div className="absolute inset-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-full shadow-2xl"></div>
                  
                  {/* Glass overlay */}
                  <div className="bg-gray-800 rounded-full absolute inset-0">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Icon with glow */}
                      <div className="p-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl shadow-neon-purple mb-3">
                        <Database className="w-14 h-14 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-1">Shopify Admin</h3>
                      
                      {/* Pulsing sync indicator */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full absolute animate-pulse"></div>
                        <span className="text-sm text-green-400 font-bold ml-2">ECHTZEIT SYNC</span>
                    </div>
                      
                    <div className="text-xs text-gray-600">Vollautomatisch</div>
                  </div>
                </div>
                  
                  {/* Floating data particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full blur-sm"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: `${10 + i * 15}%`
                      }}
                    />
                  ))}
                </motion.div>

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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`
                    absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg
                    ${source.color === 'pink' ? 'bg-pink-500/20' : ''}
                    ${source.color === 'purple' ? 'bg-purple-500/20' : ''}
                    ${source.color === 'blue' ? 'bg-blue-500/20' : ''}
                  `}></div>
                  
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 shadow-card-strong group-hover:shadow-white-card-hover relative">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-3 rounded-lg
                        ${source.color === 'pink' ? 'bg-pink-50' : ''}
                        ${source.color === 'purple' ? 'bg-purple-50' : ''}
                        ${source.color === 'blue' ? 'bg-blue-50' : ''}
                      `}>
                        <source.icon className={`
                          w-6 h-6
                          ${source.color === 'pink' ? 'text-pink-700' : ''}
                          ${source.color === 'purple' ? 'text-purple-700' : ''}
                          ${source.color === 'blue' ? 'text-blue-700' : ''}
                        `} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{source.title}</h4>
                        <p className="text-xs text-gray-600">{source.desc}</p>
                      </div>
                      <div className="bg-purple-50 px-2 py-1 rounded border-2 border-purple-300 text-xs font-bold text-gray-900">
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
                  ${benefit.color === 'purple' ? 'text-purple-700' : ''}
                  ${benefit.color === 'violet' ? 'text-violet-600' : ''}
                  ${benefit.color === 'blue' ? 'text-blue-700' : ''}
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
                  ${stat.color === 'purple' ? 'text-purple-700' : ''}
                  ${stat.color === 'violet' ? 'text-violet-600' : ''}
                  ${stat.color === 'blue' ? 'text-blue-700' : ''}
                  ${stat.color === 'pink' ? 'text-pink-700' : ''}
                `} />
                <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real Examples - What AI Can Answer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Was AI sofort beantworten kann
            </h3>
            <p className="text-gray-600">
              Ihre Kunden fragen – AI findet die Antwort in Ihrem Shop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                question: "Habt ihr das Kleid in Größe 42?",
                answer: "Ja, 15 auf Lager!",
                category: "Produkt-Fragen",
                color: "purple",
                difficulty: "Einfach"
              },
              {
                question: "Wo ist meine Bestellung #1234?",
                answer: "Versendet gestern via DHL",
                category: "Bestellungs-Fragen",
                color: "blue",
                difficulty: "Einfach"
              },
              {
                question: "Wie lange ist die Rückgabe-Frist?",
                answer: "30 Tage lt. Ihrer Rückgabe-Richtlinie",
                category: "Richtlinien-Fragen",
                color: "violet",
                difficulty: "Einfach"
              },
              {
                question: "Passt dieses Shirt zu meiner Jeans?",
                answer: "Ja! Zeige Ihnen 3 passende Styles →",
                category: "Style-Beratung",
                color: "pink",
                difficulty: "Medium"
              },
              {
                question: "Kann ich die Versandadresse noch ändern?",
                answer: "Bestellung noch nicht versendet – Adresse aktualisierbar",
                category: "Bestellungs-Änderung",
                color: "blue",
                difficulty: "Medium"
              },
              {
                question: "Ich bin VIP-Kunde, gibt's einen Rabatt?",
                answer: "Ja! 20% Rabattcode für Sie erstellt 🎁",
                category: "VIP-Service",
                color: "green",
                difficulty: "Komplex"
              }
            ].map((example, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`
                    px-3 py-1 rounded-full text-xs font-bold inline-block
                    ${example.color === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                    ${example.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                    ${example.color === 'violet' ? 'bg-violet-100 text-violet-700' : ''}
                    ${example.color === 'pink' ? 'bg-pink-100 text-pink-700' : ''}
                    ${example.color === 'green' ? 'bg-green-100 text-green-700' : ''}
                  `}>
                    {example.category}
                  </div>
                  <div className={`
                    px-2 py-1 rounded text-xs font-medium
                    ${example.difficulty === 'Einfach' ? 'bg-green-50 text-green-700' : ''}
                    ${example.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700' : ''}
                    ${example.difficulty === 'Komplex' ? 'bg-orange-50 text-orange-700' : ''}
                  `}>
                    {example.difficulty}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    „{example.question}"
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">→</span>
                    <span className="font-medium">{example.answer}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-2xl text-gray-900 font-bold">
              <span className="text-purple-600">Null Setup, null Wartung</span> –{" "}
              AI kennt Ihren Shop in{" "}
              <span className="text-violet-600">60 Sekunden</span>
            </p>
            <p className="text-lg text-gray-600 font-medium">
              <span className="font-bold text-purple-600">Ihr Shop-Wissen</span> ist{' '}
              <span className="font-bold text-violet-600">AI's Wissen</span> – automatisch, sofort, präzise
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIKnowledgeBanner;