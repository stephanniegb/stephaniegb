"use client";
import { Suspense, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import AnimatedLines from "../AnimatedLines";
import { Canvas } from "@react-three/fiber";
import { Scene } from "../scene/Scene";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.5 1", "1 0"],
  });

  const rightTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"]
  );
  const leftTranslateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="grid h-full bg-black z-[1] py-8 relative"
    >
      {/* <div className="absolute  h-full w-full">
        <Canvas
          camera={{
            position: [0, 0, 400],
          }}
        >
          <perspectiveCamera fov={75} />
          <ambientLight intensity={4} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div> */}
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
    </section>
  );
};

export default Hero;
