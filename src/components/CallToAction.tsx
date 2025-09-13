import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Zap } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Calendly or your booking system
    console.log("Demo booking requested for:", email);
    // For now, just show an alert
    alert("Bedankt! We nemen binnen 24 uur contact met je op om een demo in te plannen.");
    setEmail("");
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "15 minuten gratis demo"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Direct zien hoe het werkt"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      text: "Geen verplichtingen"
    }
  ];

  return (
    <section id="cta" className="section-spacing bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Laat ons zien hoe dit voor{" "}
            <span className="text-primary">jouw bedrijf</span> werkt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zie in 15 minuten hoe Lumora jouw bedrijf kan helpen meer leads te vangen 
            en betere klantservice te bieden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-accent rounded-xl"
            >
              <div className="text-primary">
                {benefit.icon}
              </div>
              <p className="text-accent-foreground font-medium">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-medium">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-6">
              <Input
                type="email"
                placeholder="Jouw zakelijke e-mailadres"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg p-4 h-14 bg-background border-border focus:border-primary"
              />
            </div>
            
            <Button 
              type="submit"
              size="lg" 
              className="w-full text-lg py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Plan je Gratis Demo
            </Button>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              We nemen binnen 24 uur contact met je op
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;