import ModernNavbar from "@/components/marketing/ModernNavbar";
import HeroNl from "@/components/marketing/Hero.nl";
import HowItWorksNl from "@/components/marketing/HowItWorks.nl";
import ProblemSolutionNl from "@/components/marketing/ProblemSolution.nl";
import FeaturesNl from "@/components/marketing/Features.nl";
import SocialProofNl from "@/components/marketing/SocialProof.nl";
import LiveDemoNl from "@/components/marketing/LiveDemo.nl";
import PricingNl from "@/components/marketing/Pricing.nl";
import ModernComparison from "@/components/marketing/ModernComparison";
import AboutNl from "@/components/marketing/About.nl";
import ContactNl from "@/components/marketing/Contact.nl";
import FinalCTANl from "@/components/marketing/FinalCTA.nl";
import FooterNl from "@/components/marketing/Footer.nl";
import SEO from "@/components/SEO";
import FAQNl from "@/components/marketing/FAQ.nl";
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
        <HeroNl />
        <ProblemSolutionNl />
        <FeaturesNl />
        <HowItWorksNl />
        <LiveDemoNl />
        <SocialProofNl />
        <ModernComparison />
        <PricingNl />
        <FAQNl />
        <FinalCTANl />
        <ContactNl />
      </main>
      <FooterNl />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default IndexNl;