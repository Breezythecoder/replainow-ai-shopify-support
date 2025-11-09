import { motion } from "framer-motion";
import { Sparkles, Star, Shield, ArrowRight, ShoppingBag } from "lucide-react";
import { FloatingCard } from "@/components/ui/FloatingCard";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Animated Mesh Gradient Background - STÄRKER */}
      <div className="absolute inset-0 bg-mesh-purple opacity-100"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 via-white/70 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 relative">
        
        {/* Floating Glass Orbs */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-64 h-64 glass-card rounded-full opacity-40 hidden lg:block"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-1/3 w-48 h-48 glass-card rounded-full opacity-30 hidden lg:block"
        ></motion.div>
        
        {/* Floating Mini Dashboard Screenshot - VIEL GRÖßER - Desktop only */}
        <FloatingCard delay={0.5} intensity="medium" className="hidden xl:block absolute -right-32 top-1/4 w-[480px] z-20">
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-3 shadow-float-lg border-4 border-purple-300/50"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)'
            }}
          >
            <img 
              src="/images/dashboard-livechat-cart.png"
              className="rounded-2xl w-full shadow-2xl"
              alt="Dashboard Preview"
              loading="eager"
            />
            {/* STÄRKERER Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/40 to-violet-500/40 rounded-3xl blur-2xl -z-10"></div>
          </motion.div>
        </FloatingCard>
        
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
              className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border-2 border-purple-200 rounded-full px-6 py-2.5 mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-950 tracking-tight">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 25px 70px rgba(147, 51, 234, 0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-float"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>14 Tage kostenlos testen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </motion.button>
              </div>

              {/* Secondary CTA - Glass */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card inline-flex items-center gap-2 text-gray-900 px-10 py-5 rounded-xl font-semibold text-lg border-2 border-purple-200/40 hover:border-purple-300/60 transition-all shadow-glass hover:shadow-float"
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
                className="glass-card inline-flex items-center gap-3 text-sm px-5 py-3 rounded-full border-2 border-purple-200/40 shadow-glass"
              >
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                    alt="Merchant"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
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
                <div className="glass-card flex items-center gap-2 px-4 py-2 rounded-full border-2 border-purple-100/50">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.9</span>
                  <span className="text-gray-600">(1,247 Reviews)</span>
                </div>
                
                <div className="glass-card flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-purple-100/50">
                  <Shield className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-gray-900 font-medium">ISO 27001</span>
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









