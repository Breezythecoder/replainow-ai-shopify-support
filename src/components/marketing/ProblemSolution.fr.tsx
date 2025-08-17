const ProblemSolutionFr = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Du chaos à la clarté – en secondes.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Avant</h3>
              <p className="text-muted-foreground text-sm">50+ emails quotidiens, routines infinies de copier-coller, heures de recherche de données. Vous êtes agent support au lieu d'entrepreneur.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Capture d'écran boîte Shopify – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Avant: Boîte débordante</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Quotidiennement 50+ requêtes, réponses répétitives et recherches de données ralentissent votre croissance.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Après</h3>
              <p className="text-muted-foreground text-sm">Votre IA prend le relais – en moins de 3 secondes chaque réponse est prête, avec toutes les infos commandes et produits. Vous cliquez "Envoyer". Terminé.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Boîte ReplAInow – Réponse IA dans admin Shopify" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Après: Shopify avec réponse IA</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionFr;