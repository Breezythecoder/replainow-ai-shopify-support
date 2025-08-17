import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, User, FileText, Truck, Languages, Bot } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Card = ({
  Icon,
  title,
  desc,
  className = "",
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  className?: string;
}) => (
  <div
    className={`rounded-xl border bg-card p-4 shadow-sm animate-fade-in ${className}`}
  >
    <div className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-brand">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-medium leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const StoreDataFlowFr = () => {
  return (
    <section
      id="data-context"
      aria-labelledby="data-context-heading"
      className="relative py-16 md:py-24 bg-muted/40 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full blur-3xl bg-gradient-primary" />
      </div>

      <div className="container relative">
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2
            id="data-context-heading"
            className="font-display text-3xl md:text-4xl font-semibold mb-4"
          >
            Votre IA connaît votre boutique Shopify – jusque dans les détails
          </h2>
          <p className="text-muted-foreground">
            ReplAInow se connecte directement à votre boutique Shopify et extrait toutes les données pertinentes en temps réel pour répondre aux demandes clients instantanément et précisément.
          </p>
        </header>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-[720px] h-80 rounded-2xl border bg-card shadow-brand-glow overflow-hidden">
              <div className="flex items-center gap-2 h-10 px-4 border-b bg-muted/50">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="ml-4 text-xs text-muted-foreground">Shopify Admin</span>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-lg border bg-background p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 w-28 rounded bg-muted/60" />
                    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Bot className="h-4 w-4" /> IA active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-muted/50" />
                    <div className="h-3 w-2/3 rounded bg-muted/40" />
                    <div className="h-3 w-1/2 rounded bg-muted/30" />
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <div className="h-3 w-1/2 rounded bg-muted/50 mb-3" />
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded bg-muted/40" />
                    <div className="h-2.5 w-5/6 rounded bg-muted/30" />
                    <div className="h-2.5 w-3/4 rounded bg-muted/20" />
                  </div>
                </div>
              </div>

              <svg className="pointer-events-none absolute inset-0" viewBox="0 0 720 320" fill="none">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M60 40 C 140 80, 220 60, 280 100" stroke="url(#g)" strokeWidth="2" />
                <path d="M660 40 C 540 80, 500 60, 420 100" stroke="url(#g)" strokeWidth="2" />
                <path d="M40 180 C 160 160, 200 180, 280 160" stroke="url(#g)" strokeWidth="2" />
                <path d="M680 180 C 560 160, 520 180, 440 160" stroke="url(#g)" strokeWidth="2" />
                <path d="M120 300 C 200 260, 240 240, 300 220" stroke="url(#g)" strokeWidth="2" />
                <path d="M600 300 C 520 260, 480 240, 420 220" stroke="url(#g)" strokeWidth="2" />
              </svg>
            </div>

            <div className="absolute inset-0">
              <div className="absolute -top-4 left-0 w-64">
                <Card
                  Icon={ShoppingCart}
                  title="Données commandes"
                  desc="ID commande, statut, articles, suivi"
                />
              </div>
              <div className="absolute -top-4 right-0 w-64">
                <Card Icon={Package} title="Données produits" desc="Titres, SKUs, prix, inventaire" />
              </div>
              <div className="absolute top-1/3 -left-2 w-64">
                <Card Icon={User} title="Données clients" desc="Nom, email, historique d'achats" />
              </div>
              <div className="absolute top-1/3 -right-2 w-64">
                <Card Icon={FileText} title="Contenu boutique" desc="Pages, FAQ, règles livraison" />
              </div>
              <div className="absolute bottom-0 left-4 w-64">
                <Card Icon={Truck} title="Suivi & livraison" desc="Liens en direct, délais de livraison" />
              </div>
              <div className="absolute bottom-0 right-4 w-64">
                <Card Icon={Languages} title="Multilingue" desc="Langues préférées" />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="rounded-2xl border bg-card shadow-sm p-5 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="h-4 w-24 rounded bg-muted/60" />
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Bot className="h-4 w-4" /> IA active
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded bg-muted/50" />
                <div className="h-3 w-2/3 rounded bg-muted/40" />
                <div className="h-3 w-1/2 rounded bg-muted/30" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card Icon={ShoppingCart} title="Données commandes" desc="ID commande, statut, articles, suivi" />
              <Card Icon={Package} title="Données produits" desc="Titres, SKUs, prix, inventaire" />
              <Card Icon={User} title="Données clients" desc="Nom, email, historique d'achats" />
              <Card Icon={FileText} title="Contenu boutique" desc="Pages, FAQ, règles livraison" />
              <Card Icon={Truck} title="Suivi & livraison" desc="Liens en direct, délais de livraison" />
              <Card Icon={Languages} title="Multilingue" desc="Langues préférées" />
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-10 md:mt-14">
          <p className="text-muted-foreground">
            ReplAInow utilise ces données pour livrer des réponses conformes à la marque et précises en &lt;3 secondes – entièrement intégré dans Shopify.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>Essayer gratuitement maintenant</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo">Voir la démo en direct</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDataFlowFr;