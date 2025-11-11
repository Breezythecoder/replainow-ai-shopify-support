import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Count-up animation hook
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);
  
  return count;
};

const ValuePropositionSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const automationCount = useCountUp(87, 2000, isStatsInView);

  return (
    <div id="features" className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white">
      {/* Subtle mesh */}
      <div className="absolute inset-0 bg-mesh-purple opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Warum <span className="font-semibold">Shopify-Händler</span> uns wählen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-Level Support-Automatisierung, die funktioniert
          </p>
        </div>

        {/* Bento Grid - Asymmetrisches Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8" ref={statsRef}>
          
          {/* Card 1 - 87% HERO CARD - DUNKEL & DOMINANT - Spans 2x2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 relative group"
          >
            {/* MEGA GLOW - VIEL STÄRKER */}
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/50 to-violet-600/50 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* DUNKLER GRADIENT BACKGROUND - NICHT GLASS */}
            <div className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 rounded-3xl p-12 overflow-hidden h-full shadow-2xl group-hover:shadow-float-lg transition-all duration-500 border-2 border-purple-400/30">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="relative h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-8">
                  {/* Icon mit WHITE glow */}
                  <motion.div 
                    className="p-5 bg-white rounded-2xl shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-10 h-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </motion.div>
                  
                  {/* Floating Sparkles - WHITE */}
                  <div className="absolute top-12 right-12 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20 flex items-center justify-center float-animation shadow-2xl">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>

                <motion.div 
                  className="mb-10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* RIESIGE ZAHL - WEIẞ */}
                  <div className="text-[10rem] md:text-[12rem] font-black text-white leading-none mb-6 drop-shadow-2xl">
                    {automationCount}<span className="text-white/80">%</span>
                  </div>
                  
                  {/* WHITE BADGE */}
                  <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border-2 border-white/30 shadow-xl">
                    <span className="text-sm font-black text-white tracking-wider">AUTOMATISIERUNGSRATE</span>
                  </div>
                </motion.div>

                <p className="text-white/95 leading-relaxed text-xl font-medium max-w-md">
                  Ihrer Support-Anfragen werden vollautomatisch beantwortet – präzise und markenkonform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - AI-Intelligenz - BRIGHT GLASS - Spans 2 columns, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 relative group"
          >
            {/* STÄRKERER Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            
            {/* STÄRKERES GLASS */}
            <div className="relative rounded-3xl p-8 overflow-hidden h-full group-hover:shadow-float transition-all duration-500 border-2 border-white/60 shadow-xl" style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)'
            }}>
              {/* Gradient overlay - STÄRKER */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 to-blue-100/40 group-hover:from-violet-100/80 group-hover:to-blue-100/60 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative">
                {/* Brain icon with sparkles - BIGGER */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="p-5 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <motion.div 
                    className="p-5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-9 h-9 text-white" />
                  </motion.div>
                </div>

                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-none">
                    99.8<span className="text-violet-600">%</span> Genauigkeit
                  </div>
                  <div className="inline-block px-5 py-2.5 rounded-full border-2 border-violet-300 bg-violet-50/80 backdrop-blur-sm shadow-lg">
                    <span className="text-xs font-black text-violet-900 tracking-wider">AI-INTELLIGENZ</span>
                  </div>
                </div>

                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  AI kennt exakte Daten aus Ihrem Shop – keine Halluzinationen, keine Fehler, keine Schätzungen
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - 24/7 Global - BRIGHT GLASS - Spans 2 columns, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 relative group"
          >
            {/* STÄRKERER Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            
            {/* STÄRKERES GLASS */}
            <div className="relative rounded-3xl p-8 overflow-hidden h-full group-hover:shadow-float transition-all duration-500 border-2 border-white/60 shadow-xl" style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)'
            }}>
              {/* Gradient overlay - STÄRKER */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 to-purple-100/40 group-hover:from-pink-100/80 group-hover:to-purple-100/60 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    className="p-5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="mb-6">
                  <div className="text-7xl md:text-8xl font-black text-gray-900 mb-4 tracking-tight leading-none">24/7</div>
                  <div className="inline-block px-5 py-2.5 rounded-full border-2 border-pink-300 bg-pink-50/80 backdrop-blur-sm shadow-lg">
                    <span className="text-xs font-black text-pink-900 tracking-wider">VERFÜGBARKEIT</span>
                  </div>
                </div>

                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  Nahtloser Support ohne Ausfallzeiten, Urlaub oder Krankheitstage – immer verfügbar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionSection;









