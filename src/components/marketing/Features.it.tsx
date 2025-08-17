import { Clock, BarChart, Shield, Users, Zap, Globe } from "lucide-react";

const FeaturesIt = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Risposte in 3 secondi",
      description: "L'AI genera risposte complete con tutti i dati rilevanti in pochi secondi."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Accesso ai dati Shopify",
      description: "Dati ordini, prodotti, clienti e inventario in tempo reale – sempre aggiornati."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sicuro e conforme GDPR",
      description: "Tutti i dati rimangono nel tuo Shopify. Sicurezza massima, privacy garantita."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multilingue",
      description: "Supporta oltre 25 lingue per clienti internazionali."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Installazione in 2 minuti",
      description: "Plugin ufficiale Shopify – attivato in meno di 2 minuti."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Integrazione completa",
      description: "Funziona nell'admin Shopify – nessuna piattaforma esterna necessaria."
    }
  ];

  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Funzionalità potenti per il tuo successo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ReplAInow trasforma il tuo supporto clienti con AI intelligente e accesso diretto ai dati Shopify.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article key={index} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIt;