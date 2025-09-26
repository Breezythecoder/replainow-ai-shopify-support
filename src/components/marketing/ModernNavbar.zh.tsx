import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernNavbarZh = () => {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/30 backdrop-blur-lg">
      <nav className="container flex items-center justify-between h-16 px-6">
        <a href="/zh" aria-label="ReplAInow 首页" className="flex items-center gap-3 font-black text-lg">
          <img 
            src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" 
            alt="ReplAInow Logo" 
            className="h-8 w-auto hover:scale-110 transition-transform" 
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            功能
          </a>
          <a href="#live-demo" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            演示
          </a>
          <a href="#preise" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            价格
          </a>
          <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors story-link">
            联系
          </a>
          <LanguageSwitcher variant="desktop" />
        </div>
        
        <div className="flex items-center gap-3">
          <Button asChild variant="cta" size="sm" className="font-bold">
            <a href={OAUTH_URL}>
              免费试用
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default ModernNavbarZh;