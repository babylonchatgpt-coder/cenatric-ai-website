const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Company */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Lunara
            </div>
            <p className="text-secondary-foreground/80">
              Automate your customer contact and never miss a lead again.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-secondary-foreground/80">
              <a 
                href="mailto:info@lunara.com" 
                className="hover:text-primary transition-colors"
              >
                info@lunara.com
              </a>
            </p>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <p className="text-secondary-foreground/80">
                LinkedIn (coming soon)
              </p>
              <p className="text-secondary-foreground/80">
                Twitter (coming soon)
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
              Privacy Policy
            </a>
          </p>
          <p className="text-secondary-foreground/80">
            © 2024 Lunara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;