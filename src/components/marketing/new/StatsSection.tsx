import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, Users, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const StatsSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 py-20 overflow-hidden">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-purple opacity-20"></div>
      
      {/* Floating glass orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-1/3 w-96 h-96 glass-card-dark rounded-full blur-3xl"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, value: 87, suffix: '%', label: 'Auto-Send Rate', color: 'purple' },
            { icon: CheckCircle2, value: 94, label: 'Durchschn. AI Score', color: 'violet' },
            { icon: Users, value: 28, suffix: '+', label: 'Aktive Shops', color: 'blue' },
            { icon: Zap, value: 60, label: 'Sek Setup-Zeit', color: 'pink', prefix: '<' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-card-dark rounded-2xl p-8 text-center border-2 border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-float"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`
                  w-10 h-10 mx-auto mb-4
                  ${stat.color === 'purple' ? 'text-purple-400' : ''}
                  ${stat.color === 'violet' ? 'text-violet-400' : ''}
                  ${stat.color === 'blue' ? 'text-blue-400' : ''}
                  ${stat.color === 'pink' ? 'text-pink-400' : ''}
                `} />
              </motion.div>
              <div className="text-5xl font-light text-white mb-2">
                {stat.prefix}<AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;


