import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, text: t.cta.benefits[0] },
    { icon: <Zap className="w-6 h-6" />, text: t.cta.benefits[1] },
    { icon: <Calendar className="w-6 h-6" />, text: t.cta.benefits[2] },
  ];

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 premium-gradient opacity-5" />
      
      <div className="relative container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.cta.title}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.cta.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <p className="text-card-foreground font-semibold text-center">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-12 rounded-3xl shadow-premium border border-border">
            <div className="text-center">
              <Button 
                onClick={openCalendly}
                size="lg" 
                variant="premium"
                className="group w-full md:w-auto text-lg py-7 px-12 mb-6"
              >
                {t.cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                {t.cta.calendlyNote}
              </p>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>100% free demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>Instant setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;