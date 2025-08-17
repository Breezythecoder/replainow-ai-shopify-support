import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const FinalCTAFr = () => {
  return (
    <section id="cta-final" aria-labelledby="cta-final-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-primary p-10 text-center shadow-brand-glow">
          <h2 id="cta-final-heading" className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-3">
            Finissez avec le stress du support – prêt en 2 minutes.
          </h2>
          <p className="text-primary-foreground/90 mb-8">14 jours d'essai gratuit. Fonctionnalité complète. Aucune carte de crédit requise.</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>Essayer gratuitement</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo">Voir la démo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAFr;