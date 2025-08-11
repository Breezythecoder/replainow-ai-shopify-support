import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Replies in <3 sec.", desc: "GPT‑4/5 with Shopify context delivers answers under 3 sec; FRT −90%." },
  { icon: Plug, title: "Right inside Shopify", desc: "No tab hopping: product, order and customer data flow in automatically." },
  { icon: TrendingUp, title: "More revenue, faster", desc: "Precise, fast answers measurably increase conversion and retention." },
  { icon: ShieldCheck, title: "GDPR & HMAC secure", desc: "Encrypted, GDPR‑compliant and HMAC‑verified — reliable & trustworthy." },
  { icon: Bot, title: "Smart automation", desc: "Auto‑categorization, AI triage and rules solve routine cases automatically." },
  { icon: Globe, title: "Multilingual, on‑brand", desc: "Replies in many languages in your brand voice — ideal for global support." },
  { icon: BarChart3, title: "Analytics & insights", desc: "Keep an eye on response times, CSAT and conversion." },
  { icon: Users, title: "Team collaboration", desc: "Assign, notes, escalations — seamless as a team." },
];

const FeaturesEn = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Core features: AI support for Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Eight concrete benefits — technically strong and clearly measurable.
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

export default FeaturesEn;
