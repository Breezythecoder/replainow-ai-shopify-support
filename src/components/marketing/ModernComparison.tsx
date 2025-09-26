const ModernComparison = () => {
  const comparisonData = [
    ["AI Intelligence", "✅ GPT-4.1 Latest", "❌ Basic AI", "❌ Limited AI", "❌ Old AI"],
    ["Antwortzeit", "✅ 3 Sekunden", "❌ 2-5 Minuten", "❌ 5-10 Minuten", "❌ 10+ Minuten"],
    ["Sprachen", "✅ 32+ Nativ", "❌ 10 Basic", "❌ 15 Basic", "❌ 20 Basic"],
    ["Shopify Integration", "✅ Echtzeit-Sync", "❌ Manual Import", "❌ Basic Connect", "❌ Complex Setup"],
    ["Preis/Monat", "✅ €19/Monat", "❌ €50+", "❌ €74+", "❌ €115+"],
    ["Setup Zeit", "✅ 60 Sekunden", "❌ 2-3 Tage", "❌ 1 Woche", "❌ 2 Wochen"],
    ["ROI Garantie", "✅ 6x Conversion", "❌ Neutral", "❌ Neutral", "❌ Negativ"]
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
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="glass-card rounded-3xl p-1 shadow-hero">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-6 px-6 font-bold text-lg text-slate-800">Feature</th>
                    <th className="text-center py-6 px-4 bg-gradient-primary text-white rounded-t-2xl relative overflow-hidden">
                      <div className="font-black text-lg">ReplAInow</div>
                      <div className="text-sm opacity-90">Powered by GPT-4.1</div>
                      <div className="absolute top-2 right-2 text-xl">👑</div>
                    </th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold bg-slate-50/50">Gorgias</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold bg-slate-50/30">Intercom</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold bg-slate-50/20">Zendesk</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group">
                      <td className="py-5 px-6 font-bold text-slate-800 bg-white/50">{row[0]}</td>
                      <td className="py-5 px-4 text-center bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 font-bold text-brand-primary relative">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg">⚡</span>
                          <span>{row[1]}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </td>
                      <td className="py-5 px-4 text-center text-slate-600 font-medium bg-slate-50/30 hover:bg-red-50/50 transition-colors">{row[2]}</td>
                      <td className="py-5 px-4 text-center text-slate-600 font-medium bg-slate-50/20 hover:bg-red-50/30 transition-colors">{row[3]}</td>
                      <td className="py-5 px-4 text-center text-slate-600 font-medium bg-slate-50/10 hover:bg-red-50/20 transition-colors">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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