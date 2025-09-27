import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernFinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <span className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-black text-sm rounded-full shadow-lg animate-pulse">
               LIMITED TIME OFFER
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              Bereit fr die AI-Revolution?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            ber <span className="text-blue-600 font-bold">5000+ Shopify-Hndler</span> nutzen bereits ReplAInow. 
            Werde Teil der Elite und <span className="text-indigo-600 font-bold">zerstre deine Konkurrenz</span> mit berlegener AI-Technologie.
          </p>
        </div>
        
        {/* Revolutionary CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-stretch max-w-5xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            asChild 
            variant="cta" 
            size="xl" 
            className="group flex-1 sm:flex-none text-base lg:text-lg px-8 lg:px-12 py-6 lg:py-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black shadow-2xl hover:shadow-cyan-500/25 min-h-[64px] relative overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <a href={OAUTH_URL} className="flex items-center gap-3 justify-center text-center relative z-10">
              <span className="text-2xl group-hover:scale-110 transition-transform"></span>
              <span className="whitespace-normal break-words">JETZT INSTALLIEREN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="xl" 
            className="flex-1 sm:flex-none text-base lg:text-lg px-8 lg:px-12 py-6 lg:py-8 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold min-h-[64px]"
          >
            <a href="#live-demo" className="flex items-center gap-3 justify-center text-center">
              <span className="text-2xl"></span>
              <span className="whitespace-normal break-words"> DEMO BUCHEN</span>
            </a>
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 glass-hero px-4 py-2 rounded-full border border-green-400/30">
            <span className="text-green-400"></span>
            <span className="text-white font-bold">14 Tage kostenlos</span>
          </div>
          <div className="flex items-center gap-2 glass-hero px-4 py-2 rounded-full border border-blue-400/30">
            <span className="text-blue-400"></span>
            <span className="text-white font-bold">Setup-frei</span>
          </div>
          <div className="flex items-center gap-2 glass-hero px-4 py-2 rounded-full border border-purple-400/30">
            <span className="text-purple-400"></span>
            <span className="text-white font-bold">Jederzeit kndbar</span>
          </div>
          <div className="flex items-center gap-2 glass-hero px-4 py-2 rounded-full border border-yellow-400/30">
            <span className="text-yellow-400"></span>
            <span className="text-white font-bold">Geld-zurck</span>
          </div>
        </div>

        {/* Revolutionary Urgency Counter */}
        <div className={`glass-card p-8 rounded-3xl max-w-4xl mx-auto border border-cyan-400/30 shadow-2xl transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-6">
            <p className="text-cyan-400 font-black text-2xl sm:text-3xl mb-4 animate-pulse">
               LIMITIERTES ONBOARDING-ANGEBOT
            </p>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-6">
              Nur die ersten <span className="text-cyan-400 font-bold text-xl sm:text-2xl">100 Stores</span> diesen Monat bekommen 
              <span className="text-yellow-400 font-bold"> kostenloses Setup + 1 Monat gratis</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
            <div className="glass-hero p-4 rounded-2xl text-center border border-cyan-400/30">
              <div className="text-3xl font-black text-cyan-400">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs text-slate-300">Stunden</div>
            </div>
            <div className="glass-hero p-4 rounded-2xl text-center border border-cyan-400/30">
              <div className="text-3xl font-black text-cyan-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-slate-300">Minuten</div>
            </div>
            <div className="glass-hero p-4 rounded-2xl text-center border border-cyan-400/30">
              <div className="text-3xl font-black text-cyan-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-slate-300">Sekunden</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-800 rounded-full h-4 mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-1000 shadow-neon" style={{ width: '73%' }}></div>
          </div>
          <p className="text-slate-300 font-bold text-lg">
            73 von 100 Pltzen bereits vergeben - <span className="text-cyan-400">Nur noch 27 verfgbar!</span>
          </p>

          {/* Social Proof */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="glass-hero p-4 rounded-2xl border border-green-400/30">
              <div className="text-green-400 font-black text-2xl">5000+</div>
              <div className="text-slate-300 text-sm">Zufriedene Hndler</div>
            </div>
            <div className="glass-hero p-4 rounded-2xl border border-yellow-400/30">
              <div className="text-yellow-400 font-black text-2xl">2.1M</div>
              <div className="text-slate-300 text-sm">Umsatz generiert</div>
            </div>
            <div className="glass-hero p-4 rounded-2xl border border-purple-400/30">
              <div className="text-purple-400 font-black text-2xl">187%</div>
              <div className="text-slate-300 text-sm">Conversion Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;