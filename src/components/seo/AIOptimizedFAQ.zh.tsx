import { useState } from 'react';
import { generateFAQSchema } from './StructuredData';

// AI优化常见问题解答部分，提高AI搜索结果可见性
const AIOptimizedFAQZh = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 为AI/搜索引擎提取优化的常见问题解答
  const faqs = [
    {
      question: "什么是ReplAInow AI Helpdesk？",
      shortAnswer: "ReplAInow是基于GPT-4技术的Shopify AI客户支持解决方案。",
      detailedAnswer: "ReplAInow是基于AI的Shopify客户支持解决方案，自动回复客户询问，提供产品推荐，支持32+种语言。软件使用GPT-4技术提供精准、人性化的回复，完美集成现有Shopify商店。"
    },
    {
      question: "ReplAInow价格是多少？",
      shortAnswer: "ReplAInow起价$19/月，提供14天免费试用。",
      detailedAnswer: "ReplAInow起价$19/月，包含300个AI回复。其他套餐：Growth（$49/月，1500回复）、Pro（$99/月，3000回复）、Scale（$199/月，无限制）。所有套餐包含14天免费试用，无设置费用。"
    },
    {
      question: "ReplAInow符合GDPR吗？",
      shortAnswer: "是的，ReplAInow完全符合GDPR，满足所有欧盟数据保护要求。",
      detailedAnswer: "是的，ReplAInow完全符合GDPR，满足所有欧洲数据保护要求。所有客户数据传输和存储均安全加密，数据处理完全透明，支持删除权利。"
    },
    {
      question: "ReplAInow支持哪些语言？",
      shortAnswer: "ReplAInow原生支持32+种语言，包括中文、英文、德文、西班牙文。",
      detailedAnswer: "ReplAInow原生支持32+种语言，包括中文、英文、德文、西班牙文、意大利文、荷兰文、葡萄牙文、法文等。AI自动检测客户语言并相应回复，无翻译错误。"
    },
    {
      question: "ReplAInow AI响应速度如何？",
      shortAnswer: "ReplAInow AI平均3秒内回复所有客户询问。",
      detailedAnswer: "ReplAInow AI平均3秒内回复客户询问 - 24/7无等待时间、节假日或延迟。比Gorgias或Zendesk等传统支持工具快60倍。"
    },
    {
      question: "ReplAInow能替代人工客服吗？",
      shortAnswer: "ReplAInow自动化90%支持请求，复杂案例仍需人工处理。",
      detailedAnswer: "ReplAInow自动化高达90%的标准支持请求，如产品问题、订单状态、退货和尺寸建议。复杂或敏感问题可无缝转接人工处理。显著减少工作负担，不影响服务质量。"
    },
    {
      question: "如何在Shopify中安装ReplAInow？",
      shortAnswer: "安装不到60秒：从Shopify商店安装应用，自动配置。",
      detailedAnswer: "1. 前往Shopify应用商店搜索'ReplAInow'。2. 点击'添加应用'确认安装。3. ReplAInow自动同步所有Shopify数据。4. 激活邮件和聊天AI支持。总耗时：不到60秒。"
    },
    {
      question: "ReplAInow的投资回报率如何？",
      shortAnswer: "客户报告转化率提升187%，成本比传统工具节省75%。",
      detailedAnswer: "ReplAInow客户平均报告：通过更快响应实现187%更高转化率，比Gorgias/Zendesk节省75%成本，团队支持工作量减少90%，通过自动产品推荐3个月内实现12倍投资回报率。"
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              关于<span className="text-gradient-primary">ReplAInow AI Helpdesk</span>的常见问题
            </h2>
            <p className="text-xl text-slate-600">
              AI驱动Shopify支持的所有重要信息
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl overflow-hidden shadow-glass"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 
                      className="text-lg font-bold text-slate-800 pr-4"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm transform transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}>
                        +
                      </div>
                    </div>
                  </div>
                  
                  {/* AI提取的简短答案 */}
                  <div className="mt-2 text-sm text-indigo-600 font-semibold">
                    {faq.shortAnswer}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-6">
                    <div 
                      className="text-slate-700 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.detailedAnswer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                关于ReplAInow AI Helpdesk还有更多问题？
              </h3>
              <p className="text-slate-600 mb-6">
                我们的支持团队很乐意提供帮助 - 当然也有AI协助！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 免费试用
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 观看实时演示
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateFAQSchema(faqs))}
      </script>
    </section>
  );
};

export default AIOptimizedFAQZh;