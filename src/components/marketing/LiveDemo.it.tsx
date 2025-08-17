import { Play, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveDemoIt = () => {
  return (
    <section id="live-demo" aria-labelledby="live-demo-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="live-demo-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Guarda ReplAInow in azione
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Vedi come l'AI genera risposte perfette con i dati Shopify in tempo reale – in meno di 3 secondi.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <article className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm group-hover:shadow-md transition-all">
              <img 
                src="/assets/mock-chat.jpg" 
                alt="Chat demo di ReplAInow in azione" 
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Demo chat
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vedi come l'AI risponde a richieste clienti complesse con dati ordine e prodotto in tempo reale.
                </p>
              </div>
            </div>
          </article>

          <article className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm group-hover:shadow-md transition-all">
              <img 
                src="/assets/mock-inbox.jpg" 
                alt="Admin Shopify con ReplAInow integrato" 
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Integrazione Shopify</h3>
                <p className="text-sm text-muted-foreground">
                  L'integrazione perfetta nell'admin Shopify – nessuna piattaforma esterna necessaria.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <a href="#kontakt">Richiedi demo personale</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoIt;