import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQZh = () => {
  const faqs = [
    {
      question: "ReplAInow如何确保GDPR合规？",
      answer: "我们严格遵守GDPR数据保护法规。所有客户数据都在欧盟境内的加密服务器上处理和存储。我们不会与第三方共享您的数据，并为客户提供完整的数据控制权和删除权。"
    },
    {
      question: "AI如何学习我的品牌语调？",
      answer: "ReplAInow分析您现有的客服邮件和沟通记录，学习您的写作风格、常用词汇和品牌语调。您也可以提供品牌指南，AI会据此调整回复风格，确保每个回复都符合您的品牌形象。"
    },
    {
      question: "安装和设置需要多长时间？",
      answer: "安装过程只需2分钟。点击'免费试用'按钮，通过Shopify App Store进行一键安装。安装完成后，AI会自动开始学习您的店铺数据和品牌风格，24小时内即可开始处理客户询问。"
    },
    {
      question: "AI能处理哪些类型的客户询问？",
      answer: "ReplAInow可以处理绝大多数常见询问：订单状态查询、产品信息咨询、配送和退货问题、库存查询、尺寸和颜色选择、付款问题等。对于复杂或特殊情况，系统会自动转接给人工客服。"
    },
    {
      question: "如果AI回复错误怎么办？",
      answer: "AI系统会持续学习和改进。如果发现错误回复，您可以通过后台进行纠正，AI会记住这些反馈并避免类似错误。此外，您可以设置关键词触发人工审核，确保重요询问得到准确处理。"
    },
    {
      question: "是否支持多语言客服？",
      answer: "是的，ReplAInow支持包括中文、英文、德文、法文、西班牙文等在内的多种语言。AI会自动检测客户使用的语言，并用相应语言进行回复，无需额外配置。"
    },
    {
      question: "免费试用包含什么？",
      answer: "14天免费试用包含完整功能：无限AI回复、全渠道支持、Shopify数据集成、品牌语调学习等。试用期间无需提供信用卡信息，试用结束后可选择继续使用或随时取消。"
    },
    {
      question: "如何取消订阅？",
      answer: "您可以随时在Shopify后台的应用设置中取消订阅，无需额外费用或违约金。取消后，AI服务会在当前计费周期结束时停止，您的数据会根据GDPR要求进行安全删除。"
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          常见问题解答
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          关于ReplAInow的常见问题，如果您有其他疑问，请随时联系我们的支持团队。
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQZh;