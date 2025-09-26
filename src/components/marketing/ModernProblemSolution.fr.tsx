const ModernProblemSolutionFr = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">Le problème :</span> Support débordé
          <br />
          <span className="text-brand-success">La solution :</span> IA intelligente
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Avant - Problème */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold">
              😫 SANS REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt="Boîte mail surchargée et chaotique" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Traiter 50+ emails par jour</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Réponses copiées-collées interminables</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Clients qui attendent des heures</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Ventes perdues à cause d'un mauvais service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Équipe surmenée et stressée</span>
              </li>
            </ul>
          </div>
          
          {/* Après - Solution */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🚀 AVEC REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt="Tableau de bord ReplAInow avec réponse parfaite" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">IA répond automatiquement en 3 secondes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">Recommandations produits parfaites</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">32+ langues automatiquement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">+187% de conversion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">90% d'effort support en moins</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProblemSolutionFr;