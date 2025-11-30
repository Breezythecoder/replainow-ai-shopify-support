/**
 * 🎨 PROFESSIONAL FOOTER - Clean & Modern B2B SaaS Design
 * Inspired by: Linear, Stripe, Intercom
 * NO social media icons - professional & clean
 */

import { useTranslation } from "@/i18n";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { contentPageUrls } from "@/i18n/contentUrls";

const UltraFooter = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { locale: currentLocale } = useLocale();

  const localePrefix = location.pathname.startsWith("/en")
    ? "/en"
    : location.pathname.startsWith("/es")
    ? "/es"
    : location.pathname.startsWith("/fr")
    ? "/fr"
    : "";

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/en" ||
    location.pathname === "/es" ||
    location.pathname === "/fr";

  const getAnchorLink = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  const getPageLink = (path: string) => {
    return `${localePrefix}${path}`;
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company / Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                alt="ReplAInow Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold text-white">
                Repl<span className="text-purple-400">AI</span>now
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t("common.footer.company.tagline")}
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Produkt
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  label: t("common.footer.links.features"),
                  href: getAnchorLink("features"),
                },
                {
                  label: t("common.footer.links.pricing"),
                  href: getAnchorLink("pricing"),
                },
                {
                  label: t("common.footer.links.demo"),
                  href: getAnchorLink("live-demo"),
                },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Ressourcen
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  label: t("common.footer.links.automation"),
                  href: contentPageUrls.automatisierung[currentLocale],
                },
                {
                  label: t("common.footer.links.support247"),
                  href: contentPageUrls.support247[currentLocale],
                },
                {
                  label: t("common.footer.links.costs"),
                  href: contentPageUrls.kostenSenken[currentLocale],
                },
                { label: "FAQ", href: getAnchorLink("faq") },
                {
                  label: t("common.footer.links.contact"),
                  href: getPageLink("/contact"),
                },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {t("common.footer.legal.title")}
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  label: t("common.footer.legal.privacy"),
                  href: getPageLink("/privacy"),
                },
                {
                  label: t("common.footer.legal.terms"),
                  href: getPageLink("/terms"),
                },
                {
                  label: t("common.footer.legal.impressum"),
                  href: getPageLink("/impressum"),
                },
                {
                  label: t("common.footer.legal.cookies"),
                  href: getPageLink("/cookies"),
                },
                {
                  label: t("common.footer.legal.security"),
                  href: getPageLink("/security"),
                },
                {
                  label: t("common.footer.legal.refund"),
                  href: getPageLink("/refund"),
                },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ReplAInow. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with{" "}
              <span className="text-purple-400 font-semibold">AI</span> in
              Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
