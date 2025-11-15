import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { Check, X, Clock, Moon, Globe, TrendingUp, Zap, DollarSign, ArrowRight, ChevronRight, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// 🌙 24/7 SUPPORT PAGE - Night Theme, Premium Content
// 100% Echte Daten über 24/7 Verfügbarkeit, Nachtschicht-Kosten, Internationale Zeitzonen

const Support24_7Shopify = () => {
  const { t, getTranslation } = useTranslation();
  
  // Helper functions
  const getArray = (key: string): any[] => {
    const result = getTranslation(key);
    return Array.isArray(result) ? result : [];
  };
  
  const getObject = (key: string): Record<string, any> => {
    const result = getTranslation(key);
    return typeof result === 'object' && result !== null && !Array.isArray(result) ? result : {};
  };
  
  // Night Shift Cost Calculator State
  const [nightAgents, setNightAgents] = useState(2);
  const [nightCostPerAgent, setNightCostPerAgent] = useState(5000);
  const [weekendAgents, setWeekendAgents] = useState(2);
  const [weekendCostPerAgent, setWeekendCostPerAgent] = useState(4000);
  
  // Calculations
  const nightCostMonthly = nightAgents * nightCostPerAgent;
  const weekendCostMonthly = weekendAgents * weekendCostPerAgent;
  const recruitingMonthly = (2 * 5000) / 12; // 2 new agents per year
  const trainingMonthly = (2 * 3000) / 12;
  const sickDaysMonthly = 400; // +40% sick days
  const softwareMonthly = 400;
  const totalHumanMonthly = nightCostMonthly + weekendCostMonthly + recruitingMonthly + trainingMonthly + sickDaysMonthly + softwareMonthly;
  const totalHumanAnnual = totalHumanMonthly * 12;
  
  // ReplAInow costs
  const replainowCost = 99; // Scale plan
  const dayAgent = 3000; // 1 agent for day shift
  const totalAIMonthly = replainowCost + dayAgent;
  const totalAIAnnual = totalAIMonthly * 12;
  
  const savingsMonthly = totalHumanMonthly - totalAIMonthly;
  const savingsAnnual = totalHumanAnnual - totalAIAnnual;
  const savingsPercentage = Math.round((savingsMonthly / totalHumanMonthly) * 100);
  const agentsSaved = nightAgents + weekendAgents;

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": getArray('content.support24-7.faq.items').slice(0, 3).map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "24/7 Kundensupport für Shopify ohne Nachtschichten",
    "description": "Kompletter Guide für 24/7 Support mit KI. Nachtschicht-Kosten vermeiden, internationale Zeitzonen abdecken, Umsatz retten.",
    "author": {
      "@type": "Organization",
      "name": "ReplAInow"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ReplAInow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png"
      }
    },
    "datePublished": "2025-11-15",
    "dateModified": "2025-11-15",
    "mainEntityOfPage": "https://replainow.com/24-7-kundensupport-shopify"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://replainow.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "24/7 Kundensupport",
        "item": "https://replainow.com/24-7-kundensupport-shopify"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('content.support24-7.meta.title')}</title>
        <meta name="description" content={t('content.support24-7.meta.description')} />
        <meta name="keywords" content={t('content.support24-7.meta.keywords')} />
        <link rel="canonical" href="https://replainow.com/24-7-kundensupport-shopify" />
        
        <meta property="og:title" content="24/7 Kundensupport für Shopify | Ohne Nachtschichten" />
        <meta property="og:description" content="24/7 Support mit KI statt teuren Nachtschichten. Sofortige Antworten, alle Zeitzonen." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://replainow.com/24-7-kundensupport-shopify" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <LegalNavbar />

      <main 
        id="main-content" 
        role="main" 
        aria-label="24/7 Kundensupport"
        className="min-h-screen pt-20"
      >
        
        {/* Hero Section - Night Theme! 🌙 */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-20 overflow-hidden">
          {/* Stars Background Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-blue-200">
                <li>
                  <Link to="/" className="hover:text-white">
                    {t('content.support24-7.breadcrumb.home')}
                  </Link>
                </li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-white font-medium">
                  {t('content.support24-7.breadcrumb.current')}
                </li>
              </ol>
            </nav>

            {/* Badge with Moon Icon */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
              <Moon className="w-4 h-4" />
              {t('content.support24-7.hero.badge')}
            </div>
            
            {/* H1 - White for Night Theme */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('content.support24-7.hero.title')}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl">
              {t('content.support24-7.hero.subtitle')}
            </p>
            
            {/* Stats Grid - Dark Theme */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {getArray('content.support24-7.hero.stats').map((stat: any, idx: number) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.shopify.com/replainow-ai-support"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                {t('content.support24-7.hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#live-demo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                {t('content.support24-7.hero.cta.secondary')}
              </a>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('content.support24-7.toc.title')}
            </h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {getArray('content.support24-7.toc.items').map((item: string, idx: number) => (
                <li key={idx}>
                  <a 
                    href={`#section-${idx + 1}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Problem Section - Night Shift Problems */}
        <section id="section-1" className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.support24-7.problem.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('content.support24-7.problem.subtitle')}
              </p>
            </div>

            {/* Pain Points with Stats */}
            <div className="space-y-6 mb-12">
              {getArray('content.support24-7.problem.points').map((point: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-700">{point.desc}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap">
                        {point.stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reality Check - Dark Box */}
            <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {t('content.support24-7.problem.realityCheck.title')}
              </h3>
              <div className="space-y-4 mb-6">
                {getArray('content.support24-7.problem.realityCheck.calculation').map((calc: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <p className="text-lg font-mono">{calc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="text-2xl font-bold text-red-300 mb-2">
                  {t('content.support24-7.problem.realityCheck.total')}
                </p>
                <p className="text-xl text-blue-200">
                  {t('content.support24-7.problem.realityCheck.conclusion')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Night Section - Traffic Analysis */}
        <section id="section-2" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.support24-7.whyNight.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('content.support24-7.whyNight.subtitle')}
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t('content.support24-7.whyNight.intro')}
              </p>
            </div>

            {/* Traffic Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {getArray('content.support24-7.whyNight.stats').map((stat: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-indigo-600" />
                    <div className="text-sm font-semibold text-gray-700">{stat.time}</div>
                  </div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.percentage}</div>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Impact Scenarios - Before/After */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                {t('content.support24-7.whyNight.impact.title')}
              </h3>
              <div className="space-y-6">
                {getArray('content.support24-7.whyNight.impact.scenarios').map((scenario: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
                        {scenario.time}
                      </div>
                      <div className="text-sm text-gray-600">{scenario.situation}</div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Without Support */}
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="font-bold text-red-700">Ohne Support:</span>
                        </div>
                        <p className="text-gray-700 text-sm">{scenario.noSupport}</p>
                      </div>
                      
                      {/* With AI */}
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <span className="font-bold text-green-700">Mit ReplAInow KI:</span>
                        </div>
                        <p className="text-gray-700 text-sm">{scenario.withAI}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Lost Revenue Box */}
              <div className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white text-center">
                <p className="text-2xl font-bold">
                  {t('content.support24-7.whyNight.impact.lostRevenue')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="section-3" className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.support24-7.solution.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('content.support24-7.solution.subtitle')}
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t('content.support24-7.solution.intro')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              {getArray('content.support24-7.solution.features').map((feature: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.desc}</p>
                  <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                    <span className="font-semibold text-green-700">Benefit: </span>
                    <span className="text-gray-700">{feature.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 Nachtschicht-Kosten Calculator */}
        <section id="section-4" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 text-white">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('content.support24-7.costComparison.title')}
              </h2>
              <p className="text-xl text-blue-200">
                {t('content.support24-7.costComparison.subtitle')}
              </p>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 text-gray-900 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                {t('content.support24-7.calculator.title')}
              </h3>
              <p className="text-center text-gray-600 mb-8">
                {t('content.support24-7.calculator.subtitle')}
              </p>
              
              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.support24-7.calculator.inputs.nightAgents')}
                  </label>
                  <input
                    type="number"
                    value={nightAgents}
                    onChange={(e) => setNightAgents(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold"
                    min="1"
                    max="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.support24-7.calculator.inputs.nightCostPerAgent')}
                  </label>
                  <input
                    type="number"
                    value={nightCostPerAgent}
                    onChange={(e) => setNightCostPerAgent(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold"
                    min="3000"
                    max="10000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.support24-7.calculator.inputs.weekendAgents')}
                  </label>
                  <input
                    type="number"
                    value={weekendAgents}
                    onChange={(e) => setWeekendAgents(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold"
                    min="1"
                    max="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.support24-7.calculator.inputs.weekendCostPerAgent')}
                  </label>
                  <input
                    type="number"
                    value={weekendCostPerAgent}
                    onChange={(e) => setWeekendCostPerAgent(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold"
                    min="3000"
                    max="10000"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border-2 border-indigo-200">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-4">24/7 mit Menschen:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Nachtschicht:</span>
                        <span className="font-bold text-red-600">${nightCostMonthly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wochenende:</span>
                        <span className="font-bold text-red-600">${weekendCostMonthly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recruiting/Training/Extras:</span>
                        <span className="font-bold text-red-600">${Math.round(recruitingMonthly + trainingMonthly + sickDaysMonthly + softwareMonthly).toLocaleString()}</span>
                      </div>
                      <div className="pt-3 border-t-2 border-gray-300 flex justify-between">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-red-600 text-xl">${Math.round(totalHumanMonthly).toLocaleString()}/Monat</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-4">24/7 mit ReplAInow:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>ReplAInow KI:</span>
                        <span className="font-bold text-green-600">${replainowCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 Agent (Tagesschicht):</span>
                        <span className="font-bold text-green-600">${dayAgent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Extras:</span>
                        <span className="font-bold text-green-600">$0</span>
                      </div>
                      <div className="pt-3 border-t-2 border-gray-300 flex justify-between">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-green-600 text-xl">${totalAIMonthly.toLocaleString()}/Monat</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center">
                  <div className="text-5xl font-bold mb-2">
                    ${Math.round(savingsMonthly).toLocaleString()}
                  </div>
                  <div className="text-xl mb-4">gespart pro Monat ({savingsPercentage}%)</div>
                  <div className="text-3xl font-bold mb-2">
                    ${Math.round(savingsAnnual).toLocaleString()}
                  </div>
                  <div className="text-lg mb-4">gespart pro Jahr</div>
                  <div className="pt-4 border-t border-green-400">
                    <div className="text-xl font-semibold">
                      {agentsSaved} Nacht/Wochenend-Agents eingespart
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Jetzt ${Math.round(savingsMonthly).toLocaleString()}/Monat sparen
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Real Scenarios Section */}
        <section id="section-5" className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.support24-7.scenarios.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('content.support24-7.scenarios.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {getArray('content.support24-7.scenarios.cases').map((scenario: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
                  {/* Time & Location Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">{scenario.time}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                      <Globe className="w-5 h-5" />
                      <span className="font-semibold">{scenario.location}</span>
                    </div>
                  </div>
                  
                  {/* Situation */}
                  <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                    <p className="text-gray-700"><span className="font-semibold">Situation:</span> {scenario.situation}</p>
                  </div>
                  
                  {/* Customer Question */}
                  <div className="bg-blue-100 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                    <p className="text-gray-700"><span className="font-semibold text-blue-700">Kunde fragt:</span></p>
                    <p className="text-gray-900 font-medium text-lg mt-2">"{scenario.question}"</p>
                  </div>
                  
                  {/* AI Response */}
                  <div className="bg-green-100 rounded-lg p-4 mb-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      <p className="font-semibold text-green-700">KI antwortet (3 Sekunden):</p>
                    </div>
                    <p className="text-gray-900 font-medium mb-2">{scenario.aiResponse}</p>
                    <p className="text-sm text-green-700 italic">{scenario.aiAction}</p>
                  </div>
                  
                  {/* Outcome */}
                  <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Ergebnis:</span> {scenario.outcome}</p>
                    <div className="flex items-center gap-2 text-green-700 font-bold text-lg">
                      <Check className="w-6 h-6" />
                      <span>{scenario.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t('content.support24-7.scenarios.summary.title')}
              </h3>
              <div className="space-y-2 mb-6">
                {getArray('content.support24-7.scenarios.summary.data').map((data: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-300" />
                    <p className="text-lg">{data}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-bold text-blue-100 border-t border-white/20 pt-4">
                {t('content.support24-7.scenarios.summary.conclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* International Timezones Section */}
        <section id="section-6" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.support24-7.international.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('content.support24-7.international.subtitle')}
              </p>
            </div>

            {/* Challenge */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-700 mb-3">Die Herausforderung:</h3>
              <p className="text-gray-700">{t('content.support24-7.international.challenge')}</p>
            </div>

            {/* Solution */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-3">Die ReplAInow Lösung:</h3>
              <p className="text-gray-700">{t('content.support24-7.international.solution')}</p>
            </div>

            {/* Timezones Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {getArray('content.support24-7.international.timezones').map((tz: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">{tz.market}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Zeitzone:</span>
                      <span className="font-semibold text-gray-900 ml-2">{tz.timezone}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Peak Hours:</span>
                      <span className="font-semibold text-gray-900 ml-2">{tz.peakHours}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-gray-600">Coverage:</span>
                      <p className="font-semibold text-green-600 mt-1">{tz.coverage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-indigo-600">
                {t('content.support24-7.international.benefit')}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="section-7" className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('content.support24-7.faq.title')}
            </h2>
            
            <div className="space-y-6">
              {getArray('content.support24-7.faq.items').map((faq: any, idx: number) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                      ?
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('content.support24-7.pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {t('content.support24-7.pricing.subtitle')}
            </p>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 inline-block">
              <p className="text-2xl font-bold">
                {t('content.support24-7.pricing.note')}
              </p>
            </div>

            {/* Competitor Comparison */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8">
                {t('content.support24-7.pricing.comparison.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {getArray('content.support24-7.pricing.comparison.competitors').map((comp: any, idx: number) => (
                  <div key={idx} className={`rounded-xl p-6 border-2 ${idx === 2 ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white border-indigo-700' : 'bg-white text-gray-900 border-gray-200'}`}>
                    <h4 className="text-2xl font-bold mb-4">{comp.name}</h4>
                    <div className="space-y-2 text-sm mb-4">
                      <p>{comp.baseCost}</p>
                      <p className={idx === 2 ? 'text-green-300' : 'text-red-600'}>{comp.nightCost}</p>
                    </div>
                    <div className={`pt-4 border-t ${idx === 2 ? 'border-white/30' : 'border-gray-200'}`}>
                      <p className="font-bold text-lg">{comp.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Night Theme */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('content.support24-7.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t('content.support24-7.cta.subtitle')}
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-10">
              {getArray('content.support24-7.cta.stats').map((stat: string, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-blue-200">{stat}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://apps.shopify.com/replainow-ai-support"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                {t('content.support24-7.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#section-4"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                {t('content.support24-7.cta.secondary')}
              </a>
            </div>
            
            {/* Guarantee */}
            <p className="text-blue-200">
              {t('content.support24-7.cta.guarantee')}
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('content.support24-7.related.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {getArray('content.support24-7.related.articles').map((article: any, idx: number) => (
                <Link
                  key={idx}
                  to={article.url}
                  className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{article.desc}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <UltraFooter />
    </>
  );
};

export default Support24_7Shopify;

