import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const WatWeDoen = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "AI-chatbot voor websites & social media",
    "Neemt klantenservice over door FAQ's en supportvragen direct te beantwoorden",
    "Boekt afspraken en verzamelt contactgegevens automatisch",
    "Stuurt warme leads direct door naar het team",
    "Zorgt dat bedrijven nooit meer kansen missen, ook buiten openingstijden"
  ];

  return (
    <section id="wat-we-doen" className="section-spacing section-gradient">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wat We Doen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lumora automatiseert jullie klantcontact en leadgeneratie, zodat jullie bedrijf 
            24/7 bereikbaar is en nooit meer kansen mist.
          </p>
        </div>
        
        <div className="grid gap-6 mb-12">
          {features.map((feature, index) => (
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
            onClick={() => scrollToSection('cta')}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Laat ons dit voor jou demonstreren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WatWeDoen;