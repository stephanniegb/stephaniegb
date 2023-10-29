"use client";
import { usePathname } from "next/navigation";
import { motion as m, useScroll } from "framer-motion";
import StarCanvas from "./components/StarCanvas";
import { AnimatePresence } from "framer-motion";

import Projects from "./components/projects/Projects";
import MosaicProjects from "./components/projects/MosaicProjects";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";

export default function Home() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Hero />
      <About />
      <Work />
    </>
    // <AnimatePresence initial={false} mode="wait">
    //   <m.main key={pathname}>
    //     <Hero />
    //     <About />
    //
    //     {/* <Projects /> */}
    //   </m.main>
    // </AnimatePresence>
  );
}
