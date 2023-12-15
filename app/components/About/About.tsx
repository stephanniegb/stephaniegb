"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import SwigglyStroke from "@/svg/SwigglyStroke";
import TextReveal from "../RevealAnimations/TextReveal";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

const About = () => {
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
  const topProgress = useTransform(scrollYProgress, [0, 1], ["1px", "20px"]);

  const text1Animation = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const text2Animation = useTransform(
    scrollYProgress,
    [0.2, 0.6, 0.8],
    [0, 1, 0]
  );
  const text3Animation = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const textTranslate2Animation = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [100, 0]
  );
  const textTranslate3Animation = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    [100, 0]
  );

  return (
    <div
      style={{}}
      ref={containerRef}
      className="h-[300vh] bg-[#f6f1eb] relative"
    >
      <m.div
        style={{
          scale: scaleProgress,
          borderRadius: borderRadiusProgress,
          position: "sticky",
          top: topProgress,
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
              borderTopLeftRadius: borderRadiusProgress,
              borderBottomLeftRadius: borderRadiusProgress,
            }}
            className=" object-cover w-full h-full filter grayscale"
            src="/IMG_7682 2.JPG"
            alt="stephanie smiling"
          />
        </m.div>
        <m.div className="relative flex-1 mt-60 px-32">
          <m.h2
            style={{
              opacity: text1Animation,
            }}
            className="absolute font-cursive text-[7vw] text-center  text-7xl"
          >
            Hello There!
          </m.h2>
          <m.div
            style={{
              opacity: text2Animation,
              y: textTranslate2Animation,
            }}
            className="absolute left-0 px-[5vw]"
          >
            <span>I'm</span>
            <h2>Stephanie Egbuonu</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
          </m.div>
          <m.div
            style={{
              opacity: text3Animation,
              y: textTranslate3Animation,
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
        </m.div>
      </m.div>
    </div>
    // <div ref={containerRef} className="h-[300vh] bg-[#f6f1eb] relative ">
    // <m.div
    //   style={{
    //     scale: scaleProgress,
    //     borderRadius: borderRadiusProgress,
    //     position: "sticky",
    //     top: topProgress,
    //   }}
    //   variants={{
    //     nonSticky: { position: "relative" },
    //   }}
    //   ref={targetRef}
    //   className="h-[100vh] w-full bg-black grid grid-cols-2 gap-8 p-8"
    // >
    //     <div className="border-[1px] border-solid border-red-700 rounded-[15px]">
    //       <img
    //         className="rounded-[15px]"
    //         src="/IMG_7682 2.JPG"
    //         alt="stephanie smiling"
    //       />
    //     </div>
    // <m.div className="relative mt-60">
    //   <m.h2
    //     style={{
    //       opacity: text1Animation,
    //     }}
    //     className="absolute text-7xl"
    //   >
    //     Hello There!
    //   </m.h2>
    //   <m.div
    //     style={{
    //       opacity: text2Animation,
    //       y: textTranslate2Animation,
    //     }}
    //     className="absolute "
    //   >
    //     <span>I'm</span>
    //     <h2>Stephanie Egbuonu</h2>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //       Distinctio eos labore aliquam laborum doloribus atque quod harum,
    //       delectus in quisquam, animi temporibus exercitationem ut! Nemo a
    //       earum aliquid commodi atque!
    //     </p>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //       Distinctio eos labore aliquam laborum doloribus atque quod harum,
    //       delectus in quisquam, animi temporibus exercitationem ut! Nemo a
    //       earum aliquid commodi atque!
    //     </p>
    //   </m.div>
    //   <m.div
    //     style={{
    //       opacity: text3Animation,
    //       y: textTranslate3Animation,
    //     }}
    //     className="absolute "
    //   >
    //     <h2>I Also</h2>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //       Distinctio eos labore aliquam laborum doloribus atque quod harum,
    //       delectus in quisquam, animi temporibus exercitationem ut! Nemo a
    //       earum aliquid commodi atque!
    //     </p>
    //   </m.div>
    //     </m.div>
    //   </m.div>
    // </div>
  );
};

export default About;
