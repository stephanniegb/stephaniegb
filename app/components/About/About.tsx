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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {

  //           setIsSticky(true);
  //         } else {
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0,
  //     }
  //   );
  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }
  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadiusProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "50px"]
  );
  const topProgress = useTransform(scrollYProgress, [0, 5], ["1px", "20px"]);
  const text1Animation = useTransform(scrollYProgress, [0, 0.2], [0, -200]);
  const text2Animation = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [10, 0, -1000]
  );
  const text3Animation = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    [20, 0, -1000]
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
        // animate={isSticky ? "sticky" : "nonSticky"}
        ref={targetRef}
        className="h-[100vh] w-full bg-red-500 grid grid-cols-2 place-content-center"
      >
        <div className=""></div>
        <m.div className="leading-[0]">
          <h2>Stephanie Egbuonu</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eos labore aliquam laborum doloribus atque quod harum, delectus in
            quisquam, animi temporibus exercitationem ut! Nemo a earum aliquid
            commodi atque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            eos labore aliquam laborum doloribus atque quod harum, delectus in
            quisquam, animi temporibus exercitationem ut! Nemo a earum aliquid
            commodi atque!
          </p>
          {/* <m.h2 style={{ y: text1Animation }}>Hello There! </m.h2> */}

          {/* <m.div style={{ y: text2Animation }}>
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
          <m.div style={{ y: text3Animation }}>
            <h2>I Also</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos labore aliquam laborum doloribus atque quod harum,
              delectus in quisquam, animi temporibus exercitationem ut! Nemo a
              earum aliquid commodi atque!
            </p>
          </m.div> */}
        </m.div>
      </m.div>
    </div>
  );
};

export default About;
