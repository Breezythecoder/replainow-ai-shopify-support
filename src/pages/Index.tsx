import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import Screens from "@/components/marketing/Screens";
import Pricing from "@/components/marketing/Pricing";
import About from "@/components/marketing/About";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screens />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
