import { motion, useInView } from "framer-motion";
import { TrendingUp, CheckCircle2, Zap, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Count-up hook
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

const ROISection = () => {
  const roiRef = useRef(null);
  const isRoiInView = useInView(roiRef, { once: true, margin: "-100px" });
  const automationCount = useCountUp(87, 2000, isRoiInView);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        
        <motion.div
          ref={roiRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Premium dark background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1e] via-[#1a0f2e] to-[#0f0f1e]"></div>
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              
              {/* Left Side */}
              <div>
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
                  <TrendingUp className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-bold text-white/90 tracking-tight">Return on Investment</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
                  Messbare Resultate
                  <br />
                  <span className="font-semibold">ab Tag 1</span>
                </h2>
                
                <p className="text-gray-200 mb-10 leading-relaxed text-lg">
                  Bei durchschnittlich 500 Support-Tickets monatlich sparen Shopify-Händler 
                  mit ReplAInow bis zu{' '}
                  <span className="font-bold text-white">€3.200 pro Monat</span>
                  {' '}an Personalkosten.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Keine Schulungskosten für neue Mitarbeiter",
                    "Skaliert automatisch mit Ihrem Wachstum",
                    "Konstante Qualität bei jedem Volumen"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="mt-0.5 p-1 bg-purple-500/20 rounded-full flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-purple-300" />
                      </div>
                      <span className="text-gray-100 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Stats Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-500/10 rounded-3xl blur-2xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
                  <div className="text-sm uppercase tracking-wider text-purple-300 mb-6 font-bold">
                    Durchschnittliche Ersparnis
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-12">
                    <span className="text-7xl md:text-8xl font-light text-white tracking-tight">€3.200</span>
                    <span className="text-2xl text-gray-400 font-light">/Monat</span>
                  </div>
                  
                  <div className="h-px bg-white/10 mb-10"></div>
                  
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="text-gray-300 mb-2 text-sm font-medium">Support-Tickets</div>
                      <div className="text-4xl font-light text-white">500+</div>
                      <div className="text-xs text-gray-500 mt-1.5">pro Monat</div>
                    </div>
                    <div>
                      <div className="text-gray-300 mb-2 text-sm font-medium">ROI erreicht</div>
                      <div className="text-4xl font-light text-white">11 Tage</div>
                      <div className="text-xs text-purple-300 mt-1.5 font-semibold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Garantiert
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-purple-500/10 border border-purple-400/20 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-200 font-medium">Automatisierungsgrad</span>
                      <span className="text-xl font-bold text-white">{automationCount}%</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${automationCount}%` }}
                        transition={{ delay: 0.5, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="font-medium">30-Tage Geld-zurück-Garantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROISection;









