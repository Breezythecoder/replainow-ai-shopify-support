import { Button } from "@/components/ui/button";
const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";
const ModernFinalCTAPt = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 speed-lines" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter px-4">Pronto para a revoluo da IA?</h2>
        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed px-4">Mais de <strong className="text-brand-warning">280+ lojistas Shopify</strong> j usam ReplAInow. Junte-se  elite e <strong className="text-brand-warning">ultrapasse a concorrncia</strong> com IA superior.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-stretch max-w-5xl mx-auto">
          <Button asChild variant="glass" size="xl" className="flex-1 sm:flex-none text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white text-indigo-600 hover:bg_white hover:scale-105 font-black shadow-brand-mega min-h-[56px] max-w-none sm:max-w-xs"><a href={OAUTH_URL} className="flex items-center gap-2 justify-center text-center"> <span className="whitespace-normal break-words">Comear Grtis</span></a></Button>
          <Button asChild variant="glass" size="xl" className="flex-1 sm:flex-none text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 font-bold shadow-brand min-h-[56px] max-w-none sm:max-w-xs"><a href="#live-demo" className="flex items-center gap-2 justify-center text-center"> <span className="whitespace-normal break-words">Agendar Demo</span></a></Button>
        </div>
      </div>
    </section>
  );
};
export default ModernFinalCTAPt;