import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
