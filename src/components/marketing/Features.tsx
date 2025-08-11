import { Bot, Plug, ShieldCheck, FileCheck, Timer } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automatische Antworten mit GPT-4",
    desc: "Beantworte Kundenmails & Chats in Sekunden.",
  },
  {
    icon: Plug,
    title: "Shopify-Integration",
    desc: "Zugriff auf Produkte, Bestellungen & Kundeninfos – direkt in der Antwort.",
  },
  {
    icon: ShieldCheck,
    title: "HMAC-gesicherte Webhooks",
    desc: "Maximale Sicherheit für deine Shop-Daten.",
  },
  {
    icon: FileCheck,
    title: "GDPR-konform",
    desc: "Erfüllt alle DSGVO-Pflichten.",
  },
  {
    icon: Timer,
    title: "Einfache Installation",
    desc: "In 2 Minuten startklar.",
  },
];

const Features = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Kernfeatures, die überzeugen
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Alles, was du für erstklassigen, automatisierten Support in Shopify brauchst.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-xl border bg-card p-6 hover:shadow-brand transition-shadow animate-fade-in">
              <div className="size-11 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="text-foreground" />
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
