import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbarPt = () => {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/30 backdrop-blur-lg">
      <nav className="container flex items-center justify-between h-16 px-6">
        <a href="/pt" aria-label="ReplAInow Início" className="flex items-center gap-3 font-black text-lg">
          <img 
            src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" 
            alt="ReplAInow Logo" 
            className="h-8 w-auto hover:scale-110 transition-transform" 
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            Funcionalidades
          </a>
          <a href="#live-demo" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            Demo
          </a>
          <a href="#preise" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            Preços
          </a>
          <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            Contato
          </a>
          <LanguageSwitcher variant="desktop" />
        </div>
        
        <div className="flex items-center gap-3">
          <Button asChild variant="cta" size="lg" className="font-bold min-h-[44px] min-w-[44px] px-4">
            <a href={OAUTH_URL}>
              Teste Grátis
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default ModernNavbarPt;