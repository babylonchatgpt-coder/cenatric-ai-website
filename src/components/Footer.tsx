import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Company */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Cenatric
            </div>
            <p className="text-secondary-foreground/80">
              {t.footer.tagline}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">{t.footer.contact}</h3>
            <p className="text-secondary-foreground/80">
              <a 
                href="mailto:info@cenatric.com" 
                className="hover:text-primary transition-colors"
              >
                info@cenatric.com
              </a>
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">{t.footer.followUs}</h3>
            <div className="space-y-2">
              <p className="text-secondary-foreground/80">
                {t.footer.linkedinComing}
              </p>
              <p className="text-secondary-foreground/80">
                {t.footer.twitterComing}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80 mb-2">
            <a 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors mr-4"
            >
              {t.footer.privacyPolicy}
            </a>
          </p>
          <p className="text-secondary-foreground/80">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;