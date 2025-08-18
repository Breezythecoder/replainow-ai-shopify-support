import mockInbox from "@/assets/mock-inbox.jpg";
import mockChat from "@/assets/mock-chat.jpg";

const MailAndChatZh = () => {
  return (
    <section aria-labelledby="mail-chat-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 id="mail-chat-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          邮件与聊天，一站式解决
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          无论客户通过邮件还是实时聊天联系您，ReplAInow都能提供一致、专业的AI回复体验。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Email Section */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-card overflow-hidden shadow-lg">
              <img 
                src={mockInbox} 
                alt="邮件收件箱界面显示AI自动回复功能"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">智能邮件回复</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 自动分析邮件内容和客户意图</li>
                <li>• 从Shopify获取相关订单和产品信息</li>
                <li>• 生成专业、个性化的回复邮件</li>
                <li>• 支持批量处理，节省大量时间</li>
              </ul>
            </div>
          </div>

          {/* Chat Section */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-card overflow-hidden shadow-lg">
              <img 
                src={mockChat} 
                alt="实时聊天界面显示AI客服对话"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">实时聊天支持</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 即时响应客户聊天消息</li>
                <li>• 实时查询订单状态和物流信息</li>
                <li>• 智能产品推荐和交叉销售</li>
                <li>• 24/7全天候在线客服体验</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatZh;