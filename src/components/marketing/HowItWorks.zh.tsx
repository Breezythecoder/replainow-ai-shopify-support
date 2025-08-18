import { Bot, Database, MessageCircle } from "lucide-react";

const HowItWorksZh = () => {
  const steps = [
    {
      icon: Database,
      title: "连接您的Shopify商店",
      description: "一键安装，AI立即访问您的产品数据、订单信息和客户历史记录。"
    },
    {
      icon: Bot,
      title: "AI学习您的品牌",
      description: "智能分析您的沟通风格，确保每个回复都符合您的品牌语调。"
    },
    {
      icon: MessageCircle,
      title: "自动回复客户",
      description: "客户询问产品、订单或配送？AI在3秒内提供完美答案。"
    }
  ];

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="how-it-works-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          3步骤即可开始
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          设置简单快捷 — 安装后即可立即开始节省时间并提高客户满意度。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksZh;