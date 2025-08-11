import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const search = location.search;
  const hash = location.hash;

  const isEn = pathname.startsWith("/en");
  const targetPath = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname === "/"
    ? "/en"
    : `/en${pathname}`;

  const target = `${targetPath}${search}${hash}`;
  const label = isEn ? "DE" : "EN";

  return (
    <Button asChild variant="outline" size="sm">
      <a href={target} aria-label={`Switch language to ${label}`}>{label}</a>
    </Button>
  );
};

export default LanguageSwitcher;
