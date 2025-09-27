const ProblemSolutionIt = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Dal caos alla chiarezza  in secondi.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Prima</h3>
              <p className="text-muted-foreground text-sm">50+ email al giorno, routine infinite di copia-incolla, ore di ricerca dati. Fai l'agente di supporto invece dell'imprenditore.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Screenshot casella Shopify  ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Prima: Casella stracolma</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Quotidianamente 50+ richieste, risposte ripetitive e ricerche di dati rallentano la tua crescita.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Dopo</h3>
              <p className="text-muted-foreground text-sm">La tua AI prende il controllo  in meno di 3 secondi ogni risposta  pronta, con tutte le info ordini e prodotti. Clicchi "Invia". Fatto.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Casella ReplAInow  Risposta AI nell'admin Shopify" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Dopo: Shopify con risposta AI</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionIt;