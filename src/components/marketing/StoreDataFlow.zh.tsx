import { ArrowRight, Database, MessageCircle, Bot } from "lucide-react";

const StoreDataFlowZh = () => {
  return (
    <section aria-labelledby="data-flow-heading" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 id="data-flow-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          直接连接您的Shopify数据
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          无需手动输入产品信息或订单详情。ReplAInow直接从您的Shopify商店获取实时数据，确保回复准确无误。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Shopify Store */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Database className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">您的Shopify商店</h3>
            <p className="text-sm text-muted-foreground">产品目录、订单历史、客户数据、库存状态</p>
          </div>

          <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
          <div className="md:hidden w-full flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary rotate-90" />
          </div>

          {/* AI Processing */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Bot className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">ReplAInow AI</h3>
            <p className="text-sm text-muted-foreground">智能分析、品牌语调学习、个性化回复生成</p>
          </div>

          <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
          <div className="md:hidden w-full flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary rotate-90" />
          </div>

          {/* Customer Response */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">客户回复</h3>
            <p className="text-sm text-muted-foreground">即时、准确、符合品牌风格的个性化回复</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-card border">
            <h4 className="font-semibold mb-2">实时数据同步</h4>
            <p className="text-sm text-muted-foreground">AI始终掌握最新的产品和订单信息</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border">
            <h4 className="font-semibold mb-2">零配置设置</h4>
            <p className="text-sm text-muted-foreground">一键安装，无需复杂的配置过程</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border">
            <h4 className="font-semibold mb-2">安全可靠</h4>
            <p className="text-sm text-muted-foreground">GDPR合规，数据传输加密保护</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDataFlowZh;