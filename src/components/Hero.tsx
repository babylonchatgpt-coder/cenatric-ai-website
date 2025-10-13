import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background with Pattern */}
      <div className="absolute inset-0 premium-gradient opacity-95" />
      <div className="absolute inset-0 hero-pattern" />
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1400ms' }} />
      
      <div className="relative container mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect text-white text-sm font-medium mb-8 animate-fade-in shadow-lg">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>AI-Powered Solutions</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white animate-fade-in" style={{ animationDelay: '150ms' }}>
          {t.hero.headline}{" "}
          <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-scale-in">
            {t.hero.headlineHighlight}
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto animate-fade-in drop-shadow-lg" style={{ animationDelay: '300ms' }}>
          {t.hero.subheadline}
        </p>
        
        {/* CTA Buttons with Urgency */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '450ms' }}>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={openCalendly}
            className="group text-lg px-10 py-7 shadow-glow animate-glow-pulse hover:scale-105 transition-all"
            aria-label="Book your free 15-minute demo"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Urgency Element */}
        <p className="mt-6 text-white/80 text-sm animate-fade-in" style={{ animationDelay: '600ms' }}>
          ⚡ <span className="font-semibold">Limited slots available this month</span> - Join 50+ growing businesses
        </p>
        
      </div>
    </section>
  );
};

export default Hero;