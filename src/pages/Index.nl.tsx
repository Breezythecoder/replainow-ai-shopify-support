import ModernNavbarNl from "@/components/marketing/ModernNavbar.nl";
import ModernHeroNl from "@/components/marketing/ModernHero.nl";
import ModernProblemSolutionNl from "@/components/marketing/ModernProblemSolution.nl";
import ModernFeaturesNl from "@/components/marketing/ModernFeatures.nl";
import ModernHowItWorksNl from "@/components/marketing/ModernHowItWorks.nl";
import ModernLiveDemoNl from "@/components/marketing/ModernLiveDemo.nl";
import ModernSocialProofNl from "@/components/marketing/ModernSocialProof.nl";
import ModernPricingNl from "@/components/marketing/ModernPricing.nl";
import ModernComparisonNl from "@/components/marketing/ModernComparison.nl";
import ModernFinalCTANl from "@/components/marketing/ModernFinalCTA.nl";
import ContactNl from "@/components/marketing/Contact.nl";
import FooterNl from "@/components/marketing/Footer.nl";
import SEO from "@/components/SEO";
import FAQNl from "@/components/marketing/FAQ.nl";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexNl = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="nl" />
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
        locale="nl_NL"
        structuredData={structuredData}
        hreflang={{
          "nl": "https://replainow.com/nl/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "es": "https://replainow.com/es/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Shopify Ondersteuning automatiseren met AI"
        description="Beantwoord klantenvragen in seconden: GDPR-conform, merkconform, directe Shopify-data. 14 dagen gratis testen."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarNl />
      <main id="main-content" role="main" aria-label="Hoofdinhoud" className="pb-0">
        <ModernHeroNl />
        <ModernProblemSolutionNl />
        <ModernFeaturesNl />
        <ModernHowItWorksNl />
        <ModernLiveDemoNl />
        <ModernSocialProofNl />
        <ModernComparisonNl />
        <ModernPricingNl />
        <AIOptimizedFAQ />
        <ModernFinalCTANl />
        <ContactNl />
      </main>
      <FooterNl />
      <LanguageSwitcher />
    </>
  );
};

export default IndexNl;