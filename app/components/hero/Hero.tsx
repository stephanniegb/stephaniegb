"use client";
import { useEffect, useRef, useState, useContext } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import GlobalContext from "@/app/context/GlobalContext";
import DownArrow from "@/svg/DownArrow";
import World from "@/svg/World";

const Hero = () => {
  const [canScroll, setCanScroll] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // document.body.style.overflow = "hidden";
  }, []);

  const { setTextColor } = useContext(GlobalContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor("text-[#d0d0c5]");
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
      className="grid bg-black  z-[1] text-[#d0d0c5]   relative overflow-hidden"
    >
      <div className="w-screen h-seventy relative grid place-content-center p-4">
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
            className="text-[1.1em] font-thin md:text-pFS inline-block"
          >
            Front End Software Engineer
          </m.span>
        </h1>
        <m.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 2,
          }}
          className="font-thin flex items-center justify-end gap-3  text-end text-[.8em] absolute bottom-0 right-0 z-10 sm:w-[80%] md:w-[50vw] lg:w-[30vw] px-4 py-10 "
        >
          <span className="inline-block">
            Currently available for freelance jobs worldwide{" "}
          </span>
          <span className="text-lemon  h-[25px] pr-2 inline-block">
            <World />
          </span>
        </m.p>
        <m.div
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 2.1,
          }}
          className="absolute -bottom-20 z-10 p-4 text-[#090908] flex flex-col gap-2"
        >
          <span className="animate-bounce inline-block">
            <DownArrow />
          </span>
          <span className="uppercase text-[.8em]">scroll</span>
        </m.div>
      </div>

      <m.div
        className="w-full flex flex-col gap-4"
        initial={{
          y: "-50vh",
        }}
        animate={{
          y: 0,
        }}
        transition={transition}
      >
        <m.div
          onAnimationComplete={() => setCanScroll(true)}
          initial={{
            width: "clamp(13rem, 20vmax, 18.7rem)",
            height: "clamp(18rem, 22vmax, 25rem)",
          }}
          animate={{
            width: "100vw",
            height: "50vh, 50dvh",
          }}
          transition={transition}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className="bg-hero-image  bg-cover bg-bottom my-0 mx-auto"
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
