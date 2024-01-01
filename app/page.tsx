"use client";
import { useEffect, useRef, useState } from "react";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Background from "./components/Background";
import Lenis from "@studio-freight/lenis";
import { ShaderContextProvider } from "./context/ShaderContext";
import Translate from "./components/Translate";
import Cursor from "./components/cursor/Cursor";
import { CursorContextProvider } from "./context/CursorContext";

export default function Home() {
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
  useEffect(() => {
    const lenis = new Lenis({});

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative">
      <CursorContextProvider>
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Translate />
        <ShaderContextProvider>
          <Background />
        </ShaderContextProvider>
        <Footer />
      </CursorContextProvider>
    </main>
  );
}
