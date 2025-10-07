import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-secondary/20 border-t border-border">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="relative container mx-auto max-w-6xl px-6 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Company */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Cenatric
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t.footer.contact}</h3>
            <a 
              href="mailto:info@cenatric.com" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
            >
              info@cenatric.com
            </a>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t.footer.followUs}</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                {t.footer.linkedinComing}
              </p>
              <p className="text-muted-foreground">
                {t.footer.twitterComing}
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              {t.footer.copyright}
            </p>
            <a 
              href="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t.footer.privacyPolicy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;