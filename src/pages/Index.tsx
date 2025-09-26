import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import Features from "@/components/marketing/Features";
import SocialProof from "@/components/marketing/SocialProof";
import LiveDemo from "@/components/marketing/LiveDemo";
import Pricing from "@/components/marketing/Pricing";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import FinalCTA from "@/components/marketing/FinalCTA";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import StickyInstallBar from "@/components/marketing/StickyInstallBar";
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
      <Navbar />
      <main id="main-content" role="main" aria-label="Hauptinhalt">
        <Hero />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <MailAndChat />
        <StoreDataFlow />
        <SocialProof />
        <LiveDemo />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyInstallBar />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;
