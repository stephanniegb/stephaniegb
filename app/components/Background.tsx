import { useRef } from "react";
import Experience from "./experience/Experience";
import Work from "./work/Work";
import { motion as m, useScroll, useTransform } from "framer-motion";

const Background = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".5 1", ".56 1"],
  });
  const backgroundColorProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["#fcfaf8", "#000000"]
  );

  const textColorProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000000", "#94948f"]
  );
  return (
    <>
      <m.div
        style={{
          color: textColorProgress,
          backgroundColor: backgroundColorProgress,
        }}
        ref={containerRef}
        className="z-[1] relative"
      >
        <Experience />
        <Work />
      </m.div>

      <svg
        className="z-[1] relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Background;
