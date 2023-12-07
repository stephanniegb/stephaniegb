"use client";
import Hero from "./hero/Hero";
import About from "./About/About";
import Work from "./work/Work";

import { Dispatch, SetStateAction, useContext } from "react";
import Footer from "./footer/Footer";
import Experience from "./experience/Experience";

const Html = ({
  setBackgroundStyles,
}: {
  setBackgroundStyles: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <section className="absolute h-[600vh] w-screen ">
      <Hero />
      <About setState={setBackgroundStyles} />
      <Experience setState={setBackgroundStyles} />
      <Work />
      <Footer />
    </section>
  );
};

export default Html;
