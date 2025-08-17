import { MessageSquare, Zap, CheckCircle } from "lucide-react";

const HowItWorksIt = () => {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-6xl">
        <h2 id="how-it-works-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Come funziona
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ReplAInow si integra perfettamente nel tuo admin Shopify e risponde automaticamente ai ticket di supporto con i dati dei tuoi prodotti e ordini.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">1. Il cliente invia una richiesta</h3>
            <p className="text-muted-foreground text-sm">
              Via email, chat o modulo di contatto – ReplAInow riceve automaticamente tutte le richieste di supporto.
            </p>
          </article>

          <article className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">2. L'AI analizza e risponde</h3>
            <p className="text-muted-foreground text-sm">
              In 3 secondi, l'AI accede ai dati dell'ordine, prodotto e cliente e genera una risposta personalizzata e accurata.
            </p>
          </article>

          <article className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">3. Invii con un clic</h3>
            <p className="text-muted-foreground text-sm">
              Controlli la risposta dell'AI nell'admin Shopify e la invii con un semplice clic – o lasci che venga inviata automaticamente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksIt;