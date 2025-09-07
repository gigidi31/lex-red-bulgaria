import Header from "@/components/Header";
import Hero from "@/components/Hero"; 
import ServicesSection from "@/components/ServicesSection";
import LawyersSection from "@/components/LawyersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <LawyersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;