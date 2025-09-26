const ModernProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-red-500">Das Problem:</span> Überforderter Support
          <br />
          <span className="text-green-500">Die Lösung:</span> Intelligente AI
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before Card - Problem */}
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              😫 OHNE REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt="Chaotisches überfülltes E-Mail Postfach" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="font-medium">50+ E-Mails täglich bearbeiten</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="font-medium">Endlose Copy-Paste Antworten</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="font-medium">Kunden warten stundenlang</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="font-medium">Verlorene Verkäufe durch schlechten Service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <span className="font-medium">Überarbeitetes, gestresstes Team</span>
              </li>
            </ul>
          </div>
          
          {/* After Card - Solution */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold">
              🚀 MIT REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt="ReplAInow AI Dashboard mit perfekter Antwort" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="font-medium">AI antwortet in 3 Sekunden automatisch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="font-medium">Perfekte Produktempfehlungen</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="font-medium">32+ Sprachen automatisch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="font-medium">+187% höhere Conversion Rate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="font-medium">90% weniger Support-Aufwand</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProblemSolution;