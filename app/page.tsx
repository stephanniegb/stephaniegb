"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion as m, useScroll } from "framer-motion";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Wave from "@/svg/Wave";
import PseudoLoader from "./components/loader/PseudoLoader";
import GlobalContext from "./context/GlobalContext";

export default function Home() {
  const { opaque } = useContext(GlobalContext);
  const [loader, setLoader] = useState(true);
  const grandParentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: grandParentRef,
    offset: ["0 1", "1 1"],
  });

  const handleBeforeUnload: () => void = () => {
    document.body.style.display = "none";
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(false);
    }, 3000);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative">
      {loader ? (
        <PseudoLoader />
      ) : (
        <>
          <Cursor />
          <Navbar />
          <m.div
            className={`${
              opaque ? "opacity-100" : "opacity-0"
            } transition-[opacity] duration-1000
             relative z-[1]`}
            ref={grandParentRef}
          >
            <div className="bg-noise-bg bg-offWhite">
              <Hero />
              <About />
              <Experience />
              <Work />
            </div>
            <Wave />
            <Footer scrollYProgress={scrollYProgress} />
          </m.div>
        </>
      )}
    </main>
  );
}
