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
];
const Work = () => {
  useEffect(() => {
    const stickySection = document.querySelectorAll(".sticky");

    images.forEach((img) => {
      stickySection.forEach((section) => {
        let Image = document.createElement("img");
        Image.src = img;
        section.querySelector(".scroll_section")?.appendChild(Image);
      });
    });

    const transform = (section: Element) => {
      const parent = section.parentElement;
      if (parent) {
        const offSetTop = parent.offsetTop;
        const scrollSection = section.querySelector(
          ".scroll_section"
        ) as HTMLElement;

        // Get the current scroll position using window.scrollY
        let percentage =
          ((window.scrollY - offSetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      }
    };
    window.addEventListener("scroll", (e) => {
      for (let i = 0; i < stickySection.length; i++) {
        transform(stickySection[i]);
      }
    });
    return () => {};
  }, []);

  return (
    <div className="sticky_parent">
      <div className="sticky">
        <div className="scroll_section">
          <img src="/Screenshot 2023-10-22 at 8.43.49 PM.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
