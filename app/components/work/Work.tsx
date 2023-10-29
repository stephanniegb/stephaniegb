"use client";
import styles from "./Work.module.css";
import Carousel from "../projects/Carousel";
import Project from "../projects/Projects";
import { useEffect } from "react";
const images = [
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
  "/Screenshot 2023-10-22 at 8.43.49 PM.png",
];
const Work = () => {
  useEffect(() => {
    const stickySection = document.querySelectorAll(".sticky");

    // images.forEach((img) => {
    //   stickySection.forEach((section) => {
    //     let Image = document.createElement("img");
    //     Image.src = img;
    //     section.querySelector(".scroll_section")?.appendChild(Image);
    //   });
    // });

    const transform = (section: Element) => {
      const parent = section.parentElement;
      if (parent) {
        const offSetTop = parent.offsetTop;
        const scrollSection = section.querySelector(
          ".scroll_section"
        ) as HTMLElement;
        let percentage =
          ((window.scrollY - offSetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      }
    };
    const handleScroll = () => {
      for (let i = 0; i < stickySection.length; i++) {
        transform(stickySection[i]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.workContainer}>
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
            stroke="#000000"
            stroke-width="3"
          />
        </svg>
      </h2>
      <div className="sticky_parent">
        <div className="sticky">
          <div className="scroll_section">
            {images.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="sticky_parent">
        <div className="sticky">
          <div className="scroll_section">
            <img src="/Screenshot 2023-10-22 at 8.43.49 PM.png" alt="" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Work;
