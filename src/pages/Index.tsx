import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Brain, TrendingUp, Users, Zap, Target, Globe, Factory, ShoppingCart, Briefcase, Heart, Truck, Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import stefanoImg from "/lovable-uploads/8c338c9d-5fa7-438c-afcb-c4b454ad5327.png";
import servicesImg from "@/assets/services-icons.jpg";
import bookCover from "/lovable-uploads/d94ef871-d355-4836-a06f-72ddd3e42107.png";

const Index = () => {
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
              L'AI Evangelist che Trasforma le PMI Italiane
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Autore di "Parti dall'AI" e "Il Futuro Non È Scritto" - Dalla formazione all'implementazione, 
              accompagniamo le PMI verso la digital transformation con soluzioni AI concrete e ROI immediato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="cta" size="xl" className="group">
                Richiedi Consulenza Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
              Quattro pilastri per la tua trasformazione digitale
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
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Digital Marketing AI-Enhanced</CardTitle>
                    <CardDescription>Marketing potenziato dall'intelligenza artificiale</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Content marketing con AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Marketing automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Analytics predittive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-glow/20 rounded-lg">
                    <Zap className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Supporto Continuativo</CardTitle>
                    <CardDescription>Accompagnamento costante nella crescita</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Abbonamento mensile</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>AI Tutor on-demand</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Monitoraggio metriche</span>
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
                
                <Button variant="ai" size="lg" className="group">
                  Scopri i Libri di Stefano
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute -top-4 -right-4 w-32 h-40 bg-card rounded-lg shadow-glow p-2 animate-float">
                  <img 
                    src={bookCover} 
                    alt="Il Futuro Non È Scritto" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
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

      {/* Call to Action Finale */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Inizia la Tua Trasformazione AI Oggi</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Consulenza gratuita di 30 minuti per valutare le opportunità AI nella tua azienda
            </p>
            <Button variant="cta" size="xl" className="group">
              Prenota Consulenza Gratuita
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

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
                <li><a href="#" className="hover:text-primary-glow transition-colors">Formazione AI</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Consulenza Strategica</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Supporto Continuativo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Risorse</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary-glow transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Webinar</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Toolkit</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@avmediatrend.com</li>
                <li>Tel: +39 123 456 7890</li>
                <li>LinkedIn: /stefano-andrello</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AV Media Trend. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
