import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
