const ProblemSolutionPt = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Do caos à claridade – em segundos.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Antes</h3>
              <p className="text-muted-foreground text-sm">50+ emails diários, rotinas infinitas de copiar-colar, horas procurando dados. Você é agente de suporte ao invés de empreendedor.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Screenshot caixa Shopify – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Antes: Caixa transbordando</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Diariamente 50+ consultas, respostas repetitivas e buscas de dados desaceleram seu crescimento.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Depois</h3>
              <p className="text-muted-foreground text-sm">Sua IA assume – em menos de 3 segundos cada resposta está pronta, com todas as informações de pedidos e produtos. Você clica "Enviar". Pronto.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Caixa ReplAInow – Resposta IA no admin Shopify" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Depois: Shopify com resposta IA</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionPt;