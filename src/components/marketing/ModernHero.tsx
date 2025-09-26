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
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-subtle"
        onMouseMove={onMove}
        style={{
          "--x": `${pos.x}px`,
          "--y": `${pos.y}px`,
        } as React.CSSProperties}
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-brand-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Interactive Spotlight */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, hsl(var(--brand-primary) / 0.6) 0%, hsl(var(--brand-secondary) / 0.3) 30%, transparent 70%)",
              left: `${pos.x - 192}px`,
              top: `${pos.y - 192}px`,
              transition: "all 0.3s ease-out",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient-hero leading-tight tracking-tighter">
              KI-Helpdesk für Shopify.
              <span className="block">Antwortet in Sekunden.</span>
            </h1>
            
            <p className="text-xl text-slate-700 leading-relaxed">
              Revolutionäre AI mit <strong className="text-gradient-primary">Echtzeit-Shopify-Daten</strong>: 
              Höhere Conversion, schnellere Antworten, 90% weniger Support-Tickets.
            </p>
            
            {/* ROI Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="glass-card p-3 sm:p-4 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-brand-primary">+187%</div>
                <div className="text-xs sm:text-sm text-slate-600 font-bold mt-1 sm:mt-2">Conversion</div>
              </div>
              <div className="glass-card p-3 sm:p-4 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-brand-success">3 Sek</div>
                <div className="text-xs sm:text-sm text-slate-600 font-bold mt-1 sm:mt-2">Antwortzeit</div>
              </div>
              <div className="glass-card p-3 sm:p-4 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-brand-accent">75%</div>
                <div className="text-xs sm:text-sm text-slate-600 font-bold mt-1 sm:mt-2">Einsparung</div>
              </div>
            </div>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="xl" className="group">
                <a href={OAUTH_URL} className="flex items-center gap-2">
                  🚀 Jetzt kostenlos testen
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#live-demo" className="flex items-center gap-2">
                  📺 Live-Demo ansehen
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-1 glass-card px-4 py-2 rounded-full shadow-brand">
                <span className="text-brand-warning">★★★★★</span>
                <span className="font-semibold text-slate-700">4.9/5</span>
              </div>
              <span className="px-4 py-2 glass-card text-brand-success rounded-full font-bold shadow-brand">
                ✅ GDPR Compliant
              </span>
              <span className="font-bold text-slate-700 glass-card px-4 py-2 rounded-full shadow-brand">👥 5000+ Händler</span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative">
            <div className="relative transform hover:scale-105 transition-transform duration-700">
              <img 
                src="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png" 
                alt="ReplAInow AI Dashboard 3D Mockup" 
                className="w-full drop-shadow-2xl hover-float" 
              />
              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 glass-card px-6 py-3 rounded-full text-sm font-black text-brand-success shadow-brand-glow animate-pulse">
                ✅ +37% Zufriedenheit
              </div>
              {/* Floating Cost Savings */}
              <div className="absolute -bottom-4 -left-4 glass-card px-6 py-3 rounded-full text-sm font-black text-brand-warning shadow-brand-glow animate-float">
                💰 €1.900/Monat gespart
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ModernHero;