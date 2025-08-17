import { useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const targetPath = isEnglish ? '/' : '/en';
  const targetLang = isEnglish ? 'DE' : 'EN';
  const currentLang = isEnglish ? 'EN' : 'DE';

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <Button
        asChild
        size="sm"
        variant="outline"
        className="rounded-full bg-card/95 backdrop-blur border shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 px-3 py-2"
      >
        <a href={targetPath} aria-label={`Switch to ${targetLang}`}>
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium">{targetLang}</span>
        </a>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;