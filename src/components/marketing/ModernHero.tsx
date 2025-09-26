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
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        
        {/* Interactive Spotlight */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(139,92,246,0.3) 30%, transparent 70%)",
              left: `${pos.x - 192}px`,
              top: `${pos.y - 192}px`,
              transition: "all 0.3s ease-out",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-black text-gradient-hero leading-tight tracking-tighter">
              KI-Helpdesk für Shopify.
              <span className="block">Antwortet in Sekunden.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Revolutionäre AI mit <strong className="text-gradient-primary">Echtzeit-Shopify-Daten</strong>: 
              Höhere Conversion, schnellere Antworten, 90% weniger Support-Tickets.
            </p>
            
            {/* ROI Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-black text-gradient-primary">+187%</div>
                <div className="text-sm text-slate-600 font-medium">Conversion</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-black text-gradient-primary">3 Sek</div>
                <div className="text-sm text-slate-600 font-medium">Antwortzeit</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl lg:text-3xl font-black text-gradient-primary">75%</div>
                <div className="text-sm text-slate-600 font-medium">Einsparung</div>
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
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                GDPR Compliant
              </span>
              <span className="font-medium">5000+ Händler</span>
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
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full text-sm font-bold text-gradient-primary animate-pulse">
                ✅ +37% Zufriedenheit
              </div>
              {/* Floating Cost Savings */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full text-sm font-bold text-gradient-primary">
                💰 €96/Monat gespart
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ModernHero;