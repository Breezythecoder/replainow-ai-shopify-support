import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const featuresList = [
  "GPT-4 Antworten",
  "Tiefe Shopify-Integration",
  "DSGVO & HMAC-Sicherheit",
  "SLA/Support inklusive",
];

const plans = [
  {
    name: "Starter",
    price: "19 $",
    period: "/Monat",
    quota: "bis zu 300 AI-Antworten/Monat",
    features: featuresList,
    popular: false,
  },
  {
    name: "Growth",
    price: "49 $",
    period: "/Monat",
    quota: "bis zu 1500 AI-Antworten/Monat",
    features: featuresList,
    popular: true,
    badge: "Beliebtester Plan",
  },
  {
    name: "Pro",
    price: "99 $",
    period: "/Monat",
    quota: "bis zu 3000 AI-Antworten/Monat",
    features: featuresList,
    popular: false,
  },
  {
    name: "Scale",
    price: "199 $",
    period: "/Monat",
    quota: "unbegrenzte AI-Antworten",
    features: featuresList,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Mehr Support-Power für weniger Geld als ein einziger Mitarbeiter.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-2">
          Ein Support-Agent kostet im Schnitt 2.000 € pro Monat.
        </p>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          ReplAInow startet bei 19 $/Monat – und arbeitet 24/7, ohne Pause.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`rounded-2xl border p-6 bg-card flex flex-col ${p.popular ? 'shadow-brand' : ''}`}
                style={p.popular ? { borderColor: 'hsl(var(--brand-popular))', backgroundColor: 'hsl(var(--brand-popular) / 0.06)' } : undefined}
              >
                <header className="mb-4">
                  {('badge' in p) && p.badge ? (
                    <span
                      className="mb-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{ backgroundColor: 'hsl(var(--brand-popular) / 0.18)', border: '1px solid hsl(var(--brand-popular))' }}
                    >
                      {p.badge}
                    </span>
                  ) : null}
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
                  <Button asChild variant={'hero'} className="w-full">
                    <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(p.name)}&utm_content=pricing`}>Kostenlos testen</a>
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
