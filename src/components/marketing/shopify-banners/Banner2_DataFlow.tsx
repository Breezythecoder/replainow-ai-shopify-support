import { motion } from "framer-motion";
import { Database, Brain, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const Banner2_DataFlow = () => {
  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative px-20 w-full">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            Automatische <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Shopify-Synchronisation</span>
          </h2>
          <p className="text-2xl text-gray-600">Echtzeit-Datenfluss ohne manuelle Arbeit</p>
        </div>

        {/* Flow Diagram */}
        <div className="flex items-center justify-between">
          
          {/* Shopify Admin */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200">
              <div className="text-center">
                <div className="inline-flex p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-4">
                  <Database className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Shopify</h3>
                <p className="text-gray-600 mb-3">Admin</p>
                <div className="text-sm text-gray-500">
                  Produkte • Bestellungen<br/>
                  Kunden • Content
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrows with Sync Info */}
          <div className="flex-1 flex items-center justify-center px-12">
            <div className="relative">
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-16 h-16 text-purple-400" strokeWidth={3} />
              </motion.div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  &lt; 5 Sekunden Sync
                </div>
              </div>
            </div>
          </div>

          {/* AI Brain */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-10 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex p-8 bg-white/20 backdrop-blur rounded-2xl mb-4">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">ReplAI</h3>
                <p className="text-white/90 mb-3">Intelligence</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-sm text-green-300 font-bold">AKTIV</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrows */}
          <div className="flex-1 flex items-center justify-center px-12">
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowRight className="w-16 h-16 text-purple-400" strokeWidth={3} />
            </motion.div>
          </div>

          {/* Customer Support */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200">
              <div className="text-center">
                <div className="inline-flex p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mb-4">
                  <MessageCircle className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Kunden</h3>
                <p className="text-gray-600 mb-3">Glücklich</p>
                <div className="text-sm text-green-600 font-bold">
                  24/7 Support<br/>
                  100+ Sprachen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2_DataFlow;









