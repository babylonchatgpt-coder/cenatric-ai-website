import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Calendar, Users, Zap, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WatWeDoen = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  const icons = [MessageSquare, Users, Calendar, Zap, Clock];

  return (
    <section id="what-we-do" className="py-24 soft-gradient" ref={ref}>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Our Solution
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.whatWeDo.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.whatWeDo.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.whatWeDo.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl border border-border hover-lift hover:border-primary/50 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary w-7 h-7" />
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-base text-card-foreground leading-relaxed font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="premium"
            onClick={openCalendly}
            className="group"
          >
            {t.whatWeDo.cta}
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WatWeDoen;