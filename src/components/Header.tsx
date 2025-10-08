import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Cenatric
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.header.whatWeDo}
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.header.philosophy}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t.header.team}
            </button>
          </nav>
          
          {/* Right Side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button 
              variant="premium" 
              size="default"
              onClick={openCalendly}
              className="hidden md:inline-flex"
            >
              {t.header.bookDemo}
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              {t.header.whatWeDo}
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              {t.header.philosophy}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              {t.header.team}
            </button>
            <Button 
              variant="premium" 
              size="default"
              onClick={openCalendly}
              className="w-full mt-2"
            >
              {t.header.bookDemo}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;