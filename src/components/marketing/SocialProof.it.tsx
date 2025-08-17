import { Star, Users, Clock, TrendingUp, Shield, Award, Zap } from "lucide-react";

const SocialProofIt = () => {
  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-6xl">
        <h2 id="social-proof-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Già oltre 500 negozi Shopify si fidano di ReplAInow
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Unisciti ai merchant di successo che risparmiano ore ogni giorno e migliorano il servizio clienti.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg bg-card border">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl">89%</div>
            <div className="text-sm text-muted-foreground">Tempo risparmiato</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl">94%</div>
            <div className="text-sm text-muted-foreground">Soddisfazione clienti</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl">312%</div>
            <div className="text-sm text-muted-foreground">ROI medio</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl">4.9/5</div>
            <div className="text-sm text-muted-foreground">Valutazione App Store</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <article className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
            <blockquote className="text-sm text-muted-foreground mb-3">
              "ReplAInow ha trasformato completamente il nostro supporto clienti. Risparmiamo 4 ore al giorno e i clienti ricevono risposte migliori."
            </blockquote>
            <cite className="font-medium text-sm">
              Marco R., Fashion Store
            </cite>
          </article>

          <article className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
            <blockquote className="text-sm text-muted-foreground mb-3">
              "L'installazione ha richiesto 2 minuti, già il primo giorno abbiamo risparmiato ore. Semplicemente geniale!"
            </blockquote>
            <cite className="font-medium text-sm">
              Laura M., Elettronica
            </cite>
          </article>

          <article className="bg-card rounded-lg p-6 border shadow-sm">
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
            <blockquote className="text-sm text-muted-foreground mb-3">
              "I nostri clienti ricevono risposte precise in tempo record. La soddisfazione dei clienti è aumentata significativamente."
            </blockquote>
            <cite className="font-medium text-sm">
              Giuseppe T., Sport & Outdoor
            </cite>
          </article>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="h-5 w-5" />
            <span className="text-sm">Shopify App Store</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm">Conforme GDPR</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5" />
            <span className="text-sm">Sicurezza SSL/HMAC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofIt;