const ModernProblemSolutionEs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">El Problema:</span> Soporte Abrumado
          <br />
          <span className="text-brand-success">La Solución:</span> IA Inteligente
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before Card - Problem */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold">
              😫 SIN REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt="Bandeja de entrada caótica desbordante de emails" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Procesar 50+ emails diariamente</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Interminables respuestas copiar-pegar</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Clientes esperan horas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Ventas perdidas por mal servicio</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl">❌</span>
                <span className="font-medium">Equipo sobrecargado y estresado</span>
              </li>
            </ul>
          </div>
          
          {/* After Card - Solution */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🚀 CON REPLAINOW
            </div>
            <img 
              src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt="Panel IA de ReplAInow con respuesta perfecta" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">IA responde automáticamente en 3 segundos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">Recomendaciones perfectas de productos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">32+ idiomas automáticamente</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">+187% mayor tasa de conversión</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl">✅</span>
                <span className="font-medium">90% menos esfuerzo de soporte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProblemSolutionEs;