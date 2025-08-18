import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const NavbarZh = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="font-display text-xl font-bold">ReplAInow</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition-colors">
            工作原理
          </button>
          <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">
            功能特点
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
            价格
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
            常见问题
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="outline" size="sm">
            <a href="#live-demo">演示</a>
          </Button>
          <Button asChild size="sm">
            <a href={OAUTH_URL}>免费试用</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              工作原理
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              功能特点
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              价格
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              常见问题
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <a href="#live-demo">演示</a>
              </Button>
              <Button asChild size="sm">
                <a href={OAUTH_URL}>免费试用</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarZh;