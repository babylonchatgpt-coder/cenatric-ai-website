import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
    },
    {
      icon: <Zap className="w-6 h-6" />,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
    }
  ];

  return (
    <section id="cta" className="section-spacing bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.cta.title}{" "}
            <span className="text-primary">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-accent rounded-xl"
            >
              <div className="text-primary">
                {benefit.icon}
              </div>
              <p className="text-accent-foreground font-medium">
                {t.cta.benefits[index]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-medium">
          <div className="max-w-md mx-auto text-center">
            <Button 
              onClick={openCalendly}
              size="lg" 
              className="w-full text-lg py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              {t.cta.button}
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t.cta.calendlyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;