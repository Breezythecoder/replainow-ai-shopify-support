import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Warum <span className="font-semibold">Shopify-Händler</span> uns wählen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-Level Support-Automatisierung, die funktioniert
          </p>
        </div>

        {/* 3 Premium Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8" ref={statsRef}>
          
          {/* Card 1 - KI-Powered Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-10 border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:shadow-purple-100/40 group-hover:border-purple-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/50 group-hover:to-violet-50/30 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-9">
                  <div className="p-3.5 bg-purple-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="px-3.5 py-1.5 bg-purple-50 rounded-full">
                    <span className="text-xs font-bold text-purple-700 tracking-wide">KI-POWERED</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-7xl md:text-8xl font-light text-gray-900 mb-4 tracking-tight leading-none">
                    {automationCount}%
                  </div>
                  <div className="relative mb-5">
                    <div className="w-12 h-1.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-md opacity-50"></div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.12em] text-gray-500 font-bold mb-4">
                    Automatisierungsrate
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Ihrer Support-Anfragen werden vollautomatisch beantwortet – präzise und markenkonform
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Email + Chat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-10 border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:shadow-violet-100/40 group-hover:border-violet-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-blue-50/0 group-hover:from-violet-50/40 group-hover:to-blue-50/20 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-9">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 bg-violet-50 rounded-lg group-hover:scale-105 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-violet-600" />
                    </div>
                    <div className="p-2.5 bg-blue-50 rounded-lg group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 bg-violet-50 rounded-full">
                    <span className="text-xs font-bold text-violet-700 tracking-wide">DUAL-CHANNEL</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight leading-none">
                    Email <span className="text-violet-600 font-normal">+</span> Chat
                  </div>
                  <div className="relative mb-5">
                    <div className="w-12 h-1.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full blur-md opacity-50"></div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.12em] text-gray-500 font-bold mb-4">
                    Support-Kanäle
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Vollständige Abdeckung mit Live-Chat Widget und professionellem E-Mail Helpdesk
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - 24/7 Global */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative bg-white rounded-2xl p-10 border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:shadow-pink-100/40 group-hover:border-pink-200 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-50/0 group-hover:from-pink-50/50 group-hover:to-purple-50/30 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-9">
                  <div className="p-3.5 bg-pink-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-7 h-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="px-3.5 py-1.5 bg-pink-50 rounded-full">
                    <span className="text-xs font-bold text-pink-700 tracking-wide">GLOBAL</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-7xl md:text-8xl font-light text-gray-900 mb-4 tracking-tight leading-none">24/7</div>
                  <div className="relative mb-5">
                    <div className="w-12 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-50"></div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.12em] text-gray-500 font-bold mb-4">
                    Verfügbarkeit
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-[15px]">
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









