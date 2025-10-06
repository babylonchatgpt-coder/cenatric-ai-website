import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Filosofie = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <section id="philosophy" className="section-spacing bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            {t.philosophy.title}
          </h2>
        </div>
        
        <div className="bg-accent p-8 md:p-12 rounded-2xl mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground">
            <strong className="text-primary">{t.philosophy.paragraph1}</strong>
            {t.philosophy.paragraph1Bold}
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground mt-6">
            <strong className="text-secondary">{t.philosophy.paragraph2}</strong>
            {t.philosophy.paragraph2Bold}
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={openCalendly}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            {t.philosophy.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Filosofie;