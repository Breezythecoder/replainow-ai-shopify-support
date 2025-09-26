import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About.it";
import Contact from "@/components/marketing/Contact.it";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer.it";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.it";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexIt = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
      <AdvancedSEO
        title="ReplAInow – Helpdesk AI per Shopify | Automatizza Supporto con IA"
        description="Automatizza il supporto clienti Shopify con GPT-4 AI. ✅ 3sec tempo risposta ✅ 32+ lingue ✅ Conforme GDPR ✅ 75% più economico di Gorgias e Zendesk. Prova 14 giorni gratis!"
        keywords={[
          "Helpdesk AI Shopify",
          "Supporto AI Shopify", 
          "Supporto Clienti IA Shopify",
          "Supporto Automatizzato Shopify",
          "Integrazione GPT-4 Shopify",
          "Automazione Supporto Shopify",
          "Chatbot AI Shopify",
          "Alternativa Gorgias",
          "Alternativa Intercom",
          "Alternativa Zendesk"
        ]}
        canonicalUrl="https://replainow.com/it/"
        structuredData={structuredData}
        hreflang={{
          "it": "https://replainow.com/it/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatizza il Supporto Shopify con l'AI"
        description="Rispondi alle richieste dei clienti in secondi: conforme GDPR, rispettoso del brand, dati Shopify diretti. Prova 14 giorni gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Contenuto principale">
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

export default IndexIt;