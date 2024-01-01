"use client";
import { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.5 1", "1 0"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
    delay: 1,
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="grid bg-black z-[1] py-8 relative overflow-hidden"
    >
      <div className="w-screen h-[70vh] grid place-content-center">
        <h1>
          <m.span
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1.5,
            }}
            className="text-[8vw] text-center font-serif flex flex-col"
          >
            Stephanie Egbuonu
          </m.span>

          <m.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1.9,
            }}
            className="text-pFS inline-block"
          >
            Front End Software Engineer
          </m.span>
        </h1>
      </div>
      <m.div
        className="w-full"
        initial={{
          y: "-110%",
        }}
        animate={{
          y: 0,
        }}
        transition={transition}
      >
        <m.div
          initial={{
            width: "clamp(13rem, 20vmax, 18.7rem)",
            height: "clamp(18rem, 22vmax, 25rem)",
          }}
          animate={{
            width: "100vw",
            height: "50vh",
          }}
          transition={transition}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className="bg-hero-image  bg-cover bg-center my-0 mx-auto"
        ></m.div>
        <div>
          <m.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
            className="text-[.75rem] w-fit block my-0 mx-auto"
            style={{
              width: "clamp(13rem, 20vmax, 18.7rem)",
            }}
          >
            stephani.egb
          </m.span>
        </div>
      </m.div>
    </section>
  );
};

export default Hero;
