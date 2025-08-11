import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Antwort in <3 Sek.",
    desc: "GPT-4/5 mit Shopify-Kontext liefert Antworten in unter 3 Sek.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Direkt in Shopify",
    desc: "Ohne Tab-Wechsel: Produkt-, Bestell- und Kundendaten fließen automatisch ein.",
  },
  {
    icon: TrendingUp,
    title: "Mehr Umsatz, schneller",
    desc: "Präzise, schnelle Antworten erhöhen Conversion und Kundenbindung messbar.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO- & HMAC-sicher",
    desc: "Verschlüsselt, DSGVO-konform und HMAC-verifiziert – zuverlässig & vertrauenswürdig.",
  },
  {
    icon: Bot,
    title: "Intelligente Automatisierung",
    desc: "Auto-Kategorisierung, AI-Triage und Regeln erledigen Routinefälle automatisch.",
  },
  {
    icon: Globe,
    title: "Mehrsprachig, markenkonform",
    desc: "Antworten in vielen Sprachen im Ton deiner Marke – ideal für globalen Support.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Antwortzeiten, CSAT & Conversion im Blick.",
  },
  {
    icon: Users,
    title: "Team-Kollaboration",
    desc: "Zuweisen, Notizen, Eskalationen – nahtlos im Team.",
  },
];

const Features = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Kernfeatures: KI-Support für Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Acht konkrete Vorteile – technisch stark und klar messbar.
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

export default Features;
