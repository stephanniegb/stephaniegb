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
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Header from "./components/experience/components/Header";
import { GlobalContextProvider } from "./context/GlobalContext";

export default function Home() {
  return (
    <main className="relative">
      <GlobalContextProvider>
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <ShaderContextProvider>
          <Experience />
          <Work />
        </ShaderContextProvider>
        <Footer />
      </GlobalContextProvider>
    </main>
  );
}
