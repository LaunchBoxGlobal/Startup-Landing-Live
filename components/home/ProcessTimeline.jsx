import Image from "next/image";
import React from "react";
import ProcessTimelinePath from "./ProcessTimelinePath";

const timeline = [
  {
    icon: "/process-step-1.png",
    num: "/discovery-call-num.png",
    width: 56,
    title: "Discovery Call",
    description:
      "We start with a free call to understand your product, your timeline, your funding stage, and what you need to hit your next milestone. No pitch. Just a real conversation about your build.",
    iconPosition: "bottom",
  },
  {
    icon: "/process-step-2.png",
    num: "/scoping-and-proposal-num.png",
    width: 84,
    title: "Scoping and Proposal",
    description:
      "We map out your full MVP scope, tech stack, timeline, and cost. You will know exactly what you are getting, when it will be done, and what it will cost before anything starts.",
    iconPosition: "top",
  },
  {
    icon: "/process-step-3.png",
    num: "/design-and-build-num.png",
    width: 83,
    title: "Design and Build",
    description:
      "Our team moves fast in structured sprints. You get weekly updates, working builds to review, and full transparency throughout. You are never left wondering what is happening.",
    iconPosition: "bottom",
  },
  {
    icon: "/process-step-4.png",
    num: "/launch-and-handoff-num.png",
    width: 90,
    title: "Launch and Handoff",
    description:
      "We deploy your product, hand over all code and documentation, and make sure your team or future CTO can take it forward. You own everything, cleanly.",
    iconPosition: "top",
  },
];

const ProcessTimeline = () => {
  return (
    <>
      {/* ============== DESKTOP (lg and up) — unchanged original layout ============== */}
      <div className="w-full relative py-20 pl-[5%] mt-20 hidden lg:block">
        <ProcessTimelinePath />

        {/* card 1 */}
        <div
          key={timeline[0].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] relative top-3`}
        >
          {/* Number */}
          <Image
            src={timeline[0].num}
            width={timeline[0].width}
            height={147}
            alt={`${timeline[0].title} number`}
            className="object-contain relative bottom-[-8%] z-10"
          />

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10`}>
            <h3 className="font-bold leading-none text-left">
              {timeline[0].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {timeline[0].description}
            </p>
          </div>

          {/* Icon below text, only when iconPosition === "bottom" */}
          <div className="h-[90px] flex items-start justify-center relative z-10 mt-10">
            <Image
              src={timeline[0].icon}
              width={114}
              height={114}
              alt={`${timeline[0].title} icon`}
              className="object-contain"
            />
          </div>
        </div>

        {/* card 2 */}
        <div
          key={timeline[1].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute top-[21%] left-[36%]`}
        >
          {/* Icon above number, only when iconPosition === "top" */}
          <Image
            src={timeline[1].icon}
            width={114}
            height={114}
            alt={`${timeline[1].title} icon`}
            className="object-contain relative z-10 mb-16"
          />

          {/* Number */}
          <Image
            src={timeline[1].num}
            width={timeline[1].width}
            height={147}
            alt={`${timeline[1].title} number`}
            className="object-contain relative bottom-[-8%] z-10"
          />

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10`}>
            <h3 className="font-bold leading-none text-left">
              {timeline[1].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {timeline[1].description}
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div
          key={timeline[2].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute right-[27%] top-[2%]`}
        >
          {/* Number */}
          <Image
            src={timeline[2].num}
            width={timeline[2].width}
            height={147}
            alt={`${timeline[2].title} number`}
            className="object-contain relative bottom-[-8%] z-10"
          />

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10`}>
            <h3 className="font-bold leading-none text-left">
              {timeline[2].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {timeline[2].description}
            </p>
          </div>

          {/* Icon below text, only when iconPosition === "bottom" */}
          <div className="h-[90px] flex items-start justify-center relative z-10 mt-14 mx-auto">
            <Image
              src={timeline[2].icon}
              width={114}
              height={114}
              alt={`${timeline[2].title} icon`}
              className="object-contain mx-auto"
            />
          </div>
        </div>

        {/* card 4 */}
        <div
          key={timeline[3].title}
          className={`flex flex-col items-center text-center w-full max-w-[260px] absolute top-[59%] right-[1%]`}
        >
          {/* Icon above number, only when iconPosition === "top" */}
          <Image
            src={timeline[3].icon}
            width={114}
            height={114}
            alt={`${timeline[3].title} icon`}
            className="object-contain relative z-10 mb-4"
          />

          {/* Number */}
          <Image
            src={timeline[3].num}
            width={timeline[3].width}
            height={147}
            alt={`${timeline[3].title} number`}
            className="object-contain relative z-10 bottom-[-8%] right-14"
          />

          {/* Text block */}
          <div className={`max-w-[260px] relative z-10 right-14`}>
            <h3 className="font-bold leading-none text-left">
              {timeline[3].title}
            </h3>
            <p className="text-[15px] font-light text-gray-700 leading-[1.35] mt-2 text-left">
              {timeline[3].description}
            </p>
          </div>
        </div>
      </div>

      {/* ============== MOBILE + TABLET (below lg) — stacked vertical timeline ============== */}
      <div className="w-full lg:hidden py-12 px-6 sm:px-10 mt-10">
        <div className="relative flex flex-col gap-12 sm:gap-14 max-w-md sm:max-w-xl mx-auto">
          {/* vertical connecting line */}
          <div className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-px bg-gray-300 z-0" />

          {timeline.map((step, index) => (
            <div
              key={step.title}
              className="relative z-10 flex items-start gap-5 sm:gap-7"
            >
              {/* icon bubble */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-transparent flex items-center justify-center">
                <Image
                  src={step.icon}
                  width={56}
                  height={56}
                  alt={`${step.title} icon`}
                  className="object-contain w-20 h-20"
                />
              </div>

              {/* text content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <Image
                    src={step.num}
                    width={28}
                    height={48}
                    alt={`${step.title} number`}
                    className="object-contain h-7 w-auto"
                  />
                  <h3 className="font-bold text-base sm:text-lg leading-none">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] font-light text-gray-700 leading-[1.45]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProcessTimeline;
