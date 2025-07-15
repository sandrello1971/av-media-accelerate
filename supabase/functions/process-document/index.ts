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
    const { documentId, content, fileName, fileType } = await req.json();
    
    // Sanitize the content before processing
    const sanitizedContent = sanitizeText(content);

    // Split content into chunks
    const chunkSize = 1000;
    const chunks = [];
    for (let i = 0; i < sanitizedContent.length; i += chunkSize) {
      const chunk = sanitizedContent.slice(i, i + chunkSize);
      chunks.push(sanitizeText(chunk)); // Double sanitization for chunks
    }

    // Generate embeddings for each chunk
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const embeddings = [];

    for (let i = 0; i < chunks.length; i++) {
      const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-embedding-ada-002',
          input: chunks[i],
        }),
      });

      const data = await response.json();
      embeddings.push(data.data[0].embedding);
    }

    // Store chunks and embeddings in database
    const chunkInserts = chunks.map((chunk, index) => ({
      document_id: documentId,
      chunk_text: chunk,
      chunk_index: index,
      embedding: embeddings[index],
    }));

    const { error } = await supabase
      .from('document_chunks')
      .insert(chunkInserts);

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Processati ${chunks.length} chunks per ${fileName}` 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing document:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});