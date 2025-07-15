import Layout from "@/components/Layout";

const ChiSiamoIndex = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Chi Siamo</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AV Media Trend nasce da un'idea semplice ma ambiziosa: rendere l'innovazione accessibile alle PMI italiane, accompagnandole in un percorso concreto verso la trasformazione digitale grazie all'Intelligenza Artificiale e alle tecnologie emergenti.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fondata da Stefano Andrello, esperto in marketing, comunicazione digitale e innovazione tecnologica con oltre 20 anni di esperienza, AV Media Trend è oggi un punto di riferimento per chi vuole trasformare idee in strategie e processi in valore.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Dall'AI al Web3, passando per la formazione professionale e la consulenza strategica, il nostro approccio è pragmatico, creativo e orientato ai risultati. Lavoriamo a fianco di imprenditori, manager e team aziendali per progettare soluzioni su misura capaci di generare impatto, ottimizzare i flussi operativi e valorizzare le competenze interne.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card/50 p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">La nostra mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Guidiamo le imprese nell'adozione consapevole dell'AI e delle tecnologie digitali, attraverso consulenza, formazione e supporto operativo. Vogliamo colmare il divario tra innovazione e PMI, fornendo strumenti chiari, concreti e realmente applicabili.
                </p>
              </div>
              
              <div className="bg-card/50 p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-primary">La nostra visione</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Crediamo in un futuro dove ogni azienda – indipendentemente dalle sue dimensioni – possa sfruttare appieno le potenzialità dell'innovazione per crescere in modo sostenibile, competitivo e umano-centrico.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">I nostri valori</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Accessibilità tecnologica</h3>
                    <p className="text-muted-foreground">L'AI non è (più) solo per pochi.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Consapevolezza digitale</h3>
                    <p className="text-muted-foreground">Prima la cultura, poi gli strumenti.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Approccio umano</h3>
                    <p className="text-muted-foreground">La tecnologia deve potenziare le persone, non sostituirle.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Concretezza</h3>
                    <p className="text-muted-foreground">Strategie tangibili, soluzioni operative, risultati misurabili.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Cosa ci distingue</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Esperienza multidisciplinare</h3>
                    <p className="text-muted-foreground">Un mix di competenze che unisce project management, marketing digitale, copywriting, formazione e architetture tecnologiche.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Approccio full-service</h3>
                    <p className="text-muted-foreground">Dalla strategia alla realizzazione, seguiamo ogni progetto in ogni sua fase.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Focus sulle PMI</h3>
                    <p className="text-muted-foreground">Conosciamo a fondo le sfide delle piccole e medie imprese italiane e offriamo soluzioni su misura.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Formazione avanzata</h3>
                    <p className="text-muted-foreground">Crediamo che il primo passo verso l'innovazione sia la comprensione. E per questo formiamo, guidiamo e accompagniamo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChiSiamoIndex;