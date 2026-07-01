import React from "react";
import ProcessTimeline from "./ProcessTimeline";

const Process = () => {
  return (
    <section className="section">
      <div
        className={`w-full relative overflow-hidden z-20 text-center flex flex-col items-center gap-3 padding-x`}
      >
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          the process
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
          From Discovery Call to Launched <br className="hidden lg:block" />{" "}
          Product Here is How It <span className="text-[#ea2b2b]">Works</span>
        </h2>
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          A clear four-step process with no surprises and full visibility
          throughout.
        </p>
      </div>

      <ProcessTimeline />

      <div className="w-[80vw] h-[60vw] rounded-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-0 blur-[200px] bg-red-500/20" />
    </section>
  );
};

export default Process;
