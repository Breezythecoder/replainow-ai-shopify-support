import { useState } from 'react';
import { faqPageSchema } from './StructuredData';

// Sección FAQ optimizada para IA para mejor visibilidad en resultados de búsqueda IA
const AIOptimizedFAQEs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQs optimizadas para extracción de IA/Motor de búsqueda
  const faqs = [
    {
      question: "¿Qué es ReplAInow AI Helpdesk?",
      shortAnswer: "ReplAInow es una solución de soporte al cliente impulsada por IA para Shopify con tecnología GPT-4.",
      detailedAnswer: "ReplAInow es una solución de soporte al cliente impulsada por IA para Shopify que responde automáticamente a consultas de clientes, proporciona recomendaciones de productos y está disponible en más de 32 idiomas. El software utiliza tecnología GPT-4 para respuestas precisas y humanas, integrándose perfectamente en tiendas Shopify existentes."
    },
    {
      question: "¿Cuánto cuesta ReplAInow?",
      shortAnswer: "ReplAInow comienza en $19/mes con una prueba gratuita de 14 días.",
      detailedAnswer: "ReplAInow comienza en $19/mes para hasta 300 respuestas de IA. Planes adicionales: Growth ($49/mes, 1500 respuestas), Pro ($99/mes, 3000 respuestas), Scale ($199/mes, ilimitado). Todos los planes incluyen una prueba gratuita de 14 días sin tarifas de configuración."
    },
    {
      question: "¿Es ReplAInow compatible con RGPD?",
      shortAnswer: "Sí, ReplAInow es totalmente compatible con RGPD y cumple todos los requisitos de protección de datos de la UE.",
      detailedAnswer: "Sí, ReplAInow es totalmente compatible con RGPD y cumple todos los requisitos europeos de protección de datos. Todos los datos de clientes se cifran de forma segura en transmisión y almacenamiento, con total transparencia sobre el procesamiento de datos y derechos de eliminación."
    },
    {
      question: "¿Qué idiomas soporta ReplAInow?",
      shortAnswer: "ReplAInow soporta más de 32 idiomas nativamente, incluyendo español, inglés, francés y alemán.",
      detailedAnswer: "ReplAInow soporta más de 32 idiomas nativamente, incluyendo español, inglés, francés, alemán, italiano, holandés, portugués, chino y muchos más. La IA detecta automáticamente el idioma del cliente y responde en consecuencia sin errores de traducción."
    },
    {
      question: "¿Qué tan rápido responde la IA de ReplAInow?",
      shortAnswer: "La IA de ReplAInow responde en promedio en 3 segundos a todas las consultas de clientes.",
      detailedAnswer: "La IA de ReplAInow responde en promedio en 3 segundos a consultas de clientes - 24/7 sin tiempos de espera, días festivos o retrasos. Esto es 60 veces más rápido que herramientas de soporte tradicionales como Gorgias o Zendesk."
    },
    {
      question: "¿Puede ReplAInow reemplazar al personal de soporte humano?",
      shortAnswer: "ReplAInow automatiza el 90% de las solicitudes de soporte, el personal humano sigue siendo importante para casos complejos.",
      detailedAnswer: "ReplAInow automatiza hasta el 90% de todas las solicitudes de soporte estándar como preguntas de productos, estado de pedidos, devoluciones y consejos de tallas. Para asuntos complejos o sensibles, el personal humano puede tomar el control sin problemas. Esto reduce significativamente la carga de trabajo sin comprometer la calidad del servicio."
    },
    {
      question: "¿Cómo instalar ReplAInow en Shopify?",
      shortAnswer: "La instalación toma menos de 60 segundos: instalar la app desde la Tienda de Shopify y dejar que se configure automáticamente.",
      detailedAnswer: "1. Ve a la Tienda de Apps de Shopify y busca 'ReplAInow'. 2. Haz clic en 'Agregar app' y confirma la instalación. 3. ReplAInow sincroniza automáticamente todos los datos de Shopify. 4. Activa el soporte de IA para email y chat. Duración total: menos de 60 segundos."
    },
    {
      question: "¿Cuál es el ROI de ReplAInow?",
      shortAnswer: "Los clientes reportan 187% mayor conversión y 75% de ahorro en costos comparado con herramientas tradicionales.",
      detailedAnswer: "Los clientes de ReplAInow reportan en promedio: 187% mayor tasa de conversión a través de respuestas más rápidas, 75% de ahorro en costos comparado con Gorgias/Zendesk, 90% menos esfuerzo de soporte para equipos, 12x ROI dentro de 3 meses a través de recomendaciones automatizadas de productos."
    }
  ];

  return (
    <section className="py-24 bg-ultra-light" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Preguntas Frecuentes sobre <span className="text-gradient-primary">ReplAInow AI Helpdesk</span>
            </h2>
            <p className="text-xl text-slate-600">
              Toda la información importante sobre soporte de Shopify impulsado por IA
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
                  
                  {/* Respuesta corta para extracción de IA */}
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
                ¿Más preguntas sobre ReplAInow AI Helpdesk?
              </h3>
              <p className="text-slate-600 mb-6">
                Nuestro equipo de soporte está encantado de ayudar - ¡también con asistencia de IA!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-brand hover:shadow-brand-glow hover:-translate-y-1 transition-all"
                >
                  🚀 Probar gratis
                </a>
                <a 
                  href="#live-demo"
                  className="inline-flex items-center gap-2 px-8 py-3 glass border border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-white/90 transition-all"
                >
                  📺 Ver demo en vivo
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

export default AIOptimizedFAQEs;