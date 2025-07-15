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
                Consulenza AI Gratuita
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Scopri come l'Intelligenza Artificiale può trasformare il tuo business. 
                <br />
                <strong>30 minuti gratuiti</strong> con i nostri esperti per valutare il potenziale AI della tua azienda.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>30 Minuti Gratuiti</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Una sessione dedicata per capire le tue esigenze
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Analisi Personalizzata</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Valutiamo insieme il potenziale AI del tuo settore
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Strategia su Misura</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ricevi consigli pratici per iniziare il tuo percorso AI
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Prenota la Tua Consulenza</CardTitle>
                  <p className="text-muted-foreground">
                    Compila il form e ti contatteremo entro 24 ore
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