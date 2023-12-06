"use client";
import Hero from "./hero/Hero";
import About from "./About/About";
import Write from "./write/Write";
import Work from "./work/Work";

import { Dispatch, SetStateAction, useContext } from "react";
import Footer from "./footer/Footer";

const Html = ({
  setBackgroundStyles,
}: {
  setBackgroundStyles: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <section className="absolute h-[600vh] w-screen ">
      <Hero />
      <About setState={setBackgroundStyles} />
      <Write setState={setBackgroundStyles} />
      <Work />
      <Footer />
    </section>
  );
};

export default Html;
