import { useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
const Loader = () => {
  const loaderRef = useRef(null);

  // useEffect(() => {
  //   const el = loaderRef.current;
  //   gsap.fromTo(
  //     el,
  //     {
  //       opacity: 1,
  //       duration: 5,
  //     },
  //     {
  //       opacity: 0,
  //       duration: 5,
  //     }
  //   );
  // }, []);

  return (
    <m.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className="absolute z-10 bg-white h-screen w-screen grid place-content-center"
    >
      <m.h2
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="absolute top-[50%] left-[45%] z-10"
      >
        Hello
      </m.h2>

      <m.div
        initial={{ opacity: 0, scale: 0, borderRadius: "50%" }}
        animate={{ opacity: 1, scale: 1, borderRadius: "50%" }}
        transition={{
          duration: 0.5,
        }}
        className=" w-[100vmax] h-[100vmax] bg-black  rounded-full grid place-content-center"
      ></m.div>
    </m.section>
  );
};

export default Loader;
