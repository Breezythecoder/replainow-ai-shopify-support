import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";

const logos = ["Shopify Plus", "Marque D2C", "Top Store", "Global Retail", "Lifestyle Co."];

const SocialProofFr = () => {
  return (
    <section id="trust" aria-labelledby="trust-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-6xl">
        <h2 id="trust-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Utilis et ador par les principales boutiques Shopify.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Plus de confiance. Moins d'effort. Rponses plus rapides.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="inline-flex items-center rounded-full border bg-card px-3 py-1">Shopify Plus Partner</span>
          <span className="inline-flex items-center rounded-full border bg-card px-3 py-1">Shopify App Store  4.9 / 5</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center mb-12">
          {logos.map((name) => (
            <div key={name} className="rounded-lg border bg-card px-4 py-3 text-center text-sm text-muted-foreground">
              {name}
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border bg-card p-6">
            <p className="mb-4">"Nous conomisons 15 heures de support par semaine  et nos clients adorent le temps de rponse rapide."</p>
            <div className="text-sm text-muted-foreground">Lisa  Boutique Fashion  7 chiffres</div>
          </article>
          <article className="rounded-xl border bg-card p-6">
            <p className="mb-4">"Enfin je peux me concentrer sur la croissance. Le support fonctionne tout seul."</p>
            <div className="text-sm text-muted-foreground">Daniel  Marque D2C  6 chiffres</div>
          </article>
          <article className="rounded-xl border bg-card p-6">
            <p className="mb-4">"Configuration en minutes, bnfice immdiat. Nous respectons maintenant nos SLA facilement."</p>
            <div className="text-sm text-muted-foreground">Mara  Home & Living  8 chiffres</div>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border bg-card p-6">
            <div className="text-3xl font-semibold">15 hrs</div>
            <div className="text-sm text-muted-foreground">Temps de support conomis par semaine</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="text-3xl font-semibold">+37%</div>
            <div className="text-sm text-muted-foreground">Plus grande satisfaction client (30 jours)</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="text-3xl font-semibold">x12 ROI</div>
            <div className="text-sm text-muted-foreground">Dans le premier mois</div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="size-4" /> Shopify App Store</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4" /> Conforme RGPD</span>
          <span className="inline-flex items-center gap-2"><Lock className="size-4" /> Scurit SSL & HMAC</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofFr;