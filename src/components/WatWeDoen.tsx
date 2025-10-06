import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WatWeDoen = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <section id="what-we-do" className="section-spacing section-gradient">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.whatWeDo.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.whatWeDo.description}
          </p>
        </div>
        
        <div className="grid gap-6 mb-12">
          {t.whatWeDo.features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <CheckCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-lg text-card-foreground leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={openCalendly}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            {t.whatWeDo.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WatWeDoen;