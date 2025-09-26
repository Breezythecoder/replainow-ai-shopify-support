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
        className="relative min-h-[72vh] flex items-center bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-light leading-tight tracking-tight">
              KI-Helpdesk für Shopify.
              <span className="block">Antwortet in Sekunden.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-on-light/80 leading-relaxed">
              Revolutionäre AI mit <strong className="text-on-light font-semibold">Echtzeit-Shopify-Daten</strong>: 
              Höhere Conversion, schnellere Antworten, 90% weniger Support-Tickets.
            </p>
            
            {/* Metrics removed for clean minimal hero */}
            
            {/* High-Contrast CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button asChild variant="cta" size="xl" className="group flex-1 sm:flex-none premium-button bg-gradient-button shadow-button hover:shadow-button-hover text-on-brand font-bold relative overflow-hidden">
                <a href={OAUTH_URL} className="flex items-center justify-center gap-3 text-base lg:text-lg font-bold relative z-10">
                  <span className="text-xl group-hover:scale-110 transition-transform">🚀</span>
                  Jetzt kostenlos testen
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="flex-1 sm:flex-none">
                <a href="#live-demo" className="flex items-center justify-center gap-3 text-base lg:text-lg font-semibold">
                  <span className="text-xl">📺</span>
                  Live-Demo ansehen
                </a>
              </Button>
            </div>

            {/* High-Contrast Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2 glass-hero px-5 py-3 rounded-full shadow-card hover-lift group">
                <span className="text-brand-warning text-lg">★★★★★</span>
                <span className="font-bold text-on-glass">4.9/5</span>
              </div>
              <span className="px-5 py-3 glass-hero text-brand-success rounded-full font-bold shadow-card hover-lift">
                ✅ DSGVO-konform
              </span>
              <span className="font-bold text-on-glass glass-hero px-5 py-3 rounded-full shadow-card hover-lift">👥 5000+ Händler</span>
            </div>
          </div>
          
          {/* Product Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <img 
                src="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png" 
                alt="ReplAInow – Shopify Support Dashboard" 
                className="w-full rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default ModernHero;