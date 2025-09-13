import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          Lumora
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('wat-we-doen')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Wat We Doen
          </button>
          <button 
            onClick={() => scrollToSection('filosofie')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Filosofie
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('cta')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Boek een Call
          </button>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="default" 
          size="default"
          onClick={() => scrollToSection('cta')}
          className="shadow-glow hover:shadow-glow transition-all duration-300"
        >
          Boek een Gratis Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;