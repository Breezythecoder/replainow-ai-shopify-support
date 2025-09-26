import { Button } from "@/components/ui/button";
const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

type Feature = string | { label: string; sub: string[] };

const baseFeatures: string[] = [
  "一键安装",
  "无限商店数据（产品、页面、政策等）",
  "AI邮件和AI实时聊天",
  "可个性化品牌定制",
];

const plans = [
  {
    name: "入门版",
    price: "$19",
    period: "/ 月",
    quota: "每月最多300个AI回复",
    trial: "14天免费试用",
    features: [
      ...baseFeatures,
      "通过ReplAInow地址发送邮件",
    ] as Feature[],
    popular: false,
  },
  {
    name: "成长版",
    price: "$49",
    period: "/ 月",
    quota: "每月最多1500个AI回复",
    trial: "14天免费试用",
    features: [
      ...baseFeatures,
      "使用您的域名发送邮件",
    ] as Feature[],
    popular: true,
    badge: "最受欢迎的方案",
  },
  {
    name: "专业版",
    price: "$99",
    period: "/ 月",
    quota: "每月最多3000个AI回复",
    trial: "14天免费试用",
    features: [
      ...baseFeatures,
      "使用您的域名发送邮件",
    ] as Feature[],
    popular: false,
  },
  {
    name: "企业版",
    price: "$199",
    period: "/ 月",
    quota: "无限AI回复",
    trial: "14天免费试用",
    features: [
      ...baseFeatures,
      "使用您的域名发送邮件",
    ] as Feature[],
    popular: false,
  },
];

const PricingZh = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          用更少的钱获得比单个员工更强的支持力量。
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-2">
          一个支持代理平均每月花费2000欧元。
        </p>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          ReplAInow从19美元/月开始——全天候工作，无休息。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => {
            const Card = (
              <article className="group rounded-2xl border bg-card p-6 h-full flex flex-col hover:shadow-brand transition-all duration-200 hover:-translate-y-0.5">
                <header className="mb-4">
                  <h3 className="font-semibold text-xl">{p.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{(p as any).trial ?? "14天免费试用"}</p>
                  {'blurb' in p && (p as any).blurb ? (
                    <p className="mt-3 text-sm text-muted-foreground">{(p as any).blurb}</p>
                  ) : null}
                </header>

                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{p.quota}</span>
                  </li>
                  {p.features.map((f: any) =>
                    typeof f === 'string' ? (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                        <span>{f}</span>
                      </li>
                    ) : (
                      <li key={f.label} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-primary" />
                        <div>
                          <div>{f.label}</div>
                          <ul className="mt-1 ml-4 list-disc marker:text-muted-foreground/70">
                            {f.sub.map((s: string) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-auto space-y-3">
                  <Button asChild variant="hero" className="w-full">
                    <a href={`${OAUTH_URL}?utm_source=site&utm_campaign=${encodeURIComponent(p.name)}&utm_content=pricing`} aria-label={`免费试用 – ${p.name}方案`}>
                      免费试用
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <img
                      src="/images/shopify-logo-black.svg"
                      alt="Shopify Logo – App Store"
                      className="h-4 w-auto opacity-80"
                      loading="lazy"
                    />
                    <span>在Shopify应用商店上线</span>
                  </div>
                </div>
              </article>
            );

            return p.popular ? (
              <div key={p.name} className="relative rounded-2xl p-[1px] bg-gradient-primary shadow-brand-glow hover:shadow-brand-glow transition-shadow">
                <span className="absolute -top-3 left-4 rounded-full bg-primary text-primary-foreground text-xs px-2.5 py-1 border border-primary/60 shadow-brand">
                  {(p as any).badge ?? '最受欢迎的方案'}
                </span>
                {Card}
              </div>
            ) : (
              <div key={p.name} className="relative">{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PricingZh;