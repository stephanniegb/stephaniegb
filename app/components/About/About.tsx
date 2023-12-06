"use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ImageReveal from "../RevealAnimations/ImageReveal";
import styles from "./About.module.css";
import ReavealBlueBg from "../RevealAnimations/ReavealBlueBg";
import SwigglyStroke from "@/svg/swigglyStroke";
import SplitType from "split-type";
import { gsap } from "gsap";
const About = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<number>>;
}) => {
  const rootRef = useRef(null);
  useEffect(() => {
    const text = new SplitType("#target");
    const characters = document.querySelectorAll(".char");

    const characterArray = Array.from(characters);

    characterArray.map((char) => {
      char.classList.add("translate-y");
    });

    characterArray.map((char, index) => {
      gsap.to(char, {
        opacity: 1,
        y: 0,
        stagger: 0.05,

        duration: 0.5,
        ease: "expo",
        delay: index * 0.1,
      });
    });
  }, []);

  // useEffect(() => {
  //   const split = new SplitText("#yourElementID", {
  //     type: "lines",
  //     lineClass: "lineChildren",
  //   });
  //   gsap.to(split.lines, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: "power2",
  //   });
  //   return () => {};
  // }, []);

  return (
    <section>
      <section id={styles.aboutContainer}>
        <h2>About me</h2>
        <SwigglyStroke />
        <ReavealBlueBg setState={setState} intersectionRoot={rootRef}>
          <div className={styles.mainAbout}>
            <article className={styles.aboutArticleContainer}>
              <h2 className={styles.aboutArticle} id="target">
                I am stephanie Egbuonu <br />a{" "}
                <span className={styles.coloredText}>software enginer</span>. I
                build accessible and inclusive web experince
              </h2>
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
