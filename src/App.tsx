import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  SkipToMainContent,
  useKeyboardNavigation,
} from "@/components/ui/accessibility";
import { trackWebVitals } from "@/components/ui/performance";
import { initWebVitals } from "@/utils/webVitals";
import { initializeGA } from "@/utils/analytics";
import { SEOHead } from "@/components/SEOHead";
import { initializeAssetLoading } from "@/utils/assetLoader";
import { SEOErrorBoundary } from "@/components/ui/ErrorBoundary";
import { RootErrorBoundary } from "@/components/ui/RootErrorBoundary";
import { initWebVitals as initMonitoringWebVitals } from "@/monitoring/webVitals";
import { I18nOverlay } from "@/debug/I18nOverlay";
import { scanner } from "@/debug/LanguageScanner";
import { lazy, Suspense } from "react";
import { LocaleProvider, useLocale } from "@/i18n/LocaleContext";

// Lazy load routes
const Index = lazy(() => import("./pages/NewIndex"));
const ShopifyBannersPreview = lazy(() => import("./pages/ShopifyBannersPreview"));
const BannersExport = lazy(() => import("./pages/BannersExport"));
const BannerExportRaw = lazy(() => import("./pages/BannerExportRaw"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const UninstallInstructions = lazy(
  () => import("./pages/UninstallInstructions")
);
const SecurityStatement = lazy(() => import("./pages/SecurityStatement"));
const Impressum = lazy(() => import("./pages/Impressum"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AIShopifyHelpdesk = lazy(() => import("./pages/AIShopifyHelpdesk"));
const MultilingualSupport = lazy(() => import("./pages/MultilingualSupport"));
const ShopifyCustomerService = lazy(
  () => import("./pages/ShopifyCustomerService")
);
const GorgiasAlternative = lazy(() => import("./pages/GorgiasAlternative"));
const IntercomAlternative = lazy(() => import("./pages/IntercomAlternative"));
const ShopifyAISupport = lazy(() => import("./pages/ShopifyAISupport"));
const SitemapXML = lazy(() => import("./pages/SitemapXML"));
const RobotsTXT = lazy(() => import("./pages/RobotsTXT"));
const LLMFactsJSON = lazy(() => import("./pages/LLMFactsJSON"));

import ContrastAuditor from "@/components/dev/ContrastAuditor";
import DesignAuditor from "@/components/dev/DesignAuditor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SkipLinks from "@/components/ui/SkipLinks";

const queryClient = new QueryClient();

// Removed InitialRouteHandler - not needed with proper routing

const AppShell = () => {
  useKeyboardNavigation();
  const { locale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.lang = locale;
    trackWebVitals();
    initWebVitals();
    initMonitoringWebVitals();
    initializeGA();
    initializeAssetLoading(locale);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__LANG_SCANNER__ = scanner;

    // No need for URL parameter handling anymore - direct navigation
  }, [locale, location, navigate]);

  return (
    <>
      <SEOErrorBoundary>
        <SEOHead locale={locale} pathname={location.pathname} />
      </SEOErrorBoundary>
      <SkipToMainContent />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <p className="text-blue-100">Loading...</p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shopify-banners" element={<ShopifyBannersPreview />} />
          <Route path="/banners" element={<BannersExport />} />
          <Route path="/banner-raw/:bannerId" element={<BannerExportRaw />} />
          <Route path="/en" element={<Index />} />
          <Route path="/fr" element={<Index />} />
          <Route path="/es" element={<Index />} />
          <Route path="/ai-shopify-helpdesk" element={<AIShopifyHelpdesk />} />
          <Route
            path="/multilingual-support"
            element={<MultilingualSupport />}
          />
          <Route
            path="/shopify-customer-service"
            element={<ShopifyCustomerService />}
          />
          <Route path="/gorgias-alternative" element={<GorgiasAlternative />} />
          <Route
            path="/intercom-alternative"
            element={<IntercomAlternative />}
          />
          <Route path="/shopify-ai-support" element={<ShopifyAISupport />} />
          <Route path="/sitemap.xml" element={<SitemapXML />} />
          <Route path="/robots.txt" element={<RobotsTXT />} />
          <Route
            path="/.well-known/llm-facts.json"
            element={<LLMFactsJSON />}
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/uninstall" element={<UninstallInstructions />} />
          <Route path="/security" element={<SecurityStatement />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <SkipLinks />
      <ScrollProgress />
      {import.meta.env.MODE === "development" && (
        <>
          <ContrastAuditor />
          <DesignAuditor />
        </>
      )}
      <I18nOverlay />
    </>
  );
};

const App = () => (
  <RootErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LocaleProvider>
            <BrowserRouter>
              <AppShell />
            </BrowserRouter>
          </LocaleProvider>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </RootErrorBoundary>
);

export default App;
