import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, CheckCircle, TrendingUp, Users, Clock, Zap, BarChart3, Settings, FileText } from "lucide-react";
import Layout from "@/components/Layout";

const Consulenza = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              Consulenza Strategica AI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent">
              Consulenza Strategica
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Roadmap personalizzate per l'innovazione digitale della tua PMI. 
              Dall'analisi strategica all'implementazione, ti guidiamo verso il successo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti/consulenza-gratuita">
                <Button variant="cta" size="xl" className="group">
                  Consulenza Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/risorse/case-studies">
                <Button variant="tech" size="xl">
                  Vedi Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Consulenza */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Il Nostro Processo</h2>
            <p className="text-xl text-muted-foreground">
              Metodologia strutturata per massimizzare risultati e ROI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">1. Assessment</CardTitle>
                <CardDescription>Analisi completa del business</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Audit digitale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Gap analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Opportunità AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-glow/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary-glow" />
                </div>
                <CardTitle className="text-xl">2. Strategia</CardTitle>
                <CardDescription>Definizione obiettivi e roadmap</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Roadmap AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Budget & timing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>KPI definiti</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-card/80 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">3. Implementazione</CardTitle>
                <CardDescription>Esecuzione del piano strategico</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Setup tecnologico</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Team training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Prime soluzioni</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">4. Monitoraggio</CardTitle>
                <CardDescription>Analisi risultati e ottimizzazione</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Report periodici</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Ottimizzazioni</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Scale-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pacchetti Consulenza */}
      <section className="py-20 bg-gradient-tech">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pacchetti Consulenza</h2>
            <p className="text-xl text-muted-foreground">
              Soluzioni scalabili per ogni dimensione aziendale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>Perfetto per PMI in fase di valutazione</CardDescription>
                  <div className="text-3xl font-bold text-secondary mt-4">€2,999</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Assessment digitale completo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Roadmap AI personalizzata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>3 ore di consulenza</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Report dettagliato</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contatti/consulenza-gratuita">
                    <Button variant="tech" className="w-full">
                      Inizia Subito
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300 transform scale-105">
              <CardHeader>
                <div className="text-center">
                  <Badge className="mb-4 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                    Più Richiesto
                  </Badge>
                  <div className="w-16 h-16 bg-primary-glow/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary-glow" />
                  </div>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideale per PMI che vogliono implementare</CardDescription>
                  <div className="text-3xl font-bold text-primary-glow mt-4">€7,999</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Tutto del pacchetto Starter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Implementazione guidata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>10 ore di consulenza</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Supporto 30 giorni</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-glow" />
                    <span>Training team</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contatti/consulenza-gratuita">
                    <Button variant="cta" className="w-full">
                      Scegli Professional
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>Per PMI che vogliono essere leader</CardDescription>
                  <div className="text-3xl font-bold text-accent mt-4">€19,999</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Tutto del pacchetto Professional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Consulenza illimitata (3 mesi)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Implementazione completa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>AI Tutor dedicato</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>ROI garantito</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/contatti/consulenza-gratuita">
                    <Button variant="ai" className="w-full">
                      Contattaci
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risultati Attesi */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Risultati Attesi</h2>
            <p className="text-xl text-muted-foreground">
              Benefici concreti e misurabili per la tua PMI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary-glow mb-2">+35%</div>
                <CardTitle className="text-lg">Efficienza Processi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automazione e ottimizzazione dei processi interni
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-secondary mb-2">+50%</div>
                <CardTitle className="text-lg">Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Aumento lead qualificati tramite AI marketing
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-accent mb-2">-40%</div>
                <CardTitle className="text-lg">Tempo Decisionale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Decisioni più rapide grazie a insights AI
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary-glow/20 bg-card/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary-glow mb-2">+25%</div>
                <CardTitle className="text-lg">ROI Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ottimizzazione campagne e budget marketing
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
            <h2 className="text-4xl font-bold mb-6">Inizia la Tua Trasformazione</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Consulenza gratuita di 30 minuti per valutare le opportunità AI nella tua azienda
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

export default Consulenza;