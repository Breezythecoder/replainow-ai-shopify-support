const ProblemSolutionEn = () => {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          From chaos to clarity — in seconds.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Before</h3>
              <p className="text-muted-foreground text-sm">50+ emails a day, endless copy‑paste, hours of data hunting. You’re a support agent instead of an entrepreneur.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Shopify inbox screenshot – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Before: overloaded inbox</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              50+ daily inquiries, repeated answers and data searches slow your growth.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">After</h3>
              <p className="text-muted-foreground text-sm">Your AI takes over — in under 3 seconds every reply is ready with all order and product details. You click “Send”. Done.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow Inbox – AI reply in Shopify Admin" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">After: Shopify with AI reply</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
};
export default ProblemSolutionEn;
