import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SkipToMainContent, useKeyboardNavigation } from "@/components/ui/accessibility";
import { trackWebVitals } from "@/components/ui/performance";
import { initWebVitals } from "@/utils/webVitals";
import { initializeGA, trackPageView } from "@/utils/analytics";
import { SEOHead } from "@/components/SEOHead";
import { getLocaleFromPath } from "@/i18n";
import Index from "./pages/Index";
import IndexEn from "./pages/IndexEn";
import IndexEs from "./pages/IndexEs";
import IndexFr from "./pages/IndexFr";
import { lazy, Suspense } from "react";

// Lazy load legal pages for better performance
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const UninstallInstructions = lazy(() => import("./pages/UninstallInstructions"));
const SecurityStatement = lazy(() => import("./pages/SecurityStatement"));
const Impressum = lazy(() => import("./pages/Impressum"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SEO Pillar Pages
const AIShopifyHelpdesk = lazy(() => import("./pages/AIShopifyHelpdesk"));
const MultilingualSupport = lazy(() => import("./pages/MultilingualSupport"));
const ShopifyCustomerService = lazy(() => import("./pages/ShopifyCustomerService"));
const GorgiasAlternative = lazy(() => import("./pages/GorgiasAlternative"));
const IntercomAlternative = lazy(() => import("./pages/IntercomAlternative"));
const ShopifyAISupport = lazy(() => import("./pages/ShopifyAISupport"));

// SEO Utility Pages
const SitemapXML = lazy(() => import("./pages/SitemapXML"));
const RobotsTXT = lazy(() => import("./pages/RobotsTXT"));
const LLMFactsJSON = lazy(() => import("./pages/LLMFactsJSON"));


import ContrastAuditor from "@/components/dev/ContrastAuditor";
import DesignAuditor from "@/components/dev/DesignAuditor";
import ScrollProgress from "@/components/ui/ScrollProgress";
// import ExitIntent from "@/components/ui/ExitIntent"; // Removed - no discount popup
import SkipLinks from "@/components/ui/SkipLinks";

const queryClient = new QueryClient();

const AppContent = () => {
  useKeyboardNavigation();
  
  // Get current locale from pathname
  const pathname = window.location.pathname;
  const locale = getLocaleFromPath(pathname);
  
  // Initialize performance tracking
  useEffect(() => {
    trackWebVitals();
    initWebVitals();
    initializeGA();
  
    // Hash routing is handled automatically by HashRouter
  
  // Register Service Worker for perfect performance
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  }
  }, []);

  return (
    <>
      <SEOHead locale={locale} pathname={pathname} />
      <SkipToMainContent />
        <BrowserRouter basename="/">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                <p className="text-blue-200">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/en" element={<IndexEn />} />
              <Route path="/fr" element={<IndexFr />} />
              <Route path="/es" element={<IndexEs />} />
              
                {/* SEO Pillar Pages */}
                <Route path="/ai-shopify-helpdesk" element={<AIShopifyHelpdesk />} />
                <Route path="/multilingual-support" element={<MultilingualSupport />} />
                <Route path="/shopify-customer-service" element={<ShopifyCustomerService />} />
                <Route path="/gorgias-alternative" element={<GorgiasAlternative />} />
                <Route path="/intercom-alternative" element={<IntercomAlternative />} />
                <Route path="/shopify-ai-support" element={<ShopifyAISupport />} />
              
              {/* SEO Utility Routes */}
              <Route path="/sitemap.xml" element={<SitemapXML />} />
              <Route path="/robots.txt" element={<RobotsTXT />} />
              <Route path="/.well-known/llm-facts.json" element={<LLMFactsJSON />} />
              
              {/* Legal Pages */}
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
        </BrowserRouter>
        <SkipLinks />
        <ScrollProgress />
        {/* <ExitIntent /> */} {/* Removed - no discount popup */}
        {import.meta.env.MODE === 'development' && (
          <>
            <ContrastAuditor />
            <DesignAuditor />
          </>
        )}
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
