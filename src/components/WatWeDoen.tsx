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
    "It's an assistant for websites & social media",
    "Handles customer service by answering FAQs and support questions instantly",
    "Books appointments and collects contact information automatically", 
    "Sends warm leads directly to your team",
    "Ensures businesses never miss opportunities, even after hours"
  ];

  return (
    <section id="what-we-do" className="section-spacing section-gradient">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lunara automates your customer contact and lead generation, so your business 
            is reachable 24/7 and never misses opportunities.
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
            Let us demonstrate this for you
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WatWeDoen;