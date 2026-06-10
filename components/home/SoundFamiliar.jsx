import React from "react";

const criteria = [
  "You raised pre-seed or seed funding but have no engineering team yet.",
  "You have Figma designs or a detailed spec sitting ready but no one to build it.",
  "You are interviewing CTOs but the right one has not shown up yet.",
  "Your freelancers are too slow, too inconsistent, or impossible to coordinate.",
  "Your investor update is in 60 days and you need something real to show.",
  "You need a working product for user pilots, early customers, or your next raise.",
  "You have been burned by a dev shop before and are nervous about trying again.",
  "You need one accountable team covering product, design, build, and launch.",
];

const SoundFamiliar = () => {
  return (
    <section className="bg-[#fff] padding-x py-24 selection:bg-red-100 selection:text-red-900 overflow-hidden">
      {/* Header Section */}
      <div className="mb-10 text-start">
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Sound Familiar?
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
          You Have the Vision, the Funding, <br className="hidden lg:block" />{" "}
          and the Pressure. Just Not the
          <span className="text-[#ea2b2b]">Team.</span>
        </h2>

        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          Most non-technical founders hit the same wall after closing their
          round. Here is what that usually looks like.
        </p>
      </div>

      <section className="w-full" aria-label="Target Audience Criteria">
        <div className="bg-[#f0f0f0] w-full rounded-xl border border-gray-200 flex flex-col shadow-sm">
          {/* Top Gray Padding Bar */}
          <div className="h-6 md:h-8 w-full shrink-0" aria-hidden="true" />

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 gap-[1px] border-y border-gray-200">
            {criteria.map((text, index) => {
              const number = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-gray-100 transition-all duration-200 flex items-start gap-4 md:gap-6 p-6 md:px-8 md:py-10 group cursor-default"
                >
                  <span className="text-[2.25rem] md:text-[2.5rem] font-black tracking-tight red-text shrink-0 leading-none mt-1 select-none transition-transform duration-300 group-hover:scale-105">
                    {number}
                  </span>
                  <p className="text-gray-900 text-base md:text-[1.1rem] leading-[1.4] font-medium p-0 m-0">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Gray Padding Bar */}
          <div className="h-6 md:h-8 w-full shrink-0" aria-hidden="true" />
        </div>

        {/* Trailing Footer Text */}
        <div className="mt-6 md:mt-8 px-1">
          <p className="text-[1.05rem] md:text-[1.15rem] leading-relaxed text-gray-900 font-medium">
            If this is where you are right now, you are exactly who we built
            this <span className="red-text font-bold">for.</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default SoundFamiliar;
