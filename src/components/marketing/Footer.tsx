import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-10 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ReplAInow – PrimeVision Group LLC</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Nutzungsbedingungen</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
          <span className="inline-flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
