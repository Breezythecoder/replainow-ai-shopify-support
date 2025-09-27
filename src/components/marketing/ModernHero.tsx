import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  }, []);

  // Typing animation effect
  useEffect(() => {
    const text = "KI-Helpdesk für Shopify.";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      onMouseMove={onMove}
    >
      {/* Revolutionary Animated Background */}
      <div className="absolute inset-0">
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                style={{
                  animationDelay: `${i * 0.01}s`,
                  animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Dynamic Light Rays */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />

        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 min-h-screen py-8 lg:py-0">
        {/* Left Column - Revolutionary Content */}
        <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Revolutionary Headline */}
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black text-sm rounded-full shadow-lg animate-pulse">
                AI REVOLUTION
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight" role="heading" aria-level="1">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x drop-shadow-lg">
                {typingText}
              </span>
              <span className="block text-slate-800 mt-2 drop-shadow-lg">
                Antwortet in <span className="text-blue-600 animate-pulse drop-shadow-lg">3 Sekunden</span>
              </span>
            </h1>
          </div>
          
          {/* Revolutionary Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-loose max-w-2xl drop-shadow-md">
            <span className="text-blue-600 font-bold">Revolutionäre GPT-4.1 AI</span> mit
            <span className="text-indigo-600 font-bold"> Echtzeit-Shopify-Daten</span>:
            Höhere Conversion, schnellere Antworten,
            <span className="text-green-600 font-bold"> 90% weniger Support-Tickets</span>.
          </p>

          {/* Live Stats Counter */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="bg-white/80 backdrop-blur-lg p-4 rounded-xl text-center hover-lift border border-slate-200 shadow-lg">
              <div className="text-2xl font-black text-blue-600">5000+</div>
              <div className="text-sm text-slate-600">Aktive Stores</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-4 rounded-xl text-center hover-lift border border-slate-200 shadow-lg">
              <div className="text-2xl font-black text-green-600">98%</div>
              <div className="text-sm text-slate-600">Genauigkeit</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-4 rounded-xl text-center hover-lift border border-slate-200 shadow-lg">
              <div className="text-2xl font-black text-indigo-600">3s</div>
              <div className="text-sm text-slate-600">Antwortzeit</div>
            </div>
          </div>
          
          {/* Revolutionary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button asChild variant="cta" size="xl" className="group flex-1 sm:flex-none premium-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25 text-white font-black relative overflow-hidden transform hover:scale-105 transition-all duration-300 focus-ring-enhanced">
              <a href={OAUTH_URL} className="flex items-center justify-center gap-3 text-base lg:text-lg font-bold relative z-10">
                <span className="text-xl group-hover:scale-110 transition-transform"></span>
                JETZT INSTALLIEREN
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="flex-1 sm:flex-none border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold focus-ring-enhanced">
              <a href="#live-demo" className="flex items-center justify-center gap-3 text-base lg:text-lg font-semibold">
                <span className="text-xl"></span>
                Live-Demo ansehen
              </a>
            </Button>
          </div>

          {/* Trust Indicators with Glow */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-5 py-3 rounded-full shadow-lg hover-lift group border border-slate-200">
              <span className="text-yellow-500 text-lg"></span>
              <span className="font-bold text-slate-800">4.9/5</span>
            </div>
            <span className="px-5 py-3 bg-white/80 backdrop-blur-lg text-green-600 rounded-full font-bold shadow-lg hover-lift border border-slate-200">
               DSGVO-konform
            </span>
            <span className="font-bold text-slate-800 bg-white/80 backdrop-blur-lg px-5 py-3 rounded-full shadow-lg hover-lift border border-slate-200"> 5000+ Händler</span>
          </div>
        </div>
        
        {/* Right Column - Revolutionary Visual */}
        <div className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-none relative">
            {/* Holographic Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>
            
            {/* Main Product Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
                alt="ReplAInow AI Support Dashboard zeigt intelligente Kundensupport-Automatisierung mit GPT-4.1 Technologie für Shopify-Händler. Dashboard mit Live-Chat, E-Mail-Management und automatisierten Antworten in 3 Sekunden."
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                LIVE
              </div>
              <div className="absolute bottom-4 left-4 bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                AI ACTIVE
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-slate-800/90 backdrop-blur-lg p-3 rounded-xl border border-slate-700/50 animate-float">
              <div className="text-cyan-300 font-black text-lg">3s</div>
              <div className="text-xs text-slate-200">Response</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-lg p-3 rounded-xl border border-slate-700/50 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-green-300 font-black text-lg">98%</div>
              <div className="text-xs text-slate-200">Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyberpunk Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default ModernHero;