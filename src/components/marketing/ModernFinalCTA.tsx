import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { STORE_COUNT } from "@/config/siteStats";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";
import { safeArray, safeObject } from "@/utils/safeT";
import { z } from "zod";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

// Schemas for Final CTA
const StatsItemSchema = z.object({
  value: z.string(),
  label: z.string()
});

const StatsArraySchema = z.array(StatsItemSchema);
const FeaturesArraySchema = z.array(z.string());

const ModernFinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Get data from i18n
  const stats = safeArray(StatsArraySchema, "ui.finalCta.stats.items");
  const features = safeArray(FeaturesArraySchema, "ui.finalCta.features");

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section 
      ref={ctaRef}
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800 relative overflow-hidden"
    >
      {/* Revolutionary Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm rounded-full shadow-lg animate-pulse">
              {t("ui.finalCta.badge")}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              {t("ui.finalCta.title")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            {t("ui.finalCta.subtitle")}
          </p>
        </div>
        
        {/* Revolutionary CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch max-w-5xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            asChild 
            variant="cta" 
            size="xl" 
            className="group flex-1 sm:flex-none text-base lg:text-lg px-8 lg:px-12 py-6 lg:py-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-2xl hover:shadow-blue-500/25 min-h-[64px] relative overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <a href={OAUTH_URL} className="flex items-center gap-3 justify-center text-center relative z-10">
              <span className="text-2xl group-hover:scale-110 transition-transform">→</span>
              <span className="whitespace-normal break-words">{t("ui.finalCta.cta")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="xl" 
            className="flex-1 sm:flex-none text-base lg:text-lg px-8 lg:px-12 py-6 lg:py-8 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold min-h-[64px]"
          >
            <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')} className="flex items-center gap-3 justify-center text-center cursor-pointer">
              <span className="text-2xl">📺</span>
              <span className="whitespace-normal break-words">{t("ui.finalCta.demo")}</span>
            </a>
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, index) => {
            const icons = ["✓", "⚡", "🔄", "💰"];
            const colors = ["green", "blue", "purple", "yellow"];
            const icon = icons[index] || "✓";
            const color = colors[index] || "green";
            
            return (
              <div key={index} className={`flex items-center gap-2 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full border border-${color}-200 shadow-lg`}>
                <span className={`text-${color}-500 text-lg`}>{icon}</span>
                <span className="text-slate-800 font-bold">{feature}</span>
              </div>
            );
          })}
        </div>

        {/* Professional Social Proof */}
        <div className={`bg-white/80 backdrop-blur-lg p-8 rounded-3xl max-w-4xl mx-auto border border-slate-200 shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t("ui.finalCta.stats.title")}
            </h3>
            <p className="text-slate-600 text-lg">
              {t("ui.finalCta.stats.subtitle")}
            </p>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => {
              const gradients = [
                "from-green-50 to-emerald-50",
                "from-blue-50 to-indigo-50", 
                "from-purple-50 to-pink-50"
              ];
              const textColors = ["text-green-600", "text-blue-600", "text-purple-600"];
              const borderColors = ["border-green-200", "border-blue-200", "border-purple-200"];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${gradients[index]} p-6 rounded-2xl border ${borderColors[index]}`}>
                  <div className={`${textColors[index]} font-bold text-3xl mb-2`}>{stat.value}</div>
                  <div className="text-slate-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;