import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const PricingIt = () => {
  return (
    <section id="prezzi" aria-labelledby="pricing-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container max-w-5xl">
        <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Prezzi semplici e trasparenti
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Inizia con la prova gratuita di 14 giorni. Nessuna carta di credito necessaria.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="text-center mb-6">
              <h3 className="font-semibold text-lg mb-2">Starter</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold">€29</span>
                <span className="text-muted-foreground">/mese</span>
              </div>
              <p className="text-sm text-muted-foreground">Perfetto per piccoli negozi</p>
            </header>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Fino a 200 ticket/mese
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Integrazione Shopify completa
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Supporto multilingue
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Supporto email
              </li>
              <li className="flex items-center gap-2 text-sm">
                <X className="h-4 w-4 text-red-400" />
                Risposte automatiche
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline">
              <a href={OAUTH_URL}>Inizia prova gratuita</a>
            </Button>
          </article>

          <article className="rounded-xl border-2 border-primary bg-card p-6 shadow-brand relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Più popolare
              </span>
            </div>
            <header className="text-center mb-6">
              <h3 className="font-semibold text-lg mb-2">Professional</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold">€79</span>
                <span className="text-muted-foreground">/mese</span>
              </div>
              <p className="text-sm text-muted-foreground">Per negozi in crescita</p>
            </header>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Fino a 1.000 ticket/mese
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Integrazione Shopify completa
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Supporto multilingue
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Risposte automatiche
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Supporto prioritario
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Analytics avanzate
              </li>
            </ul>
            <Button asChild className="w-full" variant="hero">
              <a href={OAUTH_URL}>Inizia prova gratuita</a>
            </Button>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <header className="text-center mb-6">
              <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold">€199</span>
                <span className="text-muted-foreground">/mese</span>
              </div>
              <p className="text-sm text-muted-foreground">Per grandi volumi</p>
            </header>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Ticket illimitati
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Integrazione Shopify completa
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Supporto multilingue
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Risposte automatiche
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Account manager dedicato
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                Integrazione personalizzata
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline">
              <a href="#contatto">Contattaci</a>
            </Button>
          </article>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>✓ 14 giorni di prova gratuita per tutti i piani</p>
          <p>✓ Annulla in qualsiasi momento</p>
          <p>✓ Nessuna commissione di configurazione</p>
        </div>
      </div>
    </section>
  );
};

export default PricingIt;