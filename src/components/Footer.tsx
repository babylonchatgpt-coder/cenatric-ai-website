import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-gradient-to-b from-background via-background to-muted/30 border-t border-border/40 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative container mx-auto max-w-7xl px-6 py-20">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section - Takes more space */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Cenatric
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                {t.footer.tagline}
              </p>
            </div>
            
            {/* CTA Card */}
            <div className="group p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
              <p className="text-sm font-medium text-foreground mb-3">Ready to get started?</p>
              <a 
                href="https://calendly.com/main-cenatric/30min"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Book a demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-12">
            {/* Contact */}
            <div className="space-y-5">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/90">
                {t.footer.contact}
              </h3>
              <a 
                href="mailto:info@cenatric.com" 
                className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">info@cenatric.com</span>
              </a>
            </div>
            
            {/* Social */}
            <div className="space-y-5">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/90">
                {t.footer.followUs}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                  {t.footer.linkedinComing}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                  {t.footer.twitterComing}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
            <a 
              href="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
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