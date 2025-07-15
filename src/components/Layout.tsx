import React, { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Menu, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingChatBot from '@/components/FloatingChatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div></div> {/* Empty space where logo was */}
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 p-3 rounded-lg bg-background/20 backdrop-blur-sm border border-white/20 hover:bg-background/30 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <div className="space-y-6 text-center">
                  <div className="space-y-4">
                    <div className="text-2xl font-medium text-primary-glow mb-4">Servizi</div>
                    <div className="space-y-2 pl-4">
                      <Link 
                        to="/servizi" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Panoramica Servizi
                      </Link>
                      <Link 
                        to="/servizi/formazione" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Formazione AI
                      </Link>
                      <Link 
                        to="/servizi/consulenza" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Consulenza Strategica
                      </Link>
                      <Link 
                        to="/servizi/pacchetti-consulenza" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        🧠 Pacchetti di Consulenza AI
                      </Link>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-medium text-primary-glow mb-4">Chi Siamo</div>
                    <div className="space-y-2 pl-4">
                      <Link 
                        to="/chi-siamo" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Panoramica
                      </Link>
                      <Link 
                        to="/chi-siamo/metodologia" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Metodologia
                      </Link>
                      <Link 
                        to="/chi-siamo/libri-stefano" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Libri di Stefano
                      </Link>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-medium text-primary-glow mb-4">Risorse</div>
                    <div className="space-y-2 pl-4">
                      <Link 
                        to="/risorse/blog" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link 
                        to="/risorse/case-studies" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Case Studies
                      </Link>
                      <Link 
                        to="/risorse/webinar" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Webinar
                      </Link>
                      <Link 
                        to="/risorse/toolkit" 
                        className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Toolkit
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contatti" 
                    className="block text-2xl font-medium text-primary-glow hover:text-primary-glow/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contatti
                  </Link>
                  
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className="flex items-center justify-center text-2xl font-medium text-primary-glow hover:text-primary-glow/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Settings className="h-6 w-6 mr-2" />
                      Admin
                    </Link>
                  )}
                </div>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-primary-glow hover:bg-primary-glow/90 text-background font-semibold px-8"
                  asChild
                >
                  <Link to="/contatti/consulenza-gratuita" onClick={() => setIsMobileMenuOpen(false)}>
                    Consulenza Gratuita
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/dc135068-69c9-482a-a7fb-985bfd43d140.png" 
                  alt="AV Media Trend" 
                  className="h-8 w-auto"
                />
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