import { Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";
const Footer = () => {
  // Get current locale
  // Handle fast smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId); // Use native browser smooth scroll (faster)
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* About Us Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Story */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                {t('footer.about.title')} <span className="text-blue-400">ReplAInow</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('footer.about.description')}
              </p>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-xl font-bold mb-3 text-blue-400">{t('footer.about.promise')}</h4>
                <p className="text-slate-300">
                  {t('footer.about.promiseText')}
                </p>
              </div>
            </div>

            {/* CEO Story */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Von <span className="text-blue-400">Ruben Calabrese</span>, CEO
              </h3>
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-700/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RC
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Ruben Calabrese</h4>
                    <p className="text-blue-300 font-semibold">CEO & Gründer</p>
                  </div>
                </div>
                <blockquote className="text-slate-300 italic text-lg leading-relaxed">
                  "Als E-Commerce Unternehmer und Programmierer habe ich selbst erlebt, wie frustrierend es ist, 
                  wenn Kundenanfragen stundenlang unbeantwortet bleiben. ReplAInow ist die Lösung, 
                  die ich mir damals gewünscht hätte - intelligent, schnell und bezahlbar."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                  alt="ReplAInow Logo"
                  className="h-12 w-12 rounded-lg"
                />
              </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Der intelligenteste AI-Support für Shopify-Händler. 
              24/7 verfügbar, 32+ Sprachen, DSGVO-konform.
            </p>
              <div className="flex gap-3">
                <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-blue-400 transition-colors p-3 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" title="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-400 transition-colors p-3 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Produkt</h4>
            <ul className="space-y-3">
              <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation cursor-pointer">{t('footer.links.features')}</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation cursor-pointer">{t('footer.links.pricing')}</a></li>
              <li><a href="#live-demo" onClick={(e) => handleNavClick(e, 'live-demo')} className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation cursor-pointer">{t('footer.links.demo')}</a></li>
              <li><a href="https://apps.shopify.com/replainow-ai-support" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Installieren</a></li>
            </ul>
          </div>

          {/* SEO Pillar Pages */}
          <div>
            <h4 className="text-white font-bold mb-4">Ressourcen</h4>
            <ul className="space-y-3">
              <li><a href="#/ai-shopify-helpdesk" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">AI Shopify Helpdesk</a></li>
              <li><a href="#/multilingual-support" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Multilingual Support</a></li>
              <li><a href="#/shopify-customer-service" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Shopify Customer Service</a></li>
              <li><a href="#/shopify-ai-support" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Shopify AI Support</a></li>
              <li><a href="#/gorgias-alternative" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Gorgias Alternative</a></li>
              <li><a href="#/intercom-alternative" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">Intercom Alternative</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation cursor-pointer">{t('footer.links.contact')}</a></li>
              <li><a href="#/privacy" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.privacy')}</a></li>
              <li><a href="#/terms" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.terms')}</a></li>
              <li><a href="#/security" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.security')}</a></li>
              <li><a href="#/impressum" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.impressum')}</a></li>
              <li><a href="#/refund" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.refund')}</a></li>
              <li><a href="#/cookies" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.cookies')}</a></li>
              <li><a href="#/uninstall" className="text-slate-300 hover:text-blue-400 transition-colors block py-2 px-1 min-h-[44px] flex items-center touch-manipulation">{t('footer.legal.uninstall')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-slate-300 text-sm">support@replainow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-slate-300 text-sm">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              {t('footer.copyright').replace('2024', new Date().getFullYear().toString())}
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>in Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
