"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import ImageReveal from "../RevealAnimations/ImageReveal";
import styles from "./About.module.css";
import ReavealBlueBg from "../RevealAnimations/ReavealBlueBg";

const About = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<number>>;
}) => {
  const rootRef = useRef(null);

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
        <h2>About me...</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 200 50"
        >
          <path
            d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
            fill="none"
            stroke="#000000"
            stroke-width="3"
          />
        </svg>
        <ReavealBlueBg setState={setState} intersectionRoot={rootRef}>
          <div className={styles.mainAbout}>
            <article className={styles.aboutArticleContainer}>
              <h2 className={styles.aboutArticle}>
                I am stephanie Egbuonu <br />a{" "}
                <span className={styles.coloredText}>software enginer</span>. I
                build accessible and inclusive web experince
              </h2>
            </article>
            <div className={styles.stephImgContainer}>
              <div className={styles.stephImgDiv}>
                <ImageReveal
                  imgUrl="/plant-4006379_1280 Background Removed.png"
                  imgAltText="Stephanie working"
                />
              </div>
            </div>
          </div>
        </ReavealBlueBg>
      </section>
    </section>
  );
};

export default About;
