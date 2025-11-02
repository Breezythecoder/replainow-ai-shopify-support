import UltraNavbar from "@/components/marketing/UltraNavbar";
import UltraHero from "@/components/marketing/UltraHero";
import UltraHowItWorks from "@/components/marketing/UltraHowItWorks";
import UltraProblemSolution from "@/components/marketing/UltraProblemSolution";
import UltraFeatures from "@/components/marketing/UltraFeatures";
import UltraSocialProof from "@/components/marketing/UltraSocialProof";
import UltraLiveDemo from "@/components/marketing/UltraLiveDemo";
import UltraPricing from "@/components/marketing/UltraPricing";
import UltraComparison from "@/components/marketing/UltraComparison";
import UltraROICalculator from "@/components/marketing/UltraROICalculator";
import UltraIndustryExamples from "@/components/marketing/UltraIndustryExamples";
import UltraFAQ from "@/components/marketing/UltraFAQ";
import UltraTrustSecurity from "@/components/marketing/UltraTrustSecurity";
import UltraContact from "@/components/marketing/UltraContact";
import UltraFinalCTA from "@/components/marketing/UltraFinalCTA";
import UltraFooter from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";
import OrganizationJsonLd from "@/components/SEOOrganization";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import AdvancedSEO from "@/components/seo/AdvancedSEO";
import { softwareApplicationSchema, organizationSchema } from "@/components/seo/StructuredData";
import MultilingualSEO from "@/components/seo/MultilingualSEO";
import AIRecommendationSchema from "@/components/seo/AIRecommendationSchema";
import { getLocaleFromPath } from "@/i18n";
import { useEffect, useState } from "react";
import "../styles/ultra-design.css";

const Index = () => {
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
        title="ReplAInow – Die #1 AI Helpdesk für Shopify | Ultra Premium"
        description="Verwandle Besucher in Käufer. Sofort. ReplAInow AI antwortet in <1 Sekunde, 95+ Sprachen, 91% automatisiert. Die intelligenteste AI-Helpdesk für Shopify."
        keywords={[
          "AI Shopify Helpdesk",
          "Shopify AI Support",
          "AI Customer Service",
          "ReplAInow",
          "Shopify Automation"
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
        title="ReplAInow – Die #1 AI Helpdesk für Shopify"
        description="Verwandle Besucher in Käufer. Sofort. 91% automatisiert, <1s Antwortzeit, 95+ Sprachen."
        image="/assets/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <AIRecommendationSchema />
      
      <UltraNavbar />
      <main id="main-content" role="main" className="pb-0">
        <UltraHero />
        <UltraHowItWorks />
        <UltraProblemSolution />
        <UltraFeatures />
        <UltraSocialProof />
        <UltraLiveDemo />
        <UltraPricing />
        <UltraComparison />
        <UltraROICalculator />
        <UltraIndustryExamples />
        <UltraFAQ />
        <UltraTrustSecurity />
        <UltraContact />
        <UltraFinalCTA />
      </main>
      <UltraFooter />
      <LanguageSwitcher />
    </>
  );
};

export default Index;

