import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Settings } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import FloatingChatBot from "./FloatingChatBot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', user.id)
          .single();
        
        setIsAdmin(data?.role === 'admin');
      } else {
        setIsAdmin(false);
      }
    };
    
    checkAdminStatus();
  }, [user]);
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-glow" />
            <span className="text-xl font-bold text-primary-glow">AV Media Trend</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive("/servizi") ? "text-primary-glow" : "hover:text-primary-glow"
              }`}>
                Servizi
              </span>
              <div className="absolute top-full left-0 mt-2 w-60 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/servizi" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Panoramica Servizi
                </Link>
                <Link to="/servizi/formazione" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Formazione AI
                </Link>
                <Link to="/servizi/consulenza" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Consulenza Strategica
                </Link>
                <Link to="/servizi/pacchetti-consulenza" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  🧠 Pacchetti di Consulenza AI
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className={`text-sm font-medium transition-colors cursor-pointer ${
                isActive("/chi-siamo") ? "text-primary-glow" : "hover:text-primary-glow"
              }`}>
                Chi Siamo
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/chi-siamo" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Panoramica
                </Link>
                <Link to="/chi-siamo/metodologia" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Metodologia
                </Link>
                <Link to="/chi-siamo/libri-stefano" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Libri di Stefano
                </Link>
              </div>
            </div>
            <div className="relative group">
              <span className="text-sm font-medium hover:text-primary-glow transition-colors cursor-pointer">
                Risorse
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/risorse/blog" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Blog
                </Link>
                <Link to="/risorse/case-studies" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Case Studies
                </Link>
                <Link to="/risorse/webinar" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Webinar
                </Link>
                <Link to="/risorse/toolkit" className="block px-4 py-2 text-sm hover:bg-accent/10 hover:text-primary-glow">
                  Toolkit
                </Link>
              </div>
            </div>
            <Link 
              to="/contatti" 
              className={`text-sm font-medium transition-colors ${
                isActive("/contatti") ? "text-primary-glow" : "hover:text-primary-glow"
              }`}
            >
              Contatti
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            {isAdmin && (
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="text-primary-glow hover:text-primary-glow/80">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
            )}
            <Link to="/contatti/consulenza-gratuita">
              <Button variant="cta" size="sm">
                Consulenza Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">{/* Expanded column for main brand */}
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary-glow" />
                <span className="text-lg font-bold text-primary-glow">AV Media Trend</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Accompagniamo le PMI italiane nella trasformazione digitale attraverso l'AI
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Servizi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/servizi/formazione" className="hover:text-primary-glow transition-colors">Formazione AI</Link></li>
                <li><Link to="/servizi/consulenza" className="hover:text-primary-glow transition-colors">Consulenza Strategica</Link></li>
                <li><Link to="/servizi/pacchetti-consulenza" className="hover:text-primary-glow transition-colors">🧠 Pacchetti di Consulenza AI</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Chi Siamo</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/chi-siamo" className="hover:text-primary-glow transition-colors">Panoramica</Link></li>
                <li><Link to="/chi-siamo/metodologia" className="hover:text-primary-glow transition-colors">Metodologia</Link></li>
                <li><Link to="/chi-siamo/libri-stefano" className="hover:text-primary-glow transition-colors">Libri di Stefano</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Risorse</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/risorse/blog" className="hover:text-primary-glow transition-colors">Blog</Link></li>
                <li><Link to="/risorse/case-studies" className="hover:text-primary-glow transition-colors">Case Studies</Link></li>
                <li><Link to="/risorse/webinar" className="hover:text-primary-glow transition-colors">Webinar</Link></li>
                <li><Link to="/risorse/toolkit" className="hover:text-primary-glow transition-colors">Toolkit</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@avmediatrend.com</li>
                <li>Tel: +39 347 685 9801</li>
                <li><a href="https://www.linkedin.com/company/avmediatrend" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">LinkedIn: /company/avmediatrend</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AV Media Trend. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating ChatBot */}
      <FloatingChatBot />
    </div>
  );
};

export default Layout;