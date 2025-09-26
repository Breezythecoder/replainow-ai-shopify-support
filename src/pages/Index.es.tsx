import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About.es";
import Contact from "@/components/marketing/Contact.es";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer.es";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ.es";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import LanguageSwitcher from "@/components/ui/language-switcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";

const IndexEs = () => {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <div>
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
        structuredData={structuredData}
        hreflang={{
          "es": "https://replainow.com/es/",
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en/",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title="ReplAInow – Automatiza el Soporte de Shopify con IA"
        description="Responde consultas de clientes en segundos: cumple GDPR, conforme a marca, datos directos de Shopify. Prueba 14 días gratis."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Contenido principal">
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

export default IndexEs;