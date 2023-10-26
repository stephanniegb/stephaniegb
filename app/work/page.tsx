"use client";
import { motion as m } from "framer-motion";

const Work = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="bg-black h-screen"
    >
      page
    </m.div>
  );
};

export default Work;
