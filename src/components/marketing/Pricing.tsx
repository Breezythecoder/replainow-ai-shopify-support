import { Button } from "@/components/ui/button";
const OAUTH_URL = "https://apps.shopify.com/replainow/install";

type Feature = string | { label: string; sub: string[] };

const baseFeatures: string[] = [
  "1-Klick-Installation",
  "Unlimitierte Shopdaten (Produkte, Seiten, Richtlinien etc.)",
  "AI Mail & AI Live Chat",
  "Personalisierbares Branding",
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ Monat",
    quota: "Bis zu 300 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      "E-Mail Versand über ReplAInow Adresse",
    ] as Feature[],
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ Monat",
    quota: "Bis zu 1500 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      { label: "Proaktive Chat-Automation", sub: ["Begrüssung nach x Sekunden", "Trigger bei z.B. Warenkorb, Checkout.."] },
      "E-Mail Versand mit deiner Domain",
    ] as Feature[],
    popular: true,
    badge: "Beliebtester Plan",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ Monat",
    quota: "Bis zu 3000 AI Antworten / Monat",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      { label: "Proaktive Chat-Automation", sub: ["Begrüssung nach x Sekunden", "Trigger bei z.B. Warenkorb, Checkout.."] },
      "E-Mail Versand mit deiner Domain",
    ] as Feature[],
    popular: false,
  },
  {
    name: "Scale",
    price: "$199",
    period: "/ Monat",
    quota: "Unlimitierte AI Antworten",
    trial: "14 Tage kostenlos testen",
    features: [
      ...baseFeatures,
      { label: "Proaktive Chat-Automation", sub: ["Begrüssung nach x Sekunden", "Trigger bei z.B. Warenkorb, Checkout.."] },
      "E-Mail Versand mit deiner Domain",
    ] as Feature[],
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
              className={`rounded-2xl border p-6 bg-card flex flex-col ${p.popular ? 'border-primary/50 bg-primary/5 shadow-brand' : ''}`}
            >
              <header className="mb-4">
                {'badge' in p && (p as any).badge ? (
                  <span className="mb-2 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-primary/15 border border-primary text-primary">
                    {(p as any).badge}
                  </span>
                ) : null}
                <h3 className="font-semibold text-xl">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{(p as any).trial ?? "14 Tage kostenlos testen"}</p>
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
                  typeof f === "string" ? (
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

              <div className="mt-auto">
                <Button asChild variant={"hero"} className="w-full">
                  <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(p.name)}&utm_content=pricing`}>
                    Kostenlos testen
                  </a>
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
