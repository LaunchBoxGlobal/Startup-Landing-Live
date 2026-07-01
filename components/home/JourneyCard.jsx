import Image from "next/image";
import React from "react";
// idea-icon

const JOURNEY = [
  {
    title: "Idea",
    icon: "/idea-icon.png",
    width: 24,
    height: 28,
  },
  {
    title: "Funding",
    icon: "/funding-icon.png",
    width: 30,
    height: 28,
  },
  {
    title: "Product",
    icon: "/product-icon.png",
    width: 22,
    height: 28,
  },
  {
    title: "Development",
    icon: "/development-icon.png",
    width: 32,
    height: 28,
  },
  {
    title: "Launch",
    icon: "/launch-icon.png",
    width: 23,
    height: 24,
  },
];

const JourneyCard = () => {
  return (
    <div className="bg-[#FAF6F4] rounded-[24px] p-8 border border-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] w-full">
      <div className="flex justify-between relative mt-2 mb-6">
        <div className="w-full border border-[#FF0000] border-dashed absolute inset-x-0 top-[30%]" />
        {JOURNEY.map((j, ind) => {
          return (
            <div
              key={j.title}
              className={`flex flex-col items-center gap-3 relative group ${ind === JOURNEY.length - 1 && "-right-1"}`}
            >
              <div className="w-[55px] h-[55px] rounded-full bg-[#E9E9E9] flex items-center justify-center text-gray-600">
                <Image
                  src={j.icon}
                  alt={j.title}
                  width={j.width}
                  height={j.height}
                  className="
    brightness-0
    transition-all duration-300
    group-hover:sepia
    group-hover:saturate-[7500%]
    group-hover:hue-rotate-[330deg]
    group-hover:brightness-100
  "
                />
              </div>
              <span className="text-[18px] font-medium text-gray-700">
                {j.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="text-center font-bold text-[20px] text-gray-800 mt-8">
        We Help you go from development to launch -{" "}
        <span className="red-text">Faster</span>
      </div>
    </div>
  );
};

export default JourneyCard;
