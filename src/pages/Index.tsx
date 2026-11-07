import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CompanyMarquee from "@/components/landing/CompanyMarquee";
import StatsSection from "@/components/landing/StatsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";

import InfrastructureSection from "@/components/landing/InfrastructureSection";
import SocialProofSection from "@/components/landing/SocialProofSection";

import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <GridBackground>
      <Navbar />
        <HeroSection />
        <CompanyMarquee />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        
        <InfrastructureSection />
        
        <SocialProofSection />
        <FAQSection />
        <CTASection />
      <Footer />
    </GridBackground>
  );
};

export default Index;
