const ModernLiveDemoNl = () => {
  return (
    <section id="live-demo" className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tight text-center px-4">Bekijk ReplAInow <span className="text-gradient-hero">live in actie</span></h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">Van 0 naar held in 3 seconden  zo werkt toonaangevende AI voor jouw Shopify store</p>
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-hero bg-gradient-primary p-2">
            <div className="glass-card rounded-2xl overflow-hidden">
              <iframe src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0" className="w-full aspect-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="ReplAInow Live Demo - AI Helpdesk voor Shopify" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">3 sec</div><div className="text-slate-600 font-medium text-sm sm:text-base">Gemiddelde reactietijd</div></div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">98%</div><div className="text-slate-600 font-medium text-sm sm:text-base">Nauwkeurigheid</div></div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center interactive-card hover-lift"><div className="text-3xl sm:text-4xl font-black text-gradient-primary mb-3">24/7</div><div className="text-slate-600 font-medium text-sm sm:text-base">Beschikbaarheid</div></div>
        </div>
      </div>
    </section>
  );
};
export default ModernLiveDemoNl;