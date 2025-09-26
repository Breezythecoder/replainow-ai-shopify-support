import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const LiveDemoIt = () => {
  return (
    <section id="live-demo" aria-labelledby="live-demo-heading" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 id="live-demo-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Così semplice funziona ReplAInow.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Un cliente chiede lo stato della consegna – ReplAInow estrae automaticamente i dati dell'ordine da Shopify, formula una risposta perfetta nel tono del tuo brand e la invia in 3 secondi. Risultato: cliente felice, tu risparmi tempo – e nel frattempo generi più fatturato.
        </p>

        <div className="rounded-xl border bg-card p-2 shadow-brand mb-6">
          <AspectRatio ratio={16/9}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0"
              title="Video Demo ReplAInow"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </AspectRatio>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="hero">
            <a href={OAUTH_URL}>Prova ora tu stesso</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoIt;