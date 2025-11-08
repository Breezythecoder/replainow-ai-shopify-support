import { motion } from "framer-motion";
import { Sparkles, Star, Shield, ArrowRight, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-purple-50/10 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        
        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-violet-200/25 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Enterprise Badge */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60 rounded-full px-6 py-2.5 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900 tracking-tight">
                Enterprise KI-Lösung für Shopify
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-7 tracking-tight leading-[1.1]">
              Automatisierter Support
              <br />
              <span className="font-semibold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
                ohne Kompromisse
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
              Ihre KI versteht jeden Aspekt Ihres Shopify-Stores und beantwortet 
              Kundenanfragen mit der Präzision eines erfahrenen Support-Teams
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {/* Primary CTA */}
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <motion.button 
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>14 Tage kostenlos testen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </motion.button>
              </div>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-purple-200 transition-all shadow-sm hover:shadow-md"
              >
                <span>Live Demo ansehen</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Social Proof + Trust */}
            <div className="flex flex-col items-center gap-4">
              {/* Social Proof with Avatars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-3 text-sm bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm"
              >
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span className="font-semibold text-gray-900">
                  1,247+ Shopify-Händler nutzen ReplAInow
                </span>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-6 text-sm flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.9</span>
                  <span className="text-gray-500">(1,247 Reviews)</span>
                </div>
                
                <div className="h-3 w-px bg-gray-300"></div>
                
                <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                  <Shield className="w-3.5 h-3.5 text-purple-600" />
                  <span>ISO 27001</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;









