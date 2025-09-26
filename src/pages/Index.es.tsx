import ModernNavbarEs from "@/components/marketing/ModernNavbar.es";
import ModernHeroEs from "@/components/marketing/ModernHero.es";
import ModernHowItWorksEs from "@/components/marketing/ModernHowItWorks.es";
import ModernProblemSolutionEs from "@/components/marketing/ModernProblemSolution.es";
import ModernFeaturesEs from "@/components/marketing/ModernFeatures.es";
import ModernSocialProofEs from "@/components/marketing/ModernSocialProof.es";
import ModernLiveDemoEs from "@/components/marketing/ModernLiveDemo.es";
import ModernPricingEs from "@/components/marketing/ModernPricing.es";
import ModernComparisonEs from "@/components/marketing/ModernComparison.es";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import ModernFinalCTAEs from "@/components/marketing/ModernFinalCTA.es";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";
import FAQEs from "@/components/marketing/FAQ.es";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQEs from "@/components/seo/AIOptimizedFAQ.es";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";

const IndexEs = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language="es" />
      <AdvancedSEO
        title="ReplAInow – Mesa de Ayuda AI para Shopify | Automatiza Soporte con IA"
        description="Automatiza tu soporte al cliente de Shopify con GPT-4 AI. ✅ 3seg tiempo respuesta ✅ 32+ idiomas ✅ Cumple RGPD ✅ 75% más barato que Gorgias y Zendesk. ¡Prueba 14 días gratis!"
        keywords={[
          "Mesa de Ayuda AI Shopify",
          "Soporte AI Shopify", 
          "Soporte Cliente IA Shopify",
          "Soporte Automatizado Shopify",
          "Integración GPT-4 Shopify",
          "Automatización Soporte Shopify",
          "Chatbot AI Shopify",
          "Alternativa Gorgias",
          "Alternativa Intercom",
          "Alternativa Zendesk"
        ]}
        canonicalUrl="https://replainow.com/es/"
        locale="es_ES"
        structuredData={structuredData}
        hreflang={{
          "es": "https://replainow.com/es/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "fr": "https://replainow.com/fr/",
          "it": "https://replainow.com/it/",
          "nl": "https://replainow.com/nl/",
          "pt": "https://replainow.com/pt/",
          "zh": "https://replainow.com/zh/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatiza el Soporte de Shopify con IA"
        description="Responde consultas de clientes en segundos: cumple GDPR, conforme a marca, datos directos de Shopify. Prueba 14 días gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbarEs />
      <main id="main-content" role="main" aria-label="Contenido principal" className="pb-0">
        <ModernHeroEs />
        <ModernProblemSolutionEs />
        <ModernFeaturesEs />
        <ModernHowItWorksEs />
        <ModernLiveDemoEs />
        <ModernSocialProofEs />
        <ModernComparisonEs />
        <ModernPricingEs />
        <AIOptimizedFAQEs />
        <ModernFinalCTAEs />
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </>
  );
};

export default IndexEs;