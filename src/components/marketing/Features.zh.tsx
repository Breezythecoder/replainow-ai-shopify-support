import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "3",
    desc: "GPT-4/5Shopify390%",
  },
  {
    icon: Plug,
    title: "Shopify",
    desc: "",
  },
  {
    icon: TrendingUp,
    title: "",
    desc: "",
  },
  {
    icon: ShieldCheck,
    title: "GDPR & HMAC",
    desc: "GDPRHMAC - ",
  },
  {
    icon: Bot,
    title: "",
    desc: "AI",
  },
  {
    icon: Globe,
    title: "",
    desc: " - ",
  },
  {
    icon: BarChart3,
    title: "",
    desc: "",
  },
  {
    icon: Users,
    title: "",
    desc: " - ",
  },
];

const FeaturesZh = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Shopify AI
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
           - 
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

export default FeaturesZh;