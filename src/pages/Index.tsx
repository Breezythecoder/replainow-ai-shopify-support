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

const Index = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="de" />
      <AdvancedSEO
        title="ReplAInow – AI Shopify Helpdesk | Automate Support mit AI"
        description="Automate deinen Shopify Customer Support mit GPT-4 AI. ✅ 3 Sek Antwortzeit ✅ 32+ languages ✅ GDPR-konform ✅ 75% günstiger als Gorgias & Zendesk. Now 14 days free test!"
        keywords={[
          "AI Shopify Helpdesk",
          "Shopify AI Support", 
          "AI Customer Support Shopify",
          "Automatisierter Shopify Support",
          "GPT-4 Shopify Integration",
          "Shopify Support Automatisierung",
          "AI Chatbot Shopify",
          "Gorgias Alternative",
          "Intercom Alternative",
          "Zendesk Alternative"
        ]}
        canonicalUrl="https://replainow.com/"
        locale="de_DE"
        structuredData={structuredData}
        hreflang={{
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
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
        title="ReplAInow – Shopify Support automatisieren mit AI"
        description="Answer customer queries in seconds: GDPR‑konform, brand-consistent, direct Shopify‑Daten. 14 days free test."
        image="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Hauptinhalt" className="pb-0">
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
      <LanguageSwitcher />
    </>
  );
};

export default Index;
