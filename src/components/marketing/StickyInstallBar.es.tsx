import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const StickyInstallBarEs = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const y = window.scrollY;
      setVisible(y > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="container">
        <div className="relative mx-auto flex flex-col sm:flex-row items-center gap-3 rounded-xl border bg-card/95 backdrop-blur px-4 py-3 shadow-brand">
          <p className="text-sm sm:text-base text-muted-foreground flex-1 text-center sm:text-left">
            Listo en 2 minutos – 14 días de prueba gratis.
          </p>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="lg"
              variant="hero"
              onClick={() => {
                toast({ title: "Redirigiendo a Shopify App Store…" });
                console.log("analytics:event", {
                  category: "cta",
                  action: "click",
                  label: "sticky_install_bar",
                });
              }}
            >
              <a href={OAUTH_URL} aria-label="Instalar ahora">Instalar ahora</a>
            </Button>
            <button
              aria-label="Cerrar barra"
              className="p-2 rounded-md hover:bg-muted text-muted-foreground"
              onClick={() => setDismissed(true)}
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyInstallBarEs;