import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernHeroPt = () => {
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
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-8 lg:pt-0">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gradient-hero leading-tight tracking-tighter">
              Helpdesk IA para Shopify.
              <span className="block">Responde em segundos.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
              IA revolucionria com <strong className="text-gradient-primary">dados Shopify em tempo real</strong>: 
              Converso mais alta, respostas mais rpidas, 90% menos tickets de suporte.
            </p>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-primary">+187%</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Converso</div>
              </div>
              <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-success">3 Seg</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Resposta</div>
              </div>
              <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl text-center shadow-brand hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-accent">75%</div>
                <div className="text-sm sm:text-base text-slate-600 font-bold mt-2">Poupana</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button asChild variant="cta" size="xl" className="group flex-1 sm:flex-none">
                <a href={OAUTH_URL} className="flex items-center justify-center gap-2 text-base lg:text-lg">
                   Teste Grtis Agora
                </a>
              </Button>
              <Button asChild variant="glass" size="xl" className="flex-1 sm:flex-none">
                <a href="#live-demo" className="flex items-center justify-center gap-2 text-base lg:text-lg">
                   Ver Demo Ao Vivo
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2 glass-card px-4 py-3 rounded-full shadow-brand">
                <span className="text-brand-warning text-lg"></span>
                <span className="font-bold text-slate-700">4.9/5</span>
              </div>
              <span className="px-4 py-3 glass-card text-brand-success rounded-full font-bold shadow-brand">
                 Conforme LGPD
              </span>
              <span className="font-bold text-slate-700 glass-card px-4 py-3 rounded-full shadow-brand"> 280+ Lojas</span>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative transform hover:scale-105 transition-transform duration-700 mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <img 
                src="/assets/193e41bc-af60-4d70-947d-659804d66b83.png" 
                alt="ReplAInow AI Dashboard 3D Mockup" 
                className="w-full drop-shadow-2xl hover-float" 
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default ModernHeroPt;