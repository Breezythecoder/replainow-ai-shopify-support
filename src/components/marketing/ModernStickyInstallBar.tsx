import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernStickyInstallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-strong border-t border-white/30 p-3 z-40 md:hidden backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-4">
          <div className="font-black text-sm text-slate-800">{t("ui.stickyInstallBar.title")}</div>
          <div className="text-xs text-slate-600 font-medium">{t("ui.stickyInstallBar.subtitle")}</div>
        </div>
        <Button 
          asChild 
          variant="cta" 
          size="sm" 
          className="px-4 py-2 font-bold shadow-neon whitespace-nowrap"
        >
          <a href={OAUTH_URL}>
            {t("ui.stickyInstallBar.cta")}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ModernStickyInstallBar;