const ModernProblemSolutionIt = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">Il problema:</span> Supporto sovraccarico
          <br />
          <span className="text-brand-success">La soluzione:</span> IA intelligente
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold">😫 SENZA REPLAINOW</div>
            <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Casella email caotica e piena" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">Gestire 50+ email al giorno</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">Risposte copia-incolla infinite</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">Clienti in attesa per ore</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">Vendite perse per scarso servizio</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">Team sovraccarico e stressato</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">🚀 CON REPLAINOW</div>
            <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Dashboard ReplAInow con risposta perfetta" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">IA risponde automaticamente in 3 secondi</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">Raccomandazioni prodotto perfette</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">32+ lingue automaticamente</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">+187% tasso di conversione</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">90% meno lavoro di supporto</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModernProblemSolutionIt;