"use client";
import { Suspense, useRef } from "react";
import Reveal from "../Reveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion as m, useScroll } from "framer-motion";
import ImageMesh from "../scene/Scene";
import AnimatedLines from "../AnimatedLines";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });

  return (
    <section
      ref={containerRef}
      className="grid h-[200vh] bg-black py-8 relative overflow-hidden"
    >
      <div className="flex flex-col mx-auto my-0 h-screen w-fit justify-center items-start">
        <div>
          <h1>
            <AnimatedLines
              className="text-[6vw] text-center font-serif flex flex-col"
              sentence="Stephanie Egbuonu"
            />
            <span className="text-pFS inline-block">
              Front End Software Engineer
            </span>
          </h1>
        </div>
      </div>
      {/* <div>
        <h2 className="text-[20vw]">
          SOMETHING HUGE THAT TRANSLATES ON SCROLL
        </h2>
      </div> */}
    </section>
  );
};

export default Hero;
