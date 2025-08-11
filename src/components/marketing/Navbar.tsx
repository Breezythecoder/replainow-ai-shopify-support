import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" aria-label="ReplAInow Start" className="flex items-center gap-2 font-semibold">
          <span className="font-display text-lg">ReplAInow</span>
          <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "hsl(var(--brand-primary))" }} />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors story-link">Features</a>
          <a href="#live-demo" className="text-muted-foreground hover:text-foreground transition-colors story-link">Demo</a>
          <a href="#preise" className="text-muted-foreground hover:text-foreground transition-colors story-link">Preise</a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors story-link">Kontakt</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero">
            <a href={OAUTH_URL} aria-label="Jetzt kostenlos testen">Jetzt kostenlos testen</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
