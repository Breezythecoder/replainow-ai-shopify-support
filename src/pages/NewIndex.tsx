import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

// New Premium Sections
import HeroSection from "@/components/marketing/new/HeroSection";
import ValuePropositionSection from "@/components/marketing/new/ValuePropositionSection";
import AIKnowledgeBanner from "@/components/marketing/new/AIKnowledgeBanner";
import LiveChatBanner from "@/components/marketing/new/LiveChatBanner";
import EmailHelpdeskBanner from "@/components/marketing/new/EmailHelpdeskBanner";
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

        {/* 7. MULTI-LANGUAGE - Feature Banner 4 */}
        <MultiLanguageBanner />

        {/* 8. VISUAL COMMERCE - Feature Banner 5 */}
        <VisualCommerceBanner />

        {/* 9. PROACTIVE ENGAGEMENT - Feature Banner 6 */}
        <ProactiveEngagementBanner />

        {/* 10. INTEGRATION STEPS - How It Works */}
        <IntegrationStepsSection />

        {/* 11. ROI - Money Talk */}
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
