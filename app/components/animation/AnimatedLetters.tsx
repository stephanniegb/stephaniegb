import { useRef } from "react";
import { inView, motion as m, useInView } from "framer-motion";

type Props = {
  word: string;
};
const AnimatedLetters = ({ word }: Props) => {
  const wordRef = useRef(null);
  const isInView = useInView(wordRef, { once: false });
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <span ref={wordRef} className="inline-block">
      <m.span
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
        transition={transition}
        className="inline-block"
      >
        {word}
      </m.span>
    </span>
  );
};

export default AnimatedLetters;
