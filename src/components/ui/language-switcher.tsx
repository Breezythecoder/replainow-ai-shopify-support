import { useLocation } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  variant?: 'mobile' | 'desktop';
}

const LanguageSwitcher = ({ variant = 'mobile' }: LanguageSwitcherProps = {}) => {
  const location = useLocation();
  
  const languages = [
    { code: 'DE', path: '/', name: 'Deutsch' },
    { code: 'EN', path: '/en', name: 'English' },
    { code: 'ES', path: '/es', name: 'Español' },
    { code: 'FR', path: '/fr', name: 'Français' },
    { code: 'IT', path: '/it', name: 'Italiano' },
    { code: 'PT', path: '/pt', name: 'Português' },
    { code: 'NL', path: '/nl', name: 'Nederlands' },
    { code: 'ZH', path: '/zh', name: '中文' },
  ];
  
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return languages[1];
    if (location.pathname.startsWith('/es')) return languages[2];
    if (location.pathname.startsWith('/fr')) return languages[3];
    if (location.pathname.startsWith('/it')) return languages[4];
    if (location.pathname.startsWith('/pt')) return languages[5];
    if (location.pathname.startsWith('/nl')) return languages[6];
    if (location.pathname.startsWith('/zh')) return languages[7];
    return languages[0]; // Default to German
  };
  
  const currentLang = getCurrentLanguage();

  if (variant === 'desktop') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span className="font-medium">{currentLang.code}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="min-w-[140px]"
        >
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} asChild>
              <a 
                href={lang.path} 
                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer ${
                  currentLang.code === lang.code ? 'bg-primary/10 text-primary font-medium' : ''
                }`}
              >
                <span className="text-xs font-medium w-6">{lang.code}</span>
                <span>{lang.name}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full bg-card/95 backdrop-blur border shadow-brand hover:shadow-brand-glow transition-all duration-200 flex items-center gap-2 px-3 py-2"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium">{currentLang.code}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="bg-card/95 backdrop-blur border shadow-brand min-w-[140px] mb-2"
        >
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} asChild>
              <a 
                href={lang.path} 
                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors ${
                  currentLang.code === lang.code ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'
                }`}
              >
                <span className="text-xs font-medium w-6">{lang.code}</span>
                <span>{lang.name}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;