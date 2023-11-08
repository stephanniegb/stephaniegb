"use client";
import { useContext } from "react";
import Reveal from "../Reveal";
import { BackgroundColorcontext } from "@/context/BackgroundContext";
import styles from "./Hero.module.css";
import ReverseBgColor from "../RevealAnimations/ReverseBgColor";

const Hero = () => {
  const BgColor = useContext(BackgroundColorcontext);

  return (
    <ReverseBgColor>
      <section
        // data-scroll-section
        // data-scroll-speed="2"
        className={`heroContainer ${BgColor?.isBgWhite ? "show" : ""}`}
      >
        <div>
          <span className={styles.hiText}>Hi, i'm</span>
          <Reveal>
            <h1 className={styles.introName}>Stephanie Egbuonu</h1>
          </Reveal>
        </div>
        {/* <div className={styles.nameBase}>
        <p className={styles.nameBaseText}>
          I <span className={styles.topDash}>Build lorem</span> with{" "}
          <span className={styles.btmDash}>Code lorem</span>
        </p>
      </div> */}
      </section>
    </ReverseBgColor>
  );
};

export default Hero;
