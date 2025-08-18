import { Target, Users, Lightbulb } from "lucide-react";

const AboutZh = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 id="about-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          关于ReplAInow
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          我们致力于为全球Shopify商户提供最智能、最高效的AI客服解决方案。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">我们的使命</h3>
            <p className="text-muted-foreground">
              让每个电商企业都能享受AI技术带来的客服效率提升，专注于业务发展而非重复性工作。
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">我们的团队</h3>
            <p className="text-muted-foreground">
              由经验丰富的AI工程师和电商专家组成，深入了解零售行业的客服挑战和需求。
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">我们的愿景</h3>
            <p className="text-muted-foreground">
              成为全球领先的电商AI客服平台，帮助商户提升客户满意度和运营效率。
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold mb-4">为什么选择我们？</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ReplAInow由PrimeVision Group LLC开发，专注于为电商企业提供创新的AI解决方案。我们深知每个商户都有独特的品牌声音和客户需求，因此我们的AI系统能够学习并适应您的特定业务场景。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              从小型创业公司到大型企业，我们的解决方案已经帮助数千家Shopify商店改善了客户服务体验，节省了大量时间和成本。我们承诺持续创新，为您的业务成长提供最强有力的支持。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZh;