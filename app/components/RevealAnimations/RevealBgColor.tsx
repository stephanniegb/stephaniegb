"use client";
import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  black: { backgroundColor: "#000000" },
  beige: { backgroundColor: "#f6f1eb" },
};
const RevealBgColor = ({ children }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("WORK: black");
          }
          // else {
          //   console.log("WORK: beige");
          // }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <m.section
      initial="beige"
      variants={variants}
      animate={isInView && "black"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
    >
      {children}
    </m.section>
  );
};

export default RevealBgColor;
