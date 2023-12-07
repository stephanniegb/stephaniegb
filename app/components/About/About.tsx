"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import styles from "./About.module.css";
import ReavealBlueBg from "../RevealAnimations/ReavealBlueBg";
import SwigglyStroke from "@/svg/SwigglyStroke";
import TextReveal from "../RevealAnimations/TextReveal";
const About = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<number>>;
}) => {
  const rootRef = useRef(null);

  return (
    <section>
      <section id={styles.aboutContainer}>
        <h2>About me</h2>
        <SwigglyStroke />
        <ReavealBlueBg setState={setState} intersectionRoot={rootRef}>
          <div className={styles.mainAbout}>
            <article className={styles.aboutArticleContainer}>
              <TextReveal intersectionRoot={rootRef}>
                <h2 className={styles.aboutArticle} id="target">
                  I am stephanie Egbuonu <br />a{" "}
                  <span className={styles.coloredText}>software enginer</span>.
                  I build accessible and inclusive web experince
                </h2>
              </TextReveal>
            </article>
            <div className={styles.stephImgContainer}>
              <div className={styles.stephImgDiv}>
                {/* <ImageReveal
                  imgUrl="/plant-4006379_1280 Background Removed.png"
                  imgAltText="Stephanie working"
                /> */}
              </div>
            </div>
          </div>
        </ReavealBlueBg>
      </section>
    </section>
  );
};

export default About;
