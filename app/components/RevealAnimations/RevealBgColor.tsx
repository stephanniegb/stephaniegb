"use client";
import { useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
interface Props {
  children: React.ReactNode;
}

const variants = {
  black: { backgroundColor: "#000000" },
  beige: { backgroundColor: "#f6f1eb" },
};
const RevealBgColor = ({ children }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bgBlack");
          } else {
            entry.target.classList.remove("bgBlack");
          }
        });
      },
      {
        threshold: 0.25,
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
      className="reveal"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
    >
      {children}
    </m.section>
  );
};

export default RevealBgColor;
