import ModernNavbar from "@/components/marketing/ModernNavbar.en";
import ModernHero from "@/components/marketing/ModernHero.en";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks.en";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution.en";
import ModernFeatures from "@/components/marketing/ModernFeatures.en";
import ModernSocialProof from "@/components/marketing/ModernSocialProof.en";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo.en";
import ModernPricing from "@/components/marketing/ModernPricing.en";
import ModernComparison from "@/components/marketing/ModernComparison.en";
import IndustryExamples from "@/components/marketing/IndustryExamples.en";
import VideoDemo from "@/components/marketing/VideoDemo.en";
import About from "@/components/marketing/About.en";
import Contact from "@/components/marketing/Contact.en";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA.en";
import Footer from "@/components/marketing/Footer.en";
import StoreDataFlow from "@/components/marketing/StoreDataFlow.en";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.en";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat.en";
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
