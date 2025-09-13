const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Company */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Lumora
            </div>
            <p className="text-secondary-foreground/80">
              Automatiseer je klantcontact en mis nooit meer een lead.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-secondary-foreground/80">
              <a 
                href="mailto:info@lumora.com" 
                className="hover:text-primary transition-colors"
              >
                info@lumora.com
              </a>
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Volg Ons</h3>
            <div className="space-y-2">
              <p className="text-secondary-foreground/80">
                LinkedIn (binnenkort)
              </p>
              <p className="text-secondary-foreground/80">
                Twitter (binnenkort)
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80">
            © 2024 Lumora. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;