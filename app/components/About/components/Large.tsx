"use client";
import { useEffect, useRef, useContext } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Hello from "@/svg/Hello";
import AnimatedLetters from "../../animation/AnimatedLetters";
import CursorContext from "@/app/context/CursorContext";

const Large = () => {
  const { cursor, setCursorText } = useContext(CursorContext);

  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".5 1", ".8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadiusProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "50px"]
  );
  const imageOpacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const topProgress = useTransform(scrollYProgress, [0, 1], ["1px", "20px"]);

  /* Hello there animation */
  const textXAnimation = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["-40%", "0%"]
  );
  const textYAnimation = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0vw", "-10vw"]
  );
  const fontSizeProgress = useTransform(
    scrollYProgress,
    [0, 0.3],
    [`7vw`, `5vw`]
  );

  const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.6, 0.8],
    [0, 1, 0]
  );
  const contactOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const text3Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const text2TranslateY = useTransform(scrollYProgress, [0.2, 0.8], [100, 0]);
  const text3TranslateY = useTransform(scrollYProgress, [0.8, 1.0], [100, 0]);

  // useEffect(() => {
  //   const handleMouseText = ({ text }: { text: string }) => {
  //     setCursorText(text);
  //   };
  //   const handleMouseLeave = () => {
  //     setCursorText("");
  //   };
  //   containerRef.current.addEventListener(
  //     "mouseenter",

  //     handleMouseText({ text: "Scroll" })
  //   );
  //   // containerRef.current.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     containerRef.current.removeEventListener("mouseenter", handleMouseText);
  //     containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] lg:pb-64 text-[#ececdf]  z-[1] bg-[#d9d9d9] bg-noise-bg relative"
    >
      <m.div
        id="about"
        style={{
          scale: scaleProgress,
          borderRadius: borderRadiusProgress,
          position: "sticky",
          top: topProgress,
          cursor: "none",
        }}
        ref={targetRef}
        className="h-[100vh] w-full bg-black flex relative"
      >
        <m.div
          style={{
            borderRadius: borderRadiusProgress,
          }}
          className="flex-1 shadow-lg bg-black"
        >
          <m.img
            style={{
              opacity: imageOpacityProgress,
              borderTopLeftRadius: borderRadiusProgress,
              borderBottomLeftRadius: borderRadiusProgress,
            }}
            className=" object-cover w-full h-full"
            src="/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg"
            alt="stephanie smiling"
          />
        </m.div>
        <div className="basis-[60%] relative  py-[7vw] ">
          <m.p
            style={{
              // y: textYAnimation,
              // x: textXAnimation,
              opacity: text1Opacity,
              fontSize: fontSizeProgress,
            }}
            className="w-fit h-fit px-[5vw]"
          >
            <AnimatedLetters word="Hello There!" />
          </m.p>
          <m.div
            style={{
              opacity: text2Opacity,
              // y: text2TranslateY,
            }}
            className="absolute flex flex-col left-0 px-[5vw]"
          >
            <span>I'm</span>
            <h2>Stephanie Egbuonu</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
            <p className="mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
          </m.div>
          <m.div
            style={{
              opacity: text3Opacity,
              y: text3TranslateY,
            }}
            className="absolute left-0 px-[5vw] "
          >
            <h2>I Also</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
          </m.div>

          <m.div
            style={{
              opacity: contactOpacity,
            }}
            className="fixed bottom-0   p-12"
          >
            <a className="flex items-center gap-2" href="mailto:">
              <span className="p-2 rounded-full bg-offWhite text-brown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7z"
                  />
                </svg>
              </span>

              <span className="underline">contact me</span>
            </a>
          </m.div>
        </div>
      </m.div>
    </div>
  );
};

export default Large;
