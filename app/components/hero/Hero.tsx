"use client";
import Reveal from "../Reveal";
import StarCanvas from "../StarCanvas";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <section className={styles.intro}>
          <div>
            <span className={styles.hiText}>Hi, i'm</span>
            <Reveal>
              <h1 className={styles.introName}>Stephanie Egbuonu</h1>
            </Reveal>
          </div>
          <div className={styles.nameBase}>
            <p className={styles.nameBaseText}>
              I <span className={styles.topDash}>Build lorem</span> with{" "}
              <span className={styles.btmDash}>Code lorem</span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
