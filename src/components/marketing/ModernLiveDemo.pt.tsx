const ModernLiveDemoPt = () => {
  return (
    <section id="live-demo" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">Veja o ReplAInow <span className="text-gradient-hero">ao vivo</span></h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">De 0 a herói em 3 segundos — assim funciona a IA de ponta para sua loja Shopify</p>
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-hero bg-gradient-primary p-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0" className="w-full aspect-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="ReplAInow Demo ao Vivo - AI Helpdesk para Shopify" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">3 seg</div><div className="text-slate-600 font-medium text-sm sm:text-base">Tempo médio de resposta</div></div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">98%</div><div className="text-slate-600 font-medium text-sm sm:text-base">Taxa de acurácia</div></div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">24/7</div><div className="text-slate-600 font-medium text-sm sm:text-base">Disponibilidade</div></div>
        </div>
      </div>
    </section>
  );
};
export default ModernLiveDemoPt;