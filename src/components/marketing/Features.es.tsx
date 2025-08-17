import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Respuesta en <3 seg.",
    desc: "IA con contexto Shopify entrega respuestas en menos de 3 seg.; FRT -90%.",
  },
  {
    icon: Plug,
    title: "Directamente en Shopify",
    desc: "Sin cambio de pestaña: datos de productos, pedidos y clientes fluyen automáticamente.",
  },
  {
    icon: TrendingUp,
    title: "Más ingresos, más rápido",
    desc: "Respuestas precisas y rápidas aumentan conversión y fidelidad de forma medible.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro GDPR y HMAC",
    desc: "Encriptado, cumple GDPR y verificado HMAC – confiable y seguro.",
  },
  {
    icon: Bot,
    title: "Automatización inteligente",
    desc: "Auto-categorización, AI-triage y reglas manejan casos rutinarios automáticamente.",
  },
  {
    icon: Globe,
    title: "Multiidioma, conforme marca",
    desc: "Respuestas en muchos idiomas en el tono de tu marca – ideal para soporte global.",
  },
  {
    icon: BarChart3,
    title: "Analíticas e insights",
    desc: "Tiempos de respuesta, CSAT y conversión de un vistazo.",
  },
  {
    icon: Users,
    title: "Colaboración en equipo",
    desc: "Asignar, notas, escalaciones – sin problemas en equipo.",
  },
];

const FeaturesEs = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Características principales: Soporte IA para Shopify
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Ocho beneficios concretos – técnicamente fuertes y claramente medibles.
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

export default FeaturesEs;