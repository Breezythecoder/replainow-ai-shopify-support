const ModernLiveDemo = () => {
  return (
    <section id="live-demo" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-8 tracking-tight">
          Sieh ReplAInow <span className="text-gradient-hero">live in Aktion</span>
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Von 0 auf Hero in 3 Sekunden - so arbeitet modernste AI-Technologie für deinen Shopify Store
        </p>
        
        {/* Video Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-hero bg-gradient-primary p-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="ReplAInow Live Demo"
              />
            </div>
          </div>
        </div>
        
        {/* Demo Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-2xl text-center interactive-card">
            <div className="text-4xl font-black text-gradient-primary mb-2">3 Sek</div>
            <div className="text-slate-600 font-medium">Durchschnittliche Antwortzeit</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center interactive-card">
            <div className="text-4xl font-black text-gradient-primary mb-2">98%</div>
            <div className="text-slate-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center interactive-card">
            <div className="text-4xl font-black text-gradient-primary mb-2">24/7</div>
            <div className="text-slate-600 font-medium">Verfügbarkeit</div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 glass-card p-8 rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Live aus echten Shopify Stores:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="text-green-600 font-bold">🔥 TechGadgets24</div>
              <div className="text-sm text-slate-600">"AI hat gerade eine Produktempfehlung zu iPhone Cases gegeben - Kunde kauft sofort 3 Stück!"</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">💄 BeautyStore</div>
              <div className="text-sm text-slate-600">"Französische Kundin bekommt perfekte Antwort auf Französisch über Hautpflege-Routine"</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">👗 FashionHub</div>
              <div className="text-sm text-slate-600">"AI erklärt Größentabelle und empfiehlt passende Größe - Return Rate sinkt um 60%"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLiveDemo;