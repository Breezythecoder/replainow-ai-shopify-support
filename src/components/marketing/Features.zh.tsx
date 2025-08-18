import { Bot, Plug, ShieldCheck, Zap, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "3秒内回复",
    desc: "GPT-4/5结合Shopify数据，3秒内提供回复；首次响应时间减少90%。",
  },
  {
    icon: Plug,
    title: "直接集成Shopify",
    desc: "无需切换标签：产品、订单和客户数据自动整合。",
  },
  {
    icon: TrendingUp,
    title: "更多销售，更快速",
    desc: "精准快速的回复可衡量地增加转化率和客户粘性。",
  },
  {
    icon: ShieldCheck,
    title: "GDPR & HMAC安全",
    desc: "加密、GDPR合规和HMAC验证 - 可靠且值得信赖。",
  },
  {
    icon: Bot,
    title: "智能自动化",
    desc: "自动分类、AI分流和规则自动处理常规案例。",
  },
  {
    icon: Globe,
    title: "多语言，符合品牌",
    desc: "用您的品牌语调回复多种语言 - 适合全球支持。",
  },
  {
    icon: BarChart3,
    title: "分析和洞察",
    desc: "实时监控回复时间、客户满意度和转化率。",
  },
  {
    icon: Users,
    title: "团队协作",
    desc: "分配、注释、升级 - 团队无缝协作。",
  },
];

const FeaturesZh = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          核心功能：Shopify AI客服
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          八大具体优势 - 技术强大且可清晰衡量。
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-xl border bg-card p-6 hover:shadow-brand transition-shadow animate-fade-in text-center">
              <div className="size-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform">
                <Icon className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesZh;