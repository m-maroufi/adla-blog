import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 w-full py-2 border-border border-b shadow-xs">
      <div className="xl:container mx-auto px-4 flex justify-between items-center ">
        <section className="flex items-center gap-3 md:gap-8 lg:gap-12">
          <Link
            href={"/"}
            className="flex flex-col justify-center items-center max-w-fit"
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
          <nav className="hidden  border-r-2 h-12 sm:flex px-4 md:px-10 items-center border-border ">
            <ul className="flex space-x-1  md:space-x-3">
              <li className="h-full w-full">
                <a href="" className="nav-link">
                  خدمات
                  <ChevronDown strokeWidth={1} size={24} className="pt-2" />
                </a>
              </li>
              <li className="h-full w-full text-nowrap">
                <a href="" className="nav-link">
                  آکادمی حقوقی
                </a>
              </li>
              <li className="h-full w-full">
                <a href="" className="nav-link">
                  بلاگ
                </a>
              </li>
            </ul>
          </nav>
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
            className="flex items-center justify-center md:hidden"
          >
            <AlignJustify />
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
