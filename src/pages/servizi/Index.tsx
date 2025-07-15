import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, TrendingUp, Zap, BookOpen, Users, Award, GraduationCap, Megaphone, Lightbulb, Wrench, FileText, Settings, Rocket, MessageSquare } from "lucide-react";
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
              Sei servizi specializzati per accompagnare la tua PMI nella trasformazione digitale: 
              dalla consulenza strategica alla creazione di contenuti, con risultati concreti e ROI immediato.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consulenza in Intelligenza Artificiale */}
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-glow/20 rounded-lg">
                    <Brain className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Consulenza in Intelligenza Artificiale</CardTitle>
                    <CardDescription>Analisi e strategia AI per PMI</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Analizziamo i tuoi bisogni e progettiamo soluzioni AI accessibili e sostenibili 
                  per trasformare concretamente la tua PMI.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Analisi dei bisogni AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Selezione strumenti AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Valutazione impatto ROI</span>
                  </li>
                </ul>
                <Link to="/servizi/consulenza">
                  <Button variant="ai" className="group">
                    Inizia Ora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Formazione su AI e Innovazione Digitale */}
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Formazione AI & Innovazione</CardTitle>
                    <CardDescription>Workshop e corsi personalizzati</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Percorsi formativi specializzati per team aziendali e professionisti 
                  che vogliono padroneggiare l'AI e l'innovazione digitale.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Workshop pratici "chiavi in mano"</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Formazione personalizzata</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Crediti formativi disponibili</span>
                  </li>
                </ul>
                <Link to="/servizi/formazione">
                  <Button variant="tech" className="group">
                    Scopri i Corsi
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Strategia e comunicazione digitale */}
            <Card className="border-accent/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Megaphone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Strategia & Comunicazione Digitale</CardTitle>
                    <CardDescription>Marketing e branding strategico</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Piani editoriali multicanale, copywriting SEO e personal branding 
                  per posizionare la tua azienda nel mercato digitale.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Strategie multicanale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Copywriting SEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Personal branding</span>
                  </li>
                </ul>
                <Link to="/servizi/digital-marketing">
                  <Button variant="cta" className="group">
                    Potenzia il Brand
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Progettazione di soluzioni digitali innovative */}
            <Card className="border-primary-glow/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-glow/20 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Soluzioni Digitali Innovative</CardTitle>
                    <CardDescription>Web3, blockchain e tecnologie emergenti</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Sviluppiamo MVP e PoC per soluzioni Web3, blockchain e tool emergenti 
                  che rivoluzionano il tuo business model.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Studio e validazione Web3</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Sviluppo MVP e PoC</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span>Integrazione con processi</span>
                  </li>
                </ul>
                <Link to="/contatti/consulenza-gratuita">
                  <Button variant="ai" className="group">
                    Innoviamo Insieme
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Servizi "chiavi in mano" */}
            <Card className="border-secondary/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Servizi "Chiavi in Mano"</CardTitle>
                    <CardDescription>Trasformazione digitale completa</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Supporto completo dalla diagnosi alla messa in produzione, 
                  con coordinamento tecnico e operativo di tutti gli stakeholder.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Diagnosi → Produzione</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Coordinamento completo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Personalizzazione settoriale</span>
                  </li>
                </ul>
                <Link to="/servizi/supporto-continuativo">
                  <Button variant="tech" className="group">
                    Trasforma Ora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Creazione contenuti e valorizzazione della conoscenza */}
            <Card className="border-accent/20 bg-card/80 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Contenuti & Conoscenza</CardTitle>
                    <CardDescription>Produzione editoriale e divulgazione</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Produciamo contenuti editoriali su AI e innovazione, con editing professionale 
                  e supporto alla divulgazione multicanale.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Produzione contenuti AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Editing professionale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Divulgazione multicanale</span>
                  </li>
                </ul>
                <Link to="/contatti">
                  <Button variant="cta" className="group">
                    Crea Valore
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