import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".5 1", "1 1"],
  });

  const fontSizeProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vw", "10vw"]
  );
  const leftTranslateProgress = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["2", "1"]
  );

  return (
    // <div
    //
    //   className="h-[200vh] w-screen z-[1]  relative bg-offWhite"
    // >
    //   <m.div className="h-screen sticky top-[1rem]  text-brown grid items-center w-full my-0 mx-auto overflow-hidden   ">
    <div className=" z-[1] h-screen  relative bg-offWhite" ref={containerRef}>
      <div className="h-[50vh] grid items-center sticky top-[25vh] overflow-hidden">
        <m.h2
          style={{
            fontSize: fontSizeProgress,
            scale: leftTranslateProgress,
          }}
          className="text-center    h-fit text-brown    uppercase font-semibold"
        >
          Experience
        </m.h2>
      </div>
    </div>
    //   </m.div>
    // </div>
    // <div
    //   className="h-screen w-screen z-[1] grid relative  bg-offWhite"
    //
    // >
    //   <m.h2 className="text-center h-fit sticky bg-black top-[500px] z-10 text-brown text-[10vw] w-fit my-0 mx-auto scale-[2]   uppercase font-semibold">
    //     Experience
    //   </m.h2>
    // </div>
  );
};

export default Header;
