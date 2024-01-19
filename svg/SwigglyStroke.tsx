import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";
const SwigglyStroke = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { strokeDashoffset: 900 },
    visible: { strokeDashoffset: 0 },
  };
  const transition = {
    duration: 4,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  return (
    <m.svg
      ref={ref}
      style={{
        strokeDasharray: 900,
      }}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="50"
      viewBox="0 0 200 50"
    >
      <path
        // id="Hello there!"
        d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
      />
    </m.svg>
  );
};

export default SwigglyStroke;
