import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
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
            <Link 
              to="/servizi" 
              className={`text-sm font-medium transition-colors ${
                isActive("/servizi") ? "text-primary-glow" : "hover:text-primary-glow"
              }`}
            >
              Servizi
            </Link>
            <Link 
              to="/chi-siamo" 
              className={`text-sm font-medium transition-colors ${
                isActive("/chi-siamo") ? "text-primary-glow" : "hover:text-primary-glow"
              }`}
            >
              Chi Siamo
            </Link>
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
          <Link to="/contatti/consulenza-gratuita">
            <Button variant="cta" size="sm">
              Consulenza Gratuita
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
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
                <li><Link to="/servizi/digital-marketing" className="hover:text-primary-glow transition-colors">Digital Marketing</Link></li>
                <li><Link to="/servizi/supporto-continuativo" className="hover:text-primary-glow transition-colors">Supporto Continuativo</Link></li>
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
    </div>
  );
};

export default Layout;