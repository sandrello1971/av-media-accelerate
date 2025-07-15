import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, TrendingUp, Zap, BookOpen, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";

const ServiziIndex = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
              Servizi Completi per la Digital Transformation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              I Nostri Servizi
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Quattro pilastri per accompagnare la tua PMI nella trasformazione digitale: 
              dalla formazione all'implementazione, con risultati concreti e ROI immediato.
            </p>
            
            <Link to="/contatti/consulenza-gratuita">
              <Button variant="cta" size="xl" className="group">
                Richiedi Consulenza Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servizi Core */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                <p className="text-muted-foreground mb-6">
                  Corsi pratici e workshop specializzati per portare le competenze AI nella tua PMI. 
                  Formazione certificata con possibilità di credito d'imposta Formazione 4.0.
                </p>
                <ul className="space-y-2 text-sm mb-6">
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
                <Link to="/servizi/formazione">
                  <Button variant="ai" className="group">
                    Scopri di Più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
                <p className="text-muted-foreground mb-6">
                  Analisi completa del tuo business e creazione di roadmap AI personalizzate. 
                  Dalla strategia all'implementazione, ti guidiamo in ogni fase.
                </p>
                <ul className="space-y-2 text-sm mb-6">
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
                <Link to="/servizi/consulenza">
                  <Button variant="tech" className="group">
                    Scopri di Più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
                <p className="text-muted-foreground mb-6">
                  Strategie di marketing potenziate dall'AI per aumentare le conversioni 
                  e ottimizzare il ROI delle tue campagne digital.
                </p>
                <ul className="space-y-2 text-sm mb-6">
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
                <Link to="/servizi/digital-marketing">
                  <Button variant="cta" className="group">
                    Scopri di Più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
                <p className="text-muted-foreground mb-6">
                  Supporto mensile con AI Tutor dedicato per garantire l'evoluzione continua 
                  dei tuoi processi e l'ottimizzazione delle performance.
                </p>
                <ul className="space-y-2 text-sm mb-6">
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
                <Link to="/servizi/supporto-continuativo">
                  <Button variant="ai" className="group">
                    Scopri di Più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Perché Scegliere AV Media Trend</h2>
            <p className="text-xl text-muted-foreground">
              Esperienza, competenza e risultati concreti per la tua PMI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-glow/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary-glow" />
                </div>
                <CardTitle>Esperienza Comprovata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Autore di due libri sull'AI e oltre 10 anni di esperienza nel digital marketing
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>50+ PMI Servite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Esperienza diretta con piccole e medie imprese in diversi settori
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Metodologie Proprietarie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Framework VOICE, BRIDGE, INSIGHT e CONVERT testati e validati
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Inizia la Tua Trasformazione AI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri come l'intelligenza artificiale può rivoluzionare la tua PMI
            </p>
            <Link to="/contatti/consulenza-gratuita">
              <Button variant="cta" size="xl" className="group">
                Prenota Consulenza Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiziIndex;