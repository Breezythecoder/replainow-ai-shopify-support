import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const StickyInstallBarNl = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setVisible(scrolled && !dismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleInstallClick = () => {
    toast({
      title: "Doorverwijzen naar Shopify App Store",
      description: "Je wordt doorverwezen naar de installatiesite...",
    });
  };

  const handleDismiss = () => {
    setDismissed(true);
    toast({
      title: "Balk verborgen",
      description: "Je kunt de app altijd installeren via de hoofdknop.",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-50 transform transition-transform duration-300">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium">
            Klaar om je klantenservice te automatiseren? Installeer ReplAInow nu!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            asChild 
            variant="secondary" 
            size="sm"
            onClick={handleInstallClick}
          >
            <a href={OAUTH_URL}>Installeren</a>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDismiss}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyInstallBarNl;