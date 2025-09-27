import { Target, Users, Lightbulb } from "lucide-react";

const AboutZh = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          ReplAInow
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          ShopifyAI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3"></h3>
            <p className="text-muted-foreground">
              AI
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3"></h3>
            <p className="text-muted-foreground">
              AI
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3"></h3>
            <p className="text-muted-foreground">
              AI
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold mb-4"></h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ReplAInowPrimeVision Group LLCAIAI
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Shopify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZh;