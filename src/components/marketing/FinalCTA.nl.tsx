import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const benefits = [
  "Setup klaar in 5 minuten",
  "14 dagen gratis testen",
  "Geen creditcard vereist",
  "Cancel op elk moment"
];

const FinalCTANl = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Start vandaag nog met{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              geautomatiseerde klantenservice
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sluit je aan bij 500+ Shopify-merchants die hun klantenservice hebben getransformeerd met AI
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 group">
              <a href={OAUTH_URL}>
                Nu gratis starten
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              In 5 minuten geïnstalleerd • Geen technische kennis vereist
            </p>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground">
              Nog vragen? <a href="#kontakt" className="text-primary hover:underline font-medium">Contact ons</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTANl;