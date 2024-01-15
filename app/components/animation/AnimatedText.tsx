import { motion as m, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
type Props = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};
const AnimatedText = ({
  text,
  className,
  el: Wrapper = "p",
  once = false,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <m.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ ...transition, staggerChildren: 0.1 }}
        className="aria-hidden"
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((char, index) => (
              <m.span
                key={index + char}
                className="inline-block"
                variants={variants}
              >
                {char}
              </m.span>
            ))}
            {text.split(" ").length > 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </m.span>
    </Wrapper>
  );
};

export default AnimatedText;
