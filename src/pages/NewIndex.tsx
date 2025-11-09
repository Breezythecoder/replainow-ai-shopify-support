import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

// New Premium Sections
import HeroSection from "@/components/marketing/new/HeroSection";
import ValuePropositionSection from "@/components/marketing/new/ValuePropositionSection";
import AIKnowledgeBanner from "@/components/marketing/new/AIKnowledgeBanner";
import LiveChatBanner from "@/components/marketing/new/LiveChatBanner";
import EmailHelpdeskBanner from "@/components/marketing/new/EmailHelpdeskBanner";
import AIQualitySection from "@/components/marketing/new/AIQualitySection";
import DashboardShowcaseSection from "@/components/marketing/new/DashboardShowcaseSection";
import InformationCollectionSection from "@/components/marketing/new/InformationCollectionSection";
import MultiLanguageBanner from "@/components/marketing/new/MultiLanguageBanner";
import VisualCommerceBanner from "@/components/marketing/new/VisualCommerceBanner";
import ProactiveEngagementBanner from "@/components/marketing/new/ProactiveEngagementBanner";
import TestimonialsSection from "@/components/marketing/new/TestimonialsSection";
import IntegrationStepsSection from "@/components/marketing/new/IntegrationStepsSection";
import ROISection from "@/components/marketing/new/ROISection";
import PricingSection from "@/components/marketing/new/PricingSection";
import FAQSection from "@/components/marketing/new/FAQSection";
import FinalCTASection from "@/components/marketing/new/FinalCTASection";

const NewIndex = () => {
  return (
    <>
      <Helmet>
        <title>ReplAInow – Enterprise AI Shopify Helpdesk | Automatisierter Support</title>
        <meta 
          name="description" 
          content="Die #1 AI Helpdesk-Lösung für Shopify. 87% Automatisierung, Live-Chat + E-Mail, 100+ Sprachen. Live in 60 Sekunden. 1.247+ Händler vertrauen uns." 
        />
        <meta property="og:title" content="ReplAInow – Enterprise AI Shopify Helpdesk" />
        <meta property="og:description" content="Automatisierter Support ohne Kompromisse. 87% Ihrer Support-Anfragen vollautomatisch beantwortet." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.replainow.com" />
      </Helmet>

      <PremiumNavbar />

      <main className="min-h-screen">
        {/* 1. HERO - First Impression */}
        <HeroSection />

        {/* 2. VALUE PROPOSITION - 3 Core Metrics */}
        <ValuePropositionSection />

        {/* 3. TESTIMONIALS - Social Proof Early */}
        <TestimonialsSection />

        {/* 4. AI KNOWLEDGE - Feature Banner 1 */}
        <AIKnowledgeBanner />

        {/* 5. LIVE CHAT - Feature Banner 2 */}
        <LiveChatBanner />

        {/* 6. EMAIL HELPDESK - Feature Banner 3 */}
        <EmailHelpdeskBanner />

        {/* 7. AI QUALITY - NEW! Quality Guarantee */}
        <AIQualitySection />

        {/* 8. DASHBOARD SHOWCASE - NEW! Show the product */}
        <DashboardShowcaseSection />

        {/* 9. INFORMATION COLLECTION - NEW! AI Intelligence */}
        <InformationCollectionSection />

        {/* 10. MULTI-LANGUAGE - Feature Banner 4 (Updated!) */}
        <MultiLanguageBanner />

        {/* 11. VISUAL COMMERCE - Feature Banner 5 */}
        <VisualCommerceBanner />

        {/* 12. PROACTIVE ENGAGEMENT - Feature Banner 6 */}
        <ProactiveEngagementBanner />

        {/* 13. INTEGRATION STEPS - How It Works */}
        <IntegrationStepsSection />

        {/* 14. ROI - Money Talk */}
        <ROISection />

        {/* 15. PRICING - Clear Options */}
        <PricingSection />

        {/* 16. FAQ - Address Objections */}
        <FAQSection />

        {/* 17. FINAL CTA - Conversion */}
        <FinalCTASection />
      </main>

      <UltraFooter />
    </>
  );
};

export default NewIndex;
