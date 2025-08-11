import { Bot, Plug, ShieldCheck, Timer } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Antwort in <3 Sekunden",
    desc: "Nie wieder Wartezeiten – steigere deine Antwortquote um 90 %.",
  },
  {
    icon: Plug,
    title: "Direkt in Shopify",
    desc: "Kein Tool-Wechsel. Alle Produkt-, Bestell- und Kundendaten automatisch in der Antwort.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheit auf Enterprise-Level",
    desc: "DSGVO-konform, HMAC-sicher, verschlüsselt – geprüft & vertrauenswürdig.",
  },
  {
    icon: Timer,
    title: "Mehr Umsatz durch schnelle Antworten",
    desc: "Schnelle Antworten = mehr abgeschlossene Käufe & zufriedene Stammkunden.",
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
              <div className="size-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
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
