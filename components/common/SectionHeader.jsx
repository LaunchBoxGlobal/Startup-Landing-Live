import React from "react";

const SectionHeader = ({ pill, title, redTitle, description, className }) => {
  return (
    <div className={`w-full relative overflow-hidden z-20 ${className}`}>
      {pill && (
        <p className="red-text font-medium tracking-widest uppercase text-lg md:text-xl lg:text-2xl xl:text-[32px] mb-5">
          Sound Familiar?
        </p>
      )}
      <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#111111] tracking-tight leading-[1]">
        {title} {redTitle && <span className="text-[#ea2b2b]">{redTitle}</span>}
      </h2>
      {description && (
        <p className="text-gray-400 font-light leading-[1.2] text-lg md:text-xl xl:text-[24px] md:max-w-[75%] mt-5">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
