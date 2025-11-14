import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const LegalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-elevation-3' : 'bg-white/80 backdrop-blur-md'}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-8">
        
        {/* Logo - Premium */}
        <Link to="/" aria-label="ReplAInow Home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/lovable-uploads/ReplAInow_Logo_optimized.png"
              alt="ReplAInow Logo"
              className="relative h-10 w-10 group-hover:scale-110 transition-transform duration-300"
              width="40"
              height="40"
              loading="eager"
            />
          </div>
          
          <div className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
            Repl<span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">AI</span>now
          </div>
        </Link>
        
        {/* Desktop Navigation - Simple */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="relative text-sm font-semibold transition-colors duration-200 text-gray-900 hover:text-purple-700 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <LanguageSwitcher variant="desktop" />
        </div>
        
        {/* CTA Button - PURPLE! */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <a
              href={OAUTH_URL}
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Kostenlos starten</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LegalNavbar;

