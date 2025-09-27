const ModernProblemSolutionPt = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">O problema:</span> Suporte sobrecarregado
          <br />
          <span className="text-brand-success">A soluo:</span> IA inteligente
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold"> SEM REPLAINOW</div>
            <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Caixa de entrada catica lotada" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Processar 50+ emails por dia</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Respostas copiar-colar sem fim</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Clientes esperam horas</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Vendas perdidas por mau servio</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl"></span><span className="font-medium">Equipe sobrecarregada e estressada</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"> COM REPLAINOW</div>
            <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Painel ReplAInow com resposta perfeita" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">IA responde automaticamente em 3 segundos</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">Recomendaes perfeitas de produtos</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">32+ idiomas automaticamente</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">+187% taxa de converso</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl"></span><span className="font-medium">90% menos esforo de suporte</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModernProblemSolutionPt;