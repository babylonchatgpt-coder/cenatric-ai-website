import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Team = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Ennock Bwatou",
      role: "Co-owner",
    },
    {
      name: "Kyan Melk", 
      role: "Co-owner",
    }
  ];

  return (
    <section id="team" className="section-spacing section-gradient">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Team & Missie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wij zijn Lumora. Een jong, gedreven team dat gelooft dat lokale bedrijven 
            dezelfde technologische voorsprong verdienen als grote corporates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-lg text-primary font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 p-8 md:p-12 rounded-2xl mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Onze Missie
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Onze missie is om lokale bedrijven te helpen groeien door hen een nieuwe 
            standaard in klantcontact en leadgeneratie te geven.
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={() => scrollToSection('cta')}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Ontmoet ons team in een demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;