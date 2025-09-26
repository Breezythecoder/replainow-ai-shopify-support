const ModernLiveDemo = () => {
  return (
    <section id="live-demo" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">
          Sieh ReplAInow <span className="text-gradient-hero">live in Aktion</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Von 0 auf Hero in 3 Sekunden - so arbeitet modernste AI-Technologie für deinen Shopify Store
        </p>
        
        {/* Video Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-hero bg-gradient-primary p-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="ReplAInow Live Demo - AI Helpdesk für Shopify"
              />
            </div>
          </div>
        </div>
        
        {/* Demo Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">3 Sek</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Durchschnittliche Antwortzeit</div>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">98%</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Accuracy Rate</div>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift">
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">24/7</div>
            <div className="text-slate-600 font-medium text-sm sm:text-base">Verfügbarkeit</div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 rounded-3xl max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800 text-center px-4">Live aus echten Shopify Stores:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base">🔥 TechGadgets24</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"AI hat gerade eine Produktempfehlung zu iPhone Cases gegeben - Kunde kauft sofort 3 Stück!"</div>
            </div>
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base">💄 BeautyStore</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"Französische Kundin bekommt perfekte Antwort auf Französisch über Hautpflege-Routine"</div>
            </div>
            <div className="space-y-3 p-4 bg-white/50 rounded-2xl">
              <div className="text-brand-success font-bold text-sm sm:text-base">👗 FashionHub</div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">"AI erklärt Größentabelle und empfiehlt passende Größe - Return Rate sinkt um 60%"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLiveDemo;