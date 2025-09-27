import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const LiveDemoPt = () => {
  return (
    <section id="live-demo" aria-labelledby="live-demo-heading" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 id="live-demo-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          ReplAInow funciona de forma to simples.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Um cliente pergunta sobre o status de entrega  ReplAInow extrai automaticamente dados do pedido do Shopify, formula uma resposta perfeita no tom da sua marca e a envia em 3 segundos. Resultado: Cliente feliz, voc economiza tempo  e gera mais receita em paralelo.
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
            <a href={OAUTH_URL}>Teste voc mesmo agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoPt;