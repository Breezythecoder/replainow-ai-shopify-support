import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const plans = [
  {
    name: "Starter",
    price: "19 €",
    period: "/Monat",
    features: ["500 Anfragen/Monat", "Grundfunktionen", "E-Mail-Support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "49 €",
    period: "/Monat",
    features: ["2000 Anfragen/Monat", "Erweiterte Automatisierung", "Priorisierte Antworten"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    period: "",
    features: ["Unbegrenzte Anfragen", "SLA & Prioritätssupport", "Individuelle Anpassungen"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Transparente Preise – skalierbar für jeden Shop
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Starte heute und wachse mit deinem Bedarf.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <article key={p.name} className={`rounded-2xl border p-6 bg-card flex flex-col ${p.highlight ? 'shadow-brand' : ''}`}>
              <header className="mb-4">
                <h3 className="font-semibold text-xl">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-muted-foreground">{p.period}</span>
                </div>
              </header>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--brand-primary))" }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild variant={p.highlight ? 'hero' : 'outline'} className="w-full">
                  <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(p.name)}`}>Jetzt starten</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
