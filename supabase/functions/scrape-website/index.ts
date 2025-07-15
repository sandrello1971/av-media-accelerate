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
    const { userId } = await req.json();
    
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', userId)
      .single();

    if (profile?.role !== 'admin') {
      throw new Error('Unauthorized: Admin access required');
    }

    console.log('Starting website scraping...');

    // Define pages to scrape
    const pagesToScrape = [
      { url: 'https://avmediatrend.com/', title: 'Homepage' },
      { url: 'https://avmediatrend.com/chi-siamo', title: 'Chi Siamo' },
      { url: 'https://avmediatrend.com/servizi', title: 'Servizi' },
      { url: 'https://avmediatrend.com/servizi/consulenza', title: 'Consulenza' },
      { url: 'https://avmediatrend.com/servizi/digital-marketing', title: 'Digital Marketing' },
      { url: 'https://avmediatrend.com/servizi/formazione', title: 'Formazione' },
      { url: 'https://avmediatrend.com/servizi/supporto-continuativo', title: 'Supporto Continuativo' },
      { url: 'https://avmediatrend.com/contatti', title: 'Contatti' },
      { url: 'https://avmediatrend.com/risorse/blog', title: 'Blog' },
    ];

    const scrapedPages = [];
    
    for (const page of pagesToScrape) {
      try {
        console.log(`Scraping: ${page.url}`);
        
        const response = await fetch(page.url);
        const html = await response.text();
        
        // Extract text content from HTML (basic extraction)
        const textContent = html
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        // Extract title
        const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
        const extractedTitle = titleMatch ? titleMatch[1] : page.title;

        // Extract meta description
        const metaDescMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i);
        const metaDescription = metaDescMatch ? metaDescMatch[1] : '';

        const content = `# ${extractedTitle}

URL: ${page.url}

${metaDescription ? `## Descrizione\n${metaDescription}\n\n` : ''}

## Contenuto della pagina

${textContent}`;

        scrapedPages.push({
          title: extractedTitle,
          url: page.url,
          content: content,
          wordCount: textContent.split(' ').length
        });

        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`Error scraping ${page.url}:`, error);
        scrapedPages.push({
          title: page.title,
          url: page.url,
          content: `# ${page.title}\n\nURL: ${page.url}\n\nErrore nel recupero del contenuto: ${error.message}`,
          wordCount: 0
        });
      }
    }

    // Create or update scraped document
    const documentTitle = `Contenuti Sito AV Media Trend - ${new Date().toLocaleDateString('it-IT')}`;
    const fullContent = scrapedPages.map(page => page.content).join('\n\n---\n\n');
    
    // Check if a scraped document already exists
    const { data: existingDoc } = await supabase
      .from('documents')
      .select('id')
      .eq('name', documentTitle)
      .eq('uploaded_by', userId)
      .single();

    let documentId;
    
    if (existingDoc) {
      // Update existing document
      const { data: updatedDoc, error: updateError } = await supabase
        .from('documents')
        .update({
          content: fullContent,
          file_size: fullContent.length,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingDoc.id)
        .select()
        .single();

      if (updateError) throw updateError;
      documentId = updatedDoc.id;
    } else {
      // Create new document
      const { data: newDoc, error: insertError } = await supabase
        .from('documents')
        .insert({
          name: documentTitle,
          content: fullContent,
          file_type: 'text/markdown',
          file_size: fullContent.length,
          uploaded_by: userId
        })
        .select()
        .single();

      if (insertError) throw insertError;
      documentId = newDoc.id;
    }

    // Delete existing chunks for this document
    await supabase
      .from('document_chunks')
      .delete()
      .eq('document_id', documentId);

    // Generate chunks and embeddings
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (openAIApiKey) {
      const chunkSize = 1000;
      const overlap = 200;
      const chunks = [];
      
      for (let i = 0; i < fullContent.length; i += chunkSize - overlap) {
        const chunk = fullContent.slice(i, i + chunkSize);
        if (chunk.trim()) {
          chunks.push(chunk);
        }
      }

      console.log(`Generated ${chunks.length} chunks`);

      // Generate embeddings for chunks
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        
        try {
          const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${openAIApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'text-embedding-ada-002',
              input: chunk,
            }),
          });

          if (embeddingResponse.ok) {
            const embeddingData = await embeddingResponse.json();
            const embedding = embeddingData.data[0].embedding;

            await supabase
              .from('document_chunks')
              .insert({
                document_id: documentId,
                chunk_text: chunk,
                chunk_index: i,
                embedding: embedding
              });
          }
        } catch (error) {
          console.error(`Error generating embedding for chunk ${i}:`, error);
        }
      }
    }

    return new Response(JSON.stringify({
      success: true,
      documentId: documentId,
      pagesScraped: scrapedPages.length,
      totalWords: scrapedPages.reduce((sum, page) => sum + page.wordCount, 0),
      pages: scrapedPages
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in scrape-website function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An unexpected error occurred' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});