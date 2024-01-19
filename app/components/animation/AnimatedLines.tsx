import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};
const AnimatedLines = ({
  el: Wrapper = "p",
  text,
  className,
  once = true,
}: Props) => {
  const sentenceContainerRef = useRef(null);
  const isInView = useInView(sentenceContainerRef, { amount: 0.5, once: once });

  return (
    <Wrapper
      ref={sentenceContainerRef}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(2vw)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={className}
    >
      {text}
    </Wrapper>
  );
};

export default AnimatedLines;
