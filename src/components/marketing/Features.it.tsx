import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Risposta in <3 Sec.",
    desc: "GPT-4/5 con contesto Shopify fornisce risposte in meno di 3 sec.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Diretto in Shopify",
    desc: "Senza cambio tab: dati prodotto, ordine e cliente si integrano automaticamente.",
  },
  {
    icon: TrendingUp,
    title: "Più fatturato, più veloce",
    desc: "Risposte precise e veloci aumentano conversione e fedeltà cliente in modo misurabile.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR & HMAC sicuro",
    desc: "Crittografato, conforme GDPR e verificato HMAC – affidabile e sicuro.",
  },
  {
    icon: Bot,
    title: "Automazione intelligente",
    desc: "Auto-categorizzazione, AI-triage e regole gestiscono i casi di routine automaticamente.",
  },
  {
    icon: Globe,
    title: "Multilingue, conforme al brand",
    desc: "Risposte in molte lingue nel tono del tuo brand – ideale per supporto globale.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Tempi di risposta, CSAT e conversione sotto controllo.",
  },
  {
    icon: Users,
    title: "Collaborazione team",
    desc: "Assegna, note, escalation – perfettamente integrato nel team.",
  },
];

const FeaturesIt = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Funzionalità principali: AI-Support per Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Otto vantaggi concreti – tecnicamente forti e chiaramente misurabili.
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

export default FeaturesIt;