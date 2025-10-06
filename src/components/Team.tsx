import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  const openCalendly = () => {
    window.open('https://calendly.com/main-cenatric/30min', '_blank');
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
            {t.team.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.team.description}
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
                {t.team.coOwner}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 p-8 md:p-12 rounded-2xl mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t.team.missionTitle}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.team.missionDescription}
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={openCalendly}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            {t.team.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;