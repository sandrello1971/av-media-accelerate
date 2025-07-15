import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ConsulenzaGratuita = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    budget: '',
    timeframe: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione base
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({
        title: "Campi obbligatori mancanti",
        description: "Compila tutti i campi obbligatori per continuare.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `
RICHIESTA CONSULENZA GRATUITA AI

Ruolo: ${formData.role}
Telefono: ${formData.phone}
Budget: ${formData.budget}
Tempistiche: ${formData.timeframe}

Messaggio:
${formData.message}
        `,
        type: 'consultation'
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: emailData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo entro 24 ore per programmare la tua consulenza gratuita.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        budget: '',
        timeframe: '',
        message: ''
      });
    } catch (error) {
      console.error('Errore invio richiesta:', error);
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-6">
              🎯 Consulenza Gratuita: Parti dall'AI
            </h1>
            <p className="text-xl text-primary-glow font-medium mb-4">
              💡 Un'ora di confronto strategico per capire se e come l'AI può davvero aiutare la tua impresa.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hai sentito parlare di Intelligenza Artificiale, ma non sai da dove cominciare? Ti aiutiamo noi.
            </p>
          </div>

          {/* Cosa offriamo */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Con la nostra consulenza gratuita, ti offriamo:
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-glow text-xl">✅</div>
                      <p className="text-muted-foreground">
                        Un'analisi preliminare delle tue esigenze operative e comunicative
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-glow text-xl">✅</div>
                      <p className="text-muted-foreground">
                        Una panoramica chiara e personalizzata delle tecnologie AI applicabili al tuo business
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-glow text-xl">✅</div>
                      <p className="text-muted-foreground">
                        Suggerimenti concreti su strumenti gratuiti e sostenibili che puoi iniziare a usare subito
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary-glow text-xl">✅</div>
                      <p className="text-muted-foreground">
                        Una guida iniziale per valutare l'impatto e le opportunità dell'innovazione digitale nella tua realtà
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* A chi è rivolta, Come funziona, Bonus */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">📌 A chi è rivolta?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    PMI che vogliono capire se l'AI è utile o solo una moda
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Professionisti e imprenditori che desiderano digitalizzare processi senza investimenti iniziali
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Realtà del turismo, artigianato, cultura e servizi che vogliono fare il primo passo verso l'innovazione
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">🕐 Come funziona?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Compila il modulo
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Ti ricontattiamo per fissare una video call di 45–60 minuti
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Riceverai un mini-report con gli spunti operativi emersi dalla call
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">🎁 Bonus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Al termine della consulenza, riceverai in omaggio il nostro compendio gratuito:
                </p>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <p className="font-medium text-primary">
                    "Parti dall'AI – Guida per PMI che vogliono innovare senza complicazioni"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Prenota la Tua Consulenza</CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form e ti ricontattiamo per fissare la tua video call gratuita
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Il tuo nome"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="la-tua-email@esempio.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Azienda *</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome della tua azienda"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="role">Ruolo</Label>
                        <Input
                          id="role"
                          name="role"
                          type="text"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="CEO, Marketing Manager, etc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Telefono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="budget">Budget Previsto</Label>
                        <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona una fascia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="< 5k">Meno di 5.000€</SelectItem>
                            <SelectItem value="5k-15k">5.000€ - 15.000€</SelectItem>
                            <SelectItem value="15k-50k">15.000€ - 50.000€</SelectItem>
                            <SelectItem value="50k+">Oltre 50.000€</SelectItem>
                            <SelectItem value="da-valutare">Da valutare</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeframe">Tempistiche</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeframe', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Quando vorresti iniziare?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediato">Subito</SelectItem>
                          <SelectItem value="1-3-mesi">1-3 mesi</SelectItem>
                          <SelectItem value="3-6-mesi">3-6 mesi</SelectItem>
                          <SelectItem value="6-12-mesi">6-12 mesi</SelectItem>
                          <SelectItem value="esplorativo">Sto esplorando</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Descrivi il tuo progetto *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Raccontaci della tua azienda e di come pensi che l'AI possa aiutarti. Quali processi vorresti automatizzare o migliorare?"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? 'Invio in corso...' : 'Prenota Consulenza Gratuita'}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ConsulenzaGratuita;