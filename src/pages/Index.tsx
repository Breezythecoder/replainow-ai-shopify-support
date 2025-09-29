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
import Contact from "@/components/marketing/Contact";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer";
import SEO from "@/components/SEO";
import AIOptimizedFAQ from "@/components/seo/AIOptimizedFAQ";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";
import { getLocaleFromPath } from "@/i18n";
import { useEffect, useState } from "react";

const Index = () => {
  // Auto-detect locale from URL
  const [currentLocale, setCurrentLocale] = useState<'de' | 'en' | 'fr' | 'es'>('de');

  useEffect(() => {
    const locale = getLocaleFromPath(window.location.pathname);
    setCurrentLocale(locale as 'de' | 'en' | 'fr' | 'es');
  }, []);

  const structuredData = [
    organizationSchema,
    softwareApplicationSchema
  ];

  return (
    <>
      <MultilingualSEO language={currentLocale} />
      <AdvancedSEO
        title={currentLocale === 'en' ? "ReplAInow – AI Shopify Helpdesk | Automated Customer Support" : "ReplAInow – AI Shopify Helpdesk | Automatisiere Support mit AI"}
        description={currentLocale === 'en'
          ? "ReplAInow automates Shopify customer support with GPT-4.1: 3-second responses, 32+ languages, GDPR-compliant, 75% cost savings. Try free now!"
          : "Automatisiere deinen Shopify Customer Support mit GPT-4 AI. ✅ 3 Sek Antwortzeit ✅ 32+ Sprachen ✅ DSGVO-konform ✅ 75% günstiger als Gorgias & Zendesk. Jetzt 14 Tage kostenlos testen!"
        }
        keywords={currentLocale === 'en' ? [
          "AI Shopify Helpdesk",
          "Shopify AI Support",
          "Automated Shopify Support",
          "GPT-4 Shopify Integration",
          "Shopify Customer Service",
          "AI Customer Support",
          "Shopify Help Desk",
          "Automated Responses",
          "Shopify Support Chat",
          "AI Email Support"
        ] : [
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
        canonicalUrl={`https://replainow.com/${currentLocale === 'en' ? 'en' : ''}`}
        locale={currentLocale === 'en' ? 'en_US' : 'de_DE'}
        structuredData={structuredData}
        hreflang={{
          "de": "https://replainow.com/",
          "en": "https://replainow.com/en",
          "x-default": "https://replainow.com/"
        }}
      />
      <SEO
        title={currentLocale === 'en' ? "ReplAInow – AI Shopify Helpdesk | Automated Customer Support" : "ReplAInow – Shopify Support automatisieren mit AI"}
        description={currentLocale === 'en'
          ? "ReplAInow automates Shopify customer support with GPT-4.1: 3-second responses, 32+ languages, GDPR-compliant, 75% cost savings. Try free now!"
          : "Automatisiere deinen Shopify Customer Support mit GPT-4 AI. ✅ 3 Sek Antwortzeit ✅ 32+ Sprachen ✅ DSGVO-konform ✅ 75% günstiger als Gorgias & Zendesk. Jetzt 14 Tage kostenlos testen!"
        }
        image="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label={currentLocale === 'en' ? "Main content" : "Hauptinhalt"} className="pb-0">
        <ModernHero />
        <ModernHowItWorks />
        <ModernProblemSolution />
        <ModernFeatures />
        <ModernSocialProof />
        <ModernLiveDemo />
        <ModernPricing />
        <ModernComparison />
        <IndustryExamples />
        <AIOptimizedFAQ />
        <MailAndChat />
        <Contact />
        <ModernFinalCTA />
      </main>
      <Footer />
      <LanguageSwitcher />
    </>
  );
};

export default Index;
