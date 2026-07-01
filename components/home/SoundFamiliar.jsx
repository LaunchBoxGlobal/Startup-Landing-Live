import React from "react";
import SectionHeader from "../common/SectionHeader";
import SoundFamiliarAnimation from "./SoundFamiliarAnimation";

const SoundFamiliar = () => {
  return (
    <section className="section">
      <div className="w-full padding-x pt-10">
        <SectionHeader
          pill={"Sound Familiar?"}
          title={
            "You Have the Vision, the Funding, and the Pressure. Just Not the"
          }
          redTitle={"Team"}
          description={
            "Most non-technical founders hit the same wall after closing their round. Here is what that usually looks like."
          }
          className={"text-center flex flex-col items-center gap-3"}
        />
      </div>

      <SoundFamiliarAnimation />

      <div className="w-full padding-x">
        <p className="mx-auto text-center text-lg md:text-xl lg:text-[24px] lg:mt-10">
          If this is where you are right now, you are exactly{" "}
          <br className="hidden lg:block" /> who we built this
          <span className="red-text">for.</span>
        </p>
      </div>
    </section>
  );
};

export default SoundFamiliar;
