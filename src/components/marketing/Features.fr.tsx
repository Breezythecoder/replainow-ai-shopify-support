import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rponse en <3 sec.",
    desc: "IA avec contexte Shopify livre des rponses en moins de 3 sec.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Directement dans Shopify",
    desc: "Pas de changement d'onglet : donnes produits, commandes et clients fluent automatiquement.",
  },
  {
    icon: TrendingUp,
    title: "Plus de revenus, plus vite",
    desc: "Rponses prcises et rapides augmentent conversion et fidlit de manire mesurable.",
  },
  {
    icon: ShieldCheck,
    title: "Scuris RGPD & HMAC",
    desc: "Chiffr, conforme RGPD et vrifi HMAC  fiable et sr.",
  },
  {
    icon: Bot,
    title: "Automatisation intelligente",
    desc: "Auto-catgorisation, IA-triage et rgles grent les cas routiniers automatiquement.",
  },
  {
    icon: Globe,
    title: "Multilingue, conforme marque",
    desc: "Rponses en plusieurs langues dans le ton de votre marque  idal pour support global.",
  },
  {
    icon: BarChart3,
    title: "Analytics & insights",
    desc: "Temps de rponse, CSAT et conversion en un coup d'il.",
  },
  {
    icon: Users,
    title: "Collaboration d'quipe",
    desc: "Assigner, notes, escalades  fluide en quipe.",
  },
];

const FeaturesFr = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Fonctionnalits principales : Support IA pour Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Huit avantages concrets  techniquement forts et clairement mesurables.
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

export default FeaturesFr;