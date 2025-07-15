import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory, userId } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Check if user has documents and search them if relevant
    let documentContext = '';
    if (userId) {
      try {
        // Get user's documents
        const { data: documents } = await supabase
          .from('documents')
          .select('id, name')
          .eq('uploaded_by', userId);

        if (documents && documents.length > 0) {
          // Generate embedding for user question to search documents
          const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${openAIApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'text-embedding-ada-002',
              input: message,
            }),
          });

          if (embeddingResponse.ok) {
            const embeddingData = await embeddingResponse.json();
            const queryEmbedding = embeddingData.data[0].embedding;

            // Search across all user documents
            for (const doc of documents) {
              const { data: chunks } = await supabase.rpc('match_documents', {
                query_embedding: queryEmbedding,
                match_threshold: 0.75,
                match_count: 3,
                filter_document_id: doc.id
              });

              if (chunks && chunks.length > 0) {
                documentContext += `\n\nINFORMAZIONI DAL DOCUMENTO "${doc.name}":\n`;
                documentContext += chunks.map(chunk => chunk.chunk_text).join('\n');
              }
            }
          }
        }
      } catch (error) {
        console.error('Error searching documents:', error);
      }
    }

    // Build conversation context
    const systemPrompt = `Sei Intelligence, l'assistente AI femminile di AV Media Trend. 

INFORMAZIONI AZIENDA:
- AV Media Trend aiuta le PMI italiane nella trasformazione digitale attraverso l'AI
- Servizi: Formazione AI, Consulenza Strategica, Digital Marketing, Supporto Continuativo
- Contatti: info@avmediatrend.com, +39 347 685 9801
- Offriamo consulenza gratuita
- Stefano Andrello è il fondatore e CEO

SERVIZI DETTAGLIATI:
1. FORMAZIONE AI:
   - Corsi pratici per team aziendali
   - Workshop su ChatGPT, automazione, AI tools
   - Formazione personalizzata per settore
   - Certificazioni e percorsi strutturati

2. CONSULENZA STRATEGICA:
   - Analisi dei processi aziendali
   - Identificazione opportunità AI
   - Roadmap di implementazione
   - ROI e business case

3. DIGITAL MARKETING:
   - Strategie AI-powered
   - Automazione marketing
   - Content generation con AI
   - Analytics e ottimizzazione

4. SUPPORTO CONTINUATIVO:
   - Assistenza tecnica
   - Aggiornamenti e manutenzione
   - Monitoraggio performance
   - Evoluzione strategica

PERSONALITÀ:
- Professionale ma amichevole
- Entusiasta dell'AI e dell'innovazione
- Sempre pronta ad aiutare
- Conosci molto bene l'AI e le sue applicazioni business
- Parli italiano in modo naturale
- Usi emoji con moderazione

OBIETTIVI:
- Qualificare lead interessati ai servizi
- Fornire informazioni utili sull'AI per le PMI
- Guidare verso la consulenza gratuita
- Dimostrare competenza e professionalità
- Rispondere a domande sui documenti caricati dall'utente (se disponibili)

IMPORTANTE: Se l'utente ha caricato documenti e fai domande pertinenti, usa le informazioni dai documenti per rispondere. Cita sempre la fonte quando usi informazioni dai documenti.

${documentContext ? `\nDOCUMENTI DELL'UTENTE:\n${documentContext}` : ''}

Rispondi in modo utile, specifico e coinvolgente. Se non sai qualcosa, ammettilo e suggerisci di contattare direttamente l'azienda.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    const aiResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in intelligence-chat:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});