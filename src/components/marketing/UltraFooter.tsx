import { Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/i18n";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { contentPageUrls } from "@/i18n/contentUrls";

const UltraFooter = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { locale: currentLocale } = useLocale();

  // Detect current locale prefix from pathname (for legacy getPageLink)
  const localePrefix = location.pathname.startsWith("/en")
    ? "/en"
    : location.pathname.startsWith("/es")
    ? "/es"
    : location.pathname.startsWith("/fr")
    ? "/fr"
    : "";

  // Check if we're on homepage or content/legal page
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/en" ||
    location.pathname === "/es" ||
    location.pathname === "/fr";

  // Smart link helper: if not on homepage, link to /#anchor, otherwise just #anchor
  const getAnchorLink = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  // Locale-aware page link: adds locale prefix to maintain current language
  // Legal pages ARE locale-routed but content stays English - keeps nav/footer in user's language!
  const getPageLink = (path: string) => {
    return `${localePrefix}${path}`;
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle mesh gradient like other sections */}
      <div className="absolute inset-0 bg-mesh-purple opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-black text-gray-900 tracking-wide">
                Repl
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  AI
                </span>
                now
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              {t("common.footer.company.tagline")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/replainow"
                aria-label="ReplAInow auf Twitter folgen"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/replainow"
                aria-label="ReplAInow auf LinkedIn folgen"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@replainow.com"
                aria-label="E-Mail an ReplAInow Support senden"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-all text-gray-700 hover:text-purple-700"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Produkt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getAnchorLink("features")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.features")}
                </a>
              </li>
              <li>
                <a
                  href={getAnchorLink("pricing")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.pricing")}
                </a>
              </li>
              <li>
                <a
                  href={getAnchorLink("live-demo")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.demo")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Ressourcen</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={contentPageUrls.automatisierung[currentLocale]}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.automation")}
                </a>
              </li>
              <li>
                <a
                  href={contentPageUrls.support247[currentLocale]}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.support247")}
                </a>
              </li>
              <li>
                <a
                  href={contentPageUrls.kostenSenken[currentLocale]}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.costs")}
                </a>
              </li>
              <li>
                <a
                  href={getAnchorLink("faq")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/contact")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.links.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">
              {t("common.footer.legal.title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getPageLink("/privacy")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.privacy")}
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/terms")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.terms")}
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/impressum")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.impressum")}
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/cookies")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.cookies")}
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/security")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.security")}
                </a>
              </li>
              <li>
                <a
                  href={getPageLink("/refund")}
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {t("common.footer.legal.refund")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm border-t border-gray-200 text-gray-600">
          © 2025 ReplAInow. Made with{" "}
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-semibold">
            AI
          </span>{" "}
          in Dubai.
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
