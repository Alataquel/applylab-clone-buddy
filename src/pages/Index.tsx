import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InfrastructureSection from "@/components/landing/InfrastructureSection";
import StudentToolsSection from "@/components/landing/StudentToolsSection";

import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <InfrastructureSection />
      <StudentToolsSection />
      
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
