import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernFinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-purple-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl font-black mb-6 tracking-tighter">
          Bereit für die AI-Revolution?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Über <strong className="text-brand-warning">5000+ Shopify-Händler</strong> nutzen bereits ReplAInow. 
          Werde Teil der Elite und <strong className="text-brand-warning">zerstöre deine Konkurrenz</strong> mit überlegener AI-Technologie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            asChild 
            variant="glass" 
            size="xl" 
            className="text-lg px-16 py-6 bg-white text-indigo-600 hover:bg-white hover:scale-110 font-black shadow-brand-mega"
          >
            <a href={OAUTH_URL} className="flex items-center gap-3">
              🚀 Kostenlos starten - Shopify App Store
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="xl" 
            className="text-lg px-12 py-6 border-2 border-white/30 text-white hover:bg-white/10 font-semibold"
          >
            <a href="#live-demo" className="flex items-center gap-3">
              📞 Demo buchen
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>14 Tage kostenlos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Keine Setup-Gebühren</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Jederzeit kündbar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-success">✅</span>
            <span>Geld-zurück-Garantie</span>
          </div>
        </div>

        {/* Urgency Counter */}
        <div className="mt-12 bg-white/95 backdrop-blur-md p-8 rounded-3xl max-w-3xl mx-auto border border-white/30 shadow-brand-mega">
          <p className="text-indigo-600 font-black text-2xl mb-3">
            🔥 Limitiertes Onboarding-Angebot
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Nur die ersten <strong className="text-indigo-600">100 Stores</strong> diesen Monat bekommen kostenloses Setup + 1 Monat gratis
          </p>
          <div className="bg-slate-200 rounded-full h-3 mb-3">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000" style={{ width: '73%' }}></div>
          </div>
          <p className="text-slate-600 font-semibold">73 von 100 Plätzen bereits vergeben</p>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;