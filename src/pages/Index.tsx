import ModernNavbar from "@/components/marketing/ModernNavbar";
import ModernHero from "@/components/marketing/ModernHero";
import ModernHowItWorks from "@/components/marketing/ModernHowItWorks";
import ModernProblemSolution from "@/components/marketing/ModernProblemSolution";
import ModernFeatures from "@/components/marketing/ModernFeatures";
import ModernSocialProof from "@/components/marketing/ModernSocialProof";
import ModernLiveDemo from "@/components/marketing/ModernLiveDemo";
import ModernPricing from "@/components/marketing/ModernPricing";
import ModernComparison from "@/components/marketing/ModernComparison";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import ModernFinalCTA from "@/components/marketing/ModernFinalCTA";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import ModernStickyInstallBar from "@/components/marketing/ModernStickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";
import LanguageSwitcher from "@/components/ui/language-switcher";
const Index = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Shopify Support automatisieren mit KI"
        description="Beantworte Kundenanfragen in Sekunden: DSGVO‑konform, markenkonform, direkte Shopify‑Daten. 14 Tage gratis testen."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <ModernNavbar />
      <main id="main-content" role="main" aria-label="Hauptinhalt">
        <ModernHero />
        <ModernProblemSolution />
        <ModernFeatures />
        <ModernHowItWorks />
        <ModernLiveDemo />
        <ModernSocialProof />
        <ModernComparison />
        <ModernPricing />
        <ModernFinalCTA />
        <Contact />
      </main>
      <Footer />
      <ModernStickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;
