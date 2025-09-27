const ProblemSolutionEs = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          Del caos a la claridad  en segundos.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Antes</h3>
              <p className="text-muted-foreground text-sm">50+ emails diarios, rutinas infinitas de copiar-pegar, horas buscando datos. Eres agente de soporte en lugar de emprendedor.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Captura de pantalla bandeja Shopify  ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Antes: Bandeja desbordada</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              Diariamente 50+ consultas, respuestas repetitivas y bsquedas de datos ralentizan tu crecimiento.
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">Despus</h3>
              <p className="text-muted-foreground text-sm">Tu IA se hace cargo  en menos de 3 segundos cada respuesta est lista, con toda la info de pedidos y productos. Haces clic en "Enviar". Listo.</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="Bandeja ReplAInow  Respuesta IA en admin Shopify" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">Despus: Shopify con respuesta IA</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionEs;