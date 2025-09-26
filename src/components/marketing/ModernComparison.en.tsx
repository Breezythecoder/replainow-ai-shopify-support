const ModernComparisonEn = () => {
  const comparisonData = [
    ["AI Intelligence", "✅ GPT-4.1 Latest", "❌ Basic AI", "❌ Limited AI", "❌ Old AI"],
    ["Response Time", "✅ 3 Seconds", "❌ 2-5 Minutes", "❌ 5-10 Minutes", "❌ 10+ Minutes"],
    ["Languages", "✅ 32+ Native", "❌ 10 Basic", "❌ 15 Basic", "❌ 20 Basic"],
    ["Shopify Integration", "✅ Real-time Sync", "❌ Manual Import", "❌ Basic Connect", "❌ Complex Setup"],
    ["Price/Month", "✅ $19/Month", "❌ $50+", "❌ $74+", "❌ $115+"],
    ["Setup Time", "✅ 60 Seconds", "❌ 2-3 Days", "❌ 1 Week", "❌ 2 Weeks"],
    ["ROI Guarantee", "✅ 3x Conversion", "❌ Neutral", "❌ Neutral", "❌ Negative"]
  ];

  return (
    <section className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-8 tracking-tight">
          Why ReplAInow <span className="text-destructive">destroys</span> the competition
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          Direct comparison with Gorgias, Intercom & Zendesk
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
          <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-3xl p-8 border border-brand-success/20 shadow-float">
            <h3 className="text-3xl font-black text-brand-success mb-6 text-center">
              💰 Massive Cost Savings vs. Competition
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-destructive font-bold text-lg">Expensive Competition:</div>
                <div className="space-y-2">
                  <div className="text-destructive font-semibold">Gorgias: $50+/Month</div>
                  <div className="text-destructive font-semibold">Intercom: $74+/Month</div>
                  <div className="text-destructive font-semibold">Zendesk: $115+/Month</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-brand-success font-bold text-lg">ReplAInow Power:</div>
                <div className="space-y-2">
                  <div className="text-brand-success font-black text-xl">Only $19/Month</div>
                  <div className="text-brand-success text-lg font-bold">= Save up to $96/Month!</div>
                  <div className="text-brand-success font-semibold">With superior performance</div>
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