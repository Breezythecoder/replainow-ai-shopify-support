const ModernProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-red-600">Das Problem:</span> berforderter Support
          <br />
          <span className="text-green-600">Die Lsung:</span> Intelligente AI
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before Card - Problem */}
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
               OHNE REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt="Chaotisches berflltes E-Mail Postfach" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-center gap-3">
                <span className="text-red-600 text-xl"></span>
                <span className="font-medium">50+ E-Mails tglich bearbeiten</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600 text-xl"></span>
                <span className="font-medium">Endlose Copy-Paste Antworten</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600 text-xl"></span>
                <span className="font-medium">Kunden warten stundenlang</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600 text-xl"></span>
                <span className="font-medium">Verlorene Verkufe durch schlechten Service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-600 text-xl"></span>
                <span className="font-medium">berarbeitetes, gestresstes Team</span>
              </li>
            </ul>
          </div>
          
          {/* After Card - Solution */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              MIT REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt="ReplAInow AI Dashboard mit perfekter Antwort" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">AI antwortet in 3 Sekunden automatisch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">Perfekte Produktempfehlungen</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">32+ Sprachen automatisch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">+187% hhere Conversion Rate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
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