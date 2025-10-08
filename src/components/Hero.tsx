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
      {/* Animated Background */}
      <div className="absolute inset-0 premium-gradient opacity-95" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative container mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/90 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Solutions</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white animate-fade-in">
          {t.hero.headline}{" "}
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            {t.hero.headlineHighlight}
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in">
          {t.hero.subheadline}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={openCalendly}
            className="group text-lg px-10 shadow-glow"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;