import { Star, TrendingUp, Clock, Users } from "lucide-react";

const SocialProofZh = () => {
  const testimonials = [
    {
      name: "张明",
      role: "时尚电商创始人",
      content: "ReplAInow为我们节省了每天3小时的客服时间，客户满意度提升了40%。现在我们可以专注于产品开发和营销了。",
      rating: 5
    },
    {
      name: "李雅",
      role: "家居用品店主",
      content: "安装后第一天就处理了50多个客户询问，回复速度比以前快了10倍。客户都夸我们的服务变得更专业了。",
      rating: 5
    },
    {
      name: "王强",
      role: "运动品牌经理",
      content: "AI能够完美地用我们的品牌语调回复客户，就像我们的专业客服团队一样。GDPR合规性也让我们很放心。",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "客户满意度"
    },
    {
      icon: Clock,
      value: "3秒",
      label: "平均回复时间"
    },
    {
      icon: Users,
      value: "1000+",
      label: "活跃用户"
    }
  ];

  return (
    <section aria-labelledby="social-proof-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 id="social-proof-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          用户信赖的AI客服助手
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          全球数千家Shopify商店正在使用ReplAInow提升客服效率和客户满意度。
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl border bg-card shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofZh;