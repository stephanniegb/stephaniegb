"use client";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { motion as m } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Reveal = ({ children }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });
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
    <m.div
      initial="hidden"
      animate={isInView && "visible"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      ref={ref}
    >
      {children}
    </m.div>
  );
};

export default Reveal;
