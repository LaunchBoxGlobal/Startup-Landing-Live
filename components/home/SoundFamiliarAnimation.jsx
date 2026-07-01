import Image from "next/image";
import React from "react";
import "./style.css";
import SoundFamiliarCard from "./SoundFamiliarCard";

const SoundFamiliarAnimation = () => {
  return (
    <section className="w-full min-h-screen relative padding-x flex flex-col items-center justify-center gap-6 lg:gap-16 py-12 lg:py-20">
      <div className="w-[80vw] h-[80vw] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-red-400/20 blur-3xl" />

      {/* 01 */}
      <SoundFamiliarCard
        num={"01"}
        text={
          "You raised pre-seed or seed funding but have no engineering team yet."
        }
      />

      {/* 02 - 03 */}
      <div className="w-full flex flex-col items-center gap-4 lg:gap-0 lg:flex-row lg:absolute lg:z-30 lg:justify-between lg:items-center lg:top-[21.5%] lg:px-[16%]">
        <SoundFamiliarCard
          num={"02"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
        <SoundFamiliarCard
          num={"03"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
      </div>

      {/* 04 - 05 */}
      <div className="w-full flex flex-col items-center gap-4 lg:gap-0 lg:flex-row lg:absolute lg:z-30 lg:justify-between lg:items-center lg:top-1/2 lg:-translate-y-1/2 lg:px-[2%]">
        <SoundFamiliarCard
          num={"04"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
        <SoundFamiliarCard
          num={"05"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
      </div>

      {/* 06 - 07 */}
      <div className="w-full flex flex-col items-center gap-4 lg:gap-0 lg:flex-row lg:absolute lg:z-30 lg:justify-between lg:items-center lg:bottom-[17%] lg:px-[16%]">
        <SoundFamiliarCard
          num={"06"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
        <SoundFamiliarCard
          num={"07"}
          text={
            "You raised pre-seed or seed funding but have no engineering team yet."
          }
        />
      </div>

      {/* central animation */}
      <div className="w-full md:max-w-[60%] mid-lg:max-w-[650px] h-[203px] md:h-[473px] md:mt-10 relative z-20 mx-auto">
        <Image
          src="/cta-image.webp"
          alt="Call to action illustration"
          width={830}
          height={472}
          loading="lazy"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 830px"
          quality={80}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
          style={{ height: "auto" }}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 spin-tire">
          <Image
            src="/cta-rotating-circle.webp"
            alt="Rotating circle decoration"
            width={383}
            height={383}
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 383px"
            quality={80}
            style={{ height: "auto" }}
          />
        </div>
        <Image
          src={`/launchboxgbloal-logo-cta.webp`}
          alt="launchboxgbloal-logo-cta"
          width={233}
          height={233}
          loading="lazy"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-[70px] md:w-[170px] lg:w-[210px]"
        />
        {/* animated svgs right*/}
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[12%] lg:right-[14%] top-[20%] md:top-[17%] lg:top-[12%] flex items-center justify-center">
          <Image
            src="/animated-check-icon.gif"
            alt="animated-tick-icon"
            width={35}
            height={35}
            sizes="35px"
            quality={80}
            priority={false}
            style={{ height: "auto" }}
            loading="lazy"
          />
        </div>
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[7%] top-[53.6%] lg:top-[56.5%] flex items-center justify-center">
          <Image
            src="/animated-settings-icon.gif"
            alt="animated-settings-icon"
            width={45}
            height={45}
            sizes="45px"
            quality={80}
            priority={false}
            style={{ height: "auto" }}
            loading="lazy"
          />
        </div>
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[20%] lg:right-[20%] bottom-[15%] lg:bottom-[11%] flex items-center justify-center">
          <Image
            src="/animated-shaking-hands.gif"
            alt="animated-shaking-hands"
            width={35}
            height={35}
            sizes="35px"
            quality={80}
            priority={false}
            style={{ height: "auto" }}
            loading="lazy"
          />
        </div>
        {/* animated svgs left*/}
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[13.8%] lg:left-[14.8%] top-[22%] lg:top-[14%] flex items-center justify-center">
          <Image
            src="/bolt-ai-icon.webp"
            alt="bolt ai icon"
            width={35}
            height={35}
            loading="lazy"
          />
        </div>
        {/* animated-settings-icon */}
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[7%] top-[55.7%] lg:top-[59%] flex items-center justify-center">
          <Image
            src="/lovable-icon.webp"
            alt="lovale icon"
            width={35}
            height={35}
            loading="lazy"
          />
        </div>
        <div className="w-[20px] md:w-[50px] h-[20px] md:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[21%] lg:left-[22%] bottom-[19%] md:bottom-[17%] lg:bottom-[11%] flex items-center justify-center">
          <Image
            src="/google-firebase-icon.webp"
            alt="google firebase icon"
            width={30}
            height={30}
            loading="lazy"
          />
        </div>
      </div>

      {/* 08 */}
      <div className="relative top-0 lg:top-10">
        <SoundFamiliarCard
          num={"08"}
          text={
            "You need one accountable team covering product, design, build, and launch."
          }
        />
      </div>
    </section>
  );
};

export default SoundFamiliarAnimation;
