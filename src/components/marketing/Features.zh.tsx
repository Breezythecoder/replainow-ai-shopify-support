import { Shield, Zap, Brain, Globe, BarChart3, MessageSquare } from "lucide-react";

const FeaturesZh = () => {
  const features = [
    {
      icon: Zap,
      title: "闪电般快速回复",
      description: "3秒内自动回复客户询问，比人工客服快50倍，客户满意度大幅提升。"
    },
    {
      icon: Brain,
      title: "智能学习您的品牌",
      description: "AI分析您的沟通风格和品牌语调，确保每个回复都符合您的品牌形象。"
    },
    {
      icon: Shield,
      title: "GDPR合规保障",
      description: "严格遵守GDPR数据保护法规，确保客户数据安全，让您无后顾之忧。"
    },
    {
      icon: Globe,
      title: "多语言支持",
      description: "支持多种语言的客户服务，自动检测客户语言并用相应语言回复。"
    },
    {
      icon: BarChart3,
      title: "实时数据整合",
      description: "直接连接Shopify数据，实时获取订单状态、库存信息和客户历史记录。"
    },
    {
      icon: MessageSquare,
      title: "多渠道集成",
      description: "支持邮件、聊天、社交媒体等多个客服渠道，统一管理所有客户沟通。"
    }
  ];

  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="container">
        <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          强大功能，全面提升客服效率
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          从自动回复到数据分析，ReplAInow为您提供完整的AI客服解决方案。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesZh;