import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// Seção FAQ otimizada para IA para melhor visibilidade nos resultados de busca IA
const AIOptimizedFAQPt = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQs otimizadas para extração IA/Motor de busca
  const faqs = [
    {
      question: "O que é ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow é uma solução de suporte ao cliente alimentada por IA para Shopify com tecnologia GPT-4.",
      detailedAnswer: "ReplAInow é uma solução de suporte ao cliente alimentada por IA para Shopify que responde automaticamente a consultas de clientes, fornece recomendações de produtos e está disponível em mais de 32 idiomas. O software usa tecnologia GPT-4 para respostas precisas e humanas, integrando-se perfeitamente em lojas Shopify existentes."
    },
    {
      question: "Quanto custa o ReplAInow?",
      shortAnswer: "ReplAInow começa em $19/mês com teste gratuito de 14 dias.",
      detailedAnswer: "ReplAInow começa em $19/mês para até 300 respostas IA. Planos adicionais: Growth ($49/mês, 1500 respostas), Pro ($99/mês, 3000 respostas), Scale ($199/mês, ilimitado). Todos os planos incluem teste gratuito de 14 dias sem taxas de configuração."
    },
    {
      question: "ReplAInow é compatível com GDPR?",
      shortAnswer: "Sim, ReplAInow é totalmente compatível com GDPR e atende a todos os requisitos de proteção de dados da UE.",
      detailedAnswer: "Sim, ReplAInow é totalmente compatível com GDPR e atende a todos os requisitos europeus de proteção de dados. Todos os dados dos clientes são criptografados com segurança na transmissão e armazenamento, com total transparência sobre processamento de dados e direitos de exclusão."
    },
    {
      question: "Quais idiomas o ReplAInow suporta?",
      shortAnswer: "ReplAInow suporta mais de 32 idiomas nativamente, incluindo português, inglês, alemão e espanhol.",
      detailedAnswer: "ReplAInow suporta mais de 32 idiomas nativamente, incluindo português, inglês, alemão, espanhol, italiano, holandês, francês, chinês e muitos outros. A IA detecta automaticamente o idioma do cliente e responde adequadamente sem erros de tradução."
    },
    {
      question: "Quão rápido a IA ReplAInow responde?",
      shortAnswer: "A IA ReplAInow responde em média em 3 segundos a todas as consultas de clientes.",
      detailedAnswer: "A IA ReplAInow responde em média em 3 segundos a consultas de clientes - 24/7 sem tempos de espera, feriados ou atrasos. Isso é 60x mais rápido que ferramentas de suporte tradicionais como Gorgias ou Zendesk."
    },
    {
      question: "ReplAInow pode substituir funcionários de suporte humano?",
      shortAnswer: "ReplAInow automatiza 90% das solicitações de suporte, funcionários humanos permanecem importantes para casos complexos.",
      detailedAnswer: "ReplAInow automatiza até 90% de todas as solicitações de suporte padrão como perguntas sobre produtos, status de pedidos, devoluções e conselhos de tamanho. Para questões complexas ou sensíveis, funcionários humanos podem assumir sem problemas. Isso reduz significativamente a carga de trabalho sem comprometer a qualidade do serviço."
    },
    {
      question: "Como instalar ReplAInow no Shopify?",
      shortAnswer: "A instalação leva menos de 60 segundos: instale o app da Loja Shopify e deixe configurar automaticamente.",
      detailedAnswer: "1. Vá para a Loja de Apps Shopify e procure 'ReplAInow'. 2. Clique 'Adicionar app' e confirme a instalação. 3. ReplAInow sincroniza automaticamente todos os dados Shopify. 4. Ative suporte IA para email e chat. Duração total: menos de 60 segundos."
    },
    {
      question: "Qual é o ROI do ReplAInow?",
      shortAnswer: "Clientes relatam 187% maior conversão e 75% economia de custos comparado a ferramentas tradicionais.",
      detailedAnswer: "Clientes ReplAInow relatam em média: 187% maior taxa de conversão através de respostas mais rápidas, 75% economia de custos comparado a Gorgias/Zendesk, 90% menos esforço de suporte para equipes, 12x ROI dentro de 3 meses através de recomendações automatizadas de produtos."
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Perguntas Frequentes sobre <span className="text-gradient-primary">ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600">
              Todas as informações importantes sobre suporte Shopify alimentado por IA
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
                  
                  {/* Resposta curta para extração IA */}
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
                Mais perguntas sobre ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Nossa equipe de suporte fica feliz em ajudar - também com assistência IA!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 Testar grátis
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 Ver demo ao vivo
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

export default AIOptimizedFAQPt;