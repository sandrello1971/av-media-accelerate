import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  type?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message, type }: ContactFormData = await req.json();

    console.log("Sending contact email:", { name, email, company, type });

    const isConsultation = type === 'consultation';
    const subject = isConsultation 
      ? `🎯 RICHIESTA CONSULENZA GRATUITA - ${name}`
      : `Nuovo messaggio dal sito web - ${name}`;

    // Send email to info@avmediatrend.com
    const emailResponse = await resend.emails.send({
      from: "Contatti <noreply@avmediatrend.com>",
      to: ["info@avmediatrend.com"],
      subject: subject,
      html: `
        <h2>${isConsultation ? '🎯 RICHIESTA CONSULENZA GRATUITA AI' : 'Nuovo messaggio dal form di contatto'}</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Azienda:</strong> ${company}</p>` : ''}
        <p><strong>Messaggio:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><em>Messaggio ricevuto dal sito web AVMT</em></p>
        ${isConsultation ? '<p><strong>⏰ PRIORITÀ ALTA: Rispondere entro 24 ore per la consulenza gratuita</strong></p>' : ''}
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);