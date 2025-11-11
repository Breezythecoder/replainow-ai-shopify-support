import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

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
  return (
    <>
      <Helmet>
        <title>
          ReplAInow – Enterprise AI Shopify Helpdesk | Automatisierter Support
        </title>
        <meta
          name="description"
          content="Die #1 AI Helpdesk-Lösung für Shopify. 87% Automatisierung, Live-Chat + E-Mail, 100+ Sprachen. Live in 60 Sekunden."
        />
        <meta
          property="og:title"
          content="ReplAInow – Enterprise AI Shopify Helpdesk"
        />
        <meta
          property="og:description"
          content="Automatisierter Support ohne Kompromisse. 87% Ihrer Support-Anfragen vollautomatisch beantwortet."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.replainow.com" />
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
