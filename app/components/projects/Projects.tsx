import "./projects.css";
import { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import SlideinBorder from "../RevealAnimations/SlideinBorder";
interface ProjectStyles {
  [key: string]: string;
}
interface ProjectsProps {
  id: string;
  projTitle: string;
  description?: string;
  imgUrl?: string;
  techs: string[];
  projectUrl?: string;
  styles: ProjectStyles;
  images: string[];
}
import { motion as m } from "framer-motion";
import UpRightArrow from "@/svg/upRightArrow";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.7 },
};
const transition = {
  duration: 0.5,
};
const Project = ({ techs, projTitle, images }: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="transition duration-300 ease-out  hover:text-[#94948f]  hover:ease-in relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <SlideinBorder height=".5px" />
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="p-20 block hover:-translate-x-10 transition duration-300 ease-out hover:ease-in  projLink"
      >
        <div className="projText">
          <div className="projectTitleContainer">
            <h3 className="projectTitle">{projTitle}</h3>
            <span className="arrow">
              <UpRightArrow />
            </span>
          </div>

          <ul className="techWrapper">
            {techs.map((tech, key) => {
              return (
                <li key={key} className="tech">
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </a>

      <m.div
        className={isHovered ? "w-[400px] projPreview " : "noPreview"}
        variants={variants}
        animate={isHovered ? "open" : "closed"}
        transition={transition}
        style={{ top: 20, left: mousePosition.x }}
      >
        <ProjectPreview images={images} />
      </m.div>
    </div>
  );
};

export default Project;
