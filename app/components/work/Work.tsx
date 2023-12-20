"use client";
import styles from "./Work.module.css";
import Project from "../projects/Projects";
import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import ProjectPreview from "../projects/ProjectPreview";
import ProjectsData from "@/data/projects.json";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.7 },
};
const transition = {
  duration: 0.5,
};

const Work = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = (projImages: string[]) => {
    setIsHovered(true);
    setImages(projImages);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    setMousePosition({ x, y });
    console.log(containerRect);
  };

  useEffect(() => {
    // amimate
  }, [images]);

  return (
    <section className="">
      <section id="work" className="">
        <h2 className="text-[12vw] p-12 font-Holiday_Sunday">Projects</h2>
        <section className={styles.ProjectsWrapper}>
          <div className="flex flex-col w-[80%] my-0 mx-auto relative overflow-hidden">
            <m.div
              variants={variants}
              animate={isHovered ? "open" : "closed"}
              transition={transition}
              className={" absolute z-[3]  w-[400px] pointer-events-none"}
              style={{ top: mousePosition.y - 20, left: mousePosition.x - 20 }}
            >
              <ProjectPreview images={images} />
            </m.div>
            {ProjectsData.map((project) => {
              const { id, images, tech, title, url } = project;
              return (
                <Project
                  key={id}
                  handleMouseEnter={() => handleMouseEnter(images)}
                  handleMouseLeave={handleMouseLeave}
                  handleMouseMove={handleMouseMove}
                  id={id}
                  techs={tech}
                  projTitle={title}
                  images={images}
                  projectUrl={url}
                />
              );
            })}

            {/* <m.div
              className={
                isHovered
                  ? "block absolute z-[3] cursor-pointer"
                  : "hidden"
              }
              variants={variants}
              animate={isHovered ? "open" : "closed"}
              transition={transition}
              style={{ top: 0, left: 0 }}
            >
             
            </m.div> */}
          </div>
        </section>
      </section>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,256L80,250.7C160,245,320,235,480,213.3C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,186.7C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
      {/* <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,181.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}

      {/* <svg
        className="w-full"
        width="500"
        height="80"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L0,40 Q250,100 500,40 L500,0 Z" fill="white" />
      </svg> */}
    </section>
  );
};

export default Work;
