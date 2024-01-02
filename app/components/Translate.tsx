import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Translate = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  const rightTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const leftTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  return (
    <div
      ref={containerRef}
      className="h-[100vh] pt-10 z-[1] relative  bg-[#fcfaf8]"
    >
      <div className="sticky top-[25%]">
        <h2 className="text-[9vw] text-[#fcfaf8] absolute z-[2]">
          Creative Developer
        </h2>
        <m.div
          style={{
            translateX: rightTranslateProgress,
          }}
          className="absolute z-[1] top-0 bg-black w-[300px] h-[300px]"
        ></m.div>
      </div>
      {/* <h2 className="sticky top-[25%]">
        <m.span
          style={{
            translateX: rightTranslateProgress,
          }}
          className="block w-fit my-0 mx-auto"
        >
          SOMETHING - HUGE I LOVE
        </m.span>
        <m.span
          style={{
            translateX: leftTranslateProgress,
          }}
          className="block w-fit my-0 mx-auto"
        >
          THAT TRANSLATES - ON SCROLL
        </m.span>
      </h2> */}
    </div>
  );
};

export default Translate;
