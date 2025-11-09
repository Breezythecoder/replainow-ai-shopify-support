import { motion } from "framer-motion";
import { Star, Users, Zap } from "lucide-react";

const Banner1_HeroImpact = () => {
  return (
    <div className="w-[1600px] h-[900px] bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative text-center text-white px-20">
        {/* Enterprise Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8"
        >
          <Zap className="w-5 h-5 text-white" />
          <span className="text-base font-bold text-white">Enterprise AI Helpdesk für Shopify</span>
        </motion.div>

        {/* Giant Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10"
        >
          <div className="text-[180px] font-light leading-none mb-4">87%</div>
          <div className="w-48 h-2 bg-white/30 rounded-full mx-auto mb-6"></div>
          <div className="text-3xl font-semibold tracking-wide uppercase">Automatisierung</div>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-white/90 mb-12 font-light"
        >
          Email + Chat Support in <span className="font-bold">100+ Sprachen</span> • Live in <span className="font-bold">60 Sekunden</span>
        </motion.p>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-10 flex-wrap"
        >
          {/* Stars */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-bold">4.9</span>
            <span className="text-lg text-white/80">(1,247 Reviews)</span>
          </div>

          <div className="h-8 w-px bg-white/30"></div>

          {/* Users */}
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold">1,247+ Shopify-Händler</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner1_HeroImpact;

