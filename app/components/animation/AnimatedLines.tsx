import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  sentence: string;
  className?: string;
};
const AnimatedLines = ({ sentence, className }: Props) => {
  const sentenceContainerRef = useRef(null);

  const isInView = useInView(sentenceContainerRef, { once: false });

  return (
    <span
      style={{
        border: "1px solid red",
      }}
      ref={sentenceContainerRef}
      className={`inline-block overflow-hidden text[2vw] h-fit ${className} p-0`}
    >
      <m.span
        style={{
          transform: isInView ? "none" : "translateY(2vw)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="inline-block"
        transition={{
          duration: 0.5,
        }}
      >
        {sentence}
      </m.span>
    </span>
  );
};

export default AnimatedLines;
