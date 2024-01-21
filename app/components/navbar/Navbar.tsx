"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { textColor, setTextColor } = useContext(GlobalContext);
  // const animateScrollToBottom = () => {
  //   const scrollToBottom = () => {
  //     const currentPosition = window.scrollY || window.pageYOffset;
  //     const targetPosition = document.body.scrollHeight;
  //     const distance = targetPosition - currentPosition;
  //     const duration = 1000; // Adjust the duration as needed

  //     let startTime: number;

  //     const animation = (currentTime: number) => {
  //       if (!startTime) {
  //         startTime = currentTime;
  //       }

  //       const progress = (currentTime - startTime) / duration;
  //       const easeInOutCubic =
  //         progress < 0.5
  //           ? 4 * progress ** 3
  //           : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Easing function (you can use a different one)

  //       window.scrollTo(0, currentPosition + distance * easeInOutCubic);

  //       if (progress < 1) {
  //         window.requestAnimationFrame(animation);
  //       }
  //     };

  //     window.requestAnimationFrame(animation);
  //   };

  //   scrollToBottom();
  // };
  // const handleScrollToContact: () => void = () => {
  //   animateScrollToBottom();
  // };
  const handleScrollToContact: () => void = () => {
    window.scrollTo(0, document.body.scrollHeight);
    setTextColor("text-[#090908]");
  };
  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };
  return (
    <m.header
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      variants={variants}
      className={`fixed bg-transparent  top-0 flex justify-between items-center w-screen z-[4] px-[.8rem]  md:px-[2rem] py-4  md:py-[.2rem] transition-[color] duration-500 ease-in-out ${textColor}`}
    >
      <Link href={"/"}>
        <span className="font-cursive transition-[color] duration-500 ease-in-out hover:text-lemon text-[1.5em] md:text-[2em]">
          stephani.egb
        </span>
      </Link>
      <nav>
        <ul className="flex font-thin gap-4 md:gap-8">
          <li>
            <Link
              className="text-[.9em]  md:text-[1.17em] resumeLink"
              href={"/Stephanie Egbuonu's Resume.pdf"}
            >
              Resume
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="1.2em"
              viewBox="0 0 200 50"
              className="navSwiggly"
            >
              <path
                d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
                fill="none"
                stroke="#03730B"
                strokeWidth="3"
              />
            </svg>
          </li>
          <li>
            <button
              onClick={handleScrollToContact}
              className="text-[.9em] md:text-[1.17em] bg-none flex items-center gap-2 group"
              title="contact me"
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
            </button>
          </li>
        </ul>
      </nav>
    </m.header>
  );
};

export default Navbar;
