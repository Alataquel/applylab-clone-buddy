import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CompanyMarquee from "@/components/landing/CompanyMarquee";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProofSection from "@/components/landing/ProofSection";
import ToolsSection from "@/components/landing/ToolsSection";
import PricingSection from "@/components/landing/PricingSection";
import UniversitiesTeaser from "@/components/landing/UniversitiesTeaser";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <GridBackground>
      <Navbar />
      {/* 1. Hero — match-first */}
      <HeroSection />
      <CompanyMarquee />
      {/* 2. Why this isn't another CV tool */}
      <ProblemSection />
      {/* 3. How it works — 3 steps */}
      <HowItWorksSection />
      {/* 4. Proof / credibility */}
      <ProofSection />
      {/* 5. Gap-closing tools — subordinated */}
      <ToolsSection />
      <PricingSection />
      <UniversitiesTeaser />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </GridBackground>
  );
};

export default Index;
