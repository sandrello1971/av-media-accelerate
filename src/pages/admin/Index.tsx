import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Settings, FileText, MessageSquare, Globe, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Import existing components
import BlogAdmin from './BlogAdmin';
import ChatBot from '../ChatBot';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isScraping, setIsScraping] = useState(false);
  const [scrapingResult, setScrapingResult] = useState(null);

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    try {
      const { data } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (data?.role === 'admin') {
        setIsAdmin(true);
      } else {
        toast({
          title: 'Accesso negato',
          description: 'Non hai i permessi per accedere a questa pagina',
          variant: 'destructive'
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWebsiteScraping = async () => {
    setIsScraping(true);
    setScrapingResult(null);
    
    try {
      toast({
        title: 'Scraping avviato',
        description: 'Sto raccogliendo i contenuti del sito...',
        duration: 3000
      });

      const { data, error } = await supabase.functions.invoke('scrape-website', {
        body: { userId: user.id }
      });

      if (error) throw error;

      setScrapingResult(data);
      
      toast({
        title: '✅ Scraping completato',
        description: `${data.pagesScraped} pagine elaborate con successo`,
        duration: 5000
      });
    } catch (error) {
      console.error('Error during scraping:', error);
      toast({
        title: '❌ Errore durante lo scraping',
        description: error.message || 'Si è verificato un errore durante il processo',
        variant: 'destructive',
        duration: 5000
      });
    } finally {
      setIsScraping(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p className="text-muted-foreground">Verifica permessi...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground">
            Gestisci i contenuti, i documenti e le impostazioni di AV Media Trend
          </p>
        </div>

        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Documenti & Chat
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Gestione Blog
            </TabsTrigger>
            <TabsTrigger value="scraping" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Scraping Sito
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Gestione Documenti e Chatbot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Carica e gestisci i documenti per addestrare Intelligence, il chatbot AI
                </p>
                <div className="bg-muted/50 rounded-lg p-1">
                  <ChatBot />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Gestione Blog
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Crea, modifica e gestisci gli articoli del blog
                </p>
                <div className="bg-muted/50 rounded-lg p-1">
                  <BlogAdmin />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scraping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Scraping Contenuti Sito
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Aggiorna automaticamente i contenuti del chatbot con le informazioni più recenti del sito web
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <h3 className="font-semibold">Pagine che verranno elaborate:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Homepage',
                        'Chi Siamo',
                        'Servizi',
                        'Consulenza',
                        'Digital Marketing',
                        'Formazione',
                        'Supporto Continuativo',
                        'Contatti',
                        'Blog'
                      ].map((page) => (
                        <Badge key={page} variant="secondary" className="justify-start">
                          {page}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleWebsiteScraping}
                    disabled={isScraping}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    {isScraping ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Scraping in corso...
                      </>
                    ) : (
                      <>
                        <Globe className="mr-2 h-4 w-4" />
                        Avvia Scraping Sito
                      </>
                    )}
                  </Button>
                </div>

                {scrapingResult && (
                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="h-5 w-5" />
                        Scraping Completato
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-green-700">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{scrapingResult.pagesScraped}</div>
                          <div className="text-sm">Pagine elaborate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{scrapingResult.totalWords.toLocaleString()}</div>
                          <div className="text-sm">Parole totali</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">✅</div>
                          <div className="text-sm">Chunking completato</div>
                        </div>
                      </div>
                      <p className="text-sm">
                        Il contenuto del sito è stato aggiornato nel database. Intelligence ora ha accesso alle informazioni più recenti.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <AlertCircle className="h-5 w-5" />
                      Informazioni Importante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-700 space-y-2">
                    <p>• Lo scraping aggiornerà automaticamente i contenuti del chatbot</p>
                    <p>• Il processo può richiedere alcuni minuti</p>
                    <p>• È consigliabile eseguire lo scraping quando vengono pubblicati nuovi contenuti</p>
                    <p>• Il documento precedente verrà sovrascritto con i nuovi contenuti</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;