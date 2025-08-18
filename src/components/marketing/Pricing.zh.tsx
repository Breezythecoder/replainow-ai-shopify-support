import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const PricingZh = () => {
  const plans = [
    {
      name: "入门版",
      price: "€29",
      period: "每月",
      description: "适合小型Shopify商店",
      features: [
        "每月最多100个AI回复",
        "邮件客服自动化",
        "基础Shopify数据集成",
        "标准品牌语调学习",
        "邮件支持"
      ],
      cta: "免费试用14天",
      popular: false
    },
    {
      name: "专业版",
      price: "€79",
      period: "每月",
      description: "适合成长中的电商企业",
      features: [
        "每月最多500个AI回复",
        "邮件 + 实时聊天自动化",
        "完整Shopify数据集成",
        "高级品牌语调定制",
        "多语言支持",
        "详细分析报告",
        "优先客服支持"
      ],
      cta: "免费试用14天",
      popular: true
    },
    {
      name: "企业版",
      price: "€199",
      period: "每月",
      description: "适合大型电商企业",
      features: [
        "无限AI回复",
        "全渠道客服自动化",
        "高级API集成",
        "定制品牌培训",
        "多团队协作",
        "高级分析和报告",
        "专属客户经理",
        "SLA服务保障"
      ],
      cta: "联系销售",
      popular: false
    }
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          选择适合您的方案
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          所有方案都包含14天免费试用期，无需信用卡。随时可以升级或取消。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                  : 'border-border bg-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    最受欢迎
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                <a href={plan.name === '企业版' ? '#contact' : OAUTH_URL}>
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            所有方案包含：GDPR合规 • 数据安全 • 24/7技术支持 • 随时取消
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingZh;