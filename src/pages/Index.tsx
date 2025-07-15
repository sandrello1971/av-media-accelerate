import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpen, Brain, TrendingUp, Users, Zap, Target, Globe, Factory, ShoppingCart, Briefcase, Heart, Truck, Rocket, Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/hero-bg.jpg";
import stefanoImg from "/lovable-uploads/8c338c9d-5fa7-438c-afcb-c4b454ad5327.png";
import servicesImg from "@/assets/services-icons.jpg";
import bookCover from "/lovable-uploads/d94ef871-d355-4836-a06f-72ddd3e42107.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione base
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Errore",
        description: "Per favore compila tutti i campi obbligatori",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo presto per discutere le tue esigenze AI.",
      });

      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Errore invio email:', error);
      toast({
        title: "Errore invio",
        description: "Si è verificato un errore durante l'invio. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-background/50 z-10" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
              AI Evangelist & Autore
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent animate-fade-in">
              L'AI che Trasforma le PMI Italiane
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Autore di "Parti dall'AI" e "Il Futuro Non È Scritto" - Dalla formazione all'implementazione, 
              accompagniamo le PMI verso la digital transformation con soluzioni AI concrete e ROI immediato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="/contatti/consulenza-gratuita">
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="tech" size="xl">
                Scopri i Nostri Servizi
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-primary-glow" />
                <span>2 Libri Pubblicati</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-primary-glow" />
                <span>50+ PMI Servite</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-primary-glow" />
                <span>10+ Anni Esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Soluzione Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Trasforma la Tua PMI in Leader di Mercato con l'AI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Metodologie concrete, risultati misurabili, crescita sostenibile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">5%</div>
                <CardTitle className="text-lg">PMI usa AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Solo il 5% delle PMI italiane utilizza attualmente l'intelligenza artificiale
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">34%</div>
                <CardTitle className="text-lg">Mancanza Competenze</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Il 34% indica la mancanza di competenze come principale ostacolo
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">€1.2B</div>
                <CardTitle className="text-lg">Mercato AI Italia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Mercato AI Italia 2024: +58% di crescita annua
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">4.9M</div>
                <CardTitle className="text-lg">PMI Italiane</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  4.9 milioni di PMI italiane pronte per la trasformazione
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servizi Core Section */}
      <section id="servizi" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">I Nostri Servizi Core</h2>
            <p className="text-xl text-muted-foreground">
              Tre pilastri per la tua trasformazione digitale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-glow/20 rounded-lg">
                    <Brain className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Formazione AI & Digital Innovation</CardTitle>
                    <CardDescription>Workshop e corsi personalizzati</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Workshop personalizzati per PMI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Corsi online e offline</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Credito d'imposta Formazione 4.0</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Consulenza Strategica</CardTitle>
                    <CardDescription>Roadmap personalizzate per l'innovazione</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Assessment digitale completo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Roadmap AI implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Project management innovazione</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">🧠 Pacchetti di Consulenza AI</CardTitle>
                    <CardDescription>Soluzioni modulari e scalabili</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>AI Starter - Per iniziare</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>AI Pilot - Progetto pilota</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>AI Partner - Supporto continuativo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chi è Stefano Andrello */}
      <section id="chi-siamo" className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                  AI Evangelist, Formatore, Consulente e Autore
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Chi è Stefano Andrello</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Con oltre 10 anni di esperienza nel digital marketing e due libri pubblicati 
                  sull'intelligenza artificiale, Stefano Andrello guida le PMI italiane nell'adozione 
                  pratica e strategica dell'AI.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Due Libri Pubblicati</h3>
                      <p className="text-sm text-muted-foreground">Parti dall'AI & Il Futuro Non È Scritto</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">50+ PMI Servite</h3>
                      <p className="text-sm text-muted-foreground">Progetti di trasformazione digitale</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">10+ Settori</h3>
                      <p className="text-sm text-muted-foreground">Esperienza diversificata</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Metodologie Proprietarie</h3>
                      <p className="text-sm text-muted-foreground">VOICE, BRIDGE, INSIGHT, CONVERT</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="ai" size="lg" className="group" asChild>
                  <Link to="/chi-siamo/libri-stefano">
                    Scopri i Libri di Stefano
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <img 
                    src={stefanoImg} 
                    alt="Stefano Andrello" 
                    className="rounded-2xl shadow-elevated w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating book covers */}
                <a 
                  href="https://www.amazon.it/dp/B0F8K8367C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-4 -right-4 w-32 h-40 bg-card rounded-lg shadow-glow p-2 animate-float hover:scale-105 transition-transform cursor-pointer"
                >
                  <img 
                    src={bookCover} 
                    alt="Il Futuro Non È Scritto" 
                    className="w-full h-full object-cover rounded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settori Serviti */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Settori Serviti</h2>
            <p className="text-xl text-muted-foreground">
              Esperienza trasversale per ogni tipo di business
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Factory, name: "Manifatturiero", color: "text-primary-glow" },
              { icon: ShoppingCart, name: "Retail & E-commerce", color: "text-secondary" },
              { icon: Briefcase, name: "Servizi Professionali", color: "text-accent" },
              { icon: Rocket, name: "Startup & Scale-up", color: "text-primary-glow" },
              { icon: Heart, name: "Sanità & Wellness", color: "text-secondary" },
              { icon: Truck, name: "Logistica & Trasporti", color: "text-accent" }
            ].map((sector, index) => (
              <Card key={index} className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <sector.icon className={`h-8 w-8 ${sector.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-sm">{sector.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form di Contatto */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">Contattaci per una Consulenza Gratuita</h2>
              <p className="text-xl text-muted-foreground">
                Parliamo delle tue esigenze e scopriamo come l'AI può trasformare la tua PMI
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="border-primary-glow/20 bg-card/80">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Invia un messaggio</CardTitle>
                  <CardDescription>
                    Compila il form e ti contatteremo entro 24 ore
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome e Cognome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Il tuo nome completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tua@email.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Azienda</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome della tua azienda"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Messaggio *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descrivi le tue esigenze e obiettivi con l'AI..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="cta" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Informazioni di contatto */}
              <div className="space-y-8">
                <Card className="border-primary-glow/20 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Informazioni di Contatto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-glow/20 rounded-lg">
                        <Mail className="h-5 w-5 text-primary-glow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-muted-foreground">info@avmediatrend.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-glow/20 rounded-lg">
                        <Phone className="h-5 w-5 text-primary-glow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Telefono</h4>
                        <p className="text-muted-foreground">+39 347 685 9801</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-glow/20 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary-glow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/company/avmediatrend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-glow hover:text-primary-glow/80 transition-colors"
                        >
                          /company/avmediatrend
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-primary-glow/20 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Consulenza Gratuita</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Prenota una consulenza gratuita di 30 minuti per valutare le opportunità AI nella tua azienda.
                    </p>
                    <Link to="/contatti/consulenza-gratuita">
                      <Button variant="ai" className="w-full group">
                        Prenota Consulenza
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Finale */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Inizia la Tua Trasformazione AI Oggi</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Consulenza gratuita di 30 minuti per valutare le opportunità AI nella tua azienda
            </p>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="/contatti/consulenza-gratuita">
                Prenota Consulenza Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
