"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import styles from "./About.module.css";
import ReavealBlueBg from "../RevealAnimations/ReavealBlueBg";
import SwigglyStroke from "@/svg/SwigglyStroke";
import TextReveal from "../RevealAnimations/TextReveal";
const About = () => {
  const rootRef = useRef(null);

  return (
    <section className="min-h-screen bg-[#ffffff]">
      <div className="h-screen bg-black"></div>
    </section>
  );
};

export default About;
/*  <section id={styles.aboutContainer}>
        <h2>About me</h2>
        <SwigglyStroke />
        <ReavealBlueBg setState={setState} intersectionRoot={rootRef}>
          <div className={styles.mainAbout}>
            <article className={styles.aboutArticleContainer}>

              <h2 className={styles.aboutArticle} id="target">
                I'm Stephanie Egbuonu,
                <br /> a{" "}
                <span className={styles.coloredText}>software engineer </span>
                with a keen focus on creating accessible and inclusive web
                experiences.
              </h2>

            </article>
            <div className={styles.stephImgContainer}>
              <div className={styles.stephImgDiv}>
                
              </div>
            </div>
          </div>
        </ReavealBlueBg>
      </section> */
