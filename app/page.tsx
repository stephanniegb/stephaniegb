"use client";
import { usePathname } from "next/navigation";
import { motion as m, useScroll } from "framer-motion";
import StarCanvas from "./components/StarCanvas";
import { AnimatePresence } from "framer-motion";

import Projects from "./components/projects/Projects";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Write from "./components/write/Write";
import { useEffect, useRef, useState } from "react";
import useLocoScroll from "@/hooks/useLocoScroll";
import { BackgroundColorProvider } from "@/context/BackgroundContext";

export default function Home() {
  const [preLoader, setPreLoader] = useState(false); // change this to true for it to work
  // const [timer, setTimer] = useState(4);
  // const pageRef = useRef(null);

  // const clear = () => {
  //   clearInterval(pageRef.current);
  //   setPreLoader(false);
  // };
  // useEffect(() => {
  //   pageRef.current = setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  useLocoScroll(!preLoader);

  return (
    <>
      {preLoader ? (
        <div className="loader-container">
          <h1>Loading</h1>
        </div>
      ) : (
        <>
          <Navbar />
          <main
          // data-scroll-container
          // id="main-container"
          >
            <BackgroundColorProvider>
              <Hero />
              <About />
            </BackgroundColorProvider>
            <Work />
            <Write />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
