"use client";
import { Suspense, useRef } from "react";
import Reveal from "../Reveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { motion as m, useScroll } from "framer-motion";
import ImageMesh from "../scene/Scene";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  });
  console.log(scrollYProgress);

  return (
    <section
      ref={containerRef}
      className="grid h-[200vh] bg-black py-8 relative"
    >
      {/* <div className="absolute h-full w-full">
        <Canvas camera={{}}>
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <ImageMesh url={"/IMG_7682 2.JPG"} />
          </Suspense>
        </Canvas>
      </div> */}
      <div className="flex flex-col mx-auto my-0 h-screen w-fit justify-center items-start">
        <div>
          <Reveal>
            <h1 className="text-[6vw] text-center font-serif">
              Stephanie Egbuonu
            </h1>
          </Reveal>
          <p className="">Front End Software Engineer </p>
        </div>
      </div>
      {/* 
      <p className="flex absolute left-0 bottom-0">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m202.83 146.83l-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66"
            />
          </svg>
        </span>
        SCROLL{" "}
      </p> */}
    </section>
  );
};

export default Hero;
