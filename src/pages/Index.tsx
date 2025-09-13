import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WatWeDoen from "@/components/WatWeDoen";
import Filosofie from "@/components/Filosofie";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WatWeDoen />
        <Filosofie />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
