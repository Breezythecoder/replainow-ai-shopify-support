import { Twitter, Linkedin } from "lucide-react";

const FooterEn = () => {
  return (
    <footer className="border-t py-10 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ReplAInow – PrimeVision Group LLC</p>
        <nav className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-sm" aria-label="Footer">
          <a href="/en/privacy" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="/en/terms" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="/en/uninstall" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">Uninstall</a>
          <a href="/en/security" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">Security Statement</a>
          <a href="/en/imprint" className="whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">Imprint</a>
          <span className="inline-flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
          </span>
        </nav>
      </div>
    </footer>
  );
};

export default FooterEn;
