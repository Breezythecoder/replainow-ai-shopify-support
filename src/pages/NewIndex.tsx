import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { useTranslation } from "@/i18n";
import { useLocale } from "@/i18n/LocaleContext";
import { getHomepageHreflangTags } from "@/seo/hreflangHelper";

// New Premium Sections
import HeroSection from "@/components/marketing/new/HeroSection";
import AIPowerShowcase from "@/components/marketing/new/AIPowerShowcase";
import ValuePropositionSection from "@/components/marketing/new/ValuePropositionSection";
import TestimonialsSection from "@/components/marketing/new/TestimonialsSection";
import AIKnowledgeBanner from "@/components/marketing/new/AIKnowledgeBanner";
import OmnichannelUnified from "@/components/marketing/new/OmnichannelUnified";
import AIIntelligenceDeepDive from "@/components/marketing/new/AIIntelligenceDeepDive";
import DashboardShowcaseSection from "@/components/marketing/new/DashboardShowcaseSection";
import AgentProductivity from "@/components/marketing/new/AgentProductivity";
import IntegrationStepsSection from "@/components/marketing/new/IntegrationStepsSection";
import ROISection from "@/components/marketing/new/ROISection";
import PricingSection from "@/components/marketing/new/PricingSection";
import FAQSection from "@/components/marketing/new/FAQSection";
import FinalCTASection from "@/components/marketing/new/FinalCTASection";

const NewIndex = () => {
  const { t } = useTranslation();
  const { locale: currentLocale } = useLocale();
  
  // Dynamic canonical URL based on language
  const canonicalUrl = currentLocale === 'de' 
    ? 'https://replainow.com/' 
    : `https://replainow.com/${currentLocale}`;
  
  return (
    <>
      <Helmet>
        <title>{t('marketing.seo.title')}</title>
        <meta
          name="description"
          content={t('marketing.seo.description')}
        />
        <meta
          property="og:title"
          content={t('marketing.seo.ogTitle')}
        />
        <meta
          property="og:description"
          content={t('marketing.seo.ogDescription')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang tags for multilingual SEO */}
        {getHomepageHreflangTags().map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hreflang={hreflang} href={href} />
        ))}
      </Helmet>

      <PremiumNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Hauptinhalt"
        className="min-h-screen"
      >
        {/* 1. HERO - AI-Mitarbeiter statt Helpdesk */}
        <HeroSection />

        {/* 2. AI-POWER SHOWCASE - Was Ihre AI alles kann! */}
        <AIPowerShowcase />

        {/* 3. VALUE PROPOSITION - 87% Automation + AI-Intelligenz + 24/7 */}
        <ValuePropositionSection />

        {/* 4. TESTIMONIALS - Social Proof Early */}
        <TestimonialsSection />

        {/* 5. AI KNOWLEDGE - Automatischer Shop-Wissen Import */}
        <AIKnowledgeBanner />

        {/* 6. OMNICHANNEL UNIFIED - Chat + Email nahtlos verbunden */}
        <OmnichannelUnified />

        {/* 7. AI INTELLIGENCE DEEP-DIVE - Quality + Collection + Journey */}
        <AIIntelligenceDeepDive />

        {/* 8. DASHBOARD SHOWCASE - Show the product */}
        <DashboardShowcaseSection />

        {/* 9. AGENT PRODUCTIVITY - Tools für die 13% */}
        <AgentProductivity />

        {/* 10. INTEGRATION STEPS - How It Works */}
        <IntegrationStepsSection />

        {/* 11. ROI - Mitarbeiter-Ersparnis Calculator */}
        <ROISection />

        {/* 12. PRICING - Clear Options */}
        <PricingSection />

        {/* 13. FAQ - Address Objections */}
        <FAQSection />

        {/* 14. FINAL CTA - Conversion */}
        <FinalCTASection />
      </main>

      <UltraFooter />
    </>
  );
};

export default NewIndex;
