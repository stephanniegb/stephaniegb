import { useEffect, useRef, useState } from "react";
import { motion as m, useInView } from "framer-motion";

type Props = {
  word: string;
};
const AnimatedLetters = ({ word }: Props) => {
  const wordRef = useRef(null);
  const isInView = useInView(wordRef, { once: false });
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    const chars = word.split("");
    setCharacters(chars);
  }, []);

  return (
    <span ref={wordRef} className="inline-block">
      {characters &&
        characters.map((char, idx) => (
          <m.span
            style={{
              transform: isInView ? "none" : "translateY(4vw)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                0.1 * idx
              }s`,
            }}
            className="inline-block"
            key={idx}
          >
            {char}
          </m.span>
        ))}
    </span>
  );
};

export default AnimatedLetters;
