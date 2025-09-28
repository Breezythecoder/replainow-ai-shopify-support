import { Button } from "@/components/ui/button";
import { Package, Users, ShoppingCart, BarChart3, Truck, CreditCard, MessageSquare, Settings } from "lucide-react";
import React from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

interface CardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, desc, className = "" }) => (
  <div className={`bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-semibold text-sm mb-1">{title}</h3>
    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const StoreDataFlowNl = () => {
  return (
    <section aria-labelledby="data-flow-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="data-flow-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            De AI weet alles over jouw winkel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ReplAInow integreert naadloos met je Shopify-data om accurate, gepersonaliseerde antwoorden te geven
          </p>
        </div>

        {/* Desktop/Tablet Layout - Radial */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-48 bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">ReplAInow AI</h3>
                <p className="text-sm text-muted-foreground">
                  Verbonden met al je Shopify-data voor realtime antwoorden
                </p>
              </div>
            </div>
          </div>

          {/* Radial Cards */}
          <div className="relative w-[800px] h-[800px] mx-auto">
            <Card
              Icon={Package}
              title="Producten & Voorraad"
              desc="Beschikbaarheid, prijzen, specificaties en productdetails"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-56"
            />
            <Card
              Icon={ShoppingCart}
              title="Bestellingen"
              desc="Status, tracking, leveringsdata en ordergeschiedenis"
              className="absolute top-16 right-0 w-56"
            />
            <Card
              Icon={Users}
              title="Klantgegevens"
              desc="Profiel, bestellingshistorie en voorkeuren"
              className="absolute top-1/2 right-0 -translate-y-1/2 w-56"
            />
            <Card
              Icon={Truck}
              title="Verzending"
              desc="Trackingnummers, leveringsstatus en verzendopties"
              className="absolute bottom-16 right-0 w-56"
            />
            <Card
              Icon={CreditCard}
              title="Betalingen"
              desc="Betalingsstatus, facturatie en terugbetalingen"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56"
            />
            <Card
              Icon={BarChart3}
              title="Analytics"
              desc="Verkoopcijfers, trends en rapportages"
              className="absolute bottom-16 left-0 w-56"
            />
            <Card
              Icon={MessageSquare}
              title="Reviews & Feedback"
              desc="Klantbeoordelingen en productfeedback"
              className="absolute top-1/2 left-0 -translate-y-1/2 w-56"
            />
          </div>
        </div>

        {/* Mobile Layout - Stacked Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          <Card
            Icon={Package}
            title="Producten"
            desc="Voorraad, prijzen en specs"
          />
          <Card
            Icon={ShoppingCart}
            title="Bestellingen"
            desc="Status en tracking"
          />
          <Card
            Icon={Users}
            title="Klanten"
            desc="Profiel en geschiedenis"
          />
          <Card
            Icon={Truck}
            title="Verzending"
            desc="Tracking en status"
          />
          <Card
            Icon={CreditCard}
            title="Betalingen"
            desc="Status en facturatie"
          />
          <Card
            Icon={BarChart3}
            title="Analytics"
            desc="Verkoopcijfers"
          />
        </div>

        <div className="md:hidden text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-card border rounded-xl p-4 shadow-sm">
            <Settings className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">ReplAInow AI</h3>
              <p className="text-sm text-muted-foreground">Realtime verbonden</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Met toegang tot al deze gegevens kan onze AI elke klantvraag beantwoorden - 
            van productdetails tot bestellingsstatus, altijd accuraat en up-to-date.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={OAUTH_URL}>Nu free test</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#live-demo">Bekijk de demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDataFlowNl;