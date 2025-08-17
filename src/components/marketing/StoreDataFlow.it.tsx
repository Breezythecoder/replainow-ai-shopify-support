import { Database, Zap, MessageSquare, CheckCircle } from "lucide-react";

const StoreDataFlowIt = () => {
  return (
    <section id="data-flow" aria-labelledby="data-flow-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="data-flow-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Dati Shopify in tempo reale per risposte perfette
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ReplAInow accede direttamente ai dati del tuo negozio per fornire risposte accurate e aggiornate a ogni richiesta cliente.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <article className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Dati Shopify</h3>
            <p className="text-muted-foreground text-sm">
              Ordini, prodotti, clienti, inventario e spedizioni – tutto in tempo reale.
            </p>
          </article>

          <article className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Elaborazione AI</h3>
            <p className="text-muted-foreground text-sm">
              L'AI analizza la richiesta e trova i dati rilevanti in millisecondi.
            </p>
          </article>

          <article className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Risposta intelligente</h3>
            <p className="text-muted-foreground text-sm">
              Risposta personalizzata con tutti i dettagli rilevanti dell'ordine e prodotto.
            </p>
          </article>

          <article className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Invio</h3>
            <p className="text-muted-foreground text-sm">
              Controlli e invii con un clic – o lasci che venga inviata automaticamente.
            </p>
          </article>
        </div>

        <div className="bg-card rounded-xl p-8 border shadow-sm">
          <h3 className="font-semibold text-lg mb-4 text-center">Tipi di dati a cui accede ReplAInow:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Dati ordine</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Numero ordine e stato</li>
                <li>• Articoli e quantità</li>
                <li>• Importi e metodi di pagamento</li>
                <li>• Informazioni di spedizione</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Dati prodotto</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Descrizioni e specifiche</li>
                <li>• Disponibilità e inventario</li>
                <li>• Prezzi e varianti</li>
                <li>• Informazioni di spedizione</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDataFlowIt;