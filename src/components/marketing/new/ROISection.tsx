/**
 * 💰 ROI SECTION - INTERACTIVE CALCULATOR REDESIGN
 * Large interactive calculator with dramatic glassmorphic design
 */

import { motion, useInView } from "framer-motion";
import { TrendingUp, CheckCircle2, Zap, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "@/i18n";

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

// Calculate savings
const calculateSavings = (tickets: number): number => {
  const automatedTickets = tickets * 0.87;
  const costPerTicket = 15;
  return Math.round(automatedTickets * costPerTicket);
};

const ROISection = () => {
  const { t, getTranslation } = useTranslation();
  const roiRef = useRef(null);
  const isRoiInView = useInView(roiRef, { once: true, margin: "-100px" });
  const automationCount = useCountUp(87, 2000, isRoiInView);
  
  const [ticketCount, setTicketCount] = useState(1000);
  const savingsAmount = calculateSavings(ticketCount);
  
  const benefits = getTranslation('marketing.roi.benefits') || [];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          ref={roiRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* DARK BACKGROUND BOX - Clean wie Original */}
          <div className="relative bg-gradient-to-b from-slate-950 to-gray-900 overflow-hidden rounded-3xl">
            {/* Purple Gradient Mesh */}
            <div 
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 60%)' }}
            />

            {/* Glassmorphic Container */}
            <div className="relative bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-2xl border border-purple-500/20 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
              {/* Left Side - Benefits */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
                  <TrendingUp className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-bold text-white/90 tracking-tight">{t('marketing.roi.badge')}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
                  {t('marketing.roi.title')}
                </h2>
                
                <p className="text-gray-200 mb-10 leading-relaxed text-base md:text-lg">
                  {t('marketing.roi.description')}
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3.5"
                    >
                      <div className="mt-0.5 p-1 bg-purple-500/20 rounded-full flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-purple-300" />
                      </div>
                      <span className="text-gray-100 leading-relaxed text-sm md:text-base">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - INTERACTIVE CALCULATOR */}
              <div className="relative overflow-hidden">
                <div className="absolute -inset-2 md:-inset-4 bg-purple-500/10 rounded-3xl blur-2xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10">
                  <div className="text-sm uppercase tracking-wider text-purple-300 mb-6 font-bold">
                    {t('marketing.roi.statsLabel')}
                  </div>
                  
                  {/* Interactive Slider */}
                  <div className="mb-8 md:mb-12">
                    <label className="text-base text-gray-200 mb-3 block">
                      Tickets pro Monat: <span className="text-white font-bold text-xl">{ticketCount.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="100"
                      value={ticketCount}
                      onChange={(e) => setTicketCount(Number(e.target.value))}
                      className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>100</span>
                      <span>2,500</span>
                      <span>5,000</span>
                    </div>
                  </div>
                  
                  {/* Savings Display */}
                  <div className="flex items-baseline gap-2 md:gap-3 mb-8 md:mb-12">
                    <motion.span
                      key={savingsAmount}
                      initial={{ scale: 1.1, color: '#10B981' }}
                      animate={{ scale: 1, color: '#FFFFFF' }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight"
                    >
                      €{savingsAmount.toLocaleString()}
                    </motion.span>
                    <span className="text-xl md:text-2xl text-gray-300 font-light">{t('marketing.roi.statsPeriod')}</span>
                  </div>
                  
                  <div className="h-px bg-white/10 mb-10"></div>
                  
                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
                    <div>
                      <div className="text-gray-300 mb-2 text-xs md:text-sm font-medium">{t('marketing.roi.ticketsLabel')}</div>
                      <div className="text-3xl md:text-4xl font-light text-white">{t('marketing.roi.ticketsCount')}</div>
                      <div className="text-xs text-gray-500 mt-1.5">{t('marketing.roi.ticketsPeriod')}</div>
                    </div>
                    <div>
                      <div className="text-gray-300 mb-2 text-xs md:text-sm font-medium">{t('marketing.roi.roiLabel')}</div>
                      <div className="text-3xl md:text-4xl font-light text-white">{t('marketing.roi.roiDays')}</div>
                      <div className="text-xs text-purple-300 mt-1.5 font-semibold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {t('marketing.roi.roiBadge')}
                      </div>
                    </div>
                  </div>

                  {/* Automation Progress */}
                  <div className="p-5 bg-purple-500/10 border border-purple-400/20 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-200 font-medium">{t('marketing.roi.automationLabel')}</span>
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
                    <span className="font-medium">{t('marketing.roi.guarantee')}</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* Close dark background box */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROISection;
