import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";
import { NAV_LINKS } from "../../constants/nav-links";

const Sidebar = ({ onclose, scrollToSection, openModal }) => {
  const navigate = useRouter();

  const handleNavigate = (url) => {
    navigate.push(url);
    onclose();
  };

  return (
    <div
      className={`w-full md:w-1/2 lg:w-[35%] h-full bg-white px-6 float-end shadow-xl overflow-y-scroll`}
    >
      <div className="w-full flex items-start justify-center pt-3">
        <Link
          href={"/"}
          className="rounded-[17px] bg-white block mt-1 w-full border-[#CECEEA] h-[50px] 2xl:h-[60px]"
        >
          <Image
            src={`/logo02.png`}
            width={180}
            height={45.73}
            alt="launchbox global logo"
            className="w-[188px] h-[35px] block"
          />
        </Link>
        <button
          type="button"
          onClick={() => onclose()}
          className="w-8 h-8 bg-gray-200 rounded-lg p-1 mt-1.5"
        >
          <IoClose className="w-full h-full red-text" />
        </button>
      </div>

      <ul className="flex border-t flex-col items-start w-full justify-center gap-2 py-5">
        {NAV_LINKS?.map((nv) => {
          return (
            <li key={nv?.id}>
              <button
                type="button"
                onClick={() => {
                  scrollToSection(nv?.id);
                  onclose();
                }}
                className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
              >
                {nv?.title}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={() => handleNavigate("/get-in-touch")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Get In Touch
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              openModal();
              onclose();
            }}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Book a Free Discovery Call
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
