import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

type Feature = string | {
  label: string;
  items: string[];
};

const baseFeatures: Feature[] = [
  "AI-klantenservice 24/7",
  "Real-time Shopify-data toegang",
  "GDPR-conforme dataverwerking",
  "Merkconforme communicatie",
  "Multi-taal ondersteuning",
  "Email & chat integratie"
];

const plans = [
  {
    name: "Starter",
    price: "€29",
    description: "Perfect voor startende webshops",
    features: [
      ...baseFeatures,
      "Tot 500 gesprekken/maand",
      "Basis AI-training",
      "Email ondersteuning",
      "Shopify integratie"
    ],
    popular: false,
    trialText: "14 dagen gratis proberen"
  },
  {
    name: "Growth",
    price: "€79",
    description: "Ideaal voor groeiende bedrijven",
    features: [
      ...baseFeatures,
      "Tot 2.000 gesprekken/maand",
      "Geavanceerde AI-training",
      "Prioriteit ondersteuning",
      {
        label: "Uitgebreide integraties:",
        items: [
          "WhatsApp Business",
          "Facebook Messenger",
          "Instagram DM",
          "Live Chat systemen"
        ]
      },
      "Custom AI-persona",
      "Detailleerde analytics"
    ],
    popular: true,
    trialText: "14 dagen gratis proberen"
  },
  {
    name: "Professional",
    price: "€149",
    description: "Voor grote volumes en teams",
    features: [
      ...baseFeatures,
      "Tot 5.000 gesprekken/maand",
      "Premium AI-training",
      "Dedicated account manager",
      {
        label: "Alle integraties plus:",
        items: [
          "Slack integratie",
          "Microsoft Teams",
          "Custom API toegang",
          "Webhook configuratie"
        ]
      },
      "Multi-team toegang",
      "Advanced reporting",
      "Custom workflows"
    ],
    popular: false,
    trialText: "14 dagen gratis proberen"
  },
  {
    name: "Enterprise",
    price: "Op maat",
    description: "Volledig aangepaste oplossing",
    features: [
      ...baseFeatures,
      "Onbeperkte gesprekken",
      "Custom AI-ontwikkeling",
      "24/7 premium ondersteuning",
      {
        label: "Enterprise features:",
        items: [
          "On-premise deployment",
          "Custom integraties",
          "Dedicated servers",
          "SLA garanties"
        ]
      },
      "White-label mogelijkheden",
      "Custom training sessies",
      "Persoonlijke implementatie"
    ],
    popular: false,
    trialText: "Offerte aanvragen"
  }
];

const renderFeature = (feature: Feature, index: number) => {
  if (typeof feature === 'string') {
    return (
      <li key={index} className="flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <span className="text-sm">{feature}</span>
      </li>
    );
  } else {
    return (
      <li key={index} className="space-y-2">
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{feature.label}</span>
        </div>
        <ul className="ml-8 space-y-1">
          {feature.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-sm text-muted-foreground">• {item}</li>
          ))}
        </ul>
      </li>
    );
  }
};

const PricingNl = () => {
  return (
    <section id="preise" aria-labelledby="pricing-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="pricing-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Transparante prijzen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kies het plan dat past bij jouw bedrijf. Alle plannen bevatten een 14-daagse gratis proefperiode.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary bg-primary/5 scale-105 shadow-lg' 
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Meest populair
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Op maat" && <span className="text-muted-foreground">/maand</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => renderFeature(feature, featureIndex))}
              </ul>

              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                <a href={OAUTH_URL}>{plan.trialText}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Alle prijzen zijn exclusief BTW. Opzeggen kan altijd zonder kosten.
          </p>
          <p className="text-sm text-muted-foreground">
            Vragen? <a href="#kontakt" className="text-primary hover:underline">Neem contact met ons op</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingNl;