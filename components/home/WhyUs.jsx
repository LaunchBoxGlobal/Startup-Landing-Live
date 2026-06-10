import React from "react";

const appTypes = [
  {
    title: "Startup Speed",
    description:
      "We know what it means to have a 90-day runway to launch. Our team is structured to move fast without cutting corners on quality.",
  },
  {
    title: "Full Team, Not a Dev Shop",
    description:
      "Product strategy, UX, frontend, backend, mobile, cloud, and QA. One team owns everything from concept to launch.",
  },
  {
    title: "You Own Everything",
    description:
      "The code, the repository, the infrastructure, and the documentation are yours from day one. No lock-in. No ongoing dependency unless you choose it.",
  },
  {
    title: "Products, Not Just Features",
    description:
      "We think about user experience, product flow, and what makes an MVP actually usable and investable, not just technically functional.",
  },
  {
    title: "Clean Handoff",
    description:
      "When you hire your CTO or first engineers, they will not spend months figuring out what we built. We document everything to industry standards.",
  },
  {
    title: "We've Done This Before",
    description:
      "97 projects across marketplaces, mobility, booking, SaaS, and consumer apps. You are not our first funded founder and you benefit from everything we have learned.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-[#F9F9F9] padding-x py-24 selection:bg-red-100 selection:text-red-900 overflow-hidden">
      <div className="flex flex-col items-start">
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Why Us
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
          A Lot of Agencies Build MVPs <br className="hidden lg:block" /> Here's
          What Makes Us <span className="red-text">Different</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] my-5">
          We have worked with enough funded founders to know what they actually
          need. Speed, accountability, and a team that treats your product like
          their own.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 gap-[1px] mt-10">
        {appTypes.map((appType, index) => {
          const Icon = appType.icon;
          return (
            <div
              key={index}
              className={`bg-white p-8 md:p-10 group transition-colors duration-300 flex flex-col items-start relative overflow-hidden`}
            >
              <p className="red-text text-[48px] font-extrabold">{`0${index + 1}`}</p>
              <h3 className="font-extrabold text-lg tracking-wider uppercase mb-3 text-black transition-colors duration-300">
                {appType.title}
              </h3>
              <p className="text-gray-500 font-medium text-[0.95rem] leading-relaxed transition-colors duration-300">
                {appType.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
