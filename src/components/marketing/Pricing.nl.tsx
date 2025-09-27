import { Button } from "@/components/ui/button";
const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

type Feature = string | { label: string; sub: string[] };

const baseFeatures: string[] = [
  "1-Klik-installatie",
  "Onbeperkte shopgegevens (producten, pagina's, richtlijnen etc.)",
  "AI Mail & AI Live Chat",
  "Personaliseerbare branding",
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ maand",
    quota: "Tot 300 AI antwoorden / maand",
    trial: "14 dagen gratis testen",
    features: [
      ...baseFeatures,
      "E-mail verzending via ReplAInow adres",
    ] as Feature[],
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ maand",
    quota: "Tot 1500 AI antwoorden / maand",
    trial: "14 dagen gratis testen",
    features: [
      ...baseFeatures,
      "E-mail verzending met jouw domein",
    ] as Feature[],
    popular: true,
    badge: "Populairste plan",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ maand",
    quota: "Tot 3000 AI antwoorden / maand",
    trial: "14 dagen gratis testen",
    features: [
      ...baseFeatures,
      "E-mail verzending met jouw domein",
    ] as Feature[],
    popular: false,
  },
  {
    name: "Scale",
    price: "$199",
    period: "/ maand",
    quota: "Onbeperkte AI antwoorden",
    trial: "14 dagen gratis testen",
    features: [
      ...baseFeatures,
      "E-mail verzending met jouw domein",
    ] as Feature[],
    popular: false,
  },
];

const PricingNl = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Meer support-kracht voor minder geld dan n medewerker.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-2">
          Een support-agent kost gemiddeld 2.000 per maand.
        </p>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          ReplAInow begint bij $19/maand  en werkt 24/7, zonder pauze.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => {
            const Card = (
              <article className="group rounded-2xl border bg-card p-6 h-full flex flex-col hover:shadow-brand transition-all duration-200 hover:-translate-y-0.5">
                <header className="mb-4">
                  <h3 className="font-semibold text-xl">{p.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{(p as any).trial ?? "14 dagen gratis testen"}</p>
                  {'blurb' in p && (p as any).blurb ? (
                    <p className="mt-3 text-sm text-muted-foreground">{(p as any).blurb}</p>
                  ) : null}
                </header>

                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{p.quota}</span>
                  </li>
                  {p.features.map((f: any) =>
                    typeof f === 'string' ? (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                        <span>{f}</span>
                      </li>
                    ) : (
                      <li key={f.label} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                        <div>
                          <div>{f.label}</div>
                          <ul className="mt-1 ml-4 list-disc marker:text-muted-foreground/70">
                            {f.sub.map((s: string) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-auto space-y-3">
                  <Button asChild variant="hero" className="w-full">
                    <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(p.name)}&utm_content=pricing`} aria-label={`Gratis testen  Plan ${p.name}`}>
                      Gratis testen
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <img
                      src="/images/shopify-logo-black.svg"
                      alt="Shopify Logo  App Store"
                      className="h-4 w-auto opacity-80"
                      loading="lazy"
                    />
                    <span>Vermeld in Shopify App Store</span>
                  </div>
                </div>
              </article>
            );

            return p.popular ? (
              <div key={p.name} className="relative rounded-2xl p-[1px] bg-gradient-primary shadow-brand-glow hover:shadow-brand-glow transition-shadow">
                <span className="absolute -top-3 left-4 rounded-full bg-primary text-primary-foreground text-xs px-2.5 py-1 border border-primary/60 shadow-brand">
                  {(p as any).badge ?? 'Populairste plan'}
                </span>
                {Card}
              </div>
            ) : (
              <div key={p.name} className="relative">{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PricingNl;