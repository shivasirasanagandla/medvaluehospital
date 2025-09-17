import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import CorePillarsMinimal from "@/components/CorePillarsMinimal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CorePillarsMinimal />
      <HomeShowcase />
      <Footer />
    </div>
  );
};

export default Index;
