import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const NavbarPt = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href={`/pt`} aria-label="ReplAInow Início" className="flex items-center gap-2 font-semibold">
          <img src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" alt="ReplAInow Logo com Ícone" className="h-7 w-auto" />
          <span className="sr-only">ReplAInow</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors story-link">Recursos</a>
          <a href="#live-demo" className="text-muted-foreground hover:text-foreground transition-colors story-link">Demo</a>
          <a href="#preise" className="text-muted-foreground hover:text-foreground transition-colors story-link">Preços</a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors story-link">Contato</a>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">DE</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero">
            <a href={OAUTH_URL} aria-label="Testar grátis agora">Testar grátis agora</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPt;