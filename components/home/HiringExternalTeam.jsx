import React from "react";

const faqs = [
  {
    question: "WHAT IF YOU DISAPPEAR HALFWAY THROUGH THE BUILD?",
    answer:
      "We structure every engagement with milestone-based delivery, weekly check-ins, and a dedicated point of contact. You always know what is happening and you have real recourse if we miss a milestone.",
  },
  {
    question: "WILL MY FUTURE CTO BE ABLE TO WORK WITH WHAT YOU BUILD?",
    answer:
      "Yes. We build to industry-standard practices, document everything, and hand over clean, well-structured code. Multiple incoming CTOs have specifically noted the codebase was easy to inherit.",
  },
  {
    question: "CAN I TRUST AN EXTERNAL TEAM WITH MY IDEA?",
    answer:
      "We sign NDAs before any detailed conversation. We have worked with funded founders on sensitive, pre-launch products for years. Your idea is safe.",
  },
  {
    question: "IS THIS GOING TO COST MORE THAN JUST HIRING FREELANCERS?",
    answer:
      "Sometimes the hourly rate looks higher. But one accountable team with shared ownership of the outcome is almost always cheaper than burning time and money on freelancers who do not deliver.",
  },
  {
    question: "WHAT IF THE PRODUCT NEEDS TO CHANGE DURING THE BUILD?",
    answer:
      "It will. Every product does. We build in structured sprints specifically so you can see progress, give feedback, and adjust without blowing up the timeline. We are not rigid. We are experienced.",
  },
  {
    question: "WILL THIS LOOK LIKE IT WAS OUTSOURCED?",
    answer:
      "No. We have shipped products that raised follow-on rounds, onboarded paying customers, and demoed to major investors. Your product will look, feel, and perform like it was built by a team that cares. Because it was.",
  },
];

const HiringExternalTeam = () => {
  return (
    <section className="w-full padding-x py-16 md:py-24 flex flex-col items-center">
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="mb-10 text-center">
          <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
            Let's Be Honest
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
            Things Founders Worry About <br className="hidden lg:block" />{" "}
            Before Hiring an External{" "}
            <span className="text-[#ea2b2b]">Team</span>
          </h2>

          <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mx-auto mt-7">
            We have heard every concern. Here are the honest answers.
          </p>
        </div>
      </div>

      <div className="rounded-[12px] overflow-hidden flex flex-col bg-white">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col">
            {/* Question Row */}
            <div className="bg-[#E6E6E6] px-6 py-5 flex items-start gap-3 md:px-8 md:py-6">
              <div className="red-text font-black text-2xl leading-none w-3 md:w-4 flex flex-shrink-0 justify-center">
                &quot;
              </div>
              <h3 className="font-bold text-[#111111] text-sm md:text-base lg:text-lg uppercase tracking-wide">
                {faq.question}
              </h3>
            </div>
            {/* Answer Row */}
            <div className="bg-[#F2F2F2]/60 px-6 flex items-stretch gap-4 md:px-8">
              <div className="w-3 md:w-4 flex justify-center flex-shrink-0">
                <div className="w-[3px] red-bg" />
              </div>
              <p className="text-[#909090] text-sm md:text-base lg:text-lg leading-relaxed max-w-[95%] py-3 md:py-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiringExternalTeam;
