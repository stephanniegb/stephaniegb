"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import ReavealBlueBg from "../RevealAnimations/ReavealBlueBg";
import SwigglyStroke from "@/svg/SwigglyStroke";
import TextReveal from "../RevealAnimations/TextReveal";
import { motion as m, useScroll, useTransform } from "framer-motion";

const About = () => {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".5 1", ".8 1"],

    // offset: ["start start", "center start"],
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
    <div ref={containerRef} className="h-[300vh] bg-white relative ">
      <m.div
        style={{
          scale: scaleProgress,
          borderRadius: borderRadiusProgress,
          position: "sticky",
          top: topProgress,
        }}
        variants={{
          nonSticky: { position: "relative" },
        }}
        ref={targetRef}
        className="h-[100vh] w-full bg-black grid grid-cols-2 "
      >
        <div className=""></div>
        <m.div className="relative mt-60">
          <m.h2
            style={{
              opacity: text1Animation,
            }}
            className="absolute"
          >
            Hello There!
          </m.h2>
          <m.div
            style={{
              opacity: text2Animation,
              y: textTranslate2Animation,
            }}
            className="absolute "
          >
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
            className="absolute "
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
  );
};

export default About;
