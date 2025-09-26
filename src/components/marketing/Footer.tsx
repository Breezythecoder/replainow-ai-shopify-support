import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-8 sm:py-10 mt-8 sm:mt-10 bg-white/50">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6">
        <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">© {new Date().getFullYear()} ReplAInow – PrimeVision Group LLC</p>
        <nav className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm" aria-label="Footer">
          <a href="/privacy" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-slate-100 rounded-lg">Datenschutz</a>
          <a href="/terms" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-slate-100 rounded-lg">Nutzungsbedingungen</a>
          <a href="/uninstall" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-slate-100 rounded-lg">Deinstallation</a>
          <a href="/security" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-slate-100 rounded-lg">Sicherheitsstatement</a>
          <a href="/impressum" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors px-2 py-1 hover:bg-slate-100 rounded-lg">Impressum</a>
          <span className="inline-flex items-center gap-3 ml-2">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground p-2 hover:bg-slate-100 rounded-lg transition-colors"><Twitter size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground p-2 hover:bg-slate-100 rounded-lg transition-colors"><Linkedin size={16} /></a>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
