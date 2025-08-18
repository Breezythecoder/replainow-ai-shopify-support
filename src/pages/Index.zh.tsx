import NavbarZh from "@/components/marketing/Navbar.zh";
import HeroZh from "@/components/marketing/Hero.zh";
import HowItWorksZh from "@/components/marketing/HowItWorks.zh";
import ProblemSolutionZh from "@/components/marketing/ProblemSolution.zh";
import FeaturesZh from "@/components/marketing/Features.zh";
import SocialProofZh from "@/components/marketing/SocialProof.zh";
import LiveDemoZh from "@/components/marketing/LiveDemo.zh";
import PricingZh from "@/components/marketing/Pricing.zh";
import AboutZh from "@/components/marketing/About.zh";
import ContactZh from "@/components/marketing/Contact.zh";
import FinalCTAZh from "@/components/marketing/FinalCTA.zh";
import FooterZh from "@/components/marketing/Footer.zh";
import StoreDataFlowZh from "@/components/marketing/StoreDataFlow.zh";
import SEO from "@/components/SEO";
import FAQZh from "@/components/marketing/FAQ.zh";
import StickyInstallBarZh from "@/components/marketing/StickyInstallBar.zh";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChatZh from "@/components/marketing/MailAndChat.zh";
import LanguageSwitcher from "@/components/ui/language-switcher";

const IndexZh = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – 用AI自动化您的Shopify客服支持"
        description="几秒内回答客户询问：符合GDPR标准，保持品牌风格，直接获取Shopify数据。免费试用14天。"
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarZh />
      <main>
        <HeroZh />
        <HowItWorksZh />
        <ProblemSolutionZh />
        <FeaturesZh />
        <MailAndChatZh />
        <StoreDataFlowZh />
        <SocialProofZh />
        <LiveDemoZh />
        <PricingZh />
        <FAQZh />
        <FinalCTAZh />
        <AboutZh />
        <ContactZh />
      </main>
      <FooterZh />
      <StickyInstallBarZh />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexZh;