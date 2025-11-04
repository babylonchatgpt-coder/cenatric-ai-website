import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
                <a 
                  href="https://www.linkedin.com/company/cenatric/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
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
            <Link 
              to="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;