const ModernComparison = () => {
  const comparisonData = [
    {
      feature: "AI Intelligence",
      replainow: { value: "GPT-4.1 Latest", icon: "🧠", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "Basic AI", status: "loser" },
        { name: "Intercom", value: "Limited AI", status: "loser" },
        { name: "Zendesk", value: "Old AI", status: "loser" }
      ]
    },
    {
      feature: "Antwortzeit",
      replainow: { value: "3 Sekunden", icon: "⚡", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "2-5 Minuten", status: "loser" },
        { name: "Intercom", value: "5-10 Minuten", status: "loser" },
        { name: "Zendesk", value: "10+ Minuten", status: "loser" }
      ]
    },
    {
      feature: "Sprachen",
      replainow: { value: "32+ Nativ", icon: "🌍", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "10 Basic", status: "loser" },
        { name: "Intercom", value: "15 Basic", status: "loser" },
        { name: "Zendesk", value: "20 Basic", status: "loser" }
      ]
    },
    {
      feature: "Shopify Integration",
      replainow: { value: "Echtzeit-Sync", icon: "🔄", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "Manual Import", status: "loser" },
        { name: "Intercom", value: "Basic Connect", status: "loser" },
        { name: "Zendesk", value: "Complex Setup", status: "loser" }
      ]
    },
    {
      feature: "Preis/Monat",
      replainow: { value: "€19/Monat", icon: "💎", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "€50+", status: "loser" },
        { name: "Intercom", value: "€74+", status: "loser" },
        { name: "Zendesk", value: "€115+", status: "loser" }
      ]
    },
    {
      feature: "Setup Zeit",
      replainow: { value: "60 Sekunden", icon: "🚀", status: "winner" },
      competitors: [
        { name: "Gorgias", value: "2-3 Tage", status: "loser" },
        { name: "Intercom", value: "1 Woche", status: "loser" },
        { name: "Zendesk", value: "2 Wochen", status: "loser" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Warum ReplAInow die Konkurrenz <span className="text-destructive">zerstört</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Direkter Vergleich mit Gorgias, Intercom & Zendesk
          </p>
        </div>

        {/* Battle Cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {comparisonData.map((item, i) => (
            <div 
              key={i} 
              className="glass-card rounded-3xl p-4 sm:p-8 shadow-brand hover-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Feature Name */}
                <div className="lg:col-span-3 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                    {item.feature}
                  </h3>
                </div>

                {/* ReplAInow Winner */}
                <div className="lg:col-span-4 order-1 lg:order-none">
                  <div className="bg-gradient-primary text-white rounded-2xl p-4 sm:p-6 shadow-brand-glow relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-2xl">👑</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl sm:text-3xl">{item.replainow.icon}</div>
                      <div className="font-black text-lg sm:text-xl">ReplAInow</div>
                    </div>
                    <div className="text-base sm:text-lg font-bold opacity-95">
                      {item.replainow.value}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* VS Separator */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="bg-slate-200 rounded-full px-3 py-1 text-sm font-bold text-slate-600">
                    VS
                  </div>
                </div>

                {/* Competitors */}
                <div className="lg:col-span-4 order-3 lg:order-none">
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                    {item.competitors.map((comp, j) => (
                      <div 
                        key={j} 
                        className="bg-slate-100 rounded-xl p-3 sm:p-4 border border-slate-200 relative"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-sm text-slate-600">{comp.name}</div>
                          <div className="text-xl">❌</div>
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          {comp.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Cost Savings */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-success/10 via-brand-success/5 to-transparent rounded-3xl p-6 sm:p-10 border border-brand-success/20 shadow-brand-glow relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 text-4xl sm:text-6xl opacity-20">💰</div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-brand-success/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-brand-success mb-8 text-center">
                💰 Massive Kosteneinsparung vs. Konkurrenz
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Expensive Competition */}
                <div className="text-center space-y-6">
                  <div className="text-destructive font-bold text-xl mb-4">
                    🔥 Teure Konkurrenz
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Gorgias", price: "€50+", color: "bg-red-100 border-red-200 text-red-700" },
                      { name: "Intercom", price: "€74+", color: "bg-red-100 border-red-200 text-red-700" },
                      { name: "Zendesk", price: "€115+", color: "bg-red-100 border-red-200 text-red-700" }
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} rounded-xl p-4 border font-bold flex justify-between items-center`}>
                        <span>{item.name}</span>
                        <span className="text-lg">{item.price}/Monat</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ReplAInow Power */}
                <div className="text-center space-y-6">
                  <div className="text-brand-success font-bold text-xl mb-4">
                    ⚡ ReplAInow Power
                  </div>
                  <div className="bg-gradient-to-br from-brand-success/20 to-brand-success/10 rounded-2xl p-6 border border-brand-success/30 shadow-brand">
                    <div className="text-4xl sm:text-5xl font-black text-brand-success mb-3">
                      €19/Monat
                    </div>
                    <div className="text-brand-success text-lg font-bold mb-4">
                      = Bis zu €1.368/Jahr gespart! 💸
                    </div>
                    <div className="text-brand-success font-semibold">
                      Bei überlegener KI-Performance
                    </div>
                  </div>
                  
                  <div className="bg-brand-warning/10 rounded-xl p-4 border border-brand-warning/30">
                    <div className="text-brand-warning font-bold">
                      🎯 ROI: 600%+ garantiert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparison;