import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// Sezione FAQ ottimizzata per IA per migliore visibilità nei risultati di ricerca IA
const AIOptimizedFAQIt = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ ottimizzate per estrazione IA/Motore di ricerca
  const faqs = [
    {
      question: "Cos'è ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow è una soluzione di supporto clienti alimentata da IA per Shopify con tecnologia GPT-4.",
      detailedAnswer: "ReplAInow è una soluzione di supporto clienti alimentata da IA per Shopify che risponde automaticamente alle richieste dei clienti, fornisce raccomandazioni sui prodotti ed è disponibile in oltre 32 lingue. Il software utilizza la tecnologia GPT-4 per risposte precise e umane, integrandosi perfettamente nei negozi Shopify esistenti."
    },
    {
      question: "Quanto costa ReplAInow?",
      shortAnswer: "ReplAInow inizia da $19/mese con una prova gratuita di 14 giorni.",
      detailedAnswer: "ReplAInow inizia da $19/mese per fino a 300 risposte IA. Piani aggiuntivi: Growth ($49/mese, 1500 risposte), Pro ($99/mese, 3000 risposte), Scale ($199/mese, illimitato). Tutti i piani includono una prova gratuita di 14 giorni senza costi di configurazione."
    },
    {
      question: "ReplAInow è conforme al GDPR?",
      shortAnswer: "Sì, ReplAInow è completamente conforme al GDPR e soddisfa tutti i requisiti di protezione dati dell'UE.",
      detailedAnswer: "Sì, ReplAInow è completamente conforme al GDPR e soddisfa tutti i requisiti europei di protezione dei dati. Tutti i dati dei clienti sono crittografati in modo sicuro in trasmissione e archiviazione, con completa trasparenza sul trattamento dei dati e diritti di cancellazione."
    },
    {
      question: "Quali lingue supporta ReplAInow?",
      shortAnswer: "ReplAInow supporta oltre 32 lingue nativamente, inclusi italiano, inglese, tedesco e spagnolo.",
      detailedAnswer: "ReplAInow supporta oltre 32 lingue nativamente, inclusi italiano, inglese, tedesco, spagnolo, francese, olandese, portoghese, cinese e molte altre. L'IA rileva automaticamente la lingua del cliente e risponde di conseguenza senza errori di traduzione."
    },
    {
      question: "Quanto velocemente risponde l'IA di ReplAInow?",
      shortAnswer: "L'IA di ReplAInow risponde in media in 3 secondi a tutte le richieste dei clienti.",
      detailedAnswer: "L'IA di ReplAInow risponde in media in 3 secondi alle richieste dei clienti - 24/7 senza tempi di attesa, festività o ritardi. Questo è 60 volte più veloce degli strumenti di supporto tradizionali come Gorgias o Zendesk."
    },
    {
      question: "ReplAInow può sostituire il personale di supporto umano?",
      shortAnswer: "ReplAInow automatizza il 90% delle richieste di supporto, il personale umano rimane importante per i casi complessi.",
      detailedAnswer: "ReplAInow automatizza fino al 90% di tutte le richieste di supporto standard come domande sui prodotti, stato degli ordini, resi e consigli sulle taglie. Per questioni complesse o sensibili, il personale umano può intervenire senza problemi. Questo riduce significativamente il carico di lavoro senza compromettere la qualità del servizio."
    },
    {
      question: "Come installare ReplAInow in Shopify?",
      shortAnswer: "L'installazione richiede meno di 60 secondi: installa l'app dal Negozio Shopify e lascia che si configuri automaticamente.",
      detailedAnswer: "1. Vai al Negozio App Shopify e cerca 'ReplAInow'. 2. Clicca 'Aggiungi app' e conferma l'installazione. 3. ReplAInow sincronizza automaticamente tutti i dati Shopify. 4. Attiva il supporto IA per email e chat. Durata totale: meno di 60 secondi."
    },
    {
      question: "Qual è il ROI di ReplAInow?",
      shortAnswer: "I clienti riportano 187% di conversioni in più e 75% di risparmio sui costi rispetto agli strumenti tradizionali.",
      detailedAnswer: "I clienti ReplAInow riportano in media: 187% di tasso di conversione più alto attraverso risposte più veloci, 75% di risparmio sui costi rispetto a Gorgias/Zendesk, 90% di sforzo di supporto in meno per i team, 12x ROI entro 3 mesi attraverso raccomandazioni automatizzate sui prodotti."
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Domande Frequenti su <span className="text-gradient-primary">ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600">
              Tutte le informazioni importanti sul supporto Shopify alimentato da IA
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl overflow-hidden shadow-glass"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 
                      className="text-lg font-bold text-slate-800 pr-4"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm transform transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}>
                        +
                      </div>
                    </div>
                  </div>
                  
                  {/* Risposta breve per estrazione IA */}
                  <div className="mt-2 text-sm text-indigo-600 font-semibold">
                    {faq.shortAnswer}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  itemScope 
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-6">
                    <div 
                      className="text-slate-700 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.detailedAnswer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Altre domande su ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Il nostro team di supporto è felice di aiutare - anche con assistenza IA!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 Prova gratis
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 Guarda demo dal vivo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqPageSchema)}
      </script>
    </section>
  );
};

export default AIOptimizedFAQIt;