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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* AI-Powered Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* AI Badge */}
        <div className="inline-block mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-sm rounded-full shadow-2xl animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="relative z-10">⚔️ AI COMPARISON</span>
          </span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Warum ReplAInow die Konkurrenz <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">zerstört</span>
          </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Direkter Vergleich mit Gorgias, Intercom & Zendesk
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto -mx-4 sm:mx-0" tabIndex="0" role="region" aria-label="Comparison table - scrollable">
            <div className="inline-block min-w-full align-middle">
                <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-0 border border-blue-500/50">
                <div className="overflow-hidden rounded-3xl">
                  <table className="w-full min-w-[600px] sm:min-w-full" role="table" aria-label="Comparison table between ReplAInow and competitors">
                    <thead>
                      <tr className="border-b border-blue-500/30">
                        <th className="text-left py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-white text-sm sm:text-base bg-slate-700/50 rounded-tl-3xl">Feature</th>
                        <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden text-sm sm:text-base min-w-[140px]">
                          <div className="font-black text-base sm:text-lg md:text-xl">ReplAInow</div>
                          <div className="text-xs sm:text-sm opacity-90">Powered by GPT-4.1</div>
                           <div className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl">
                             <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                             </svg>
                           </div>
                        </th>
                          <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-blue-100 font-semibold bg-slate-700/30 text-sm sm:text-base min-w-[120px]">Gorgias</th>
                          <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-blue-100 font-semibold bg-slate-700/20 text-sm sm:text-base min-w-[120px]">Intercom</th>
                          <th className="text-center py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-blue-100 font-semibold bg-slate-700/10 text-sm sm:text-base rounded-tr-3xl min-w-[120px]">Zendesk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={`border-b border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300 group ${i === comparisonData.length - 1 ? 'border-b-0' : ''}`}>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 font-bold text-white bg-slate-700/30 text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-bl-3xl' : ''}`}>
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
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-300 font-medium bg-slate-700/20 hover:bg-red-500/20 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[2]}</span>
                          </td>
                          <td className="py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-300 font-medium bg-slate-700/15 hover:bg-red-500/15 transition-colors text-sm sm:text-base">
                            <span className="whitespace-nowrap">{row[3]}</span>
                          </td>
                          <td className={`py-4 px-4 sm:py-5 sm:px-6 md:py-6 text-center text-red-300 font-medium bg-slate-700/10 hover:bg-red-500/10 transition-colors text-sm sm:text-base ${i === comparisonData.length - 1 ? 'rounded-br-3xl' : ''}`}>
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

        {/* Ultra-Modern Cost Savings Block */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 sm:p-16 border border-slate-200/50 shadow-2xl relative overflow-hidden">
            {/* Modern Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-green-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/5 to-green-200/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <h3 className="text-5xl sm:text-6xl font-black mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-green-600">
                    Kosteneinsparung
                  </span>
                </h3>
                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  Warum 75% weniger bezahlen und trotzdem die beste KI-Performance bekommen?
                </p>
              </div>
              
              {/* Main Comparison Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Competition Side */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">Teure Konkurrenz</h4>
                    <p className="text-slate-600">Basis-Features für Premium-Preise</p>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                       { name: "Gorgias", price: "€50+", features: ["Basis AI", "Langsame Antworten", "Begrenzte Sprachen"] },
                       { name: "Intercom", price: "€74+", features: ["Teure Add-ons", "Komplexe Setup", "Begrenzte Integration"] },
                       { name: "Zendesk", price: "€115+", features: ["Überteuerte Features", "Lange Einarbeitung", "Versteckte Kosten"] }
                    ].map((item, i) => (
                      <div key={i} className="bg-gradient-to-r from-red-50 to-red-100/50 border-2 border-red-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-red-300">
                        <div className="flex justify-between items-center mb-4">
                          <h5 className="font-bold text-red-900 text-xl">{item.name}</h5>
                          <span className="text-2xl font-black text-red-600">{item.price}/Monat</span>
                        </div>
                        <div className="space-y-2">
                          {item.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                              <span className="text-red-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-100 to-red-200/50 border-2 border-red-300/50 rounded-2xl p-6 text-center">
                    <div className="text-red-800 font-black text-3xl mb-2">€1.800+/Jahr</div>
                    <div className="text-red-400 font-semibold">Nur für Basis-Features</div>
                  </div>
                </div>

                {/* ReplAInow Side */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-600 mb-2">ReplAInow Power</h4>
                    <p className="text-slate-600">Premium-Features für faire Preise</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100/50 border-2 border-green-200/50 rounded-2xl p-8 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-black text-green-600 mb-2">€19/Monat</div>
                      <div className="text-green-800 font-semibold text-lg">Alle Premium-Features inklusive</div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {[
                        "GPT-4.1 AI Engine",
                        "32+ Sprachen nativ", 
                        "3 Sekunden Antwortzeit",
                        "Unlimitierte AI-Antworten",
                        "DSGVO-konform",
                        "24/7 Verfügbarkeit"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-green-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100/50 border-2 border-blue-300/50 rounded-2xl p-6 text-center">
                    <div className="text-blue-800 font-black text-3xl mb-2">€228/Jahr</div>
                    <div className="text-blue-600 font-semibold text-lg">€1.572/Jahr gespart!</div>
                    <div className="text-blue-500 text-sm mt-1">ROI: 600%+ garantiert</div>
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