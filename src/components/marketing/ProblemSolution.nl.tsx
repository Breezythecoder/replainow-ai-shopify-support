const ProblemSolutionNl = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Van chaos naar helderheid – in seconden.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Voorheen</h3>
              <p className="text-muted-foreground text-sm">Elke dag 50+ e-mails, eindeloze copy-paste-routines, urenlang data zoeken. Je bent support-agent in plaats van ondernemer.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Shopify-postvak Screenshot – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Voorheen: Overvol postvak</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Dagelijks 50+ vragen, herhalende antwoorden en data zoeken remmen je groei af.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Nu</h3>
              <p className="text-muted-foreground text-sm">Je AI neemt het over – in onder 3 seconden staat elk antwoord klaar, met alle bestel- en productinfo. Je klikt "Verzenden". Klaar.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow Inbox – AI-antwoord in Shopify Admin" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Nu: Shopify met AI-antwoord</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionNl;