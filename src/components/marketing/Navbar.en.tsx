import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const NavbarEn = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href={`/en`} aria-label="ReplAInow Home" className="flex items-center gap-2 font-semibold">
          <img src="/lovable-uploads/100738e9-73dd-442e-b79a-8b064b5b00c3.png" alt="ReplAInow Logo with Icon" className="h-7 w-auto" />
          <span className="sr-only">ReplAInow</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors story-link">Features</a>
          <a href="#live-demo" className="text-muted-foreground hover:text-foreground transition-colors story-link">Demo</a>
          <a href="#preise" className="text-muted-foreground hover:text-foreground transition-colors story-link">Pricing</a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors story-link">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero">
            <a href={OAUTH_URL} aria-label="Try for free now">Try for free now</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarEn;