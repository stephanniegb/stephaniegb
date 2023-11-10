"use client";
import Reveal from "../Reveal";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div>
        <Reveal>
          <h1 className={styles.introName}>Stephanie Egbuonu</h1>
        </Reveal>
        <p>Succkish Front End Software Engineer </p>
      </div>
    </section>
  );
};

export default Hero;
