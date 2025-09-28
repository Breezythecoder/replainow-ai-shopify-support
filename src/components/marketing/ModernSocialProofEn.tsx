import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMarco from "@/assets/testimonial-marco.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import { Star } from "lucide-react";
import { STORE_COUNT } from "@/config/siteStats";

const ModernSocialProofEn = () => {
  const testimonials = [
    {
      company: "BeautyStore",
      owner: "Lisa M.",
      result: "15 hours/week saved",
      quote: "ReplAInow has revolutionized our support. The AI understands our products better than some employees!",
      image: testimonialLisa
    },
    {
      company: "TechGadgets", 
      owner: "Marco K.",
      result: "+37% customer satisfaction",
      quote: "Customers love the instant responses. Conversion has gone through the roof!",
      image: testimonialMarco
    },
    {
      company: "FashionHub",
      owner: "Sarah T.", 
      result: "12x ROI in 3 months",
      quote: "From Intercom to ReplAInow - best decision ever! Costs down, performance up.",
      image: testimonialSarah
    },
    {
      company: "ElectroMax",
      owner: "Thomas R.",
      result: "85% fewer support tickets",
      quote: "Finally no more 24/7 support shifts! The AI answers 90% of questions automatically. Game changer for our Shopify store!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      company: "HomeDecor Plus",
      owner: "Anna L.",
      result: "+42% conversion rate",
      quote: "Our customers get instant answers about shipping, returns and product details. Shopify integration was super easy!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      company: "SportGear Pro",
      owner: "Mike S.",
      result: "€50k+ additional revenue",
      quote: "The AI knows every item in our Shopify store. Customers buy more because they get perfect advice. Our support team can focus on important inquiries.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Real <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Merchants</span> Say
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join {STORE_COUNT} satisfied Shopify merchants worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-blue-200 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Result */}
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.owner}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.owner}</div>
                  <div className="text-blue-300 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Proven Results for Shopify Merchants
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{STORE_COUNT}</div>
              <div className="text-blue-200">Active Shopify Stores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3s</div>
              <div className="text-blue-200">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">75%</div>
              <div className="text-blue-200">Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Shopify Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Shopify Merchants Choose ReplAInow
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Easy Integration</h4>
              <p className="text-blue-200">
                Connect with your Shopify store in minutes. No technical knowledge required.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Instant Setup</h4>
              <p className="text-blue-200">
                AI learns your products, policies, and brand voice automatically.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Immediate Results</h4>
              <p className="text-blue-200">
                Start saving time and money from day one. No training period needed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-blue-200 mb-6">
              Start your free trial today and see why 280+ Shopify merchants trust ReplAInow
            </p>
            <a 
              href="https://apps.shopify.com/replainow-ai-support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 inline-block"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSocialProofEn;
