import { motion as m, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useRef } from "react";
const SwigglyLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const transition = {
    duration: 3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const variants = {
    hidden: { strokeDashoffset: 1200 },
    visible: { strokeDashoffset: 0 },
  };
  return (
    <m.svg
      ref={ref}
      onAnimationComplete={() => console.log("Done")}
      width={"35vw"}
      // width="clamp(31rem,50vw,45rem)"
      height={"100%"}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      viewBox="0 0 722 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "100%",
        strokeDasharray: 1200,
        strokeDashoffset: 1200,
      }}
    >
      <path
        d="M720 44C720 117 507.356 232.749 271.675 68.1592C35.9949 -96.4308 -5.61532 84.8047 3.03962 193"
        stroke="currentColor"
        strokeWidth="4"
      ></path>
    </m.svg>
  );
};

export default SwigglyLine;
