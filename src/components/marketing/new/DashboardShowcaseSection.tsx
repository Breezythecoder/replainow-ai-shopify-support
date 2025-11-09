import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Users, ShoppingCart, Package, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const DashboardShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState<'livechat' | 'email'>('livechat');
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            So sieht <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Ihr Dashboard</span> aus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chat, Email, Kunden-Info, Bestellungen – alles in einem Bildschirm. 
            Kein Tab-Chaos mehr.
          </p>
        </motion.div>

        {/* Interactive Dashboard Tabs - KRASSER */}
        <div className="relative">
          {/* STÄRKERER Background glow */}
          <div className="absolute -inset-12 bg-gradient-to-br from-purple-500/40 to-violet-500/40 rounded-3xl blur-3xl"></div>
          
          {/* STÄRKERES Glass container */}
          <div className="relative rounded-3xl p-10 border-2 border-white/60 shadow-2xl" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)'
          }}>
            {/* Tab Switcher - GRÖßER */}
            <div className="flex gap-4 mb-10 p-3 rounded-2xl w-fit mx-auto shadow-xl border-2 border-white/60" style={{
              background: 'rgba(255, 255, 255, 0.90)',
              backdropFilter: 'blur(20px)'
            }}>
              <motion.button
                onClick={() => setActiveTab('livechat')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === 'livechat'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-white/90 hover:shadow-lg'
                }`}
              >
                <MessageSquare className="w-6 h-6 inline mr-2" />
                Live Chat Dashboard
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('email')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === 'email'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-white/90 hover:shadow-lg'
                }`}
              >
                <Mail className="w-6 h-6 inline mr-2" />
                Email Dashboard
              </motion.button>
            </div>
            
            {/* Screenshot with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/70"
              >
                <img 
                  src={activeTab === 'livechat' ? '/images/dashboard-livechat-cart.png' : '/images/dashboard-email-ai.png'}
                  alt={activeTab === 'livechat' ? 'Live Chat Dashboard' : 'Email Dashboard'}
                  className="w-full shadow-xl"
                  loading="lazy"
                />
                
                {/* Floating feature badges on screenshot */}
                {activeTab === 'livechat' && (
                  <>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-10 right-10 glass-card px-4 py-2 rounded-full shadow-glass border-2 border-purple-200/40"
                    >
                      <span className="text-sm font-bold text-purple-900">VIP Kunde</span>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-10 left-10 glass-card px-4 py-2 rounded-full shadow-glass border-2 border-green-200/40"
                    >
                      <span className="text-sm font-bold text-green-700">Warenkorb: €159</span>
                    </motion.div>
                  </>
                )}
                
                {activeTab === 'email' && (
                  <>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-10 right-10 glass-card px-4 py-2 rounded-full shadow-glass border-2 border-green-200/40"
                    >
                      <span className="text-sm font-bold text-green-700">AI Score: 94</span>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Key Benefit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="glass-card inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-200/40 rounded-2xl shadow-glass">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-purple-900">
              Professionelles Interface wie bei großen Tools – aber alles in einem
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardShowcaseSection;

