import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap, ArrowRight, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CallToAction = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, text: t.cta.benefits[0] },
    { icon: <Zap className="w-6 h-6" />, text: t.cta.benefits[1] },
    { icon: <Calendar className="w-6 h-6" />, text: t.cta.benefits[2] },
  ];

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 premium-gradient opacity-5" />
      
      <div className={`relative container mx-auto max-w-5xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
                <TrendingUp className="w-4 h-4" />
                <span>Limited spots available this month</span>
              </div>

              <Button 
                onClick={openCalendly}
                size="lg" 
                variant="premium"
                className="group w-full md:w-auto text-base md:text-lg py-4 px-6 md:py-7 md:px-12 mb-4 shadow-glow hover:shadow-xl hover:scale-105 transition-all whitespace-normal h-auto leading-snug"
                aria-label="Book your free demo - Limited slots available"
              >
                {t.cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground mb-2">
                {t.cta.calendlyNote}
              </p>
              <p className="text-xs text-primary font-medium">
                Limited demo availability - secure your spot today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;