import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          Cenatric
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('what-we-do')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.header.whatWeDo}
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.header.philosophy}
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.header.team}
          </button>
          <button 
            onClick={openCalendly}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t.header.bookCall}
          </button>
        </nav>
        
        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            variant="default" 
            size="default"
            onClick={openCalendly}
            className="shadow-glow hover:shadow-glow transition-all duration-300"
          >
            {t.header.bookDemo}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;