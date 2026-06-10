import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import SoundFamiliar from "./SoundFamiliar";
import WhatWeDoSection from "./WhatWeDoSection";
import BuildExperience from "./BuildExperience";
import WhoWeWorkWith from "./WhoWeWorkWith";
import Process from "./Process";
import WhatChanges from "./WhatChanges";
import WhyUs from "./WhyUs";
import HiringExternalTeam from "./HiringExternalTeam";
import FAQS from "./FAQS";
import CTA from "./CTA";

const HomePage = () => {
  return (
    <main className={`bg-transparent relative`}>
      <Hero />
      <Stats />
      <SoundFamiliar />
      <WhatWeDoSection />
      <BuildExperience />
      <WhoWeWorkWith />
      <Process />
      <WhatChanges />
      <WhyUs />
      <HiringExternalTeam />
      <FAQS />
      <CTA />
    </main>
  );
};

export default HomePage;
