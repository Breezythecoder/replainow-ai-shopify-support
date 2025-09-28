import { Button } from "@/components/ui/button";

const OAUTH_URL = "https://apps.shopify.com/replainow-ai-support";

const ModernPricingEn = () => {
  const plans = [
    {
      name: "Starter",
      price: "€19",
      period: "/ Month",
      quota: "Up to 300 AI responses / Month",
      trial: "14 days free trial",
      features: [
        "1-Click Installation",
        "Unlimited Store Data (Products, Pages, Policies etc.)",
        "AI Email & AI Live Chat",
        "Customizable Branding",
        "Email sending via ReplAInow address"
      ],
      highlight: false,
      description: "Perfect for testing"
    },
    {
      name: "Growth",
      price: "€49",
      period: "/ Month",
      quota: "Up to 1500 AI responses / Month",
      trial: "14 days free trial",
      features: [
        "1-Click Installation",
        "Unlimited Store Data (Products, Pages, Policies etc.)",
        "AI Email & AI Live Chat",
        "Customizable Branding",
        "Email sending with your domain"
      ],
      highlight: true,
      badge: "Most Popular Plan",
      description: "For growing stores"
    },
    {
      name: "Pro",
      price: "€99",
      period: "/ Month",
      quota: "Up to 3000 AI responses / Month",
      trial: "14 days free trial",
      features: [
        "1-Click Installation",
        "Unlimited Store Data (Products, Pages, Policies etc.)",
        "AI Email & AI Live Chat",
        "Customizable Branding",
        "Email sending with your domain"
      ],
      highlight: false,
      description: "For established stores"
    },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Start free, scale as you grow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 ${
                plan.highlight ? 'ring-2 ring-blue-400 scale-105' : ''
              } transition-all duration-300 hover:scale-105 hover:bg-white/10`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-blue-200 ml-1">{plan.period}</span>
                </div>
                <p className="text-blue-200 text-sm mb-4">{plan.quota}</p>
                <p className="text-green-400 text-sm font-medium">{plan.trial}</p>
                <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <a href={OAUTH_URL} target="_blank" rel="noopener noreferrer">
                  Install Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <p className="text-blue-200 text-lg">
            <span className="text-green-400 font-semibold">14-day money-back guarantee</span> - No questions asked
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernPricingEn;
