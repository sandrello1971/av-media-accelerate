import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Bot, MessageCircle, X, Send, Minimize2, Maximize2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: '👋 Ciao! Sono Intelligence, la tua assistente AI. Come posso aiutarti oggi?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate AI response for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      toast({
        title: 'Errore',
        description: 'Non riesco a processare la tua richiesta. Riprova.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('servizi') || lowerInput.includes('cosa fate')) {
      return 'Offriamo servizi di formazione AI, consulenza strategica, digital marketing e supporto continuativo per aiutare le PMI italiane nella trasformazione digitale. Vuoi saperne di più su un servizio specifico?';
    }
    
    if (lowerInput.includes('ai') || lowerInput.includes('intelligenza artificiale')) {
      return 'L\'intelligenza artificiale può trasformare la tua azienda! Possiamo aiutarti con formazione, implementazione e strategia. Hai già esperienza con l\'AI o stai iniziando da zero?';
    }
    
    if (lowerInput.includes('contatti') || lowerInput.includes('parlare')) {
      return 'Perfetto! Puoi contattarci a info@avmediatrend.com o al +39 347 685 9801. Vuoi prenotare una consulenza gratuita?';
    }
    
    if (lowerInput.includes('prezzo') || lowerInput.includes('costo')) {
      return 'I nostri servizi sono personalizzati in base alle tue esigenze. Ti consiglio di prenotare una consulenza gratuita per discutere le tue necessità specifiche. Vuoi che ti aiuti a prenotarla?';
    }
    
    if (lowerInput.includes('grazie') || lowerInput.includes('thanks')) {
      return 'Prego! Sono qui per aiutarti. Se hai altre domande, non esitare a chiedere! 😊';
    }
    
    return 'Interessante! Posso aiutarti con informazioni sui nostri servizi di AI, formazione, consulenza e digital marketing. Oppure puoi prenotare una consulenza gratuita per discutere le tue esigenze specifiche. Cosa ti interessa di più?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="relative rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary via-primary-glow to-accent hover:scale-105"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-accent to-primary-glow rounded-full animate-pulse">
            <Sparkles className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
          </div>
          <Bot className="w-8 h-8 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`transition-all duration-300 shadow-xl ${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-primary via-primary-glow to-accent text-white">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bot className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-lg">Intelligence</CardTitle>
              <p className="text-xs opacity-90">La tua assistente AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/10"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(100%-80px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-foreground'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('it-IT', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 animate-pulse" />
                      <span className="text-sm">Intelligence sta scrivendo...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Scrivi un messaggio..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {!user && (
                <div className="mt-2 text-center">
                  <Badge variant="outline" className="text-xs">
                    Per funzionalità avanzate, <a href="/auth" className="text-primary-glow hover:underline">accedi</a>
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default FloatingChatBot;