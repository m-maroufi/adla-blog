"use client";
import { useState } from "react";
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenuHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 z-50 right-0 left-0 w-full py-2 border-border border-b shadow-xs bg-lightBg">
      <div className="xl:container mx-auto px-4 flex justify-between items-center ">
        <section className="flex items-center gap-3 md:gap-8 lg:gap-12">
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center max-w-fit text-nowrap"
          >
            <img
              src={"/images/logo.png"}
              className="w-[80px] md:w-[100px] h-[48px] "
              alt="عدلا - "
            />
            <span className="font-mikhak font-black text-primary text-[10px] sm:text-xs">
              {" "}
              سامانه مشاوره حقوقی
            </span>
          </Link>
          <Navbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
        <section className="flex mr-auto space-x-4">
          <Link href={"/login"} className="btn primary">
            ورود کاربر
          </Link>
          <Link href={"/login"} className="btn accent">
            ورود وکیل
          </Link>
          <button
            type="button"
            onClick={(e) => toggleMenuHandler(e)}
            className="flex items-center justify-center md:hidden cursor-pointer"
          >
            <AlignJustify />
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
