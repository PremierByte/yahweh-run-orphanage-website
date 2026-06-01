import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import Causes from "@/components/sections/Causes";
import WaysToHelp from "@/components/sections/WaysToHelp";
import CTA from "@/components/sections/CTA";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <Introduction />
      <Causes />
      <WaysToHelp />
      <CTA />
    </main>
  );
};

export default HomePage;
