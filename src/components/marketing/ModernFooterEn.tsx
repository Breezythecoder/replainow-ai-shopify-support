import { Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const ModernFooterEn = () => {
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
                About <span className="text-blue-400">ReplAInow</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                ReplAInow was developed by Shopify experts who struggled for years with inefficient support tools. We created the solution we needed ourselves.
              </p>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-xl font-bold mb-3 text-blue-400">Our Promise</h4>
                <p className="text-slate-300">
                  Every Shopify merchant deserves support that's available 24/7, responds in the customer's language, and is 75% cheaper than the competition.
                </p>
              </div>
            </div>

            {/* CEO Story */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                From <span className="text-blue-400">Ruben Calabrese</span>, CEO
              </h3>
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-700/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RC
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Ruben Calabrese</h4>
                    <p className="text-blue-300 font-semibold">CEO & Founder</p>
                  </div>
                </div>
                <blockquote className="text-slate-300 italic text-lg leading-relaxed">
                  "After years of frustration with slow, expensive support tools, I built ReplAInow to solve the problems I faced as a Shopify merchant. Now 280+ stores use our AI to provide instant, multilingual support."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleNavClick(e, 'features')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#live-demo" 
                  onClick={(e) => handleNavClick(e, 'live-demo')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#/privacy" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#/terms" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#/security" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Security Statement
                </a>
              </li>
              <li>
                <a href="#/impressum" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Imprint
                </a>
              </li>
              <li>
                <a href="#/refund" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#/cookies" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#/uninstall" className="text-slate-300 hover:text-white transition-colors duration-300">
                  Uninstall Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-slate-300 text-sm">support@replainow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-slate-300 text-sm">+49-30-123-456-789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-slate-300 text-sm">Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/replainow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/replainow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 ReplAInow. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Made with <Heart className="inline h-4 w-4 text-red-500" /> in Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooterEn;
