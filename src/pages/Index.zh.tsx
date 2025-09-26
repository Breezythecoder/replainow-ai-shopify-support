import ModernNavbarZh from "@/components/marketing/ModernNavbar.zh";
import HeroZh from "@/components/marketing/Hero.zh";
import HowItWorksZh from "@/components/marketing/HowItWorks.zh";
import ProblemSolutionZh from "@/components/marketing/ProblemSolution.zh";
import FeaturesZh from "@/components/marketing/Features.zh";
import SocialProofZh from "@/components/marketing/SocialProof.zh";
import LiveDemoZh from "@/components/marketing/LiveDemo.zh";
import PricingZh from "@/components/marketing/Pricing.zh";
import ModernComparisonZh from "@/components/marketing/ModernComparison.zh";
import AboutZh from "@/components/marketing/About.zh";
import ContactZh from "@/components/marketing/Contact.zh";
import FinalCTAZh from "@/components/marketing/FinalCTA.zh";
import FooterZh from "@/components/marketing/Footer.zh";
import SEO from "@/components/SEO";
import FAQZh from "@/components/marketing/FAQ.zh";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexZh = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="zh" />
      <AdvancedSEO
        title="ReplAInow – Shopify AI客服系统 | 用AI自动化客户支持"
        description="用GPT-4 AI自动化您的Shopify客户支持。✅ 3秒响应时间 ✅ 32+种语言 ✅ 符合GDPR ✅ 比Gorgias和Zendesk便宜75%。免费试用14天！"
        keywords={[
          "Shopify AI客服",
          "Shopify AI支持", 
          "AI客户服务Shopify",
          "自动化Shopify支持",
          "GPT-4 Shopify集成",
          "Shopify支持自动化",
          "AI聊天机器人Shopify",
          "Gorgias替代方案",
          "Intercom替代方案",
          "Zendesk替代方案"
        ]}
        canonicalUrl="https://replainow.com/zh/"
        locale="zh_CN"
        structuredData={structuredData}
        hreflang={{
          "zh": "https://replainow.com/zh/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "es": "https://replainow.com/es/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – 用AI自动化Shopify客户支持"
        description="几秒内回复客户咨询：符合GDPR，符合品牌形象，直接Shopify数据。免费试用14天。"
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarZh />
      <main id="main-content" role="main" aria-label="主要内容" className="pb-0">
        <HeroZh />
        <ProblemSolutionZh />
        <FeaturesZh />
        <HowItWorksZh />
        <LiveDemoZh />
        <SocialProofZh />
        <ModernComparisonZh />
        <PricingZh />
        <FAQZh />
        <FinalCTAZh />
        <ContactZh />
      </main>
      <FooterZh />
      <LanguageSwitcher />
    </>
  );
};

export default IndexZh;