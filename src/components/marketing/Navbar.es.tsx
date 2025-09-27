import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/ui/language-switcher";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const NavbarEs = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href={`/es`} aria-label="ReplAInow Inicio" className="flex items-center gap-2 font-semibold">
          <img src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" alt="ReplAInow Logo con Icono" className="h-7 w-auto" />
          <span className="sr-only">ReplAInow</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors story-link">Caractersticas</a>
          <a href="#live-demo" className="text-muted-foreground hover:text-foreground transition-colors story-link">Demo</a>
          <a href="#precios" className="text-muted-foreground hover:text-foreground transition-colors story-link">Precios</a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors story-link">Contacto</a>
          <LanguageSwitcher variant="desktop" />
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero">
            <a href={OAUTH_URL} aria-label="Probar gratis ahora">Probar gratis ahora</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarEs;