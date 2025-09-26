import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About.en";
import Contact from "@/components/marketing/Contact.en";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer.en";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.en";
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
        <ModernHero />
        <ModernProblemSolution />
        <ModernFeatures />
        <ModernHowItWorks />
        <ModernLiveDemo />
        <ModernSocialProof />
        <ModernComparison />
        <ModernPricing />
        <AIOptimizedFAQ />
        <ModernFinalCTA />
        <Contact />
      </main>
      <Footer />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexEn;