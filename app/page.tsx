"use client";
import { usePathname } from "next/navigation";
import { motion as m, useScroll } from "framer-motion";
import StarCanvas from "./components/StarCanvas";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import MosaicProjects from "./components/projects/MosaicProjects";

export default function Home() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  return (
    <AnimatePresence initial={false} mode="wait">
      <m.main key={pathname}>
        <StarCanvas />
        <Hero />
        <MosaicProjects />
        {/* <Projects /> */}
      </m.main>
    </AnimatePresence>
  );
}
