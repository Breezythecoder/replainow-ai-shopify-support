import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About.nl";
import Contact from "@/components/marketing/Contact.nl";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer.nl";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.nl";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexNl = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
      <AdvancedSEO
        title="ReplAInow – AI Shopify Helpdesk | Automatiseer Ondersteuning met AI"
        description="Automatiseer je Shopify klantenservice met GPT-4 AI. ✅ 3sec reactietijd ✅ 32+ talen ✅ GDPR conform ✅ 75% goedkoper dan Gorgias en Zendesk. Probeer 14 dagen gratis!"
        keywords={[
          "AI Shopify Helpdesk",
          "Shopify AI Ondersteuning", 
          "AI Klantenservice Shopify",
          "Geautomatiseerde Shopify Ondersteuning",
          "GPT-4 Shopify Integratie",
          "Shopify Ondersteuning Automatisering",
          "AI Chatbot Shopify",
          "Gorgias Alternatief",
          "Intercom Alternatief",
          "Zendesk Alternatief"
        ]}
        canonicalUrl="https://replainow.com/nl/"
        structuredData={structuredData}
        hreflang={{
          "nl": "https://replainow.com/nl/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Shopify Ondersteuning automatiseren met AI"
        description="Beantwoord klantenvragen in seconden: GDPR-conform, merkconform, directe Shopify-data. 14 dagen gratis testen."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Hoofdinhoud">
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

export default IndexNl;