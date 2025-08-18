import { Shield, Zap, Users, BarChart3, MessageSquare, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant AI-antwoorden",
    description: "Beantwoord klantenvragen in seconden met AI die je Shopify-data begrijpt."
  },
  {
    icon: Shield,
    title: "GDPR & privacy-conform",
    description: "100% GDPR-compliant met servers in Europa. Je klantgegevens blijven veilig."
  },
  {
    icon: Users,
    title: "Merkconform communiceren",
    description: "AI past zich aan jouw merktoon en communicatiestijl aan."
  },
  {
    icon: BarChart3,
    title: "Real-time Shopify-data",
    description: "Directe toegang tot bestellingen, producten, voorraad en klantgegevens."
  },
  {
    icon: MessageSquare,
    title: "Multi-channel ondersteuning",
    description: "Werkt met alle belangrijke kanalen: E-mail, chat, social media."
  },
  {
    icon: Settings,
    title: "Eenvoudige installatie",
    description: "Klaar in 5 minuten. Geen technische kennis vereist."
  }
];

const FeaturesNl = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Waarom ReplAInow kiezen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De enige AI-oplossing die je Shopify-data begrijpt en GDPR-conform werkt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-xl border bg-card hover:bg-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesNl;