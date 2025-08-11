import { Link, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const location = useLocation();
  const pathname = location.pathname || "/de";
  const parts = pathname.split("/");
  const current = parts[1] === "de" || parts[1] === "en" ? parts[1] : "de";
  const subpath = parts[1] === "de" || parts[1] === "en" ? "/" + parts.slice(2).join("/") : pathname;

  const makePath = (lang: "de" | "en") => `/${lang}${subpath === "/" ? "" : subpath}`;

  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-card p-1">
      <Link
        to={makePath("de")}
        aria-label="Deutsch"
        className={`px-2 py-1 text-xs rounded-[6px] transition-colors ${current === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        DE
      </Link>
      <Link
        to={makePath("en")}
        aria-label="English"
        className={`px-2 py-1 text-xs rounded-[6px] transition-colors ${current === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
