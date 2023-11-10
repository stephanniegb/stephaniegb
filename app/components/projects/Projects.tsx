import NewTab from "@/svg/NewTab";
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

const Project = ({ techs, id, projTitle, imgUrl, images }: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX - 100, y: e.clientY });
  };
  return (
    <div
      className="project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <SlideinBorder height=".5px" />
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="projLink"
      >
        <div className="projText">
          <div className="projectTitleContainer">
            <h3 className="projectTitle">{projTitle}</h3>
            <span className="arrow">
              <NewTab />
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

      <div
        className={isHovered ? "projPreview" : "noPreview"}
        style={{ top: 40, left: mousePosition.x }}
      >
        <ProjectPreview images={images} />
      </div>
    </div>
  );
};

export default Project;
