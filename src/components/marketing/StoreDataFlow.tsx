import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, User, FileText, Truck, Languages, Bot } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const Card = ({
  Icon,
  title,
  desc,
  className = "",
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  className?: string;
}) => (
  <div
    className={`rounded-xl border bg-card p-4 shadow-sm animate-fade-in ${className}`}
  >
    <div className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-brand">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-medium leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const StoreDataFlow = () => {
  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  return (
    <section
      id="data-context"
      aria-labelledby="data-context-heading"
      className="relative py-16 md:py-24 bg-muted/40 overflow-hidden"
    >
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full blur-3xl bg-gradient-primary" />
      </div>

      <div className="container relative">
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2
            id="data-context-heading"
            className="font-display text-3xl md:text-4xl font-semibold mb-4"
          >
            Deine KI kennt deinen Shopify-Store  bis ins Detail
          </h2>
          <p className="text-muted-foreground">
            ReplAInow verbindet sich direkt mit deinem Shopify-Store und zieht in Echtzeit alle relevanten Daten, um Kundenanfragen sofort und przise zu beantworten.
          </p>
        </header>

        {/* Visual layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop/Tablet: radial layout with connections */}
          <div className="relative hidden md:block">
            {/* Center mockup */}
            <div className="relative mx-auto w-full max-w-[720px] h-80 rounded-2xl border bg-card shadow-brand-glow overflow-hidden">
              {/* Browser top bar */}
              <div className="flex items-center gap-2 h-10 px-4 border-b bg-muted/50">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="ml-4 text-xs text-muted-foreground">Shopify Admin</span>
              </div>
              {/* Mock content */}
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-lg border bg-background p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 w-28 rounded bg-muted/60" />
                    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Bot className="h-4 w-4" /> KI aktiv
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-muted/50" />
                    <div className="h-3 w-2/3 rounded bg-muted/40" />
                    <div className="h-3 w-1/2 rounded bg-muted/30" />
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <div className="h-3 w-1/2 rounded bg-muted/50 mb-3" />
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded bg-muted/40" />
                    <div className="h-2.5 w-5/6 rounded bg-muted/30" />
                    <div className="h-2.5 w-3/4 rounded bg-muted/20" />
                  </div>
                </div>
              </div>

              {/* connection canvas (decorative lines) */}
              <svg className="pointer-events-none absolute inset-0" viewBox="0 0 720 320" fill="none">
                {/* Lines from approximate card anchors to mockup center */}
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M60 40 C 140 80, 220 60, 280 100" stroke="url(#g)" strokeWidth="2" />
                <path d="M660 40 C 540 80, 500 60, 420 100" stroke="url(#g)" strokeWidth="2" />
                <path d="M40 180 C 160 160, 200 180, 280 160" stroke="url(#g)" strokeWidth="2" />
                <path d="M680 180 C 560 160, 520 180, 440 160" stroke="url(#g)" strokeWidth="2" />
                <path d="M120 300 C 200 260, 240 240, 300 220" stroke="url(#g)" strokeWidth="2" />
                <path d="M600 300 C 520 260, 480 240, 420 220" stroke="url(#g)" strokeWidth="2" />
              </svg>
            </div>

            {/* Surrounding cards */}
            <div className="absolute inset-0">
              <div className="absolute -top-4 left-0 w-64">
                <Card
                  Icon={ShoppingCart}
                  title="Order-Daten"
                  desc="Bestell-ID, Status, Artikel, Tracking"
                />
              </div>
              <div className="absolute -top-4 right-0 w-64">
                <Card Icon={Package} title="Produkt-Daten" desc="Titel, SKUs, Preise, Bestand" />
              </div>
              <div className="absolute top-1/3 -left-2 w-64">
                <Card Icon={User} title="Kunden-Daten" desc="Name, E-Mail, Kaufhistorie" />
              </div>
              <div className="absolute top-1/3 -right-2 w-64">
                <Card Icon={FileText} title="Store-Content" desc="Seiten, FAQs, Versandregeln" />
              </div>
              <div className="absolute bottom-0 left-4 w-64">
                <Card Icon={Truck} title="Tracking & Versand" desc="Live-Links, Lieferzeiten" />
              </div>
              <div className="absolute bottom-0 right-4 w-64">
                <Card Icon={Languages} title="Mehrsprachig" desc="Bevorzugte Sprachen" />
              </div>
            </div>
          </div>

          {/* Mobile: stacked grid */}
          <div className="md:hidden">
            <div className="rounded-2xl border bg-card shadow-sm p-5 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="h-4 w-24 rounded bg-muted/60" />
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Bot className="h-4 w-4" /> KI aktiv
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded bg-muted/50" />
                <div className="h-3 w-2/3 rounded bg-muted/40" />
                <div className="h-3 w-1/2 rounded bg-muted/30" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card Icon={ShoppingCart} title="Order-Daten" desc="Bestell-ID, Status, Artikel, Tracking" />
              <Card Icon={Package} title="Produkt-Daten" desc="Titel, SKUs, Preise, Bestand" />
              <Card Icon={User} title="Kunden-Daten" desc="Name, E-Mail, Kaufhistorie" />
              <Card Icon={FileText} title="Store-Content" desc="Seiten, FAQs, Versandregeln" />
              <Card Icon={Truck} title="Tracking & Versand" desc="Live-Links, Lieferzeiten" />
              <Card Icon={Languages} title="Mehrsprachig" desc="Bevorzugte Sprachen" />
            </div>
          </div>
        </div>

        {/* Caption + CTA */}
        <div className="text-center max-w-3xl mx-auto mt-10 md:mt-14">
          <p className="text-muted-foreground">
            ReplAInow nutzt diese Daten, um in &lt;3 Sekunden markenkonforme, przise Antworten zu liefern  voll integriert in Shopify.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <a href={OAUTH_URL}>Jetzt kostenlos testen</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')} className="cursor-pointer">Live-Demo ansehen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDataFlow;
