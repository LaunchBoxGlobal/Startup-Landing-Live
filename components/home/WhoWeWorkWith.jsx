import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhoWeWorkWith() {
  const criteria = [
    "You are pre-seed or seed funded and ready to start building",
    "You are a non-technical founder without an internal engineering team",
    "You have a Figma, a spec, or at minimum a clear product vision",
    "You need to launch within 90 to 120 days",
    "You want one accountable team, not a roster of freelancers to manage",
    "You are based in the US or building for a US market",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white padding-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            WHO WE WORK WITH
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
            Built For Founders
            <br />
            Who Are Ready
            <br />
            To <span className="red-text">Move.</span>
          </h2>
          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] my-5">
            We work best with founders who have funding, a clear vision, and the
            urgency to launch. If that is you, we should talk.
          </p>

          <button
            type="button"
            className="red-bg hover:bg-[#000] text-white font-medium py-4 px-8 rounded-xl transition-colors text-[15px] lg:text-lg"
          >
            Book a Free Discovery Call
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-4 lg:mt-0">
          <div className="flex flex-col">
            {criteria.map((text, idx) => (
              <div
                key={idx}
                className="flex gap-4 py-5 border-b border-gray-200 last:border-0 items-start"
              >
                <ArrowRight
                  className="text-[#ff1a1a] w-5 h-5 shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <span className="text-[#3f3f46] text-[15px] md:text-base lg:text-lg font-medium leading-[1.5]">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-[3px] border-[#F40E00] rounded-[16px] p-6 lg:p-7 bg-white shadow-sm">
            <h4 className="text-black font-bold text-[15px] uppercase tracking-wide mb-3">
              NOT A FIT
            </h4>
            <p className="text-[#909090] text-[16px] leading-[1.6] font-light">
              We are not the right team for unfunded idea-stage founders, deep
              AI or LLM products, hardware or IoT startups, crypto or blockchain
              projects, or founders who are not yet ready to commit to a build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
