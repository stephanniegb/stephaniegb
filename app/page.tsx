"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as m, useScroll } from "framer-motion";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import { ShaderContextProvider } from "./context/ShaderContext";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import { GlobalContextProvider } from "./context/GlobalContext";
import Wave from "@/svg/Wave";
import PseudoLoader from "./components/loader/PseudoLoader";
import PageTransition from "./components/animation/PageTransition";

export default function Home() {
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
    <main className=" relative">
      <GlobalContextProvider>
        {loader ? (
          <PseudoLoader />
        ) : (
          <>
            <Cursor />
            <Navbar />

            <m.div ref={grandParentRef}>
              <div className="bg-noise-bg  bg-offWhite">
                <Hero />

                <About />
                <ShaderContextProvider>
                  <Experience />
                  <Work />
                </ShaderContextProvider>
              </div>
              <Wave />
              <Footer scrollYProgress={scrollYProgress} />
            </m.div>
          </>
        )}
      </GlobalContextProvider>
    </main>
  );
}
