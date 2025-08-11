
const ProblemSolution = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Von Chaos zu Klarheit – in Sekunden.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Before</h3>
              <p className="text-muted-foreground text-sm">Jeden Tag 50+ Mails, endlose Copy-Paste-Routinen, stundenlange Datensuche. Du bist Support-Agent statt Unternehmer.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Shopify-Postfach Screenshot – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Vorher: Überfülltes Postfach</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Täglich 50+ Anfragen, wiederholte Antworten und Datensuche bremsen dein Wachstum.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">After</h3>
              <p className="text-muted-foreground text-sm">Deine KI übernimmt – in unter 3 Sekunden steht jede Antwort bereit, mit allen Bestell- und Produktinfos. Du klickst „Senden“. Fertig.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow Inbox – KI-Antwort im Shopify Admin" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Nachher: Shopify mit KI-Antwort</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};
export default ProblemSolution;