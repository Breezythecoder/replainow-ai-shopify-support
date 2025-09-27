import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernFinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

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
               STARTE JETZT
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              Bereit für die AI-Revolution?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Über <span className="text-blue-600 font-bold">5000+ Shopify-Händler</span> nutzen bereits ReplAInow. 
            Werde Teil der Elite und <span className="text-indigo-600 font-bold">zerstöre deine Konkurrenz</span> mit überlegener AI-Technologie.
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
              <span className="whitespace-normal break-words">JETZT INSTALLIEREN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="xl" 
            className="flex-1 sm:flex-none text-base lg:text-lg px-8 lg:px-12 py-6 lg:py-8 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold min-h-[64px]"
          >
            <a href="#live-demo" className="flex items-center gap-3 justify-center text-center">
              <span className="text-2xl">📺</span>
              <span className="whitespace-normal break-words">LIVE DEMO</span>
            </a>
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full border border-green-200 shadow-lg">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-slate-800 font-bold">14 Tage kostenlos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-200 shadow-lg">
            <span className="text-blue-500 text-lg">⚡</span>
            <span className="text-slate-800 font-bold">Setup-frei</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full border border-purple-200 shadow-lg">
            <span className="text-purple-500 text-lg">🔄</span>
            <span className="text-slate-800 font-bold">Jederzeit kündbar</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full border border-yellow-200 shadow-lg">
            <span className="text-yellow-500 text-lg">💰</span>
            <span className="text-slate-800 font-bold">Geld-zurück</span>
          </div>
        </div>

        {/* Professional Social Proof */}
        <div className={`bg-white/80 backdrop-blur-lg p-8 rounded-3xl max-w-4xl mx-auto border border-slate-200 shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Warum 5000+ Shopify-Händler auf ReplAInow setzen
            </h3>
            <p className="text-slate-600 text-lg">
              Starte noch heute mit der 14-tägigen kostenlosen Testphase
            </p>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="text-green-600 font-bold text-3xl mb-2">5000+</div>
              <div className="text-slate-600 font-semibold">Zufriedene Händler</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <div className="text-blue-600 font-bold text-3xl mb-2">€2.1M</div>
              <div className="text-slate-600 font-semibold">Umsatz generiert</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="text-purple-600 font-bold text-3xl mb-2">187%</div>
              <div className="text-slate-600 font-semibold">Conversion Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;