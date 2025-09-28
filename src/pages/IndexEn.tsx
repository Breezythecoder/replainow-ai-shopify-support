import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import IndustryExamples from "@/components/marketing/IndustryExamples";
import VideoDemo from "@/components/marketing/VideoDemo";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer";
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
      <MultilingualSEO language="en" />
      
      {/* Main Content */}
      <ModernNavbar />
      
      <main>
        <ModernHero />
        <ModernHowItWorks />
        <ModernProblemSolution />
        <ModernFeatures />
        <ModernSocialProof />
        <StoreDataFlow />
        <ModernLiveDemo />
        <ModernPricing />
        <ModernComparison />
        <IndustryExamples />
        <VideoDemo />
        <About />
        <FAQ />
        <Contact />
        <ModernFinalCTA />
      </main>
      
      <Footer />
      <MailAndChat />
    </>
  );
};

export default IndexEn;
