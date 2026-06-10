"use client";
import { motion } from "motion/react";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, margin: "-50px" }}
        // variants={{
        //   visible: {
        //     transition: { staggerChildren: 0.15 },
        //   },
        // }}
        className="w-full bg-[#f3f3f3] rounded-xl flex flex-col mb-12 overflow-hidden shadow-sm"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 100, damping: 20 },
              },
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            tabIndex={0}
            className={`relative p-6 md:p-8 flex flex-col cursor-default transition-colors duration-300 ${
              activeIndex === index
                ? "bg-[#eaeaea] md:bg-transparent"
                : "bg-transparent"
            } ${
              index !== services.length - 1 ? "border-b-2 border-white" : ""
            }`}
          >
            {activeIndex === index && (
              <motion.div
                layoutId="active-indicator"
                className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-[#F02F24] rounded-r-sm z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <h3 className="text-[#F02F24] font-bold uppercase tracking-wide text-sm md:text-sm lg:text-lg mb-2 z-10">
              {service.title}
            </h3>
            <p className="text-gray-900 font-medium text-base md:text-[1.1rem] lg:text-lg z-10">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <button
        type="button"
        className="bg-[#F02F24] text-white px-10 py-4 lg:py-5 rounded-[14px] font-bold text-[1.05rem] cursor-pointer shadow-md shadow-red-500/20 hover:bg-[#000] transition-colors"
      >
        Book a Free Discovery Call
      </button>
    </section>
  );
}
