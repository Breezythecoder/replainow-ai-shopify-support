import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MessageSquare, CheckCircle2, Globe, Clock } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-muted-foreground">{children}</span>
  </li>
);

const MailAndChatZh = () => {
  return (
    <section id="mail-live" aria-labelledby="mail-live-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <header className="mb-10 text-center">
          <h2 id="mail-live-heading" className="font-display text-3xl md:text-4xl font-semibold mb-3">
            AI邮件与实时聊天 - 24/7全集成
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            在任何渠道瞬间处理每个客户消息。ReplAInow连接您的Shopify商店，在3秒内回答邮件和实时聊天消息 - 符合品牌风格，具备情境感知，支持多语言。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 邮件 */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">邮件 - AI收件箱</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/30fe7c43-2fec-4711-a733-85a1c76d1942.png"
                  alt="ReplAInow邮件收件箱 - 带Shopify数据的AI回复"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={CheckCircle2}>客户邮件即时AI回复</Bullet>
              <Bullet Icon={Globe}>自动嵌入Shopify数据（订单、产品、运输）</Bullet>
              <Bullet Icon={CheckCircle2}>多语言且符合品牌调性 - 自动</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>每天零收件箱</Bullet>
              <Bullet Icon={CheckCircle2}>精准的Shopify集成回复</Bullet>
              <Bullet Icon={CheckCircle2}>每周节省15+小时</Bullet>
            </ul>
          </article>

          {/* 实时聊天 */}
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <h3 className="font-semibold text-lg">实时聊天 - 实时响应</h3>
            </div>

            <figure className="rounded-lg border bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src="/lovable-uploads/ad586425-618c-4760-ad1a-4e949029cd8f.png"
                  alt="ReplAInow实时聊天 - 桌面和移动端实时AI聊天"
                  loading="lazy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </AspectRatio>
            </figure>

            <ul className="mt-5 space-y-3">
              <Bullet Icon={Clock}>全自动聊天服务 - AI全天候回答询问。</Bullet>
              <Bullet Icon={CheckCircle2}>实时Shopify数据 - 订单运输信息、产品数据、政策立即可查。</Bullet>
              <Bullet Icon={CheckCircle2}>后台所有聊天概览 - 商家集中查看所有进行中的对话。</Bullet>
            </ul>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Bullet Icon={CheckCircle2}>AI自动模式切换 - 商家可随时自己接管或让AI回复。</Bullet>
              <Bullet Icon={CheckCircle2}>分类与管理 - 组织、标记和优先级排序聊天。</Bullet>
              <Bullet Icon={Globe}>多语言支持 - AI自动用客户语言回复。</Bullet>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
            <a href={OAUTH_URL} aria-label="免费试用ReplAInow">免费试用ReplAInow</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#live-demo" aria-label="观看实时演示">观看实时演示</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MailAndChatZh;