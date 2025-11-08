import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe, BarChart3, Star, Shield, TrendingUp } from "lucide-react";

const Banner5_ValueTriple = () => {
  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-white via-purple-50/30 to-white flex flex-col items-center justify-center relative overflow-hidden px-20">
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-6xl font-light text-gray-900 mb-4">
          Alles was Sie brauchen, <span className="font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">in einem Tool</span>
        </h2>
        <p className="text-2xl text-gray-600">Enterprise AI Helpdesk speziell für Shopify</p>
      </div>

      {/* 3 Value Cards */}
      <div className="relative grid grid-cols-3 gap-8 mb-16">
        
        {/* Card 1 - Dual Channel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-6 bg-purple-50 rounded-2xl">
                <Mail className="w-12 h-12 text-purple-600" />
              </div>
              <div className="text-4xl font-light text-gray-400">+</div>
              <div className="p-6 bg-violet-50 rounded-2xl">
                <MessageSquare className="w-12 h-12 text-violet-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Email + Chat</h3>
            <p className="text-gray-600 text-center text-lg">
              Beide Kanäle in einem Dashboard – nahtlos integriert
            </p>
            <div className="mt-6 text-center">
              <div className="inline-flex px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold">
                DUAL-CHANNEL
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Multi-Language */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <Globe className="w-16 h-16 text-blue-600" />
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="text-7xl font-light text-gray-900 mb-3">100+</div>
              <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-4"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Sprachen</h3>
            <p className="text-gray-600 text-center text-lg">
              Automatische Erkennung und native Antworten
            </p>
          </div>
        </motion.div>

        {/* Card 3 - Automation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-purple-50 rounded-2xl">
                <BarChart3 className="w-16 h-16 text-purple-600" />
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="text-7xl font-light text-gray-900 mb-3">87%</div>
              <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Automatisierung</h3>
            <p className="text-gray-600 text-center text-lg">
              KI beantwortet vollautomatisch – präzise & markenkonform
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="relative bg-gray-100 border-t border-gray-200 py-8 w-full">
        <div className="flex items-center justify-center gap-12 text-gray-900">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-purple-600" />
            <span className="font-semibold">ISO 27001 Zertifiziert</span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="font-semibold">1,247+ Shopify-Händler</span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="font-semibold text-xl">
            Live in <span className="text-purple-600">60 Sekunden</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner5_ValueTriple;
