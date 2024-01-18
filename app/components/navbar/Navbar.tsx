"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

const variants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};
const Navbar = () => {
  const { textColor } = useContext(GlobalContext);

  return (
    <m.header
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      variants={variants}
      className={`fixed bg-transparent  top-0 flex justify-between items-center w-screen z-[4] px-[.8rem]  md:px-[2rem] py-4  md:py-[.2rem] transition-[color] duration-500 ease-in-out ${textColor}`}
    >
      <Link href={"/"}>
        <span className="font-cursive text-[1.5em] md:text-[2em]">
          stephani.egb
        </span>
      </Link>
      <nav>
        <ul className="flex gap-6 md:gap-8">
          <li>
            <Link className="text-[.9em] md:text-[1.17em]" href={"/resume"}>
              Resume
            </Link>
          </li>
          <li>
            <a
              className="text-[.9em] md:text-[1.17em] flex items-center gap-2 group"
              href={"#footer"}
            >
              Contact
              <span className="transition-[transform,color] duration-500 ease-in-out transform group-hover:text-lemon group-hover:-translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M196 64v104a4 4 0 0 1-8 0V73.66L66.83 194.83a4 4 0 0 1-5.66-5.66L182.34 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4"
                  />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </m.header>
  );
};

export default Navbar;
