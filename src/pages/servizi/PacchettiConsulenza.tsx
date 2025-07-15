import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Brain, Target, Users, Clock, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const PacchettiConsulenza = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Brain className="mr-2 h-4 w-4" />
                Pacchetti di Consulenza
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-6">
                🧠 I nostri Pacchetti di Consulenza AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Soluzioni modulari, scalabili e costruite intorno alle esigenze reali di microimprese, 
                PMI, startup ed enti pubblici. Scegli il livello giusto di accompagnamento per avviare, 
                sperimentare o far evolvere l'uso dell'intelligenza artificiale nella tua organizzazione.
              </p>
            </div>
          </div>
        </section>

        {/* Pacchetti di Consulenza */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* AI Starter */}
              <Card className="border-2 border-green-500/20 bg-gradient-to-br from-background via-background to-green-500/5 relative overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <h3 className="text-2xl font-bold text-green-500">AI Starter</h3>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      Perfetto per iniziare
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Perfetto per iniziare, testare e capire cosa può fare davvero l'AI per te.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    Pensato per microimprese, piccole attività e professionisti che vogliono muovere 
                    i primi passi con l'intelligenza artificiale in modo concreto, senza complessità.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Cosa comprende:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Assessment semplificato dei tuoi processi e opportunità</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Workshop introduttivo con te e il tuo team (mezza giornata)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Report operativo con roadmap di priorità</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Formazione pratica su uno strumento AI</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Configurazione/implementazione di uno strumento AI pronto all'uso</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Supporto remoto post-lancio per 1 mese</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Tempistiche:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">4–6 settimane (tutto incluso)</p>
                    <p className="text-sm font-medium mt-2">Modalità: progetto una tantum</p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      📍 Ideale per ottenere risultati rapidi con investimenti contenuti e misurabili.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Pilot */}
              <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-background via-background to-blue-500/5 relative overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      <h3 className="text-2xl font-bold text-blue-500">AI Pilot</h3>
                    </div>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                      Progetto pilota
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Il tuo primo progetto AI, fatto bene e su misura.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    Pensato per PMI strutturate e startup in fase di crescita che vogliono passare 
                    dalla teoria alla pratica con un progetto pilota ad alto valore strategico.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Cosa comprende:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Assessment approfondito di processi, dati e flussi</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Studio di fattibilità e selezione del primo use-case</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Progettazione e sviluppo di una soluzione AI personalizzata</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Formazione operativa rivolta a utenti chiave e tecnici interni</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Deploy della soluzione e prima integrazione nel tuo ambiente aziendale</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Supporto operativo e monitoraggio per 2 mesi post-avvio</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Tempistiche:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">5–6 mesi totali (3–4 mesi progetto + 2 mesi supporto)</p>
                    <p className="text-sm font-medium mt-2">Modalità: progetto a risultato</p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      📍 Ideale per chi vuole testare un caso d'uso concreto prima di un'adozione più ampia.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Partner */}
              <Card className="border-2 border-orange-500/20 bg-gradient-to-br from-background via-background to-orange-500/5 relative overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                      <h3 className="text-2xl font-bold text-orange-500">AI Partner</h3>
                    </div>
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                      Partner di fiducia
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Il tuo partner AI di fiducia, lungo tutto l'anno.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    Pensato per PMI medio-grandi, enti pubblici e scale-up che desiderano un percorso 
                    evolutivo continuo nel tempo, con supporto strategico, operativo e formativo.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm">Cosa comprende:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Strategia AI: incontri periodici con il top management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Formazione continua al personale (workshop trimestrali)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Manutenzione e ottimizzazione delle soluzioni AI già attive</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Sviluppo iterativo di nuovi progetti AI su base modulare</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Helpdesk operativo e supporto day-by-day</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-orange-500 mt-0.5" />
                        <span>Possibilità di presenza onsite come Interim AI Manager</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">Tempistiche:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Contratto annuale (12 mesi rinnovabile)</p>
                    <p className="text-sm font-medium mt-2">Modalità: consulenza continuativa</p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      📍 Ideale per chi vuole innovare costantemente senza costruire un team interno.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Scegli il Pacchetto Giusto per Te
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contattaci per una consulenza gratuita e scopri quale pacchetto si adatta meglio alle tue esigenze.
              </p>
              <Link to="/contatti/consulenza-gratuita">
                <Button size="lg" className="bg-gradient-to-r from-primary via-primary-glow to-accent hover:scale-105 transition-transform">
                  Richiedi Consulenza Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PacchettiConsulenza;