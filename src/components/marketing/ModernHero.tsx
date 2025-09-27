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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      onMouseMove={onMove}
    >
      {/* Ultra-Modern AI Background */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect - Reduced for Performance */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-100px',
                animation: `matrix-rain ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="opacity-70">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500"
                style={{
                  animationDelay: `${i * 0.005}s`,
                  animation: isVisible ? 'cyberpunk-glow 3s ease-in-out infinite' : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating AI Neural Networks - Reduced for Performance */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 border border-blue-400/30 rounded-full animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Dynamic Holographic Light */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 30%, transparent 70%)`
          }}
        />

        {/* AI Scan Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
        </div>

        {/* Cyberpunk Glow Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 min-h-screen py-8 lg:py-0">
        {/* Left Column - Revolutionary Content */}
        <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Ultra-Modern AI Headline */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <span className="relative z-10">🚀 AI REVOLUTION 2025</span>
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight" role="heading" aria-level="1">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                {typingText}
              </span>
              <span className="block text-white mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Antwortet in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse">3 Sekunden</span>
              </span>
            </h1>
          </div>
          
          {/* AI-Powered Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 leading-relaxed max-w-3xl">
            <span className="text-cyan-400 font-bold">Revolutionäre GPT-4.1 AI</span> mit
            <span className="text-purple-400 font-bold"> Echtzeit-Shopify-Daten</span>:
            <br />
            Höhere Conversion, schnellere Antworten,
            <span className="text-green-400 font-bold"> 90% weniger Support-Tickets</span>.
          </p>

          {/* AI-Powered Live Stats */}
          <div className="grid grid-cols-3 gap-6 my-12">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-lg p-6 rounded-2xl text-center border border-blue-400/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-cyan-400 mb-2">5000+</div>
              <div className="text-sm text-blue-200 font-semibold">Aktive Stores</div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/30 backdrop-blur-lg p-6 rounded-2xl text-center border border-green-400/30 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-green-400 mb-2">98%</div>
              <div className="text-sm text-green-200 font-semibold">AI Genauigkeit</div>
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/30 backdrop-blur-lg p-6 rounded-2xl text-center border border-purple-400/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-purple-400 mb-2">3s</div>
              <div className="text-sm text-purple-200 font-semibold">Response Time</div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mt-2 animate-pulse"></div>
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
            <Button asChild variant="outline" size="xl" className="flex-1 sm:flex-none border-2 border-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white font-bold focus-ring-enhanced bg-blue-500/10">
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
            <span className="px-5 py-3 bg-green-100 backdrop-blur-lg text-green-800 rounded-full font-bold shadow-lg hover-lift border border-green-200">
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
                src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
                alt="ReplAInow AI Support Dashboard zeigt intelligente Kundensupport-Automatisierung mit GPT-4.1 Technologie für Shopify-Händler. Dashboard mit Live-Chat, E-Mail-Management und automatisierten Antworten in 3 Sekunden."
                className="w-full h-auto rounded-xl"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                LIVE
              </div>
              <div className="absolute bottom-4 left-4 bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                AI ACTIVE
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-slate-900/95 backdrop-blur-lg p-3 rounded-xl border border-slate-700/50 animate-float shadow-lg">
              <div className="text-cyan-200 font-black text-lg">3s</div>
              <div className="text-xs text-slate-200 font-semibold">Response</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-slate-900/95 backdrop-blur-lg p-3 rounded-xl border border-slate-700/50 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <div className="text-green-200 font-black text-lg">98%</div>
              <div className="text-xs text-slate-200 font-semibold">Accuracy</div>
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