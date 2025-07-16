import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informazioni generali</h2>
                <p>
                  Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali
                  quando utilizzi il nostro sito web e i nostri servizi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dati che raccogliamo</h2>
                <p>Raccogliamo diversi tipi di informazioni:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informazioni di contatto (nome, email, telefono)</li>
                  <li>Informazioni tecniche (indirizzo IP, browser, dispositivo)</li>
                  <li>Dati di utilizzo del sito web</li>
                  <li>Cookie e tecnologie simili</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Come utilizziamo i tuoi dati</h2>
                <p>Utilizziamo le tue informazioni per:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornire e migliorare i nostri servizi</li>
                  <li>Comunicare con te</li>
                  <li>Personalizzare la tua esperienza</li>
                  <li>Rispettare gli obblighi legali</li>
                  <li>Proteggere i nostri diritti e la sicurezza</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base giuridica del trattamento</h2>
                <p>
                  Il trattamento dei tuoi dati personali si basa su diverse basi giuridiche, tra cui il consenso,
                  l'esecuzione di un contratto, l'interesse legittimo e il rispetto di obblighi legali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Condivisione dei dati</h2>
                <p>
                  Non vendiamo i tuoi dati personali. Potremmo condividerli con:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornitori di servizi fidati</li>
                  <li>Partner commerciali autorizzati</li>
                  <li>Autorità competenti quando richiesto dalla legge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. I tuoi diritti</h2>
                <p>Hai il diritto di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Rettificare dati inesatti</li>
                  <li>Cancellare i tuoi dati</li>
                  <li>Limitare il trattamento</li>
                  <li>Portabilità dei dati</li>
                  <li>Opporti al trattamento</li>
                  <li>Revocare il consenso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sicurezza dei dati</h2>
                <p>
                  Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere
                  i tuoi dati personali contro accessi non autorizzati, perdite o distruzioni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Conservazione dei dati</h2>
                <p>
                  Conserviamo i tuoi dati personali solo per il tempo necessario a raggiungere gli scopi
                  per cui sono stati raccolti o come richiesto dalla legge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contatti</h2>
                <p>
                  Per domande su questa Privacy Policy o per esercitare i tuoi diritti, contattaci a:
                  <br />
                  Email: info@stefanoandrello.com
                  <br />
                  Telefono: +39 123 456 7890
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Modifiche</h2>
                <p>
                  Ci riserviamo il diritto di modificare questa Privacy Policy. Le modifiche saranno
                  pubblicate su questa pagina con la data di aggiornamento.
                </p>
                <p className="text-sm mt-4">
                  <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;