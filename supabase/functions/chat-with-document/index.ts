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

// Function to sanitize text and remove unsupported Unicode sequences
function sanitizeText(text: string): string {
  return text
    // Remove NULL bytes and other control characters
    .replace(/\u0000/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
    // Remove unsupported Unicode escape sequences
    .replace(/\\u[0-9a-fA-F]{4}/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, documentId, conversationId } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    
    // Sanitize the message
    const sanitizedMessage = sanitizeText(message);

    // Generate embedding for the user question
    const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: sanitizedMessage,
      }),
    });

    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;

    // Search for similar chunks using vector similarity
    const { data: similarChunks, error } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.78,
      match_count: 5,
      document_id: documentId
    });

    if (error) {
      console.error('Error searching chunks:', error);
    }

    // Prepare context from similar chunks
    const context = similarChunks?.map(chunk => chunk.chunk_text).join('\n\n') || '';

    // Generate response using OpenAI
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Sei un assistente AI che risponde alle domande basandoti SOLO sul documento fornito. 
            Usa il contesto qui sotto per rispondere alle domande. Se la risposta non è nel documento, 
            dici chiaramente che l'informazione non è disponibile nel documento.
            
            Contesto dal documento:
            ${context}`
          },
          {
            role: 'user',
            content: sanitizedMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const completionData = await completion.json();
    const response = completionData.choices[0].message.content;

    // Save user message
    await supabase.from('chat_messages').insert({
      conversation_id: conversationId,
      role: 'user',
      content: sanitizedMessage,
    });

    // Save assistant response with sources
    await supabase.from('chat_messages').insert({
      conversation_id: conversationId,
      role: 'assistant',
      content: sanitizeText(response),
      sources: similarChunks?.map(chunk => ({
        text: chunk.chunk_text,
        similarity: chunk.similarity
      })) || []
    });

    return new Response(
      JSON.stringify({ 
        response,
        sources: similarChunks?.slice(0, 3) || []
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in chat:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});