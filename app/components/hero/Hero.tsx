"use client";
import { useRef } from "react";
import Reveal from "../Reveal";

const Hero = () => {
  const rootRef = useRef(null);
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="text-[6vw] text-center font-serif">Stephanie Egbuonu</h1>
      <p className="">Front End Software Engineer </p>
    </section>
  );
};

export default Hero;
