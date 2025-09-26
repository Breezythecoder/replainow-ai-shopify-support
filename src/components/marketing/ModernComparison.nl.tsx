const ModernComparisonNl = () => {
  const comparisonData = [
    ["AI Intelligentie", "✅ GPT-4.1 Nieuwste", "❌ Basis AI", "❌ Beperkte AI", "❌ Oude AI"],
    ["Reactietijd", "✅ 3 Seconden", "❌ 2-5 Minuten", "❌ 5-10 Minuten", "❌ 10+ Minuten"],
    ["Talen", "✅ 32+ Native", "❌ 10 Basis", "❌ 15 Basis", "❌ 20 Basis"],
    ["Shopify Integratie", "✅ Real-time Sync", "❌ Handmatige Import", "❌ Basis Verbinding", "❌ Complexe Setup"],
    ["Prijs/Maand", "✅ €19/Maand", "❌ €50+", "❌ €74+", "❌ €115+"],
    ["Setup Tijd", "✅ 60 Seconden", "❌ 2-3 Dagen", "❌ 1 Week", "❌ 2 Weken"],
    ["ROI Garantie", "✅ 6x Conversie", "❌ Neutraal", "❌ Neutraal", "❌ Negatief"]
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Waarom ReplAInow de concurrentie <span className="text-destructive">verplettert</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Directe vergelijking met Gorgias, Intercom & Zendesk
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="glass-card rounded-3xl overflow-hidden shadow-hero mx-4 sm:mx-0">
                <div className="overflow-hidden rounded-3xl">
                  <table className="w-full min-w-[600px] sm:min-w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-slate-800 text-sm sm:text-base bg-white/60 rounded-tl-3xl">Functie</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 bg-gradient-primary text-white relative overflow-hidden text-sm sm:text-base min-w-[140px]">
                          <div className="font-black text-base sm:text-lg md:text-xl">ReplAInow</div>
                          <div className="text-xs sm:text-sm opacity-90">Powered by GPT-4.1</div>
                          <div className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl">👑</div>
                        </th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-slate-50/50 text-sm sm:text-base min-w-[120px]">Gorgias</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-slate-50/30 text-sm sm:text-base min-w-[120px]">Intercom</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-slate-50/20 text-sm sm:text-base rounded-tr-3xl min-w-[120px]">Zendesk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={`border-b border-white/10 hover:bg-white/5 transition-all duration-300 group ${i === comparisonData.length - 1 ? 'border-b-0' : ''}`}>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-slate-800 bg-white/50 text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-bl-3xl' : ''}`}>
                            {row[0]}
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 font-bold text-brand-primary relative text-sm sm:text-base">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-base sm:text-lg">⚡</span>
                              <span className="whitespace-nowrap">{row[1]}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-slate-50/30 hover:bg-red-50/50 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[2]}</span>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-slate-50/20 hover:bg-red-50/30 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[3]}</span>
                          </td>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-slate-50/10 hover:bg-red-50/20 transition-colors text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-br-3xl' : ''}`}>
                            <span className="whitespace-nowrap">{row[4]}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparisonNl;