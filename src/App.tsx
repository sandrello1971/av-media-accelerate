import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import ServiziIndex from "./pages/servizi/Index";
import Formazione from "./pages/servizi/Formazione";
import Consulenza from "./pages/servizi/Consulenza";
import PacchettiConsulenza from "./pages/servizi/PacchettiConsulenza";
import ChiSiamoIndex from "./pages/chi-siamo/Index";
import Metodologia from "./pages/chi-siamo/Metodologia";
import LibroAi from "./pages/chi-siamo/LibroAi";
import LibriStefano from "./pages/chi-siamo/LibriStefano";
import Blog from "./pages/risorse/Blog";
import CaseStudies from "./pages/risorse/CaseStudies";
import Webinar from "./pages/risorse/Webinar";
import Toolkit from "./pages/risorse/Toolkit";
import ContattiIndex from "./pages/contatti/Index";
import ConsulenzaGratuita from "./pages/contatti/ConsulenzaGratuita";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/Index";
import BlogAdmin from "./pages/admin/BlogAdmin";
import ChatBot from "./pages/ChatBot";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import { CookieBanner } from "@/components/CookieBanner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CookieBanner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servizi" element={<ServiziIndex />} />
              <Route path="/servizi/formazione" element={<Formazione />} />
              <Route path="/servizi/consulenza" element={<Consulenza />} />
              <Route path="/servizi/pacchetti-consulenza" element={<PacchettiConsulenza />} />
              <Route path="/chi-siamo" element={<ChiSiamoIndex />} />
              <Route path="/chi-siamo/metodologia" element={<Metodologia />} />
              <Route path="/chi-siamo/libro-ai" element={<LibroAi />} />
              <Route path="/chi-siamo/libri-stefano" element={<LibriStefano />} />
              <Route path="/risorse/blog" element={<Blog />} />
              <Route path="/risorse/case-studies" element={<CaseStudies />} />
              <Route path="/risorse/webinar" element={<Webinar />} />
              <Route path="/risorse/toolkit" element={<Toolkit />} />
              <Route path="/contatti" element={<ContattiIndex />} />
              <Route path="/contatti/consulenza-gratuita" element={<ConsulenzaGratuita />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<BlogAdmin />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
