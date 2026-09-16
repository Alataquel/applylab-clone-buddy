import GridBackground from "@/components/landing/GridBackground";
import Navbar from "@/components/landing/Navbar";
import DemoToggleSection from "@/components/landing/DemoToggleSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";

const Demo = () => {
  return (
    <GridBackground>
      <Navbar />
      <section className="pt-44 pb-4 px-6 lg:px-12 text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Interactive demo</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
          See the full platform.
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Click through both portals — tabs, drill-downs, everything. This is the workspace you get once you're matched.
        </p>
      </section>
      <DemoToggleSection />
      <FeaturesSection />
      <Footer />
    </GridBackground>
  );
};

export default Demo;
