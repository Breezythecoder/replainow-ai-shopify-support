import NavbarEn from "@/components/marketing/Navbar.en";
import HeroEn from "@/components/marketing/Hero.en";
import HowItWorks from "@/components/marketing/HowItWorks";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import Features from "@/components/marketing/Features";
import SocialProof from "@/components/marketing/SocialProof";
import LiveDemo from "@/components/marketing/LiveDemo";
import Pricing from "@/components/marketing/Pricing";
import AboutEn from "@/components/marketing/About.en";
import Contact from "@/components/marketing/Contact";
import FinalCTAEn from "@/components/marketing/FinalCTA.en";
import Footer from "@/components/marketing/Footer";
import StoreDataFlow from "@/components/marketing/StoreDataFlow";
import SEO from "@/components/SEO";
import FAQ from "@/components/marketing/FAQ";
import StickyInstallBar from "@/components/marketing/StickyInstallBar";
import OrganizationJsonLd from "@/components/SEOOrganization";
import MailAndChat from "@/components/marketing/MailAndChat";

const IndexEn = () => {
  return (
    <div>
      <SEO
        title="ReplAInow – Automate Shopify Support with AI"
        description="Answer customer inquiries in seconds: GDPR-compliant, brand-compliant, direct Shopify data. Try 14 days free."
        image="/lovable-uploads/193e41bc-af60-4d70-947d-659804d66b83.png"
      />
      <OrganizationJsonLd />
      <NavbarEn />
      <main>
        <HeroEn />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <MailAndChat />
        <StoreDataFlow />
        <SocialProof />
        <LiveDemo />
        <Pricing />
        <FAQ />
        <FinalCTAEn />
        <AboutEn />
        <Contact />
      </main>
      <Footer />
      <StickyInstallBar />
    </div>
  );
};

export default IndexEn;