"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import { useContext, useRef, useState } from "react";

const Navbar = () => {
  const { textColor, setTextColor, setOpaque } = useContext(GlobalContext);
  const [animationKey, setAnimationKey] = useState("");

  const transitionRef = useRef(null);

  // const animateScrollToBottom = () => {
  //   const scrollToBottom = () => {
  //     const currentPosition = window.scrollY || window.pageYOffset;
  //     const targetPosition = document.body.scrollHeight;
  //     const distance = targetPosition - currentPosition;
  //     const duration = 2000; // Adjust the duration as needed

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
    setTextColor("text-[#090908]");
    setAnimationKey(animationKey === "emma" ? "emma-reversed" : "emma");
    setOpaque(false);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 800);
    setTimeout(() => {
      setOpaque(true);
    }, 1000);
  };
  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };
  return (
    <>
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
            <li className="block lg:hidden">
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

            <li className="hidden lg:block">
              <button
                onClick={handleScrollToContact}
                className="text-[.9em] md:text-[1.17em] bg-none flex items-center gap-2 group contactBtn"
                title="contact me"
              >
                Contact
              </button>
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
            <li className="hidden lg:block">
              <Link
                className="text-[.9em] md:text-[1.17em] bg-none flex items-center gap-2 group"
                href={"/resume.pdf"}
              >
                Résumé
                <span className="aria-hidden transition-[transform,color] duration-500 ease-in-out transform group-hover:text-lemon group-hover:-translate-y-1">
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
              </Link>
            </li>
          </ul>
        </nav>
      </m.header>
      <AnimatePresence>
        <m.div
          key={animationKey}
          ref={transitionRef}
          id="pageT"
          initial={{
            top: "100vh",
          }}
          animate={{
            top:
              animationKey === ""
                ? "100vh"
                : animationKey === "emma"
                ? "-100vh"
                : "-100vh",
          }}
          exit={{
            top: "-100vh",
          }}
          transition={{
            duration: 2,
          }}
          className="h-screen w-screen bg-offWhite fixed z-[9999] top-0 left-0"
        ></m.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
