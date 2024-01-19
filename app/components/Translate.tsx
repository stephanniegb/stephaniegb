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
      className="h-[50vh] grid place-content-center pt-10 z-[1] relative  bg-offWhite"
    >
      <div className="relative w-screen h-[30vh]">
        {/*text-[#fcfaf8]  */}
        <h2 className=" text-[8vw] text-[#fcfaf8] text-center absolute z-[2]">
          CREATIVE . INNOVATIVE
        </h2>
        <m.div
          style={{
            translateX: rightTranslateProgress,
          }}
          className="absolute z-[1] top-0 bg-black w-[50vw] h-[30vh]"
        ></m.div>
      </div>
    </div>
  );
};

export default Translate;
