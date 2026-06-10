import React from "react";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full bg-white overflow-hidden"
    >
      <section className="w-full padding-x relative pt-36 xl:pt-44 flex flex-col items-center justify-start gap-5 lg:gap-[25px]">
        <h1
          id="hero-heading"
          className="font-bold relative z-10 text-[8vw] md:text-[6.2vw] mb-1 text-center tracking-normal leading-none lg:leading-[1] w-full"
        >
          You Raised the Money <br className="hidden lg:block" />
          <span className="red-text">Now Build the Product.</span>
        </h1>

        <h2 className="text-base lg:text-[32px] 2xl:text-[36px] font-medium text-gray-900 text-center lg:max-w-[90%] lg:leading-[40px]">
          We take funded non-technical founders from Figma, spec, or idea to a
          launched MVP in 90–120 days. No hiring. No delays. No excuses.
        </h2>

        <div className="flex items-center justify-center gap-3 lg:gap-5 w-full">
          <button
            type="button"
            aria-label="Book a Workflow Audit"
            className="red-btn"
          >
            Book a Workflow Audit
          </button>

          <a
            href="#how-it-works"
            aria-label="See How It Works"
            className="red-outlined-btn text-center"
          >
            See How It Works
          </a>
        </div>
      </section>

      <section className="w-full padding-x flex flex-col items-center justify-center text-center gap-5 pt-10">
        <p className="text-base lg:text-2xl font-medium text-gray-900 text-center lg:max-w-[60%] mx-auto">
          We have shipped MVPs for funded founders across marketplaces, mobility
          apps, booking platforms, B2B SaaS, and more.
        </p>
      </section>

      <HeroAnimation />
    </section>
  );
};

export default React.memo(Hero);
