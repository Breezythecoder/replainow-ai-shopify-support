import { Star, TrendingUp, Clock, Users } from "lucide-react";

const SocialProofZh = () => {
  const testimonials = [
    {
      name: "",
      role: "",
      content: "ReplAInow340%",
      rating: 5
    },
    {
      name: "",
      role: "",
      content: "5010",
      rating: 5
    },
    {
      name: "",
      role: "",
      content: "AIGDPR",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: ""
    },
    {
      icon: Clock,
      value: "3",
      label: ""
    },
    {
      icon: Users,
      value: "1000+",
      label: ""
    }
  ];

  return (
    <section aria-labelledby="social-proof-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 id="social-proof-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          AI
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          ShopifyReplAInow
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl border bg-card shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofZh;