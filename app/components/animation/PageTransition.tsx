import { motion as m } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 1,
        backgroundColor: "red",
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
      <div className="h-screen w-screen bg-slate-600 fixed z-[9999]"></div>
    </m.div>
  );
};

export default PageTransition;
