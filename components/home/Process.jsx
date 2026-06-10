import React from "react";

const steps = [
  {
    num: "01",
    title: "DISCOVERY CALL",
    desc: "We start with a free call to understand your product, your timeline, your funding stage, and what you need to hit your next milestone. No pitch. Just a real conversation about your build.",
  },
  {
    num: "02",
    title: "SCOPING AND PROPOSAL",
    desc: "We map out your full MVP scope, tech stack, timeline, and cost. You will know exactly what you are getting, when it will be done, and what it will cost before anything starts.",
  },
  {
    num: "03",
    title: "DESIGN AND BUILD",
    desc: "Our team moves fast in structured sprints. You get weekly updates, working builds to review, and full transparency throughout. You are never left wondering what is happening.",
  },
  {
    num: "04",
    title: "LAUNCH AND HANDOFF",
    desc: "We deploy your product, hand over all code and documentation, and make sure your team or future CTO can take it forward. You own everything, cleanly.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#F9F9F9] padding-x py-24 selection:bg-red-100 selection:text-red-900 overflow-hidden">
      <div className="flex flex-col items-start">
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          The Process
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
          From Discovery Call to Launched Product Here is How It{" "}
          <span className="red-text"> Works.</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] my-5">
          A clear four-step process with no surprises and full visibility
          throughout.
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-full relative mt-8 mb-16">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-[24px] left-0 right-0 border-t-2 border-dashed border-[#EA2825] opacity-50 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex md:flex-col flex-row gap-6 md:gap-0 items-start relative"
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 red-bg text-white font-bold text-xl rounded shadow-sm w-12 h-12 flex items-center justify-center shrink-0 z-10 md:mb-8">
                  {step.num}
                </div>

                {/* Mobile vertical dashed line connection */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-[23px] top-[48px] bottom-[-48px] border-l-2 border-dashed border-[#EA2825] opacity-50 z-0"></div>
                )}

                {/* Content */}
                <div className="flex flex-col mt-2 md:mt-0">
                  <h3 className="text-gray-900 font-bold mb-3 tracking-wide lg:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[#909090] text-sm lg:text-lg leading-[1]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-3">
        <button
          type="button"
          className="red-bg hover:bg-[#000] text-white font-medium py-4 px-8 rounded-xl transition-colors text-[15px] lg:text-lg"
        >
          Book a Free Discovery Call
        </button>
      </div>
    </section>
  );
};

export default Process;
