import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Translate = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.5 1", "1 0"],
  });

  const rightTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"]
  );
  const leftTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  return (
    <div
      ref={containerRef}
      className="h-screen pt-10 z-[1] relative  bg-[#fcfaf8]"
    >
      <h2 className="sticky top-[25%]">
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
      </h2>
    </div>
  );
};

export default Translate;
