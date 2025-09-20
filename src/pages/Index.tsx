import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import CorePillars from "@/components/CorePillars";
import StatsAndFeatures from "@/components/StatsAndFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Rendering Index component');
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <CorePillars />
      <HomeShowcase />
      {console.log('Rendering StatsAndFeatures')}
      <StatsAndFeatures />
      <Footer />
    </div>
  );
};

export default Index;
