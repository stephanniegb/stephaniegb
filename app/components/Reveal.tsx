"use client";
import { useEffect, useState, useRef } from "react";
import { motion as m, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
}
const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const Reveal = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      setIsOpen(true);
      console.log(isInview);
    }
    return () => {};
  }, [isInview]);
  return (
    <div ref={ref}>
      <m.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.75 }}
      >
        {children}
      </m.div>
    </div>
  );
};

export default Reveal;
