import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import CorePillarsMinimal from "@/components/CorePillarsMinimal";
import StatsAndFeatures from "@/components/StatsAndFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Rendering Index component');
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CorePillarsMinimal />
      <HomeShowcase />
      {console.log('Rendering StatsAndFeatures')}
      <StatsAndFeatures />
      <Footer />
    </div>
  );
};

export default Index;
