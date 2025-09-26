import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// AI-optimized FAQ section for better visibility in AI search results
const AIOptimizedFAQEn = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQs optimized for AI/Search Engine extraction
  const faqs = [
    {
      question: "What is ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow is an AI-powered customer support solution for Shopify with GPT-4 technology.",
      detailedAnswer: "ReplAInow is an AI-powered customer support solution for Shopify that automatically responds to customer inquiries, provides product recommendations, and is available in over 32 languages. The software uses GPT-4 technology for precise, human-like responses and integrates seamlessly into existing Shopify stores."
    },
    {
      question: "How much does ReplAInow cost?",
      shortAnswer: "ReplAInow starts at $19/month with a 14-day free trial.",
      detailedAnswer: "ReplAInow starts at $19/month for up to 300 AI responses. Additional plans: Growth ($49/month, 1500 responses), Pro ($99/month, 3000 responses), Scale ($199/month, unlimited). All plans include a 14-day free trial with no setup fees."
    },
    {
      question: "Is ReplAInow GDPR compliant?",
      shortAnswer: "Yes, ReplAInow is fully GDPR compliant and meets all EU data protection requirements.",
      detailedAnswer: "Yes, ReplAInow is fully GDPR compliant and meets all European data protection requirements. All customer data is securely encrypted in transmission and storage, with full transparency about data processing and deletion rights."
    },
    {
      question: "Which languages does ReplAInow support?",
      shortAnswer: "ReplAInow supports over 32 languages natively, including English, German, French, and Spanish.",
      detailedAnswer: "ReplAInow supports over 32 languages natively, including English, German, French, Spanish, Italian, Dutch, Portuguese, Chinese, and many more. The AI automatically detects customer language and responds accordingly without translation errors."
    },
    {
      question: "How fast does ReplAInow AI respond?",
      shortAnswer: "ReplAInow AI responds on average in 3 seconds to all customer inquiries.",
      detailedAnswer: "ReplAInow AI responds on average in 3 seconds to customer inquiries - 24/7 without wait times, holidays, or delays. This is 60x faster than traditional support tools like Gorgias or Zendesk."
    },
    {
      question: "Can ReplAInow replace human support staff?",
      shortAnswer: "ReplAInow automates 90% of support requests, human staff remain important for complex cases.",
      detailedAnswer: "ReplAInow automates up to 90% of all standard support requests like product questions, order status, returns, and size advice. For complex or sensitive matters, human staff can seamlessly take over. This significantly reduces workload without compromising service quality."
    },
    {
      question: "How to install ReplAInow in Shopify?",
      shortAnswer: "Installation takes under 60 seconds: install app from Shopify Store and let it configure automatically.",
      detailedAnswer: "1. Go to Shopify App Store and search 'ReplAInow'. 2. Click 'Add app' and confirm installation. 3. ReplAInow automatically syncs all Shopify data. 4. Activate AI support for email and chat. Total duration: under 60 seconds."
    },
    {
      question: "What is the ROI of ReplAInow?",
      shortAnswer: "Customers report 187% higher conversion and 75% cost savings compared to traditional tools.",
      detailedAnswer: "ReplAInow customers report on average: 187% higher conversion rate through faster responses, 75% cost savings compared to Gorgias/Zendesk, 90% less support effort for teams, 12x ROI within 3 months through automated product recommendations."
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Frequently Asked Questions about <span className="text-gradient-primary">ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600">
              All important information about AI-powered Shopify support
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
                  
                  {/* Short Answer for AI Extraction */}
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
                More questions about ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Our support team is happy to help - also with AI assistance!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 Try for free
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 Watch live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqPageSchema)}
      </script>
    </section>
  );
};

export default AIOptimizedFAQEn;