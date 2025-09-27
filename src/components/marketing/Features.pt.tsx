import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Resposta em <3 seg.",
    desc: "IA com contexto Shopify entrega respostas em menos de 3 seg.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Diretamente no Shopify",
    desc: "Sem troca de abas: dados de produtos, pedidos e clientes fluem automaticamente.",
  },
  {
    icon: TrendingUp,
    title: "Mais receita, mais rpido",
    desc: "Respostas precisas e rpidas aumentam converso e fidelidade de forma mensurvel.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro GDPR & HMAC",
    desc: "Criptografado, conforme GDPR e verificado HMAC  confivel e seguro.",
  },
  {
    icon: Bot,
    title: "Automao inteligente",
    desc: "Auto-categorizao, IA-triagem e regras lidam com casos rotineiros automaticamente.",
  },
  {
    icon: Globe,
    title: "Multilngue, conforme marca",
    desc: "Respostas em muitos idiomas no tom da sua marca  ideal para suporte global.",
  },
  {
    icon: BarChart3,
    title: "Analytics & insights",
    desc: "Tempos de resposta, CSAT & converso num relance.",
  },
  {
    icon: Users,
    title: "Colaborao em equipe",
    desc: "Atribuir, notas, escalaes  fluido em equipe.",
  },
];

const FeaturesPt = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Recursos principais: Suporte IA para Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Oito benefcios concretos  tecnicamente fortes e claramente mensurveis.
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

export default FeaturesPt;