const ModernComparisonEn = () => {
  const comparisonData = [
    ["AI Intelligence", " GPT-4.1 Latest", " Basic AI", " Limited AI", " Old AI"],
    ["Response Time", " 3 Seconds", " 2-5 Minutes", " 5-10 Minutes", " 10+ Minutes"],
    ["Languages", " 32+ Native", " 10 Basic", " 15 Basic", " 20 Basic"],
    ["Shopify Integration", " Real-time Sync", " Manual Import", " Basic Connect", " Complex Setup"],
    ["Price/Month", " $19/Month", " $50+", " $74+", " $115+"],
    ["Setup Time", " 60 Seconds", " 2-3 Days", " 1 Week", " 2 Weeks"],
    ["ROI Guarantee", " 6x Conversion", " Neutral", " Neutral", " Negative"]
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
            Why ReplAInow <span className="text-destructive">crushes</span> the competition
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Direct comparison with Gorgias, Intercom & Zendesk
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
                        <th className="text-left py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-slate-800 text-sm sm:text-base bg-white/60 rounded-tl-3xl">Feature</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 bg-gradient-primary text-white relative overflow-hidden text-sm sm:text-base min-w-[140px]">
                          <div className="font-black text-base sm:text-lg md:text-xl">ReplAInow</div>
                          <div className="text-xs sm:text-sm opacity-90">Powered by GPT-4.1</div>
                          <div className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl"></div>
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
                              <span className="text-base sm:text-lg"></span>
                              <span className="whitespace-nowrap">{row[1]}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-success/10 via-brand-success/5 to-transparent rounded-3xl p-6 sm:p-10 border border-brand-success/20 shadow-brand-glow relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl sm:text-6xl opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-brand-success/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-brand-success mb-8 text-center">
                 Massive Cost Savings vs. Competition
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="text-center space-y-6">
                  <div className="text-destructive font-bold text-xl mb-4">
                     Expensive Competition
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Gorgias", price: "$50+", color: "bg-red-100 border-red-200 text-red-700" },
                      { name: "Intercom", price: "$74+", color: "bg-red-100 border-red-200 text-red-700" },
                      { name: "Zendesk", price: "$115+", color: "bg-red-100 border-red-200 text-red-700" }
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} rounded-xl p-4 border font-bold flex justify-between items-center`}>
                        <span>{item.name}</span>
                        <span className="text-lg">{item.price}/Month</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <div className="text-brand-success font-bold text-xl mb-4">
                     ReplAInow Power
                  </div>
                  <div className="bg-gradient-to-br from-brand-success/20 to-brand-success/10 rounded-2xl p-6 border border-brand-success/30 shadow-brand">
                    <div className="text-4xl sm:text-5xl font-black text-brand-success mb-3">
                      $19/Month
                    </div>
                    <div className="text-brand-success text-lg font-bold mb-4">
                      = Up to $1,152/Year saved! 
                    </div>
                    <div className="text-brand-success font-semibold">
                      With superior AI performance
                    </div>
                  </div>
                  
                  <div className="bg-brand-warning/10 rounded-xl p-4 border border-brand-warning/30">
                    <div className="text-brand-warning font-bold">
                       ROI: 600%+ guaranteed
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

export default ModernComparisonEn;