"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Navbar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose(); // اگه بیرون کلیک شد، منو بسته بشه
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <nav
      className={`fixed top-0 right-0 border-r-0 h-screen w-full md:static md:border-r-2 md:h-12 sm:flex p-0 md:px-10 items-center border-border bg-gray-900/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
      }`}
    >
      <ul
        ref={menuRef}
        className={`main-menu block md:flex flex-col md:flex-row bg-lightBg h-screen w-3xs md:max-w-full md:h-full
        transition-all duration-500 ease-in-out delay-300 relative
        ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-70 translate-x-full md:opacity-100 translate-none"
        }
        shadow-lg md:shadow-none`}
      >
        <li className="md:hidden  w-full text-nowrap h-26 flex items-center justify-center md:justify-start">
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center w-full md:max-w-fit text-center"
          >
            <img
              src={"/images/logo.png"}
              className="w-[100px] md:w-[100px] h-[48px] "
              alt="عدلا - "
            />
            <span className="font-mikhak font-black text-primary text-[14px] sm:text-xs text-nowrap">
              {" "}
              سامانه مشاوره حقوقی
            </span>
          </Link>
        </li>
        <li className=" w-full relative group">
          <a href="" className="nav-link hidden md:flex items-center">
            خدمات
            <ChevronDown strokeWidth={1} size={24} className="pt-2" />
          </a>
          <ul className="dropdown max-w-xs w-full static md:absolute top-full right-0 bg-lightBg md:shadow-md md:w-xs md:border py-0 md:py-6 border-border overflow-hidden md:rounded-lg md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible md:invisible transition-all duration-300 ease-in-out ">
            <li className="md:hidden">
              <a href="/" className="nav-link px-6">
                صفحه نخست
              </a>
            </li>
            <li>
              <a href="" className="nav-link px-6">
                شبکه مشاوره وکلا
              </a>
            </li>
            <li>
              <a href="" className="nav-link px-6">
                تنظیم اوراق قضایی
              </a>
            </li>
            <li>
              <a href="" className="nav-link px-6">
                تلفنی بپرس
              </a>
            </li>
            <li>
              <a href="" className="nav-link px-6">
                ثبت پرونده وکالت
              </a>
            </li>
          </ul>
        </li>
        <li className=" w-full text-nowrap">
          <a href="/" className="nav-link px-6 md:px-2">
            آکادمی حقوقی
          </a>
        </li>
        <li className=" w-full">
          <a href="/blog" className="nav-link px-6 md:px-2">
            بلاگ
          </a>
        </li>
        <li className=" absolute md:hidden h-26 border-t border-border bottom-0 gap-4 pb-6 flex items-center justify-center w-full">
          <Link href={"/login"} className="btn primary text-lg md:text-xs">
            ورود کاربر
          </Link>
          <Link href={"/login"} className="btn accent text-lg md:text-xs">
            ورود وکیل
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
