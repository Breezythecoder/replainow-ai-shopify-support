const ModernComparison = () => {
  const comparisonData = [
    ["AI Intelligence", "✅ GPT-4.1 Latest", "❌ Basic AI", "❌ Limited AI", "❌ Old AI"],
    ["Antwortzeit", "✅ 3 Sekunden", "❌ 2-5 Minuten", "❌ 5-10 Minuten", "❌ 10+ Minuten"],
    ["Sprachen", "✅ 32+ Nativ", "❌ 10 Basic", "❌ 15 Basic", "❌ 20 Basic"],
    ["Shopify Integration", "✅ Echtzeit-Sync", "❌ Manual Import", "❌ Basic Connect", "❌ Complex Setup"],
    ["Preis/Monat", "✅ €19/Monat", "❌ €50+", "❌ €74+", "❌ €115+"],
    ["Setup Zeit", "✅ 60 Sekunden", "❌ 2-3 Tage", "❌ 1 Woche", "❌ 2 Wochen"],
    ["ROI Garantie", "✅ 3x Conversion", "❌ Neutral", "❌ Neutral", "❌ Negative"]
  ];

  return (
    <section className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-8 tracking-tight">
          Warum ReplAInow die Konkurrenz <span className="text-red-500">zerstört</span>
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          Direkter Vergleich mit Gorgias, Intercom & Zendesk
        </p>
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="glass-card rounded-3xl p-1 shadow-hero">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-6 px-6 font-bold text-lg text-slate-800">Feature</th>
                    <th className="text-center py-6 px-4 bg-gradient-primary text-white rounded-t-2xl">
                      <div className="font-black text-lg">ReplAInow</div>
                      <div className="text-sm opacity-90">GPT-4.1 Powered</div>
                    </th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Gorgias</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Intercom</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Zendesk</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">{row[0]}</td>
                      <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                        {row[1]}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[2]}</td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[3]}</td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cost Savings Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-float">
            <h3 className="text-3xl font-black text-green-700 mb-6 text-center">
              💰 Massive Kosteneinsparung vs. Konkurrenz
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-red-600 font-bold text-lg">Teure Konkurrenz:</div>
                <div className="space-y-2">
                  <div className="text-red-500 font-semibold">Gorgias: €50+/Monat</div>
                  <div className="text-red-500 font-semibold">Intercom: €74+/Monat</div>
                  <div className="text-red-500 font-semibold">Zendesk: €115+/Monat</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-green-600 font-bold text-lg">ReplAInow Power:</div>
                <div className="space-y-2">
                  <div className="text-green-600 font-black text-xl">Nur €19/Monat</div>
                  <div className="text-green-600 text-lg font-bold">= Bis zu €96/Monat gespart!</div>
                  <div className="text-green-600 font-semibold">Bei überlegener Performance</div>
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