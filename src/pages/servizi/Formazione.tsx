import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Award, Clock, TrendingUp, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Formazione = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
              Formazione AI & Digital Innovation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              Formazione AI per PMI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Workshop personalizzati e corsi pratici per portare l'intelligenza artificiale nella tua PMI. 
              Formazione certificata con possibilità di credito d'imposta Formazione 4.0.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti/consulenza-gratuita">
                <Button variant="cta" size="xl" className="group">
                  Richiedi Preventivo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/risorse/toolkit">
                <Button variant="ai" size="xl">
                  Scarica Toolkit Gratuito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tipologie di Formazione */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Tipologie di Formazione</h2>
            <p className="text-xl text-muted-foreground">
              Soluzioni formative personalizzate per ogni esigenza aziendale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-glow/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary-glow" />
                </div>
                <CardTitle className="text-center">Corso Base AI</CardTitle>
                <CardDescription className="text-center">Introduzione all'intelligenza artificiale</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Cos'è l'AI e come funziona</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Strumenti AI per PMI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Primi passi pratici</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-glow mb-2">€799</div>
                  <div className="text-sm text-muted-foreground">per persona</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-center">Workshop Avanzato</CardTitle>
                <CardDescription className="text-center">Implementazione AI specifica per settore</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Analisi del tuo business</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Roadmap personalizzata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Implementazione pratica</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">€1,999</div>
                  <div className="text-sm text-muted-foreground">per team (max 10 persone)</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-center">Formazione Personalizzata</CardTitle>
                <CardDescription className="text-center">Programma su misura per la tua PMI</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Analisi approfondita</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Contenuti ad hoc</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Supporto post-formazione</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">Da €4,999</div>
                  <div className="text-sm text-muted-foreground">preventivo personalizzato</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metodologie */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Le Nostre Metodologie</h2>
            <p className="text-xl text-muted-foreground">
              Framework proprietari testati e validati con oltre 50 PMI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-xl text-primary-glow">VOICE</CardTitle>
                <CardDescription>Content Creation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Metodologia per creare contenuti AI-powered che convertono
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">BRIDGE</CardTitle>
                <CardDescription>Comunicazione Multilingue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Framework per comunicazione AI multilingue efficace
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-xl text-accent">INSIGHT</CardTitle>
                <CardDescription>Analisi Dati</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Metodologia per trasformare dati in insights azionabili
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-xl text-primary-glow">CONVERT</CardTitle>
                <CardDescription>Website Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sistema per ottimizzare conversioni con AI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credito d'Imposta */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                  Credito d'Imposta Formazione 4.0
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Formazione a Costo Zero</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Approfitta del credito d'imposta per la formazione 4.0 e ottieni 
                  la formazione AI per la tua PMI senza costi aggiuntivi.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Fino al 70%</h3>
                      <p className="text-sm text-muted-foreground">di credito d'imposta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Assistenza Completa</h3>
                      <p className="text-sm text-muted-foreground">dalla pratica al rimborso</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contatti/consulenza-gratuita">
                  <Button variant="cta" size="lg" className="group">
                    Scopri Come Accedere
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-white mb-4">70%</div>
                <div className="text-xl text-white/90 mb-6">Credito d'Imposta</div>
                <div className="text-white/80 text-sm">
                  Per PMI con meno di 250 dipendenti
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Inizia la Tua Formazione AI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trasforma il tuo team in protagonisti della rivoluzione digitale
            </p>
            <Link to="/contatti/consulenza-gratuita">
              <Button variant="cta" size="xl" className="group">
                Richiedi Preventivo Formazione
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formazione;