import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const LiveDemoEs = () => {
  return (
    <section id="live-demo" aria-labelledby="live-demo-heading" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 id="live-demo-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          As de simple funciona ReplAInow.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Un cliente pregunta sobre el estado de envo  ReplAInow extrae automticamente datos del pedido de Shopify, formula una respuesta perfecta en el tono de tu marca y la enva en 3 segundos. Resultado: Cliente feliz, t ahorras tiempo  y generas ms ingresos en paralelo.
        </p>

        <div className="rounded-xl border bg-card p-2 shadow-brand mb-6">
          <AspectRatio ratio={16/9}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/x1VLcGBbcgo?controls=1&rel=0&modestbranding=1&showinfo=0"
              title="ReplAInow Demo Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </AspectRatio>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="hero">
            <a href={OAUTH_URL}>Prubalo t mismo ahora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoEs;