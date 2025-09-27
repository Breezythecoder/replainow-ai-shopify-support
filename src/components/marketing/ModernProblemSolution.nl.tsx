const ModernProblemSolutionNl = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">Het probleem:</span> Overbelaste support
          <br />
          <span className="text-brand-success">De oplossing:</span> Intelligente AI
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold"> ZONDER REPLAINOW</div>
            <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Chaotische en overvolle inbox" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Dagelijks 50+ e-mails verwerken</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Eindeloze copy-paste antwoorden</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Klanten wachten uren</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Verlies van omzet door slechte service</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Overwerkt en gestrest team</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"> MET REPLAINOW</div>
            <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow AI Dashboard met perfecte reactie" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">AI reageert automatisch in 3 seconden</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">Perfecte productaanbevelingen</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">32+ talen automatisch</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">+187% hogere conversie</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">90% minder supportwerk</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModernProblemSolutionNl;