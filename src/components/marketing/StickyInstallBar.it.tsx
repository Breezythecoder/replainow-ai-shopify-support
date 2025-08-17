import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const StickyInstallBarIt = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg border-t">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-medium text-sm">
            Pronto per trasformare il tuo supporto clienti?
          </p>
          <p className="text-xs text-primary-foreground/80">
            Prova gratuita di 14 giorni • Nessuna carta di credito necessaria
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="hero" className="whitespace-nowrap">
            <a href={OAUTH_URL}>Installa ora</a>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground/70 hover:text-primary-foreground"
            aria-label="Chiudi"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyInstallBarIt;