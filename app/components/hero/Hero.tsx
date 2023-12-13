"use client";
import { Suspense, useRef } from "react";
import Reveal from "../Reveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "../scene/Scene";

const Hero = () => {
  const rootRef = useRef(null);
  return (
    <section style={{}} className="grid place-content-center h-screen bg-black">
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
      <h1 className="text-[6vw] text-center font-serif">Stephanie Egbuonu</h1>
      <p className="">Front End Software Engineer </p>
    </section>
  );
};

export default Hero;
