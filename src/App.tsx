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
import DigitalMarketing from "./pages/servizi/DigitalMarketing";
import SupportoContinuativo from "./pages/servizi/SupportoContinuativo";
import ChiSiamoIndex from "./pages/chi-siamo/Index";
import Metodologia from "./pages/chi-siamo/Metodologia";
import LibroAi from "./pages/chi-siamo/LibroAi";
import Blog from "./pages/risorse/Blog";
import CaseStudies from "./pages/risorse/CaseStudies";
import Webinar from "./pages/risorse/Webinar";
import Toolkit from "./pages/risorse/Toolkit";
import ContattiIndex from "./pages/contatti/Index";
import ConsulenzaGratuita from "./pages/contatti/ConsulenzaGratuita";
import Auth from "./pages/Auth";
import BlogAdmin from "./pages/admin/BlogAdmin";
import ChatBot from "./pages/ChatBot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servizi" element={<ServiziIndex />} />
              <Route path="/servizi/formazione" element={<Formazione />} />
              <Route path="/servizi/consulenza" element={<Consulenza />} />
              <Route path="/servizi/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/servizi/supporto-continuativo" element={<SupportoContinuativo />} />
              <Route path="/chi-siamo" element={<ChiSiamoIndex />} />
              <Route path="/chi-siamo/metodologia" element={<Metodologia />} />
              <Route path="/chi-siamo/libro-ai" element={<LibroAi />} />
              <Route path="/risorse/blog" element={<Blog />} />
              <Route path="/risorse/case-studies" element={<CaseStudies />} />
              <Route path="/risorse/webinar" element={<Webinar />} />
              <Route path="/risorse/toolkit" element={<Toolkit />} />
              <Route path="/contatti" element={<ContattiIndex />} />
              <Route path="/contatti/consulenza-gratuita" element={<ConsulenzaGratuita />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin/blog" element={<BlogAdmin />} />
              <Route path="/chatbot" element={<ChatBot />} />
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
