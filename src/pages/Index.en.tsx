import ModernNavbar from "@/components/marketing/ModernNavbar";
import HeroEn from "@/components/marketing/Hero.en";
import HowItWorksEn from "@/components/marketing/HowItWorks.en";
import ProblemSolutionEn from "@/components/marketing/ProblemSolution.en";
import FeaturesEn from "@/components/marketing/Features.en";
import SocialProofEn from "@/components/marketing/SocialProof.en";
import LiveDemoEn from "@/components/marketing/LiveDemo.en";
import PricingEn from "@/components/marketing/Pricing.en";
import ModernComparison from "@/components/marketing/ModernComparison";
import AboutEn from "@/components/marketing/About.en";
import ContactEn from "@/components/marketing/Contact.en";
import FinalCTAEn from "@/components/marketing/FinalCTA.en";
import FooterEn from "@/components/marketing/Footer.en";
import SEO from "@/components/SEO";
import FAQEn from "@/components/marketing/FAQ.en";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexEn = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
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
        structuredData={structuredData}
        hreflang={{
          "en": "https://replainow.com/en/",
          "de": "https://replainow.com/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automate Shopify Support with AI"
        description="Answer customer inquiries in seconds: GDPR-compliant, brand-compliant, direct Shopify data. Try 14 days free."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Main content">
        <HeroEn />
        <ProblemSolutionEn />
        <FeaturesEn />
        <HowItWorksEn />
        <LiveDemoEn />
        <SocialProofEn />
        <ModernComparison />
        <PricingEn />
        <FAQEn />
        <FinalCTAEn />
        <ContactEn />
      </main>
      <FooterEn />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexEn;