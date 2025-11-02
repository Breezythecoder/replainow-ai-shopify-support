import { Twitter, Linkedin, Mail } from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { t } from "@/i18n";

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollToElement(targetId);
  };

  const footerSections = [
    {
      title: "Produkt",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Demo", href: "#live-demo" },
        { label: "Integrationen", href: "#features" }
      ]
    },
    {
      title: "Use Cases",
      links: [
        { label: "E-Commerce", href: "#features" },
        { label: "Fashion", href: "#features" },
        { label: "Elektronik", href: "#features" },
        { label: "Beauty & Health", href: "#features" }
      ]
    },
    {
      title: "Ressourcen",
      links: [
        { label: "Blog", href: "#" },
        { label: "Hilfe Center", href: "#contact" },
        { label: "API Docs", href: "#" },
        { label: "Status", href: "#" }
      ]
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Über uns", href: "#contact" },
        { label: "Kontakt", href: "#contact" },
        { label: "Karriere", href: "#" },
        { label: "Presse", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/ReplAInow_Logo_optimized.png"
                alt="ReplAInow Logo"
                className="h-8 w-8"
                width="32"
                height="32"
              />
              <span className="ml-2 text-xl font-bold">
                Repl<span className="text-primary-purple">AI</span>now
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Die #1 AI-Helpdesk Lösung für Shopify-Händler
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/replainow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/replainow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@replainow.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.href.startsWith('#') ? (e) => handleNavClick(e, link.href.substring(1)) : undefined}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 ReplAInow. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                AGB
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-center items-center gap-8 opacity-50">
          <img 
            src="/images/shopify-logo-black.svg" 
            alt="Shopify Partner"
            className="h-6 invert"
          />
          <span className="text-gray-500 text-sm">SOC2 Type II</span>
          <span className="text-gray-500 text-sm">GDPR Compliant</span>
          <span className="text-gray-500 text-sm">99.9% Uptime</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
