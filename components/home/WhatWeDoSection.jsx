const services = [
  {
    title: "YOU HAVE DESIGNS BUT NO BUILD TEAM",
    description:
      "We take your Figma files and build the full product, frontend to backend, web to mobile, exactly as designed and production ready.",
  },
  {
    title: "YOU HAVE AN IDEA BUT NOTHING DESIGNED YET",
    description:
      "We start from scratch with you. Discovery, product scoping, UX design, and then build. We help you figure out what to build before we start building it.",
  },
  {
    title: "YOU HAVE A PARTIAL BUILD THAT STALLED",
    description:
      "We audit what exists, take over the codebase, and get your product across the finish line without losing time to a full rebuild.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="w-full padding-x py-16 md:py-24 flex flex-col items-center">
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="mb-10 text-center">
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
            Your External Product <br className="hidden lg:block" /> Team From
            First Call to
            <span className="text-[#ea2b2b]">Launch.</span>
          </h2>

          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mx-auto mt-5">
            We plug in as your full product team and take your idea, Figma, or
            spec all the way to a launched MVP. Design, frontend, backend,
            mobile, cloud, integrations. One team, one timeline, one point of
            accountability.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#F2F2F2] rounded-xl flex flex-col mb-12 overflow-hidden shadow-sm">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 md:p-8 flex flex-col group border-l-[3px] border-[#f2f2f2] hover:border-[#F40E00] transition-all duration-200 ${index !== 2 && "border-b-2 border-b-white hover:border-b-white"}`}
          >
            <h3 className="red-text font-bold uppercase tracking-wide text-sm md:text-base lg:text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-900 font-medium text-sm md:text-base lg:text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-[#F02F24] text-white px-10 py-4 rounded-[14px] font-bold text-[1.05rem] cursor-pointer shadow-md shadow-red-500/20 hover:bg-[#000] transition-colors">
        Book a Free Discovery Call
      </button>
    </section>
  );
}
