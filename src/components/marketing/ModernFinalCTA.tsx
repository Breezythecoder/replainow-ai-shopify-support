import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernFinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-40 speed-lines">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-purple-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-300 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter px-4">
          Bereit für die AI-Revolution?
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Über <strong className="text-brand-warning">5000+ Shopify-Händler</strong> nutzen bereits ReplAInow. 
          Werde Teil der Elite und <strong className="text-brand-warning">zerstöre deine Konkurrenz</strong> mit überlegener AI-Technologie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-stretch max-w-5xl mx-auto">
          <Button 
            asChild 
            variant="glass" 
            size="xl" 
            className="flex-1 sm:flex-none text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white text-indigo-600 hover:bg-white hover:scale-105 font-black shadow-brand-mega min-h-[56px] max-w-none sm:max-w-xs"
          >
            <a href={OAUTH_URL} className="flex items-center gap-2 justify-center text-center">
              🚀 <span className="whitespace-normal break-words">Kostenlos starten - Shopify App</span>
            </a>
          </Button>
          <Button 
            asChild 
            variant="glass" 
            size="xl" 
            className="flex-1 sm:flex-none text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 font-bold shadow-brand min-h-[56px] max-w-none sm:max-w-xs"
          >
            <a href="#live-demo" className="flex items-center gap-2 justify-center text-center">
              📞 <span className="whitespace-normal break-words">Demo buchen</span>
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-75 px-4">
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>14 Tage kostenlos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Setup-frei</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Jederzeit kündbar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Geld-zurück</span>
          </div>
        </div>

        {/* Urgency Counter */}
        <div className="mt-8 sm:mt-12 bg-white/95 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl max-w-3xl mx-4 sm:mx-auto border border-white/30 shadow-brand-mega hover-lift">
          <p className="text-indigo-600 font-black text-xl sm:text-2xl lg:text-3xl mb-4 animate-pulse">
            🔥 Limitiertes Onboarding-Angebot
          </p>
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
            Nur die ersten <strong className="text-indigo-600 text-lg sm:text-xl lg:text-2xl">100 Stores</strong> diesen Monat bekommen kostenloses Setup + 1 Monat gratis
          </p>
          <div className="bg-slate-200 rounded-full h-3 sm:h-4 mb-4 overflow-hidden">
            <div className="bg-gradient-primary h-3 sm:h-4 rounded-full transition-all duration-1000 shadow-neon" style={{ width: '73%' }}></div>
          </div>
          <p className="text-slate-600 font-black text-sm sm:text-base lg:text-lg">73 von 100 Plätzen bereits vergeben</p>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;