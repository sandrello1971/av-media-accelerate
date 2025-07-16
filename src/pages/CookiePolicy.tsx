import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti
                  un sito web. I cookie ci aiutano a fornire, proteggere e migliorare i nostri servizi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipi di cookie che utilizziamo</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie essenziali</h3>
                    <p>
                      Questi cookie sono necessari per il funzionamento del sito web e non possono essere
                      disabilitati. Include cookie per la sicurezza e l'accessibilità.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie di funzionalità</h3>
                    <p>
                      Questi cookie ci permettono di ricordare le tue preferenze e impostazioni per
                      migliorare la tua esperienza di navigazione.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie analitici</h3>
                    <p>
                      Utilizziamo questi cookie per comprendere come i visitatori interagiscono con il
                      nostro sito web, aiutandoci a migliorare i nostri servizi.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie di marketing</h3>
                    <p>
                      Questi cookie vengono utilizzati per personalizzare gli annunci e misurare
                      l'efficacia delle nostre campagne pubblicitarie.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookie di terze parti</h2>
                <p>Il nostro sito web può utilizzare cookie di terze parti, tra cui:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics per l'analisi del traffico</li>
                  <li>Google Fonts per la visualizzazione dei caratteri</li>
                  <li>Servizi di chat e supporto clienti</li>
                  <li>Piattaforme di social media</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Gestione dei cookie</h2>
                <p>
                  Puoi controllare e gestire i cookie in diversi modi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizzando le impostazioni del tuo browser</li>
                  <li>Attraverso il banner dei cookie sul nostro sito</li>
                  <li>Utilizzando strumenti di opt-out specifici</li>
                </ul>
                <p className="mt-4">
                  Nota: Disabilitare alcuni cookie potrebbe influire sulla funzionalità del sito web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Durata dei cookie</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie di sessione</h3>
                    <p>
                      Vengono eliminati automaticamente quando chiudi il browser.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Cookie persistenti</h3>
                    <p>
                      Rimangono sul tuo dispositivo per un periodo determinato o fino a quando non li elimini manualmente.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Come disabilitare i cookie</h2>
                <p>
                  Puoi disabilitare i cookie attraverso le impostazioni del tuo browser:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Impostazioni {"> "} Privacy e sicurezza {"> "} Cookie</li>
                  <li><strong>Firefox:</strong> Opzioni {"> "} Privacy e sicurezza {"> "} Cookie</li>
                  <li><strong>Safari:</strong> Preferenze {"> "} Privacy {"> "} Cookie</li>
                  <li><strong>Edge:</strong> Impostazioni {"> "} Cookie e autorizzazioni sito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Aggiornamenti della Cookie Policy</h2>
                <p>
                  Potremmo aggiornare questa Cookie Policy periodicamente. Ti consigliamo di
                  consultare regolarmente questa pagina per rimanere informato sui nostri utilizzi dei cookie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contatti</h2>
                <p>
                  Per domande su questa Cookie Policy, contattaci a:
                  <br />
                  Email: info@stefanoandrello.com
                  <br />
                  Telefono: +39 123 456 7890
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

export default CookiePolicy;