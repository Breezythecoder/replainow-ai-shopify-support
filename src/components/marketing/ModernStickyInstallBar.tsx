import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernStickyInstallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-strong border-t border-white/30 p-3 z-40 md:hidden backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-4">
          <div className="font-black text-sm text-slate-800">ReplAInow AI Helpdesk</div>
          <div className="text-xs text-slate-600 font-medium">19/Monat  14 days free  4.9</div>
        </div>
        <Button 
          asChild 
          variant="cta" 
          size="sm" 
          className="px-4 py-2 font-bold shadow-neon whitespace-nowrap"
        >
          <a href={OAUTH_URL}>
            Installieren
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ModernStickyInstallBar;