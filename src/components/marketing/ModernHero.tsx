import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  }, []);

  return (
      <section 
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
        onMouseMove={onMove}
        style={{
          "--x": `${pos.x}px`,
          "--y": `${pos.y}px`,
        } as React.CSSProperties}
      >
        {/* Premium Animated Background Mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse"></div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 sm:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-accent rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-gradient-button rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Interactive Spotlight */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl transition-premium"
            style={{
              background: "radial-gradient(circle, hsl(var(--brand-primary) / 0.8) 0%, hsl(var(--brand-secondary) / 0.4) 30%, transparent 70%)",
              left: `${pos.x - 192}px`,
              top: `${pos.y - 192}px`,
            }}
          ></div>
        </div>
        
        {/* Geometric Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-brand-accent rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-brand-secondary rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-brand-primary transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-8 lg:pt-0">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gradient-hero leading-tight tracking-tighter">
              KI-Helpdesk für Shopify.
              <span className="block">Antwortet in Sekunden.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
              Revolutionäre AI mit <strong className="text-gradient-primary">Echtzeit-Shopify-Daten</strong>: 
              Höhere Conversion, schnellere Antworten, 90% weniger Support-Tickets.
            </p>
            
            {/* ROI Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="glass-premium p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-card premium-card group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-primary group-hover:scale-110 transition-transform">+187%</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Conversion</div>
              </div>
              <div className="glass-premium p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-card premium-card group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-success group-hover:scale-110 transition-transform">3 Sek</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Antwortzeit</div>
              </div>
              <div className="glass-premium p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-card premium-card group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-accent group-hover:scale-110 transition-transform">75%</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Einsparung</div>
              </div>
            </div>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button asChild variant="cta" size="xl" className="group flex-1 sm:flex-none premium-button bg-gradient-button shadow-button hover:shadow-button-hover">
                <a href={OAUTH_URL} className="flex items-center justify-center gap-3 text-base lg:text-lg font-bold">
                  <span className="text-xl group-hover:animate-bounce">🚀</span>
                  Jetzt kostenlos testen
                </a>
              </Button>
              <Button asChild variant="glass" size="xl" className="flex-1 sm:flex-none premium-button glass-premium">
                <a href="#live-demo" className="flex items-center justify-center gap-3 text-base lg:text-lg font-semibold">
                  <span className="text-xl group-hover:animate-pulse">📺</span>
                  Live-Demo ansehen
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2 glass-premium px-4 py-3 rounded-full shadow-card hover-lift group">
                <span className="text-brand-warning text-lg group-hover:animate-pulse">★★★★★</span>
                <span className="font-bold text-slate-700">4.9/5</span>
              </div>
              <span className="px-4 py-3 glass-premium text-brand-success rounded-full font-bold shadow-card hover-lift">
                ✅ DSGVO-konform
              </span>
              <span className="font-bold text-slate-700 glass-premium px-4 py-3 rounded-full shadow-card hover-lift">👥 5000+ Händler</span>
            </div>
          </div>
          
          {/* Right Column - Enhanced Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative premium-card mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 scale-105"></div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png" 
                  alt="ReplAInow AI Dashboard 3D Mockup" 
                  className="w-full shadow-hero rounded-2xl lg:rounded-3xl" 
                />
                
                {/* Floating Success Badge */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:-top-4 lg:-right-4 glass-premium px-2 py-1 sm:px-3 sm:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm font-black text-brand-success shadow-brand-glow animate-pulse max-w-[120px] sm:max-w-none hover-lift">
                  <span className="block sm:hidden">✅ +37%</span>
                  <span className="hidden sm:block">✅ +37% Zufriedenheit</span>
                </div>
                
                {/* Floating Cost Savings */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:-bottom-4 lg:-left-4 glass-premium px-2 py-1 sm:px-3 sm:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm font-black text-brand-warning shadow-brand-glow animate-float max-w-[140px] sm:max-w-none hover-lift">
                  <span className="block sm:hidden">💰 €1.9k gespart</span>
                  <span className="hidden sm:block">💰 €1.900/Monat gespart</span>
                </div>
                
                {/* Floating AI Badge */}
                <div className="absolute top-1/2 left-2 sm:left-4 lg:-left-8 transform -translate-y-1/2 glass-premium px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm font-black text-brand-accent shadow-neon animate-pulse max-w-[100px] sm:max-w-none hover-glow">
                  <span className="block sm:hidden">🤖 GPT-4</span>
                  <span className="hidden sm:block">🤖 GPT-4 Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ModernHero;