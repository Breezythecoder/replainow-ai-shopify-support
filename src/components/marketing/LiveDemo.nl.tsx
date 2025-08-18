import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const LiveDemoNl = () => {
  return (
    <section id="live-demo" aria-labelledby="demo-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="demo-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Zie ReplAInow in actie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bekijk hoe onze AI in seconden accurate antwoorden geeft met je Shopify-data
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ReplAInow Live Demo - AI Klantenservice voor Shopify"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
        </div>

        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">Klaar om te beginnen?</p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href={OAUTH_URL}>Nu gratis testen - 14 dagen</a>
            </Button>
            <p className="text-sm text-muted-foreground">Geen creditcard vereist • Setup in 5 minuten</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoNl;