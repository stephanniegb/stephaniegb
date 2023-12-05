"use client";
import { useRef } from "react";
import Reveal from "../Reveal";

const Hero = () => {
  const rootRef = useRef(null);

  return (
    <div className="h-screen w-screen  grid place-content-center relative">
      <Reveal intersectionRoot={rootRef}>
        <h1 className="text-[6em] font-serif">Stephanie Egbuonu</h1>
      </Reveal>
      <p>Front End Software Engineer </p>
    </div>
  );
};

export default Hero;
