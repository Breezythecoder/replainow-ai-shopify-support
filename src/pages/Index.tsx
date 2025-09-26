import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";
import LanguageSwitcher from "@/components/ui/language-switcher";
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
        title="ReplAInow – AI Shopify Helpdesk | Automatisiere Support mit KI"
        description="Automatisiere deinen Shopify Kundensupport mit GPT-4 AI. ✅ 3 Sek Antwortzeit ✅ 32+ Sprachen ✅ DSGVO-konform ✅ 75% günstiger als Gorgias & Zendesk. Jetzt 14 Tage kostenlos testen!"
        keywords={[
          "AI Shopify Helpdesk",
          "Shopify AI Support", 
          "KI Kundensupport Shopify",
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
        title="ReplAInow – Shopify Support automatisieren mit KI"
        description="Beantworte Kundenanfragen in Sekunden: DSGVO‑konform, markenkonform, direkte Shopify‑Daten. 14 Tage gratis testen."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Hauptinhalt" className="pb-0">
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
      <LanguageSwitcher />
    </>
  );
};

export default Index;
