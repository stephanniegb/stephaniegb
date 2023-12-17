"use client";
import { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

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
  const imageOpacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const topProgress = useTransform(scrollYProgress, [0, 1], ["1px", "20px"]);
  const center = -innerWidth / 4;
  const textXAnimation = useTransform(scrollYProgress, [0, 0.3], [center, 0]);
  const textYAnimation = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0vw", "-10vw"]
  );
  const fontSizeProgress = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["10vw", "7vw"]
  );

  const text1Animation = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

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
              opacity: imageOpacityProgress,
              borderTopLeftRadius: borderRadiusProgress,
              borderBottomLeftRadius: borderRadiusProgress,
            }}
            className=" object-cover w-full h-full filter grayscale"
            src="/IMG_7682 2.JPG"
            alt="stephanie smiling"
          />
        </m.div>
        <m.div className="relative flex place-content-center flex-1 mt-60 px-32">
          <m.p
            style={{
              top: textYAnimation,
              x: textXAnimation,
              opacity: text1Animation,
              fontSize: fontSizeProgress,
            }}
            className="absolute left-0 px-[5vw] font-cursive"
          >
            Hello There!
          </m.p>
          {/* <p className="absolute left-0 px-[5vw] font-cursive"> Hello There!</p> */}
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
  );
};

export default About;
