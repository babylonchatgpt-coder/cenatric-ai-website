import { Button } from "@/components/ui/button";

const Filosofie = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="filosofie" className="section-spacing bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Onze Filosofie
          </h2>
        </div>
        
        <div className="bg-accent p-8 md:p-12 rounded-2xl mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground">
            <strong className="text-primary">Lumora staat voor meer dan een chatbot.</strong> Wij brengen bedrijven een stap verder in het digitale tijdperk. 
            Terwijl klanten steeds meer directe service verwachten, zorgen wij dat bedrijven die kunnen leveren zonder extra personeel.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground mt-6">
            <strong className="text-secondary">Automatisering ondersteunt, vervangt niet</strong> — jouw team blijft focussen op persoonlijke relaties, 
            terwijl Lumora het repetitieve werk wegneemt. Dit betekent meer efficiëntie, minder gemiste kansen en een betere klantbeleving.
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={() => scrollToSection('cta')}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Zie hoe dit voor jouw bedrijf werkt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Filosofie;