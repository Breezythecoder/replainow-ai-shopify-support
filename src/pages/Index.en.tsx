import ModernNavbarEn from "@/components/marketing/ModernNavbar.en";
import HeroEn from "@/components/marketing/Hero.en";
import HowItWorksEn from "@/components/marketing/HowItWorks.en";
import ProblemSolutionEn from "@/components/marketing/ProblemSolution.en";
import FeaturesEn from "@/components/marketing/Features.en";
import SocialProofEn from "@/components/marketing/SocialProof.en";
import LiveDemoEn from "@/components/marketing/LiveDemo.en";
import PricingEn from "@/components/marketing/Pricing.en";
import ModernComparisonEn from "@/components/marketing/ModernComparison.en";
import AboutEn from "@/components/marketing/About.en";
import ContactEn from "@/components/marketing/Contact.en";
import FinalCTAEn from "@/components/marketing/FinalCTA.en";
import FooterEn from "@/components/marketing/Footer.en";
import SEO from "@/components/SEO";
import FAQEn from "@/components/marketing/FAQ.en";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexEn = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="en" />
      <AdvancedSEO
        title="ReplAInow – AI Shopify Helpdesk | Automate Support with AI"
        description="Automate your Shopify customer support with GPT-4 AI. ✅ 3sec response time ✅ 32+ languages ✅ GDPR compliant ✅ 75% cheaper than Gorgias & Zendesk. Try 14 days free!"
        keywords={[
          "AI Shopify Helpdesk",
          "Shopify AI Support", 
          "AI Customer Support Shopify",
          "Automated Shopify Support",
          "GPT-4 Shopify Integration",
          "Shopify Support Automation",
          "AI Chatbot Shopify",
          "Gorgias Alternative",
          "Intercom Alternative",
          "Zendesk Alternative"
        ]}
        canonicalUrl="https://replainow.com/en/"
        locale="en_US"
        structuredData={structuredData}
        hreflang={{
          "en": "https://replainow.com/en/",
          "de": "https://replainow.com/",
          "es": "https://replainow.com/es/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automate Shopify Support with AI"
        description="Answer customer inquiries in seconds: GDPR-compliant, brand-compliant, direct Shopify data. Try 14 days free."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarEn />
      <main id="main-content" role="main" aria-label="Main content" className="pb-0">
        <HeroEn />
        <ProblemSolutionEn />
        <FeaturesEn />
        <HowItWorksEn />
        <LiveDemoEn />
        <SocialProofEn />
        <ModernComparisonEn />
        <PricingEn />
        <FAQEn />
        <FinalCTAEn />
        <ContactEn />
      </main>
      <FooterEn />
      <LanguageSwitcher />
    </>
  );
};

export default IndexEn;