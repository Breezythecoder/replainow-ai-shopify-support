import { Clock, DollarSign, Frown, CheckCircle, Zap, Shield } from "lucide-react";

const ProblemSolutionNl = () => {
  return (
    <section aria-labelledby="problem-solution-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="problem-solution-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Van probleem naar oplossing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformeer je klantenservice van kostenfactor naar concurrentievoordeel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-red-600 mb-6">❌ Zonder ReplAInow</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Lange wachttijden</h4>
                  <p className="text-red-700 text-sm">Klanten wachten uren of dagen op antwoorden, wat leidt tot frustratie en verloren verkopen.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                <DollarSign className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Hoge personeelskosten</h4>
                  <p className="text-red-700 text-sm">24/7 klantenservice vereist veel personeel en hoge loonkosten.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-red-50 border border-red-200">
                <Frown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Inconsistente antwoorden</h4>
                  <p className="text-red-700 text-sm">Verschillende medewerkers geven verschillende antwoorden, wat verwarring veroorzaakt.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">✅ Met ReplAInow</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
                <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Instant antwoorden</h4>
                  <p className="text-green-700 text-sm">AI beantwoordt vragen in seconden, 24/7 beschikbaar voor je klanten.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">90% kostenbesparing</h4>
                  <p className="text-green-700 text-sm">Drastische verlaging van personeelskosten door AI-automatisering.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Altijd correcte informatie</h4>
                  <p className="text-green-700 text-sm">AI gebruikt real-time Shopify-data voor accurate, consistente antwoorden.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionNl;