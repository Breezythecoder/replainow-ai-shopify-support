import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah van Berg",
    role: "E-commerce Manager",
    company: "ModeFashion",
    content: "ReplAInow heeft onze klantenservice volledig getransformeerd. We besparen 15 uur per week en onze klanten zijn veel tevredener.",
    rating: 5,
    image: "/lovable-uploads/590584d1-2d39-4235-b3ff-b1afba7efa35.png"
  },
  {
    name: "Mark Janssen",
    role: "Eigenaar",
    company: "TechGadgets NL",
    content: "De AI begrijpt onze producten beter dan sommige medewerkers. Ongelooflijk hoe nauwkeurig de antwoorden zijn.",
    rating: 5,
    image: "/lovable-uploads/ad586425-618c-4760-ad1a-4e949029cd8f.png"
  },
  {
    name: "Lisa de Vries",
    role: "Customer Success",
    company: "BioBaby",
    content: "24/7 klantenservice zonder extra personeel? Met ReplAInow is het mogelijk. Onze conversion is met 23% gestegen.",
    rating: 5,
    image: "/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png"
  }
];

const stats = [
  { number: "90%", label: "Kostenbesparing" },
  { number: "< 3s", label: "Responstijd" },
  { number: "24/7", label: "Beschikbaarheid" },
  { number: "15+", label: "Talen ondersteund" }
];

const SocialProofNl = () => {
  return (
    <section aria-labelledby="social-proof-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="social-proof-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Meer dan 500+ tevreden Shopify-merchants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek waarom bedrijven overstappen naar geautomatiseerde klantenservice
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="mb-6">
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-3" />
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
              </blockquote>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} profielfoto`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} bij {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofNl;