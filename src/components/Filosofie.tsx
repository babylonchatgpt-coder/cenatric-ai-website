import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Filosofie = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.philosophy.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 rounded-3xl border border-primary/20 hover-lift hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              <strong className="text-primary font-semibold">{t.philosophy.paragraph1}</strong>
              {t.philosophy.paragraph1Bold}
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent p-10 rounded-3xl border border-secondary/20 hover-lift hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-secondary" />
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              <strong className="text-secondary font-semibold">{t.philosophy.paragraph2}</strong>
              {t.philosophy.paragraph2Bold}
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="premium"
            onClick={openCalendly}
          >
            {t.philosophy.cta}
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Filosofie;