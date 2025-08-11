import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
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

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <StoreDataFlow />
        <SocialProof />
        <LiveDemo />
        <Pricing />
        <FinalCTA />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
