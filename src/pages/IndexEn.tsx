import ModernNavbarEn from "@/components/marketing/ModernNavbarEn";
import ModernHeroEn from "@/components/marketing/ModernHeroEn";
import ModernHowItWorksEn from "@/components/marketing/ModernHowItWorksEn";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeaturesEn from "@/components/marketing/ModernFeaturesEn";
import ModernSocialProofEn from "@/components/marketing/ModernSocialProofEn";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricingEn from "@/components/marketing/ModernPricingEn";
import ModernComparison from "@/components/marketing/ModernComparison";
import IndustryExamples from "@/components/marketing/IndustryExamples";
import VideoDemo from "@/components/marketing/VideoDemo";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import ModernFooterEn from "@/components/marketing/ModernFooterEn";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
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
      <SEO 
        title="ReplAInow – AI Shopify Helpdesk"
        description="ReplAInow automates Shopify customer support with GPT-4.1: 3-second responses, 32+ languages, GDPR-compliant, 75% cost savings. Try free now!"
        structuredData={structuredData}
      />
      
      <OrganizationJsonLd />
      
      {/* Advanced SEO Components */}
      <AdvancedSEO />
      <AIOptimizedFAQ />
      <MultilingualSEO />
      
      {/* Main Content */}
      <ModernNavbarEn />
      
      <main>
        <ModernHeroEn />
        <ModernHowItWorksEn />
        <ModernProblemSolution />
        <ModernFeaturesEn />
        <ModernSocialProofEn />
        <StoreDataFlow />
        <ModernLiveDemo />
        <ModernPricingEn />
        <ModernComparison />
        <IndustryExamples />
        <VideoDemo />
        <About />
        <FAQ />
        <Contact />
        <ModernFinalCTA />
      </main>
      
      <ModernFooterEn />
      <MailAndChat />
    </>
  );
};

export default IndexEn;
