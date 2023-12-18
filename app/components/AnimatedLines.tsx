import {
  motion as m,
  animate,
  inView,
  useInView,
  stagger,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  sentence: string;
};
const AnimatedLines = ({ sentence }: Props) => {
  const sentenceConatinerRef = useRef(null);
  const sentenceRef = useRef(null);
  const isInView = useInView(sentenceConatinerRef, { once: false });

  return (
    <span
      ref={sentenceConatinerRef}
      className="inline-block overflow-hidden text[2vw]"
    >
      <m.span
        style={{
          transform: isInView ? "none" : "translateY(2vw)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={sentenceRef}
        className="inline-block"
        transition={{
          duration: 0.6,
        }}
      >
        {sentence}
      </m.span>
    </span>
  );
};

export default AnimatedLines;
