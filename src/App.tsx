import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UninstallInstructions from "./pages/UninstallInstructions";
import SecurityStatement from "./pages/SecurityStatement";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

import { useEffect } from "react";
import i18n from "./i18n";

const queryClient = new QueryClient();

const LanguageInitializer = () => {
  const { locale } = useParams();
  useEffect(() => {
    const lang = locale === "en" ? "en" : "de";
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [locale]);
  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/de" replace />} />
          <Route path=":locale" element={<LanguageInitializer />}>
            <Route index element={<Index />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="uninstall" element={<UninstallInstructions />} />
            <Route path="security" element={<SecurityStatement />} />
            <Route path="impressum" element={<Impressum />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
