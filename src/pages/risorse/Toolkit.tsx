import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, ArrowRight } from "lucide-react";

const Toolkit = () => {
  const toolCategories = [
    {
      title: "✍️ Scrittura e comunicazione",
      subtitle: "Strumenti per creare testi efficaci, migliorare la produttività editoriale e supportare il tuo tone of voice.",
      tools: [
        {
          name: "ChatGPT",
          description: "Generazione di testi, assistenza clienti, brainstorming, contenuti SEO.",
          link: "https://chat.openai.com"
        },
        {
          name: "Jasper",
          description: "Copywriting strategico per marketing, annunci, e-commerce.",
          link: "https://jasper.ai"
        },
        {
          name: "Copy.ai",
          description: "Produzione veloce di testi per social media, email e annunci.",
          link: "https://copy.ai"
        }
      ]
    },
    {
      title: "🎨 Grafica e creatività visiva",
      subtitle: "Design accessibile, immagini AI e strumenti visuali per comunicare meglio.",
      tools: [
        {
          name: "Canva AI",
          description: "Crea grafiche e presentazioni professionali in pochi clic.",
          link: "https://canva.com"
        },
        {
          name: "Adobe Firefly",
          description: "Generazione immagini AI con stile fotografico e illustrativo.",
          link: "https://firefly.adobe.com"
        },
        {
          name: "Remove.bg",
          description: "Rimozione automatica dello sfondo da immagini.",
          link: "https://remove.bg"
        }
      ]
    },
    {
      title: "🎤 Audio e video con l'AI",
      subtitle: "Dall'editing intelligente alla sintesi vocale realistica: l'AI dà voce e forma ai tuoi contenuti.",
      tools: [
        {
          name: "Descript",
          description: "Montaggio video/audio con editing basato su testo.",
          link: "https://descript.com"
        },
        {
          name: "ElevenLabs",
          description: "Genera voci artificiali naturali in varie lingue.",
          link: "https://elevenlabs.io"
        },
        {
          name: "Runway ML",
          description: "Editing video AI avanzato, green screen, generazione video.",
          link: "https://runwayml.com"
        }
      ]
    },
    {
      title: "📈 Automazione e produttività",
      subtitle: "Organizza, automatizza, migliora il tuo flusso di lavoro quotidiano.",
      tools: [
        {
          name: "Notion AI",
          description: "Sintesi, gestione documenti, reportistica intelligente.",
          link: "https://notion.so"
        },
        {
          name: "Zapier",
          description: "Collega app diverse e automatizza processi aziendali.",
          link: "https://zapier.com"
        },
        {
          name: "Gamma.app",
          description: "Genera presentazioni eleganti a partire da testi descrittivi.",
          link: "https://gamma.app"
        }
      ]
    },
    {
      title: "🧠 Strategia, analisi e presentazioni",
      subtitle: "Dai dati al racconto: strumenti per analizzare e comunicare valore.",
      tools: [
        {
          name: "Mixo",
          description: "Crea landing page e MVP in pochi minuti da un'idea testuale.",
          link: "https://mixo.io"
        },
        {
          name: "Tome",
          description: "Storytelling visivo e presentazioni animate con AI.",
          link: "https://tome.app"
        },
        {
          name: "Rewind.ai",
          description: "Registra e cataloga tutto ciò che fai su PC per ricerca e memoria.",
          link: "https://rewind.ai"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-6">
                🧰 AI Toolkit per PMI
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Una selezione curata di strumenti per accompagnare la tua impresa verso l'innovazione quotidiana.
              </p>
            </div>

            {/* Tool Categories */}
            <div className="space-y-16">
              {toolCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.tools.map((tool, toolIndex) => (
                      <Card key={toolIndex} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-lg">{tool.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              AI Tool
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {tool.description}
                          </p>
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                              Visita <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus Section */}
            <div className="mt-20 text-center">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">🎓 Bonus: "Parti dall'AI"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                    Inizia subito con la nostra guida gratuita all'innovazione per PMI: semplice, pratica, concreta.
                  </p>
                  <Button variant="cta" size="lg" className="group">
                    <Download className="mr-2 h-5 w-5" />
                    Scaricala ora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <Card className="border-primary/20 max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">🔍 Non sai da dove iniziare?</CardTitle>
                  <p className="text-lg font-medium">Prenota la tua consulenza gratuita:</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-6 rounded-lg mb-6">
                    <blockquote className="text-muted-foreground italic" style={{ fontFamily: 'Georgia, serif' }}>
                      "Ti consiglieremo i tool più adatti alla tua realtà e ti guideremo nell'applicazione immediata."
                    </blockquote>
                  </div>
                  <Button variant="cta" size="lg" className="group" asChild>
                    <a href="/contatti/consulenza-gratuita">
                      📩 Prenota la tua sessione
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Toolkit;