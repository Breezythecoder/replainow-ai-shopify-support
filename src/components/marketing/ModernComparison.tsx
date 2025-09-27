const ModernComparison = () => {
  const comparisonData = [
     ["AI Intelligence", "YES GPT-4.1 Latest", "NO Basic AI", "NO Limited AI", "NO Old AI"],
     ["Antwortzeit", "YES 3 Sekunden", "NO 2-5 Minuten", "NO 5-10 Minuten", "NO 10+ Minuten"],
     ["Sprachen", "YES 32+ Nativ", "NO 10 Basic", "NO 15 Basic", "NO 20 Basic"],
     ["Shopify Integration", "YES Echtzeit-Sync", "NO Manual Import", "NO Basic Connect", "NO Complex Setup"],
     ["Preis/Monat", "YES EUR 19/Monat", "NO EUR 50+", "NO EUR 74+", "NO EUR 115+"],
     ["Setup Zeit", "YES 60 Sekunden", "NO 2-3 Tage", "NO 1 Woche", "NO 2 Wochen"],
     ["ROI Garantie", "YES 6x Conversion", "NO Neutral", "NO Neutral", "NO Negativ"]
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Warum ReplAInow die Konkurrenz <span className="text-red-600">zerstört</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Direkter Vergleich mit Gorgias, Intercom & Zendesk
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
                        <th className="text-left py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-slate-800 text-sm sm:text-base bg-white/80 rounded-tl-3xl">Feature</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden text-sm sm:text-base min-w-[140px]">
                          <div className="font-black text-base sm:text-lg md:text-xl">ReplAInow</div>
                          <div className="text-xs sm:text-sm opacity-90">Powered by GPT-4.1</div>
                           <div className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl">
                             <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                             </svg>
                           </div>
                        </th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-white/60 text-sm sm:text-base min-w-[120px]">Gorgias</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-white/40 text-sm sm:text-base min-w-[120px]">Intercom</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-slate-600 font-semibold bg-white/20 text-sm sm:text-base rounded-tr-3xl min-w-[120px]">Zendesk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={`border-b border-slate-200 hover:bg-blue-50/50 transition-all duration-300 group ${i === comparisonData.length - 1 ? 'border-b-0' : ''}`}>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-slate-800 bg-white/60 text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-bl-3xl' : ''}`}>
                            {row[0]}
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white relative text-sm sm:text-base">
                            <div className="flex items-center justify-center gap-2">
                               <span className="text-base sm:text-lg">
                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                   <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                 </svg>
                               </span>
                              <span className="whitespace-nowrap">{row[1]}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-white/50 hover:bg-red-50/50 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[2]}</span>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-white/30 hover:bg-red-50/30 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[3]}</span>
                          </td>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-slate-600 font-medium bg-white/20 hover:bg-red-50/20 transition-colors text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-br-3xl' : ''}`}>
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

        {/* Enhanced Cost Savings */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-success/10 via-brand-success/5 to-transparent rounded-3xl p-6 sm:p-10 border border-brand-success/20 shadow-brand-glow relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-brand-success/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-brand-success mb-8 text-center">
                Massive Kosteneinsparung vs. Konkurrenz
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Expensive Competition */}
                <div className="text-center space-y-6">
                  <div className="text-destructive font-bold text-xl mb-4">
                    Teure Konkurrenz
                  </div>
                  <div className="space-y-4">
                    {[
                       { name: "Gorgias", price: "EUR 50+", color: "bg-red-100 border-red-200 text-red-700" },
                       { name: "Intercom", price: "EUR 74+", color: "bg-red-100 border-red-200 text-red-700" },
                       { name: "Zendesk", price: "EUR 115+", color: "bg-red-100 border-red-200 text-red-700" }
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
                  <div className="text-green-600 font-bold text-xl mb-4">
                      <span className="flex items-center justify-center gap-2">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                       </svg>
                       ReplAInow Power
                     </span>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-lg">
                    <div className="text-4xl sm:text-5xl font-black text-green-600 mb-3">
                      €19/Monat
                    </div>
                    <div className="text-green-600 text-lg font-bold mb-4">
                      = Bis zu €1.368/Jahr gespart!
                    </div>
                    <div className="text-slate-600 font-semibold">
                      Bei überlegener KI-Performance
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-blue-600 font-bold">
                      ROI: 600%+ garantiert
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