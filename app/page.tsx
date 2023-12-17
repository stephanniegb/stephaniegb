"use client";

import { useEffect, useRef, useState } from "react";

import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SceneCanvas from "./components/scene/SceneCanvas";
import Html from "./components/Html";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Background from "./components/Background";

export default function Home() {
  const [preLoader, setPreLoader] = useState(true); // change this to true for it to work
  const [timer, setTimer] = useState(2);
  const pageRef = useRef(null);

  const clear = () => {
    clearInterval(pageRef.current);
    setPreLoader(false);
  };
  useEffect(() => {
    pageRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <main className="relative -z-40">
      {/* <Loader /> */}
      {/* <section className="h-screen w-screen bg-white">hi</section> */}
      <Hero />
      <About />
      <Background />
      {/* <Experience />
      <Work /> */}

      <Footer />
    </main>
  );
}
