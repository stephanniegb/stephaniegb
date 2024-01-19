"use client";
import { useEffect, useRef, useContext, useState } from "react";
import { motion as m, useInView, useScroll, useTransform } from "framer-motion";
import { GlobalContext } from "@/app/context/GlobalContext";
import SwigglyLine from "@/svg/SwigglyLine";
import DownArrowHead from "@/svg/DownArrowHead";

const Large = () => {
  const { setTextColor } = useContext(GlobalContext);

  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor("text-[#090908]");
          }
        });
      },
      { threshold: 1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 1,
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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

  const fontSizeProgress = useTransform(
    scrollYProgress,
    [0, 0.3],
    [`7vw`, `5vw`]
  );
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
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

  return (
    <div
      id="about"
      ref={containerRef}
      className="h-[300vh] lg:pb-32 text-[#ececdf]  z-[1] bg-[#d9d9d9] bg-noise-bg relative"
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
            className=" object-cover w-full h-full"
            src="/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg"
            alt="stephanie smiling"
          />
        </m.div>
        <div className="basis-[60%] relative  py-[7vw] ">
          <m.div
            style={{
              opacity: lineOpacity,
            }}
          >
            <div className="absolute z-10 top-[clamp(120px,20%,170px)] -left-[23%] ">
              <SwigglyLine />
            </div>
            <m.div
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1,
              }}
              className="absolute z-10 top-[42%] -left-[clamp(100px,16vw,220px)]"
            >
              <DownArrowHead />
              <m.span
                initial={{
                  y: 20,
                }}
                animate={{
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 1.1,
                }}
                className="inline-block"
              >
                <span className="block">Keep scrolling</span>
                <span className="block">Don't stop scrolling!</span>
              </m.span>
            </m.div>
          </m.div>

          <m.p
            style={{
              // y: textYAnimation,
              // x: textXAnimation,
              opacity: text1Opacity,
              fontSize: fontSizeProgress,
            }}
            className="w-fit h-fit font-cursive px-[5vw]"
          >
            Hello There <span className="text-lemon">!</span>
          </m.p>

          <m.div
            style={{
              opacity: text2Opacity,
              // y: text2TranslateY,
            }}
            className="absolute flex flex-col left-0 px-[5vw]"
          >
            <span>I'm</span>
            <h2 className="text-lemon">Stephanie Egbuonu</h2>
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
            <h2 className="text-lemon">I Also</h2>
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
