import { Button } from "@/components/ui/button";
import { User, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Team = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
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
    <section id="team" className="py-24 soft-gradient" ref={ref}>
      <div className={`container mx-auto max-w-6xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Meet the Team
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.team.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.team.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-card p-10 rounded-3xl border border-border hover-lift hover:shadow-xl hover:border-primary/50 text-center"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <User className="w-14 h-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-base text-primary font-semibold">
                {t.team.coOwner}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 rounded-3xl border border-primary/20 text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.team.missionTitle}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              {t.team.missionDescription}
            </p>
            <Button 
              size="lg" 
              variant="premium"
              onClick={openCalendly}
              className="whitespace-normal h-auto py-3 px-6 text-center leading-snug"
            >
              {t.team.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;