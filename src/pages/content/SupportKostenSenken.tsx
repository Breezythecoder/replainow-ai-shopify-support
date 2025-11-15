import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { Check, X, DollarSign, TrendingDown, AlertTriangle, ArrowRight, ChevronRight, Zap, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// 💰 SUPPORT KOSTEN SENKEN PAGE - Money Theme, TCO Focus
// 100% Real TCO Analysis, Advanced 12-Input Calculator, 3 Real Case Studies

const SupportKostenSenken = () => {
  const { t, getTranslation } = useTranslation();
  
  const getArray = (key: string): any[] => {
    const result = getTranslation(key);
    return Array.isArray(result) ? result : [];
  };
  
  const getObject = (key: string): Record<string, any> => {
    const result = getTranslation(key);
    return typeof result === 'object' && result !== null && !Array.isArray(result) ? result : {};
  };
  
  // Advanced TCO Calculator State (12 Inputs!)
  const [agents, setAgents] = useState(3);
  const [salary, setSalary] = useState(3000);
  const [benefits, setBenefits] = useState(25);
  const [nightShift, setNightShift] = useState(0);
  const [weekendShift, setWeekendShift] = useState(0);
  const [software, setSoftware] = useState(400);
  const [recruiting, setRecruiting] = useState(3500);
  const [training, setTraining] = useState(5000);
  const [equipment, setEquipment] = useState(2000);
  const [managementHours, setManagementHours] = useState(10);
  const [overtime, setOvertime] = useState(750);
  const [turnover, setTurnover] = useState(1);
  
  // Advanced TCO Calculations
  const salariesMonthly = agents * salary;
  const benefitsMonthly = (salariesMonthly * benefits) / 100;
  const nightCostMonthly = nightShift * salary * 1.5; // +50% surcharge
  const weekendCostMonthly = weekendShift * salary * 1.3; // +30% surcharge
  const recruitingMonthly = (recruiting * turnover) / 12; // Amortized
  const trainingMonthly = (training * turnover) / 12; // Amortized
  const equipmentMonthly = (equipment * turnover) / 12; // Amortized
  const managementMonthly = (managementHours * 4.33 * 100); // 4.33 weeks/month, $100/hour
  
  const totalHumanMonthly = salariesMonthly + benefitsMonthly + nightCostMonthly + weekendCostMonthly + 
                            software + recruitingMonthly + trainingMonthly + equipmentMonthly + 
                            managementMonthly + overtime;
  const totalHumanAnnual = totalHumanMonthly * 12;
  
  // ReplAInow costs (smart plan selection based on ticket volume)
  const estimatedTickets = agents * 30 * 30; // agents × 30 tickets/day × 30 days
  let replainowPlan = "Launch";
  let replainowCost = 19;
  if (estimatedTickets > 1500) {
    replainowPlan = "Ultimate";
    replainowCost = 399;
  } else if (estimatedTickets > 600) {
    replainowPlan = "Scale";
    replainowCost = 99;
  } else if (estimatedTickets > 100) {
    replainowPlan = "Growth";
    replainowCost = 49;
  }
  
  const agentsNeeded = Math.max(1, Math.ceil(agents * 0.25)); // 20-30% tickets need humans
  const agentCost = agentsNeeded * salary;
  const agentBenefits = (agentCost * benefits) / 100;
  const minimalManagement = 100; // ~1h/week
  
  const totalAIMonthly = replainowCost + agentCost + agentBenefits + minimalManagement;
  const totalAIAnnual = totalAIMonthly * 12;
  
  const savingsMonthly = totalHumanMonthly - totalAIMonthly;
  const savingsAnnual = totalHumanAnnual - totalAIAnnual;
  const savingsPercentage = Math.round((savingsMonthly / totalHumanMonthly) * 100);
  const agentsSaved = agents - agentsNeeded;
  const threeYearSavings = savingsAnnual * 3;
  
  // Break-even calculation
  const breakEvenDays = Math.ceil((replainowCost / savingsMonthly) * 30);

  // Schema.org - 5 TYPES! (Ultra Enterprise!)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": getArray('content.kostenSenken.faq.items').slice(0, 5).map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Support-Kosten senken bei Shopify",
    "description": "Schritt-für-Schritt Guide zur Kostensenkung",
    "totalTime": "PT1M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Echte Kosten analysieren", "text": "Alle versteckten Kosten aufdecken mit TCO-Analyse" },
      { "@type": "HowToStep", "position": 2, "name": "ReplAInow installieren", "text": "60 Sekunden Installation aus Shopify App Store" },
      { "@type": "HowToStep", "position": 3, "name": "60-80% automatisieren", "text": "KI übernimmt repetitive Tickets automatisch" },
      { "@type": "HowToStep", "position": 4, "name": "Team reduzieren", "text": "Von 3-5 Agents auf 1-2 Agents skalieren" },
      { "@type": "HowToStep", "position": 5, "name": "Savings reinvestieren", "text": "Gesparte Kosten in Marketing/Wachstum investieren" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Shopify Support Kosten senken: TCO Guide 2025",
    "description": "Komplette TCO-Analyse für Shopify Support. Alle 12 Kostenkategorien, versteckte Kosten, Real Merchants, Advanced Calculator.",
    "author": { "@type": "Organization", "name": "ReplAInow" },
    "publisher": {
      "@type": "Organization",
      "name": "ReplAInow",
      "logo": { "@type": "ImageObject", "url": "https://replainow.com/lovable-uploads/ReplAInow_Logo_optimized.png" }
    },
    "datePublished": "2025-11-15",
    "dateModified": "2025-11-15",
    "mainEntityOfPage": "https://replainow.com/shopify-support-kosten-senken",
    "wordCount": 3500,
    "articleSection": "Cost Optimization"
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ReplAInow Cost Reduction Solution",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "19",
      "highPrice": "399",
      "priceCurrency": "USD",
      "priceSpecification": [{
        "@type": "UnitPriceSpecification",
        "price": "19",
        "priceCurrency": "USD",
        "name": "Launch Plan"
      }]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "280"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://replainow.com/" },
      { "@type": "ListItem", "position": 2, "name": "Support Kosten senken", "item": "https://replainow.com/shopify-support-kosten-senken" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('content.kostenSenken.meta.title')}</title>
        <meta name="description" content={t('content.kostenSenken.meta.description')} />
        <meta name="keywords" content={t('content.kostenSenken.meta.keywords')} />
        <link rel="canonical" href="https://replainow.com/shopify-support-kosten-senken" />
        
        <meta property="og:title" content="Shopify Support Kosten senken | 79-97% Ersparnis" />
        <meta property="og:description" content="Support-Kosten um 79-97% senken. TCO-Analyse, Advanced Calculator, Real Merchant Results." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://replainow.com/shopify-support-kosten-senken" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="article:published_time" content="2025-11-15T00:00:00Z" />
        <meta name="article:modified_time" content="2025-11-15T00:00:00Z" />
        <meta name="article:author" content="ReplAInow Team" />
        <meta name="article:section" content="Cost Optimization" />
        
        {/* Twitter Card with Custom Labels */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support Kosten senken - 79-97%" />
        <meta name="twitter:description" content="TCO-Analyse: Versteckte Kosten aufdecken, $150k+/Jahr sparen" />
        <meta name="twitter:label1" content="Ersparnis" />
        <meta name="twitter:data1" content="79-97%" />
        <meta name="twitter:label2" content="ROI" />
        <meta name="twitter:data2" content="2 Wochen" />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <LegalNavbar />

      <main 
        id="main-content" 
        role="main" 
        aria-label="Support Kosten senken"
        className="min-h-screen pt-20"
      >
        
        {/* Hero Section - Money Theme! 💰 */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 overflow-hidden">
          {/* Dollar Signs Background Pattern */}
          <div className="absolute inset-0 opacity-5 text-9xl font-bold text-green-600">
            <div className="absolute top-10 left-10">$</div>
            <div className="absolute top-20 right-20">€</div>
            <div className="absolute bottom-20 left-1/4">$</div>
            <div className="absolute top-1/2 right-1/3">€</div>
          </div>
          
          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-green-700">
                <li><Link to="/" className="hover:text-green-900">{t('content.kostenSenken.breadcrumb.home')}</Link></li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-gray-900 font-medium">{t('content.kostenSenken.breadcrumb.current')}</li>
              </ol>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <DollarSign className="w-4 h-4" />
              {t('content.kostenSenken.hero.badge')}
            </div>
            
            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('content.kostenSenken.hero.title')}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl">
              {t('content.kostenSenken.hero.subtitle')}
            </p>
            
            {/* Stats Grid - Money Theme */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {getArray('content.kostenSenken.hero.stats').map((stat: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#section-5"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {t('content.kostenSenken.hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#live-demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all"
              >
                {t('content.kostenSenken.hero.cta.secondary')}
              </a>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('content.kostenSenken.toc.title')}</h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {getArray('content.kostenSenken.toc.items').map((item: string, idx: number) => (
                <li key={idx}>
                  <a href={`#section-${idx + 1}`} className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-semibold group-hover:bg-green-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Problem Section - The Hidden Costs Reveal! */}
        <section id="section-1" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.problem.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('content.kostenSenken.problem.subtitle')}</p>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                {t('content.kostenSenken.problem.intro')}
              </p>
            </div>

            {/* Illusion vs Reality - VISUAL SHOCK! */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* What Shop Owners Think */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300 relative">
                <div className="absolute -top-4 left-6 bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  💭 Illusion
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getObject('content.kostenSenken.problem.illusionVsReality.shopOwnerThinks').title}
                </h3>
                <p className="text-3xl font-mono font-bold text-gray-700 mb-3">
                  {getObject('content.kostenSenken.problem.illusionVsReality.shopOwnerThinks').calculation}
                </p>
                <p className="text-gray-600 italic mb-4">
                  "{getObject('content.kostenSenken.problem.illusionVsReality.shopOwnerThinks').assumption}"
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Das entspricht nur:</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {getObject('content.kostenSenken.problem.illusionVsReality.shopOwnerThinks').percentage}
                  </p>
                </div>
              </div>

              {/* The Hidden Reality */}
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white relative shadow-2xl">
                <div className="absolute -top-4 left-6 bg-red-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ⚠️ Realität
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {getObject('content.kostenSenken.problem.illusionVsReality.reality').title}
                </h3>
                <div className="space-y-2 mb-6">
                  {getArray('content.kostenSenken.problem.illusionVsReality.reality.breakdown').map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        {item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4 text-red-300" />}
                        <span className={item.visible ? '' : 'text-red-100'}>{item.item}</span>
                      </div>
                      <span className="font-bold">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-white/30 pt-4 space-y-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span>TOTAL:</span>
                    <span>{getObject('content.kostenSenken.problem.illusionVsReality.reality').total}</span>
                  </div>
                  <p className="text-red-200 text-sm">
                    {getObject('content.kostenSenken.problem.illusionVsReality.reality').hidden}
                  </p>
                  <p className="text-2xl font-bold text-yellow-300">
                    {getObject('content.kostenSenken.problem.illusionVsReality.reality').shock}
                  </p>
                </div>
              </div>
            </div>

            {/* Why Hidden */}
            <div className="bg-white rounded-xl p-6 border border-orange-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {getObject('content.kostenSenken.problem.whyHidden').title}
              </h3>
              <ul className="space-y-2">
                {getArray('content.kostenSenken.problem.whyHidden.reasons').map((reason: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Internal Link Box */}
        <section className="py-8 bg-green-50">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Tipp: Kosten senken durch Automatisierung</h3>
              </div>
              <p className="mb-4">
                Der größte Kostentreiber sind repetitive Tickets. Lerne wie du 60-80% automatisierst und sofort Kosten senkst.
              </p>
              <Link
                to="/shopify-kundensupport-automatisieren"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Automatisierungs-Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* TCO Section - The Complete Truth */}
        <section id="section-2" className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.tco.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{t('content.kostenSenken.tco.subtitle')}</p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t('content.kostenSenken.tco.intro')}
              </p>
            </div>

            {/* TCO Categories Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {getArray('content.kostenSenken.tco.categories').map((category: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                      {category.percentage}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item: any, i: number) => (
                      <div key={i} className="border-l-2 border-green-500 pl-4 py-2 bg-green-50/50">
                        <div className="font-semibold text-gray-900 text-sm">{item.item}</div>
                        <div className="text-green-700 font-bold text-sm">{item.typical}</div>
                        <div className="text-gray-600 text-xs">{item.annual || item.amortized}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-gray-200">
                    <div className="text-sm text-gray-600">Total Range:</div>
                    <div className="text-xl font-bold text-red-600">{category.totalRange}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* TCO Summary - SHOCK BOX */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{getObject('content.kostenSenken.tco.totalTCO').title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm mb-2">Pro Agent/Jahr:</div>
                  <div className="text-3xl font-bold">{getObject('content.kostenSenken.tco.totalTCO').perAgent}</div>
                </div>
                <div>
                  <div className="text-sm mb-2">3 Agents/Jahr:</div>
                  <div className="text-3xl font-bold">{getObject('content.kostenSenken.tco.totalTCO').threeAgents}</div>
                </div>
                <div>
                  <div className="text-sm mb-2">Pro Monat:</div>
                  <div className="text-3xl font-bold">{getObject('content.kostenSenken.tco.totalTCO').monthly}</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/30">
                <p className="text-2xl font-bold text-yellow-300">{getObject('content.kostenSenken.tco.totalTCO').vsGehaltOnly}</p>
                <p className="text-xl mt-2">{getObject('content.kostenSenken.tco.totalTCO').shocking}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 Categories Detail Section */}
        <section id="section-3" className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.categories.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('content.kostenSenken.categories.subtitle')}</p>
            </div>

            <div className="space-y-6">
              {getArray('content.kostenSenken.categories.items').map((cat: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold">
                        {cat.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{cat.category}</h3>
                        <div className="bg-red-100 text-red-700 px-4 py-1 rounded-lg font-bold">
                          {cat.cost}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{cat.description}</p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <span className="font-semibold text-green-700">Ersparnis mit ReplAInow: </span>
                        <span className="text-gray-700">{cat.savingsWithAI}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling Trap Section */}
        <section id="section-4" className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.scalingTrap.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{t('content.kostenSenken.scalingTrap.subtitle')}</p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {t('content.kostenSenken.scalingTrap.explanation')}
              </p>
            </div>

            {/* Scaling Example */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-300 mb-8">
              <h3 className="text-2xl font-bold mb-6">{getObject('content.kostenSenken.scalingTrap.example').title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Phase 1 */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-700 mb-4">Phase 1: Klein & Einfach</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Tickets:</span> {getObject('content.kostenSenken.scalingTrap.example.phase1').tickets}</p>
                    <p><span className="font-semibold">Agents:</span> {getObject('content.kostenSenken.scalingTrap.example.phase1').agents}</p>
                    <p><span className="font-semibold">Kosten:</span> {getObject('content.kostenSenken.scalingTrap.example.phase1').cost}</p>
                    <p className="text-gray-600">{getObject('content.kostenSenken.scalingTrap.example.phase1').structure}</p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-white rounded-lg p-6 border-2 border-red-500">
                  <h4 className="text-lg font-bold text-red-700 mb-4">Phase 2: Gewachsen & Komplex</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Tickets:</span> {getObject('content.kostenSenken.scalingTrap.example.phase2').tickets}</p>
                    <p><span className="font-semibold">Agents:</span> {getObject('content.kostenSenken.scalingTrap.example.phase2').agents}</p>
                    <p className="line-through text-gray-500">Naiv: {getObject('content.kostenSenken.scalingTrap.example.phase2').costNaive}</p>
                    <p className="font-bold text-red-600">Reality: {getObject('content.kostenSenken.scalingTrap.example.phase2').costReality}</p>
                    <p className="font-bold text-orange-600">{getObject('content.kostenSenken.scalingTrap.example.phase2').vsPhase1}</p>
                  </div>
                </div>
              </div>

              {/* Why More */}
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Warum mehr als linear?</h4>
                <ul className="space-y-2">
                  {getArray('content.kostenSenken.scalingTrap.example.whyMore').map((reason: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With ReplAInow */}
              <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Mit ReplAInow:</h4>
                <p className="text-lg">{getObject('content.kostenSenken.scalingTrap.example').withReplAInow}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 ADVANCED TCO CALCULATOR - 12 INPUTS! */}
        <section id="section-5" className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('content.kostenSenken.calculator.title')}
              </h2>
              <p className="text-xl text-green-200">
                {t('content.kostenSenken.calculator.subtitle')}
              </p>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-8 text-center text-green-600">
                Berechne deine ECHTEN Support-Kosten
              </h3>
              
              {/* 12 Inputs Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.agents')}
                  </label>
                  <input type="number" value={agents} onChange={(e) => setAgents(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="1" max="20" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.salary')}
                  </label>
                  <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="2000" max="10000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.benefits')} (%)
                  </label>
                  <input type="number" value={benefits} onChange={(e) => setBenefits(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="15" max="40" />
                  <p className="text-xs text-gray-500 mt-1">Typical: 20-25% EU, 25-35% USA</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.nightShift')}
                  </label>
                  <input type="number" value={nightShift} onChange={(e) => setNightShift(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="10" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.weekendShift')}
                  </label>
                  <input type="number" value={weekendShift} onChange={(e) => setWeekendShift(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="10" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.software')}
                  </label>
                  <input type="number" value={software} onChange={(e) => setSoftware(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="2000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.recruiting')}
                  </label>
                  <input type="number" value={recruiting} onChange={(e) => setRecruiting(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="1000" max="10000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.training')}
                  </label>
                  <input type="number" value={training} onChange={(e) => setTraining(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="2000" max="10000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.equipment')}
                  </label>
                  <input type="number" value={equipment} onChange={(e) => setEquipment(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="1000" max="5000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.managementHours')}
                  </label>
                  <input type="number" value={managementHours} onChange={(e) => setManagementHours(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="40" />
                  <p className="text-xs text-gray-500 mt-1">Meetings, Reviews, QA, Planning</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.overtime')}
                  </label>
                  <input type="number" value={overtime} onChange={(e) => setOvertime(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="5000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('content.kostenSenken.calculator.inputs.turnover')}
                  </label>
                  <input type="number" value={turnover} onChange={(e) => setTurnover(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-lg font-semibold"
                    min="0" max="5" step="0.5" />
                  <p className="text-xs text-gray-500 mt-1">Support: 30-40% Fluktuation/Jahr</p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300">
                <h4 className="text-2xl font-bold text-center mb-8">Deine TCO Analyse:</h4>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Traditional Costs Breakdown */}
                  <div>
                    <h5 className="text-lg font-bold text-red-700 mb-4">Traditional Support (Menschen):</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Gehälter:</span><span className="font-bold">${salariesMonthly.toLocaleString()}</span></div>
                      <div className="flex justify-between"><span>Benefits ({benefits}%):</span><span className="font-bold">${Math.round(benefitsMonthly).toLocaleString()}</span></div>
                      {nightShift > 0 && <div className="flex justify-between"><span>Nachtschicht-Zuschläge:</span><span className="font-bold text-red-600">${Math.round(nightCostMonthly).toLocaleString()}</span></div>}
                      {weekendShift > 0 && <div className="flex justify-between"><span>Wochenend-Zuschläge:</span><span className="font-bold text-red-600">${Math.round(weekendCostMonthly).toLocaleString()}</span></div>}
                      <div className="flex justify-between"><span>Software:</span><span className="font-bold">${software}</span></div>
                      <div className="flex justify-between"><span>Recruiting (amort.):</span><span className="font-bold">${Math.round(recruitingMonthly)}</span></div>
                      <div className="flex justify-between"><span>Training (amort.):</span><span className="font-bold">${Math.round(trainingMonthly)}</span></div>
                      <div className="flex justify-between"><span>Equipment (amort.):</span><span className="font-bold">${Math.round(equipmentMonthly)}</span></div>
                      <div className="flex justify-between"><span>Management:</span><span className="font-bold">${Math.round(managementMonthly).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span>Überstunden:</span><span className="font-bold">${overtime}</span></div>
                      <div className="pt-3 border-t-2 border-gray-300 flex justify-between">
                        <span className="font-bold">TOTAL:</span>
                        <span className="font-bold text-red-600 text-xl">${Math.round(totalHumanMonthly).toLocaleString()}/Mo</span>
                      </div>
                      <div className="text-xs text-gray-600">${Math.round(totalHumanAnnual).toLocaleString()}/Jahr</div>
                    </div>
                  </div>

                  {/* ReplAInow Costs */}
                  <div>
                    <h5 className="text-lg font-bold text-green-700 mb-4">Mit ReplAInow (AI + Minimal Human):</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>ReplAInow ({replainowPlan}):</span><span className="font-bold">${replainowCost}</span></div>
                      <div className="flex justify-between"><span>{agentsNeeded} Agent(s) (20-40% Tickets):</span><span className="font-bold">${agentCost.toLocaleString()}</span></div>
                      <div className="flex justify-between"><span>Benefits ({benefits}%):</span><span className="font-bold">${Math.round(agentBenefits)}</span></div>
                      <div className="flex justify-between"><span>Management (minimal):</span><span className="font-bold">${minimalManagement}</span></div>
                      <div className="flex justify-between line-through text-gray-500"><span>Recruiting:</span><span>$0</span></div>
                      <div className="flex justify-between line-through text-gray-500"><span>Training:</span><span>$0</span></div>
                      <div className="flex justify-between line-through text-gray-500"><span>Extra Software:</span><span>$0</span></div>
                      <div className="flex justify-between line-through text-gray-500"><span>Überstunden:</span><span>$0</span></div>
                      <div className="pt-3 border-t-2 border-gray-300 flex justify-between">
                        <span className="font-bold">TOTAL:</span>
                        <span className="font-bold text-green-600 text-xl">${Math.round(totalAIMonthly).toLocaleString()}/Mo</span>
                      </div>
                      <div className="text-xs text-gray-600">${Math.round(totalAIAnnual).toLocaleString()}/Jahr</div>
                    </div>
                  </div>
                </div>

                {/* MEGA SAVINGS DISPLAY */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 text-white text-center">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <div className="text-sm mb-2">Monatlich gespart:</div>
                      <div className="text-4xl font-bold">${Math.round(savingsMonthly).toLocaleString()}</div>
                      <div className="text-green-200">({savingsPercentage}% Ersparnis)</div>
                    </div>
                    <div>
                      <div className="text-sm mb-2">Jährlich gespart:</div>
                      <div className="text-4xl font-bold">${Math.round(savingsAnnual).toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm mb-2">3 Jahre gespart:</div>
                      <div className="text-4xl font-bold">${Math.round(threeYearSavings).toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="border-t border-white/30 pt-6 space-y-3">
                    <div className="text-xl font-bold">{agentsSaved} Agents eingespart</div>
                    <div className="text-lg">ROI Break-even: {breakEvenDays} Tage</div>
                  </div>
                </div>
              </div>

              {/* CTA in Calculator */}
              <div className="text-center mt-8">
                <a href="https://apps.shopify.com/replainow-ai-support"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Jetzt ${Math.round(savingsMonthly).toLocaleString()}/Monat sparen
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ReplAInow TCO Section */}
        <section id="section-6" className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.replainowTCO.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('content.kostenSenken.replainowTCO.subtitle')}</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-6 mb-12">
              {getArray('content.kostenSenken.replainowTCO.breakdown').map((item: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.item}</h3>
                  {item.plans ? (
                    <div className="grid md:grid-cols-4 gap-4">
                      {item.plans.map((plan: any, i: number) => (
                        <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="font-bold text-green-700">{plan.name}</div>
                          <div className="text-2xl font-bold text-gray-900">{plan.cost}</div>
                          <div className="text-xs text-gray-600">{plan.ideal}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-600">{item.cost}</div>
                      {item.example && <p className="text-sm text-gray-600 italic">Beispiel: {item.example}</p>}
                      {item.note && <p className="text-sm text-gray-600">{item.note}</p>}
                      {item.comparison && <p className="text-sm text-gray-500">{item.comparison}</p>}
                      {item.savings && <p className="text-sm font-semibold text-green-700">{item.savings}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Total Comparison */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-center mb-8">
                {getObject('content.kostenSenken.replainowTCO.totalComparison').title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                  <h4 className="text-xl font-bold text-red-700 mb-4">
                    {getObject('content.kostenSenken.replainowTCO.totalComparison.human').title}
                  </h4>
                  <ul className="space-y-2 text-sm mb-4">
                    {getArray('content.kostenSenken.replainowTCO.totalComparison.human.items').map((item: string, idx: number) => (
                      <li key={idx} className="flex justify-between">
                        <span>{item.split(':')[0]}:</span>
                        <span className="font-bold">{item.split(':')[1]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t-2 border-red-400">
                    <div className="text-2xl font-bold text-red-700">
                      {getObject('content.kostenSenken.replainowTCO.totalComparison.human').total}
                    </div>
                    <div className="text-sm text-gray-600">
                      {getObject('content.kostenSenken.replainowTCO.totalComparison.human').annual}
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                  <h4 className="text-xl font-bold text-green-700 mb-4">
                    {getObject('content.kostenSenken.replainowTCO.totalComparison.replainow').title}
                  </h4>
                  <ul className="space-y-2 text-sm mb-4">
                    {getArray('content.kostenSenken.replainowTCO.totalComparison.replainow.items').map((item: string, idx: number) => (
                      <li key={idx} className="flex justify-between">
                        <span>{item.split(':')[0]}:</span>
                        <span className="font-bold">{item.split(':')[1]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t-2 border-green-400">
                    <div className="text-2xl font-bold text-green-700">
                      {getObject('content.kostenSenken.replainowTCO.totalComparison.replainow').total}
                    </div>
                    <div className="text-sm text-gray-600">
                      {getObject('content.kostenSenken.replainowTCO.totalComparison.replainow').annual}
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Mega Box */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white text-center">
                <div className="text-6xl font-bold mb-4">
                  {getObject('content.kostenSenken.replainowTCO.totalComparison.savings').monthly || '$12,526/Monat gespart'}
                </div>
                <div className="text-2xl mb-6">
                  {getObject('content.kostenSenken.replainowTCO.totalComparison.savings').annual || '$150,312/Jahr gespart'}
                </div>
                <div className="text-xl font-semibold">
                  {getObject('content.kostenSenken.replainowTCO.totalComparison.savings').percentage || '76% Kostenersparnis'}
                </div>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-lg">{getObject('content.kostenSenken.replainowTCO.totalComparison.savings').breakEven || '2 Wochen ROI'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Savings Section */}
        <section id="section-7" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.hiddenSavings.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('content.kostenSenken.hiddenSavings.subtitle')}</p>
            </div>

            <div className="space-y-6">
              {getArray('content.kostenSenken.hiddenSavings.items').map((saving: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{saving.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Vorher:</div>
                      <p className="text-gray-900 font-medium">{saving.before}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Mit ReplAInow:</div>
                      <p className="text-green-700 font-medium">{saving.after}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">{saving.impact || saving.savings || 'Benefit'}</span>
                      <span className="text-2xl font-bold text-green-600">{saving.value || ''}</span>
                    </div>
                    {saving.realValue && <p className="text-sm text-gray-600 italic">{saving.realValue}</p>}
                    {saving.calculation && <p className="text-sm text-gray-600 italic">{saving.calculation}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white text-center">
              <p className="text-3xl font-bold">{t('content.kostenSenken.hiddenSavings.totalHidden')}</p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="section-8" className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('content.kostenSenken.caseStudies.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('content.kostenSenken.caseStudies.subtitle')}</p>
            </div>

            <div className="space-y-12">
              {getArray('content.kostenSenken.caseStudies.cases').map((merchant: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 border-2 border-green-200">
                  {/* Merchant Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{merchant.merchant}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{merchant.location}</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{merchant.size}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Before */}
                    <div className="bg-white rounded-lg p-6 border-2 border-red-300">
                      <div className="text-lg font-bold text-red-700 mb-4">VORHER: {merchant.before.setup}</div>
                      <ul className="space-y-2 text-sm mb-4">
                        {merchant.before.costs.map((cost: string, i: number) => (
                          <li key={i} className="flex justify-between">
                            <span>{cost.split(':')[0]}:</span>
                            <span className="font-bold">{cost.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t-2 border-red-400">
                        <div className="text-2xl font-bold text-red-700">{merchant.before.total}</div>
                        <div className="text-sm text-gray-600">{merchant.before.annual}</div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                      <div className="text-lg font-bold text-green-700 mb-4">NACHHER: {merchant.after.setup}</div>
                      <ul className="space-y-2 text-sm mb-4">
                        {merchant.after.costs.map((cost: string, i: number) => (
                          <li key={i} className="flex justify-between">
                            <span>{cost.split(':')[0]}:</span>
                            <span className="font-bold">{cost.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t-2 border-green-400">
                        <div className="text-2xl font-bold text-green-700">{merchant.after.total}</div>
                        <div className="text-sm text-gray-600">{merchant.after.annual}</div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm mb-1">Ersparnis:</div>
                        <div className="text-2xl font-bold">{merchant.results?.savings || '$0'}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1">Prozent:</div>
                        <div className="text-2xl font-bold">{merchant.results.percentage}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1">ROI:</div>
                        <div className="text-2xl font-bold">{merchant.results.roi}</div>
                      </div>
                    </div>
                    <div className="border-t border-white/30 pt-4">
                      <p className="text-sm mb-2">Zusätzlicher Benefit: {merchant.results.additional}</p>
                      <blockquote className="italic text-lg">"{merchant.results.quote}"</blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">{getObject('content.kostenSenken.caseStudies.summary').title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold mb-1">{getObject('content.kostenSenken.caseStudies.summary').avgSavings}</div>
                  <div className="text-sm">Durchschnittliche Ersparnis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{getObject('content.kostenSenken.caseStudies.summary').avgROI}</div>
                  <div className="text-sm">ROI Break-even</div>
                </div>
              </div>
              <p className="mt-4 text-green-100">{getObject('content.kostenSenken.caseStudies.summary').additionalBenefit}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="section-10" className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('content.kostenSenken.faq.title')}
            </h2>
            
            <div className="space-y-6">
              {getArray('content.kostenSenken.faq.items').map((faq: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">?</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Money Theme */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('content.kostenSenken.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-green-100">
              {t('content.kostenSenken.cta.subtitle')}
            </p>
            
            <div className="flex justify-center gap-8 mb-10">
              {getArray('content.kostenSenken.cta.stats').map((stat: string, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold">{stat}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="#section-5" className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                {t('content.kostenSenken.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://apps.shopify.com/replainow-ai-support" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                {t('content.kostenSenken.cta.secondary')}
              </a>
            </div>
            
            <p className="text-green-100">{t('content.kostenSenken.cta.guarantee')}</p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('content.kostenSenken.related.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {getArray('content.kostenSenken.related.articles').map((article: any, idx: number) => (
                <Link key={idx} to={article.url} className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{article.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
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

export default SupportKostenSenken;

