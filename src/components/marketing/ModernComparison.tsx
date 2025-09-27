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

        {/* Modern Cost Savings Block */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Massive Kosteneinsparung
                  </span>
                </h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Warum 75% weniger bezahlen und trotzdem die beste KI-Performance bekommen?
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Competition */}
                <div className="lg:col-span-1">
                  <h4 className="text-2xl font-bold text-red-600 mb-6 text-center">Teure Konkurrenz</h4>
                  <div className="space-y-4">
                    {[
                       { name: "Gorgias", price: "€50+", features: "Basis AI, langsam" },
                       { name: "Intercom", price: "€74+", features: "Begrenzte Sprachen" },
                       { name: "Zendesk", price: "€115+", features: "Komplexe Setup" }
                    ].map((item, i) => (
                      <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-red-800">{item.name}</span>
                          <span className="text-lg font-black text-red-600">{item.price}/Monat</span>
                        </div>
                        <p className="text-sm text-red-600">{item.features}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-red-100 border border-red-200 rounded-xl p-4 text-center">
                    <div className="text-red-700 font-bold">= €1.800+/Jahr</div>
                    <div className="text-sm text-red-600">Nur für Basis-Features</div>
                  </div>
                </div>

                {/* VS Arrow */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="text-6xl text-slate-400 font-bold">VS</div>
                </div>

                {/* ReplAInow */}
                <div className="lg:col-span-1">
                  <h4 className="text-2xl font-bold text-green-600 mb-6 text-center">ReplAInow Power</h4>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-black text-green-600 mb-2">€19/Monat</div>
                      <div className="text-sm text-green-600 font-semibold">Alle Features inklusive</div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>GPT-4.1 AI Engine</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>32+ Sprachen nativ</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>3 Sekunden Antwortzeit</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Unlimitierte AI-Antworten</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-center">
                    <div className="text-blue-700 font-bold text-lg">= €228/Jahr</div>
                    <div className="text-sm text-blue-600">€1.572/Jahr gespart!</div>
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