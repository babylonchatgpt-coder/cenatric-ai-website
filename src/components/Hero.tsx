import { Button } from "@/components/ui/button";

const Hero = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/babylon-chatgpt/demo-call', '_blank');
  };

  return (
    <section className="hero-gradient text-white pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Turn visitors into customers —{" "}
          <span className="text-primary-glow">automatically</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
          Cenatric helps local businesses capture leads, assist customers instantly, 
          and book appointments — 24/7, without additional staff.
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          variant="secondary"
          onClick={openCalendly}
          className="text-lg px-8 py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
        >
          Book Your Free 15-Minute Demo
        </Button>
      </div>
    </section>
  );
};

export default Hero;