import { ArrowRight, Download, Settings, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Installeer de app",
    description: "Download ReplAInow uit de Shopify App Store. Installatie duurt slechts 2 minuten."
  },
  {
    icon: Settings,
    number: "02", 
    title: "Configureer je AI",
    description: "Stel je merktoon in en bepaal welke Shopify-data de AI mag gebruiken."
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Start automatiseren",
    description: "Je AI begint direct met het beantwoorden van klantenvragen - 24/7 beschikbaar."
  }
];

const HowItWorksNl = () => {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Zo werkt het
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In 3 eenvoudige stappen naar geautomatiseerde klantenservice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-mono text-primary mb-3">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-12 -translate-x-6">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNl;