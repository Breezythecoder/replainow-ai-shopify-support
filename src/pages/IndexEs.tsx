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

const IndexEs = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <SEO 
        title="ReplAInow – Mesa de Ayuda IA Shopify"
        description="ReplAInow automatiza el soporte al cliente de Shopify con GPT-4.1: respuestas en 3 segundos, más de 32 idiomas, compatible con GDPR, 75% de ahorro de costos. ¡Prueba gratis ahora!"
        structuredData={structuredData}
      />
      
      <OrganizationJsonLd />
      
      {/* Advanced SEO Components */}
      <AdvancedSEO />
      <AIOptimizedFAQ />
      <MultilingualSEO />
      
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

export default IndexEs;
