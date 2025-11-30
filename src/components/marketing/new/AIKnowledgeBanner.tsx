/**
 * 🧠 AI KNOWLEDGE - ULTRA KRASS 3-COLUMN DESIGN
 * 3 Links | SHOPIFY Mitte (Schwarz Glassmorphic) | 3 Rechts
 */

import { motion } from "framer-motion";
import {
  Database,
  Package,
  Users,
  FileText,
  ShoppingBag,
  Truck,
  Globe,
  Zap,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const AIKnowledgeBanner = () => {
  const leftSources = [
    { icon: Package, title: "Produkte & Varianten", desc: "Alle SKUs, Preise, Stock" },
    { icon: ShoppingBag, title: "Bestellungen", desc: "60 Tage komplette Historie" },
    { icon: Users, title: "Kundenprofile", desc: "Präferenzen & Kaufhistorie" },
  ];

  const rightSources = [
    { icon: FileText, title: "Shop-Richtlinien", desc: "Return, Shipping, FAQ" },
    { icon: Truck, title: "Versand-Tracking", desc: "Live Carrier-Status" },
    { icon: Globe, title: "Multi-Channel", desc: "Shop, Social, E-Mail" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI kennt <span className="text-purple-600">JEDEN</span> Aspekt Ihres Shops
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Produkte, Bestellungen, Kunden, Richtlinien – alles automatisch synchronisiert. Sie ändern etwas? AI weiß es sofort. Null Wartung.
          </p>
        </motion.div>

        {/* 3-COLUMN LAYOUT */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          
          {/* LEFT COLUMN - 3 Data Sources */}
          <div className="space-y-4">
            {leftSources.map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
              >
                <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                      <source.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {source.title}
                      </h4>
                      <p className="text-xs text-gray-600">{source.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-gray-100">
                    <Zap className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-gray-500">Auto-Sync</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER - SHOPIFY HUB - SCHWARZ GLASSMORPHIC MEGA KRASS! */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Mega Glow Effects - KRASS! */}
              <div className="absolute -inset-24 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-16 bg-violet-500/30 rounded-full blur-2xl" 
                style={{ 
                  animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  animationDelay: '0.5s' 
                }} 
              />
              
              {/* Floating Bubbles Container */}
              <div className="absolute inset-0 overflow-visible">
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const distance = 100 + (i % 2) * 20;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-purple-400/60 rounded-full blur-sm"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [x, x + 10, x],
                        y: [y, y - 10, y],
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  );
                })}
              </div>

              {/* Main Hub - SCHWARZ GLASSMORPHIC! */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative w-72 h-72 rounded-full shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                {/* Inner glow ring */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 blur-xl" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Content - Counter-rotate to stay upright! */}
                <motion.div
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  {/* Icon - Kleiner! */}
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl mb-3 shadow-2xl shadow-purple-500/50">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title - Kleiner! */}
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
                    SHOPIFY
                  </h3>
                  
                  {/* Live Badge */}
                  <div className="flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full mb-2">
                    <div className="relative">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0 left-0 animate-ping" />
                    </div>
                    <span className="text-xs font-bold text-white">LIVE</span>
                  </div>

                  {/* Stats - Kompakt! */}
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">3s</div>
                      <div className="text-xs text-purple-300">Sync</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">100%</div>
                      <div className="text-xs text-purple-300">Genau</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - 3 Data Sources */}
          <div className="space-y-4">
            {rightSources.map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: -8 }}
              >
                <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                      <source.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                        {source.title}
                      </h4>
                      <p className="text-xs text-gray-600">{source.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-gray-100">
                    <Zap className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-gray-500">Auto-Sync</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REAL-TIME SYNC DEMONSTRATION - ZEIGT DEN VALUE! */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full mb-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-bold">LIVE SYNC AKTIV</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              AI sieht JEDE Änderung in Echtzeit
            </h3>
            <p className="text-sm text-gray-600">
              Sie ändern etwas in Shopify? AI weiß es in 3 Sekunden – automatisch, ohne manuelle Arbeit.
            </p>
          </div>

          {/* Live Activity Feed - 6 Examples */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                icon: ShoppingBag, 
                event: "Neue Bestellung", 
                detail: "#1847 • €127.50", 
                color: "green",
                delay: 0.2
              },
              { 
                icon: Package, 
                event: "Produkt geändert", 
                detail: "Preis aktualisiert • Nike Air", 
                color: "blue",
                delay: 0.3
              },
              { 
                icon: Truck, 
                event: "Tracking hinzugefügt", 
                detail: "DHL • Bestellung #1843", 
                color: "orange",
                delay: 0.4
              },
              { 
                icon: Database, 
                event: "Stock Update", 
                detail: "3 Items → Nur noch 1", 
                color: "red",
                delay: 0.5
              },
              { 
                icon: FileText, 
                event: "Richtlinie geändert", 
                detail: "Widerrufsrecht aktualisiert", 
                color: "purple",
                delay: 0.6
              },
              { 
                icon: Users, 
                event: "Neuer Kunde", 
                detail: "lisa.mueller@gmail.com", 
                color: "teal",
                delay: 0.7
              },
            ].map((activity, i) => {
              const colorClasses = {
                green: 'bg-green-50 border-green-200 text-green-700',
                blue: 'bg-blue-50 border-blue-200 text-blue-700',
                orange: 'bg-orange-50 border-orange-200 text-orange-700',
                red: 'bg-red-50 border-red-200 text-red-700',
                purple: 'bg-purple-50 border-purple-200 text-purple-700',
                teal: 'bg-teal-50 border-teal-200 text-teal-700',
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: activity.delay, duration: 0.4 }}
                  className="relative"
                >
                  {/* Activity Card */}
                  <div className={`bg-white rounded-lg p-4 border shadow-sm ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-xs mb-0.5">
                          {activity.event}
                        </div>
                        <div className="text-xs text-gray-600 truncate">
                          {activity.detail}
                        </div>
                      </div>

                      {/* Timestamp - Animated! */}
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-gray-400 whitespace-nowrap"
                      >
                        now
                      </motion.div>
                    </div>
                  </div>

                  {/* Sync Indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: activity.delay + 0.2 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm font-semibold text-gray-900">
              Und <span className="text-purple-600">100+ weitere Events</span> – alle automatisch synchronisiert, komplett wartungsfrei
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIKnowledgeBanner;
