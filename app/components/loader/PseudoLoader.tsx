"use client";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";

const PseudoLoader = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 2 : 100
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0 },
  };
  return (
    <AnimatePresence mode="wait">
      <section className="grid bg-black z-[1] h-screen text-[#d0d0c5] relative overflow-hidden">
        <div className="h-screen grid justify-center w-2/5 lg:w-1/5 absolute right-0">
          <m.p
            variants={variants}
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{ delay: 2.7, ...transition }}
            className="text-[20vw] lg:text-[8vw] font-extrabold"
          >
            {progress}
          </m.p>
        </div>
        <div className="w-screen h-seventyVH relative grid place-content-center p-4"></div>

        <div className="w-full flex flex-col transform translate-y-[-50vh] gap-4">
          <m.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={transition}
            style={{
              width: "clamp(13rem, 20vmax, 18.7rem)",
              height: "clamp(18rem, 22vmax, 25rem)",
            }}
            className="bg-hero-image  bg-cover bg-center my-0 mx-auto"
          ></m.div>
          <div>
            <m.span
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.5, ...transition }}
              className="text-[.75rem] opacity-100 w-fit block my-0 mx-auto"
              style={{
                width: "clamp(13rem, 20vmax, 18.7rem)",
              }}
            >
              stephani.egb
            </m.span>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default PseudoLoader;
