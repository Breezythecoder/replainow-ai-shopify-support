import { motion } from "framer-motion";
import { Users, Star, Zap, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const TrustBannerSection = () => {
  const stats = [
    { value: 1247, suffix: '+', label: 'Shopify-Händler', icon: Users },
    { value: 4.9, suffix: '★', label: 'Rating (1,247 Reviews)', icon: Star },
    { value: 87, suffix: '%', label: 'Durchschn. Automatisierung', icon: Zap },
    { value: 2, suffix: 's', label: 'Antwortzeit (AI)', icon: Clock, prefix: '<' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 py-24 overflow-hidden">
      {/* Mesh gradient overlay - STÄRKER */}
      <div className="absolute inset-0 bg-mesh-blue opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent"></div>
      
      {/* Floating glass elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 glass-card-dark rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 glass-card-dark rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Vertraut von <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">1,247+ Händlern</span>
          </h2>
          <p className="text-gray-200 text-xl max-w-2xl mx-auto font-medium">
            Echte Zahlen, echte Resultate – Join the #1 AI Helpdesk
          </p>
        </motion.div>

        {/* Stats in glass containers */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="relative rounded-3xl p-10 text-center hover:shadow-float-lg transition-all duration-500 border-2 border-white/20 shadow-2xl"
              style={{
                background: 'rgba(20, 20, 40, 0.7)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
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

export default TrustBannerSection;


