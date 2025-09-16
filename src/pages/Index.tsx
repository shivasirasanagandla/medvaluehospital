import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import CorePillars from "@/components/CorePillars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HomeShowcase />
      <CorePillars />
      <Footer />
    </div>
  );
};

export default Index;
