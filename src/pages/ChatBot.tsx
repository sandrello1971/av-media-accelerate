import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { FileText, MessageSquare, Upload, Send, Bot, User, Trash2, RefreshCw } from 'lucide-react';

const ChatBot = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [processingDocId, setProcessingDocId] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) navigate('/auth?redirect=/chatbot');
    else fetchDocuments();
  }, [user, navigate]);

  const reprocessDocument = async (docId, docName) => {
    try {
      setProcessingDocId(docId);
      
      toast({ 
        title: 'Riprocessamento avviato', 
        description: `Elaborando "${docName}"...`,
        duration: 2000 
      });
      
      // Get document content
      const { data: doc, error: docError } = await supabase
        .from('documents')
        .select('*')
        .eq('id', docId)
        .single();

      if (docError) throw docError;

      // Process document with AI
      const response = await supabase.functions.invoke('process-document', {
        body: {
          documentId: doc.id,
          content: doc.content,
          fileName: doc.name,
          fileType: doc.file_type
        }
      });

      if (response.error) throw response.error;

      toast({ 
        title: '✅ Successo', 
        description: `Documento "${docName}" riprocessato con successo! Ora puoi chattare con Intelligence.`,
        duration: 4000 
      });
    } catch (error) {
      console.error('Errore durante il riprocessamento:', error);
      toast({ 
        title: '❌ Errore', 
        description: `Errore nel riprocessamento: ${error.message}`, 
        variant: 'destructive',
        duration: 5000 
      });
    } finally {
      setProcessingDocId(null);
    }
  };

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Errore', description: error.message, variant: 'destructive' });
    } else {
      setDocuments(data || []);
    }
  };

  // Function to sanitize text and remove unsupported Unicode sequences
  const sanitizeText = (text: string): string => {
    return text
      // Remove NULL bytes and other control characters
      .replace(/\u0000/g, '')
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
      // Remove unsupported Unicode escape sequences
      .replace(/\\u[0-9a-fA-F]{4}/g, '')
      // Normalize whitespace
      .replace(/\s+/g, ' ')
      .trim();
  };

  const handleFileUpload = async (file) => {
    if (!file) return;
    
    setIsLoading(true);
    try {
      const rawContent = await file.text();
      const content = sanitizeText(rawContent);
      
      // Save document to database
      const { data: doc, error } = await supabase
        .from('documents')
        .insert({
          name: file.name,
          content,
          file_type: file.type,
          file_size: file.size,
          uploaded_by: user.id
        })
        .select()
        .single();

      if (error) throw error;

      // Process document with AI
      const response = await supabase.functions.invoke('process-document', {
        body: {
          documentId: doc.id,
          content,
          fileName: file.name,
          fileType: file.type
        }
      });

      if (response.error) throw response.error;

      toast({ title: 'Successo', description: 'Documento caricato e processato!' });
      fetchDocuments();
    } catch (error) {
      toast({ title: 'Errore', description: error.message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const startConversation = async (document) => {
    setSelectedDoc(document);
    
    // Create new conversation
    const { data: conv, error } = await supabase
      .from('chat_conversations')
      .insert({
        user_id: user.id,
        document_id: document.id,
        title: `Chat con ${document.name}`
      })
      .select()
      .single();

    if (error) {
      toast({ title: 'Errore', description: error.message, variant: 'destructive' });
    } else {
      setConversation(conv);
      setMessages([]);
    }
  };

  const handleDeleteDocument = async (docId, docName) => {
    try {
      const { error } = await supabase
        .from('documents')
        .delete()
        .eq('id', docId);

      if (error) throw error;

      // If deleted document was selected, reset selection
      if (selectedDoc?.id === docId) {
        setSelectedDoc(null);
        setConversation(null);
        setMessages([]);
      }

      toast({ title: 'Successo', description: `Documento "${docName}" eliminato!` });
      fetchDocuments();
    } catch (error) {
      toast({ title: 'Errore', description: error.message, variant: 'destructive' });
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversation) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await supabase.functions.invoke('chat-with-document', {
        body: {
          message: inputMessage,
          documentId: selectedDoc.id,
          conversationId: conversation.id
        }
      });

      if (response.error) throw response.error;

      const assistantMessage = { 
        role: 'assistant', 
        content: response.data.response,
        sources: response.data.sources
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({ title: 'Errore', description: error.message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🤖 Chatbot Documentale</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Documents sidebar */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                I tuoi documenti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Upload */}
              <div>
                <label className="cursor-pointer">
                  <Button variant="outline" className="w-full" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Carica documento
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept=".txt,.md,.pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e.target.files[0])}
                  />
                </label>
              </div>

              {/* Documents list */}
              <div className="space-y-2">
                {documents.map((doc) => (
                  <Card 
                    key={doc.id} 
                    className={`cursor-pointer hover:bg-accent ${selectedDoc?.id === doc.id ? 'border-primary' : ''}`}
                    onClick={() => startConversation(doc)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(doc.created_at).toLocaleDateString()}
                          </p>
                        </div>
                         <div className="flex gap-2">
                           <Button
                             variant="outline"
                             size="sm"
                             className={`h-8 w-8 p-0 transition-all duration-200 ${
                               processingDocId === doc.id 
                                 ? 'bg-blue-500 text-white border-blue-500' 
                                 : 'hover:bg-blue-500 hover:text-white hover:border-blue-500'
                             }`}
                             onClick={(e) => {
                               e.stopPropagation();
                               reprocessDocument(doc.id, doc.name);
                             }}
                             title={processingDocId === doc.id ? "Elaborazione in corso..." : "Riprocessa documento"}
                             disabled={processingDocId === doc.id}
                           >
                             <RefreshCw className={`h-4 w-4 ${processingDocId === doc.id ? 'animate-spin' : ''}`} />
                           </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteDocument(doc.id, doc.name);
                            }}
                            title="Elimina documento"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat interface */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {selectedDoc ? `Chat con ${selectedDoc.name}` : 'Seleziona un documento'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDoc ? (
                <div className="space-y-4">
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-muted-foreground">
                        Inizia una conversazione facendo una domanda sul documento!
                      </div>
                    ) : (
                      messages.map((message, idx) => (
                        <div key={idx} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${
                            message.role === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}>
                            <div className="flex items-start gap-2">
                              {message.role === 'user' ? (
                                <User className="h-4 w-4 mt-0.5" />
                              ) : (
                                <Bot className="h-4 w-4 mt-0.5" />
                              )}
                              <div>
                                <p className="text-sm">{message.content}</p>
                                {message.sources && message.sources.length > 0 && (
                                  <div className="mt-2 text-xs opacity-70">
                                    📚 Fonti: {message.sources.length} riferimenti dal documento
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Input */}
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Fai una domanda sul documento..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={sendMessage} 
                      disabled={isLoading || !inputMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12">
                  <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Carica un documento per iniziare una conversazione</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;