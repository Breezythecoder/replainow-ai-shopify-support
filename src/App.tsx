import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkipToMainContent, useKeyboardNavigation } from "@/components/ui/accessibility";
import { trackWebVitals } from "@/components/ui/performance";
import Index from "./pages/Index";
import IndexEn from "./pages/Index.en";
import IndexEs from "./pages/Index.es";
import IndexFr from "./pages/Index.fr";
import IndexPt from "./pages/Index.pt";
import IndexIt from "./pages/Index.it";
import IndexNl from "./pages/Index.nl";
import IndexZh from "./pages/Index.zh";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UninstallInstructions from "./pages/UninstallInstructions";
import SecurityStatement from "./pages/SecurityStatement";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";


import ContrastAuditor from "@/components/dev/ContrastAuditor";
import DesignAuditor from "@/components/dev/DesignAuditor";
import ScrollProgress from "@/components/ui/ScrollProgress";
// import ExitIntent from "@/components/ui/ExitIntent"; // Removed - no discount popup
import SkipLinks from "@/components/ui/SkipLinks";

const queryClient = new QueryClient();

const AppContent = () => {
  useKeyboardNavigation();
  
  // Initialize performance tracking
  useEffect(() => {
    trackWebVitals();
    
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
      <SkipToMainContent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<IndexEn />} />
          <Route path="/es" element={<IndexEs />} />
          <Route path="/fr" element={<IndexFr />} />
          <Route path="/pt" element={<IndexPt />} />
          <Route path="/it" element={<IndexIt />} />
          <Route path="/nl" element={<IndexNl />} />
          <Route path="/zh" element={<IndexZh />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/uninstall" element={<UninstallInstructions />} />
          <Route path="/security" element={<SecurityStatement />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
