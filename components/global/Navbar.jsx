"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { NAV_LINKS } from "../../constants/nav-links";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ openModal }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const NAVBAR_HEIGHT = 120;

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
    }
  };

  return (
    <nav
      className={`py-3 md:py-7 flex items-center justify-between gap-2 fixed top-0 z-50 w-full padding-x bg-white lg:bg-transparent shadow-md lg:shadow-none`}
    >
      <button
        type="button"
        onClick={() => scrollToSection("home-hero")}
        className="rounded-[17px] bg-white lg:border border-[#CECEEA] outline-none h-[57px] 2xl:h-[62px] flex items-center justify-center gap-3 lg:px-2.5 xl:px-3.5"
      >
        <Image
          src={`/launchboxglobal-logo.png`}
          width={180}
          height={45}
          alt="launchbox global logo"
          className="block"
        />

        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs font-light leading-none xl:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </button>

      <ul className="hidden lglg:flex items-center justify-center gap-5 xl:gap-x-5 mac:gap-x-10 2xl:gap-7 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[57px] 2xl:h-[62px]">
        {NAV_LINKS?.map((nv) => {
          return (
            <li key={nv?.id}>
              <button
                type="button"
                onClick={() => scrollToSection(nv?.id)}
                className={`font-normal text-sm xl:text-[17px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
              >
                {nv?.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="hidden w-auto lglg:inline-flex items-center justify-end gap-1 bg-[#fff] pr-1 pl-2 rounded-[17px] border border-[#CECEEA] h-[57px] 2xl:h-[62px] py-1">
        <Link
          href={"/get-in-touch"}
          className="bg-white px-3 h-full rounded-[11px] whitespace-nowrap text-black transition-all duration-300 flex items-center justify-center font-medium"
        >
          Get in Touch
        </Link>
        <button
          type="button"
          onClick={() => openModal()}
          className="red-bg px-4 h-full rounded-[11px] whitespace-nowrap text-white hover:bg-black transition-all duration-300 flex items-center justify-center font-medium"
        >
          Book a Free Discovery Call
        </button>
      </div>

      <button
        type="button"
        name="sidebar menu button"
        aria-expanded={openSidebar}
        aria-label={openSidebar ? "Close mobile menu" : "Open mobile menu"}
        onClick={toggleSidebar}
        className="lglg:hidden mr-1"
      >
        <TbMenu2 className="text-2xl text-[#F40E00]" aria-hidden="true" />
      </button>
      <div
        className={`w-full h-screen bg-transparent z-50 fixed inset-0 ${
          openSidebar ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-700 pt-3 bg-transparent`}
      >
        <Sidebar
          onclose={toggleSidebar}
          scrollToSection={scrollToSection}
          openModal={openModal}
        />
      </div>
    </nav>
  );
};

export default Navbar;
