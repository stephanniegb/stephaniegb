"use client";
import { Suspense, useRef } from "react";
import Reveal from "../Reveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "../scene/Scene";

const Hero = () => {
  const rootRef = useRef(null);
  return (
    <section
      ref={rootRef}
      style={{}}
      className="grid place-content-center h-screen bg-black py-8 relative"
    >
      <div className="absolute h-screen w-screen">
        <Canvas camera={{ position: [0, 0, 600] }}>
          <perspectiveCamera fov={75} />
          <ambientLight intensity={4} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-start">
        <div>
          <Reveal intersectionRoot={rootRef}>
            <h1 className="text-[6vw] text-center font-serif">
              Stephanie Egbuonu
            </h1>
          </Reveal>
          <p className="">Front End Software Engineer </p>
        </div>
      </div>
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
      </p>
    </section>
  );
};

export default Hero;
