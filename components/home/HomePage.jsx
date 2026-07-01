import CTA from "./CTA";
import FAQS from "./FAQS";
import Hero from "./Hero";
import HiringExternalTeam from "./HiringExternalTeam";
import OurBuildExperience from "./OurBuildExperience";
import Process from "./Process";
import SoundFamiliar from "./SoundFamiliar";
import Stats from "./Stats";
import WhatChanges from "./WhatChanges";
import WhatWeDo from "./WhatWeDo";
import WhoWeWorkWith from "./WhoWeWorkWith";
import WhyUsSection from "./WhyUsSection";

const HomePage = () => {
  return (
    <main className={`bg-transparent relative overflow-hidden`}>
      <Hero />
      <Stats />
      <SoundFamiliar />
      <WhatWeDo />
      <OurBuildExperience />
      <WhoWeWorkWith />
      <Process />
      <WhatChanges />
      <WhyUsSection />
      <HiringExternalTeam />
      <FAQS />
      <CTA />
    </main>
  );
};

export default HomePage;
