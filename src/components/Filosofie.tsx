import { Button } from "@/components/ui/button";

const Filosofie = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/babylon-chatgpt/demo-call', '_blank');
  };

  return (
    <section id="philosophy" className="section-spacing bg-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Our Philosophy
          </h2>
        </div>
        
        <div className="bg-accent p-8 md:p-12 rounded-2xl mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground">
            <strong className="text-primary">Cenatric stands for more than just a chatbot.</strong> We take businesses a step further in the digital age. 
            While customers increasingly expect immediate service, we ensure businesses can deliver that without additional staff.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-accent-foreground mt-6">
            <strong className="text-secondary">Automation supports, doesn't replace</strong> — your team stays focused on personal relationships, 
            while Cenatric takes away the repetitive work. This means more efficiency, fewer missed opportunities, and better customer experience.
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            onClick={openCalendly}
            className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            See how this works for your business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Filosofie;