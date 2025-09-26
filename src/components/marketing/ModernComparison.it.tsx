const ModernComparisonIt = () => {
  const comparisonData = [
    ["Intelligenza AI", "✅ GPT-4.1 Ultimo", "❌ AI Base", "❌ AI Limitata", "❌ AI Vecchia"],
    ["Tempo Risposta", "✅ 3 Secondi", "❌ 2-5 Minuti", "❌ 5-10 Minuti", "❌ 10+ Minuti"],
    ["Lingue", "✅ 32+ Native", "❌ 10 Base", "❌ 15 Base", "❌ 20 Base"],
    ["Integrazione Shopify", "✅ Sync Tempo Reale", "❌ Import Manuale", "❌ Connessione Base", "❌ Setup Complesso"],
    ["Prezzo/Mese", "✅ €19/Mese", "❌ €50+", "❌ €74+", "❌ €115+"],
    ["Tempo Setup", "✅ 60 Secondi", "❌ 2-3 Giorni", "❌ 1 Settimana", "❌ 2 Settimane"],
    ["Garanzia ROI", "✅ 3x Conversione", "❌ Neutrale", "❌ Neutrale", "❌ Negativo"]
  ];

  return (
    <section className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-8 tracking-tight">
          Perché ReplAInow <span className="text-destructive">distrugge</span> la concorrenza
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          Confronto diretto con Gorgias, Intercom e Zendesk
        </p>
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="glass-card rounded-3xl p-1 shadow-hero">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-6 px-6 font-bold text-lg text-slate-800">Funzionalità</th>
                    <th className="text-center py-6 px-4 bg-gradient-primary text-white rounded-t-2xl">
                      <div className="font-black text-lg">ReplAInow</div>
                      <div className="text-sm opacity-90">Powered by GPT-4.1</div>
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
              💰 Risparmio Massiccio vs. Concorrenza
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-destructive font-bold text-lg">Concorrenza Costosa:</div>
                <div className="space-y-2">
                  <div className="text-destructive font-semibold">Gorgias: €50+/Mese</div>
                  <div className="text-destructive font-semibold">Intercom: €74+/Mese</div>
                  <div className="text-destructive font-semibold">Zendesk: €115+/Mese</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-brand-success font-bold text-lg">Potenza ReplAInow:</div>
                <div className="space-y-2">
                  <div className="text-brand-success font-black text-xl">Solo €19/Mese</div>
                  <div className="text-brand-success text-lg font-bold">= Risparmi fino a €96/Mese!</div>
                  <div className="text-brand-success font-semibold">Con prestazioni superiori</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparisonIt;