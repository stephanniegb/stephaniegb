import { useContext } from "react";
import ImageReveal from "../RevealAnimations/ImageReveal";
import RevealBgColor from "../RevealAnimations/RevealBgColor";
import styles from "./About.module.css";
import { BackgroundColorcontext } from "@/context/BackgroundContext";

const About = () => {
  const BgColor = useContext(BackgroundColorcontext);
  return (
    // <RevealBgColor>
    <section className={`RevealBgColor ${BgColor?.isBgWhite ? "show" : ""}`}>
      <h3 className={styles.header}>About me...</h3>
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
              imgUrl="/IMG_6522 Background Removed.png"
              imgAltText="Stephanie working"
            />
          </div>
        </div>
      </div>
    </section>
    // </RevealBgColor>
  );
};

export default About;
