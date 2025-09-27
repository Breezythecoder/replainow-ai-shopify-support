import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const FinalCTAPt = () => {
  return (
    <section id="cta-final" aria-labelledby="cta-final-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-primary p-10 text-center shadow-brand-glow">
          <h2 id="cta-final-heading" className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-3">
            Termine com o estresse do suporte  pronto em 2 minutos.
          </h2>
          <p className="text-primary-foreground/90 mb-8">14 dias de teste grtis. Funcionalidade completa. Sem carto de crdito necessrio.</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>Testar grtis</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo">Ver demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAPt;