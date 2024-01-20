"use client";
import { useEffect, useRef, useState } from "react";
import { motion as m, useInView, useScroll, useTransform } from "framer-motion";
import Loader from "./components/loader/Loader";
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
import Wave2 from "@/svg/Wave2";

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
    <main className="relative">
      <GlobalContextProvider>
        {loader ? (
          <PseudoLoader />
        ) : (
          <>
            <Cursor />
            <Navbar />
            <m.div ref={grandParentRef}>
              <Hero />
              <About />
              <ShaderContextProvider>
                <Experience />
                <Work />
              </ShaderContextProvider>
              <Wave2 />
              <Footer scrollYProgress={scrollYProgress} />
            </m.div>
          </>
        )}
      </GlobalContextProvider>
    </main>
  );
}
