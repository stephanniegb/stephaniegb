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
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Header from "./components/experience/components/Header";

export default function Home() {
  return (
    <main className="relative">
      <CursorContextProvider>
        <Cursor />
        <Navbar />
        <Hero />
        <About />

        <ShaderContextProvider>
          {/* <Header /> */}
          <Experience />
          <Work />
        </ShaderContextProvider>
        <Footer />
      </CursorContextProvider>
    </main>
  );
}
