"use client";
import styles from "./Work.module.css";
import Project from "../projects/Projects";
import { useEffect } from "react";

const Work = () => {
  // useEffect(() => {
  //   const stickySection = document.querySelectorAll(".sticky");

  //   const transform = (section: Element) => {
  //     const parent = section.parentElement;
  //     if (parent) {
  //       const offSetTop = parent.offsetTop;
  //       const scrollSection = section.querySelector(
  //         ".scroll_section"
  //       ) as HTMLElement;
  //       let percentage =
  //         ((window.scrollY - offSetTop) / window.innerHeight) * 100;
  //       percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  //       scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  //     }
  //   };
  //   const handleScroll = () => {
  //     for (let i = 0; i < stickySection.length; i++) {
  //       transform(stickySection[i]);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      // data-scroll-section
      // data-scroll-speed="1"
      id="work"
      className={styles.workContainer}
    >
      <h2 className={styles.header}>
        My works?...
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 200 50"
        >
          <path
            d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
            fill="none"
            stroke="#ffffff"
            stroke-width="3"
          />
        </svg>
      </h2>
      <section className={styles.ProjectsWrapper}>
        <div className={styles.AllProjects}>
          <Project
            id="project1"
            styles={styles}
            techs={["React", "TypeScript", "Nodejs", "Express"]}
            projTitle="Scissors"
            imgUrl="/Screenshot 2023-10-22 at 8.43.49 PM.png"
            images={[
              "/Screenshot 2023-10-22 at 8.43.49 PM.png",
              "/Screenshot 2023-11-10 at 4.13.47 PM.png",
              "/Screenshot 2023-11-10 at 4.14.13 PM.png",
            ]}
          />
          <Project
            id="project2"
            styles={styles}
            techs={["VueJs", "Javascript", "Sass"]}
            projTitle="goShop"
            imgUrl="/IMG_6522 Background Removed.png"
            images={[
              "/Screenshot 2023-11-10 at 4.27.31 PM.png",
              "/Screenshot 2023-11-10 at 4.28.55 PM.png",
              "/Screenshot 2023-11-10 at 4.29.56 PM.png",
            ]}
          />

          <Project
            id="project3"
            styles={styles}
            techs={["Tech1", "Tech2", "Tech3"]}
            projTitle="timely"
            images={[]}
          />

          <Project
            id="project4"
            styles={styles}
            techs={["Tech1", "Tech2", "Tech3"]}
            projTitle="timely"
            images={[]}
          />
          <Project
            id="project5"
            styles={styles}
            techs={["Tech1", "Tech2", "Tech3"]}
            projTitle="timely"
            images={[]}
          />
          <Project
            id="project6"
            styles={styles}
            techs={["Tech1", "Tech2", "Tech3"]}
            projTitle="timely"
            images={[]}
          />
        </div>
      </section>
    </section>
  );
};

export default Work;
