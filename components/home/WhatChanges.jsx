import React from "react";

const data = [
  {
    before: {
      title: "WAITING",
      desc: 'You are the founder with a deck and a vision. Every investor conversation starts with <strong class="font-bold text-neutral-800">"We are still building."</strong>',
    },
    after: {
      title: "LAUNCHED",
      desc: "You are the founder with a live product. That changes every conversation with investors, partners, and customers.",
    },
  },
  {
    before: {
      title: "MANAGING FREELANCERS",
      desc: "Chasing updates across Upwork, Slack, and Notion. No one owns the outcome and nothing ships on time.",
    },
    after: {
      title: "ONE ACCOUNTABLE TEAM",
      desc: "One team owns the build start to finish. One person to call. One timeline. Full accountability.",
    },
  },
  {
    before: {
      title: "BURNING RUNWAY",
      desc: "Your funding is sitting idle as months pass and your product stays unbuilt. The clock does not stop.",
    },
    after: {
      title: "SHIPPING FAST",
      desc: "Your funding is working. Every sprint moves you toward launch. Runway turns into real product.",
    },
  },
  {
    before: {
      title: "NERVOUS INVESTOR UPDATES",
      desc: "Progress reports with nothing tangible to show. You are pitching intention instead of results.",
    },
    after: {
      title: "REAL TRACTION TO SHOW",
      desc: "A live product, real users, and early data. You walk into your next investor conversation with proof.",
    },
  },
];

const WhatChanges = () => {
  return (
    <section className="w-full padding-x py-16 md:py-24 flex flex-col items-center">
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="mb-10 text-center">
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            What Changes
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
            What Your Startup <br className="hidden lg:block" /> Looks Like
            After
            <span className="text-[#ea2b2b]">Launch</span>
          </h2>

          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mx-auto mt-5">
            When you have the right team executing at the right speed,
            everything moves differently.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 border-b-[3px] border-white last:border-b-0"
          >
            {/* BEFORE COLUMN */}
            <div className="bg-[#f3f4f6] p-8 md:p-12 lg:px-14 flex flex-col justify-center transition-colors">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase mb-2">
                Before
              </div>
              <h3 className="text-[15px] lg:text-lg font-extrabold text-[#9ca3af] tracking-wide mb-[6px] uppercase">
                {item.before.title}
              </h3>
              <p
                className="text-[#9ca3af] leading-[1] text-[15px] lg:text-lg"
                dangerouslySetInnerHTML={{ __html: item.before.desc }}
              />
            </div>

            {/* AFTER COLUMN */}
            <div className="bg-[#f3f4f6] p-8 md:p-12 lg:px-14 flex flex-col justify-center border-t-2 border-t-red-500 md:border-t-0 md:border-l-[3.5px] md:border-l-red-500 transition-colors">
              <div className="text-[11px] font-bold tracking-[0.2em] red-text uppercase mb-2">
                After
              </div>
              <h3 className="text-[15px] lg:text-lg font-bold text-[#111827] tracking-wide mb-[6px] uppercase">
                {item.after.title}
              </h3>
              <p
                className="text-[#6b7280] leading-[1] text-[15px] lg:text-lg"
                dangerouslySetInnerHTML={{ __html: item.after.desc }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 text-center px-4 w-full mt-14 pt-10">
        <p className="text-lg md:text-[22px] leading-snug text-neutral-800 font-medium mx-auto">
          This is what it looks like when the right team executes on your vision
          at the speed your startup actually{" "}
          <span className="text-red-500">needs.</span>
        </p>
      </div>
    </section>
  );
};

export default WhatChanges;
