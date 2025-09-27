import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Antwoord in <3 sec.",
    desc: "GPT-4/5 met Shopify-context levert antwoorden in onder 3 sec.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Direct in Shopify",
    desc: "Zonder tab-wissel: Product-, bestel- en klantgegevens vloeien automatisch mee.",
  },
  {
    icon: TrendingUp,
    title: "Meer omzet, sneller",
    desc: "Precieze, snelle antwoorden verhogen conversie en klantbinding meetbaar.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR- & HMAC-veilig",
    desc: "Versleuteld, GDPR-conform en HMAC-geverifieerd  betrouwbaar & vertrouwd.",
  },
  {
    icon: Bot,
    title: "Intelligente automatisering",
    desc: "Auto-categorisering, AI-triage en regels handelen routinezaken automatisch af.",
  },
  {
    icon: Globe,
    title: "Meertalig, merkconform",
    desc: "Antwoorden in vele talen in de toon van je merk  ideaal voor wereldwijde support.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Responstijden, CSAT & conversie in het oog.",
  },
  {
    icon: Users,
    title: "Team-samenwerking",
    desc: "Toewijzen, notities, escalaties  naadloos in het team.",
  },
];

const FeaturesNl = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Kernfeatures: AI-Support voor Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Acht concrete voordelen  technisch sterk en duidelijk meetbaar.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-xl border bg-card p-6 hover:shadow-brand transition-shadow animate-fade-in text-center">
              <div className="size-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                <Icon className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesNl;