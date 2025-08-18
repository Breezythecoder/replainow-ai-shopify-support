const ProblemSolutionZh = () => {
  return <section id="problem" aria-labelledby="problem-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="problem-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
          从混乱到清晰 - 几秒钟内完成。
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="mb-3">
              <h3 className="font-medium text-lg">之前</h3>
              <p className="text-muted-foreground text-sm">每天50+封邮件，无尽的复制粘贴例程，数小时的数据搜索。你是客服代理而不是企业家。</p>
            </header>
            <figure>
              <img src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" alt="Shopify收件箱截图 – ReplAInow" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">之前：过载的收件箱</figcaption>
            </figure>
            <p className="mt-4 text-muted-foreground text-sm">
              每天50+个询问，重复回复和数据搜索阻碍您的增长。
            </p>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-brand">
            <header className="mb-3">
              <h3 className="font-medium text-lg">之后</h3>
              <p className="text-muted-foreground text-sm">您的AI接管 - 不到3秒就准备好每个答案，包含所有订单和产品信息。您点击"发送"。完成。</p>
            </header>
            <figure>
              <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow收件箱 – Shopify管理面板中的AI回复" className="rounded-lg border w-full" loading="lazy" decoding="async" />
              <figcaption className="sr-only">之后：带有AI回复的Shopify</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>;
};

export default ProblemSolutionZh;