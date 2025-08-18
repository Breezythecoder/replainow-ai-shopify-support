import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Clock } from "lucide-react";

const ContactZh = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          联系我们
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          有疑问？需要帮助？我们的团队随时为您提供支持。请选择最适合的联系方式。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">邮件支持</h4>
                    <p className="text-sm text-muted-foreground">support@replainow.com</p>
                    <p className="text-xs text-muted-foreground mt-1">24小时内回复</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">在线客服</h4>
                    <p className="text-sm text-muted-foreground">实时聊天支持</p>
                    <p className="text-xs text-muted-foreground mt-1">工作时间：周一至周五 9:00-18:00 (CET)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">紧急支持</h4>
                    <p className="text-sm text-muted-foreground">企业客户专享</p>
                    <p className="text-xs text-muted-foreground mt-1">1小时内响应保证</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-medium mb-3">常见问题</h4>
              <p className="text-sm text-muted-foreground mb-4">
                在联系我们之前，您可以查看我们的常见问题解答，可能会找到您需要的答案。
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="#faq">查看FAQ</a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border">
            <h3 className="font-display text-xl font-semibold mb-6">发送消息</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    姓名 *
                  </label>
                  <Input id="firstName" placeholder="请输入您的姓名" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    公司名称
                  </label>
                  <Input id="lastName" placeholder="请输入公司名称" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  邮箱地址 *
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  主题 *
                </label>
                <Input id="subject" placeholder="请简述您的问题" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  详细描述 *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="请详细描述您的问题或需求..."
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                发送消息
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                我们会在24小时内回复您的消息。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactZh;