import ModernNavbarFr from "@/components/marketing/ModernNavbar.fr";
import ModernHeroFr from "@/components/marketing/ModernHero.fr";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernComparison from "@/components/marketing/ModernComparison";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";
import FAQFr from "@/components/marketing/FAQ.fr";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexFr = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="fr" />
      <AdvancedSEO
        title="ReplAInow – Service Client IA pour Shopify | Automatisez avec l'IA"
        description="Automatisez votre support client Shopify avec GPT-4 IA. ✅ 3sec temps réponse ✅ 32+ langues ✅ Conforme RGPD ✅ 75% moins cher que Gorgias et Zendesk. Essai 14 jours gratuit!"
        keywords={[
          "Service Client IA Shopify",
          "Support IA Shopify", 
          "Support Client IA Shopify",
          "Support Automatisé Shopify",
          "Intégration GPT-4 Shopify",
          "Automatisation Support Shopify",
          "Chatbot IA Shopify",
          "Alternative Gorgias",
          "Alternative Intercom",
          "Alternative Zendesk"
        ]}
        canonicalUrl="https://replainow.com/fr/"
        locale="fr_FR"
        structuredData={structuredData}
        hreflang={{
          "fr": "https://replainow.com/fr/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "es": "https://replainow.com/es/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatisez le Support Shopify avec l'IA"
        description="Répondez aux demandes clients en secondes: conforme RGPD, conforme à la marque, données Shopify directes. Essai 14 jours gratuit."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarFr />
      <main id="main-content" role="main" aria-label="Contenu principal" className="pb-0">
        <ModernHeroFr />
        <ModernFeatures />
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

export default IndexFr;