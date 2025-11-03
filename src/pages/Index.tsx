import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WatWeDoen from "@/components/WatWeDoen";
import Filosofie from "@/components/Filosofie";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WatWeDoen />
        <Filosofie />
        <Team />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
