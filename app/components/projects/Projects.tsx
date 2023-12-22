import "./projects.css";
import { useRef, useState } from "react";
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

  images: string[];
}
import UpRightArrow from "@/svg/UpRightArrow";

const Project = ({
  techs,
  projTitle,

  projectUrl,
}: ProjectsProps) => {
  return (
    <li className="transition duration-300 ease-out  hover:text-[#94948f]  hover:ease-in relative">
      <SlideinBorder height=".5px" />
      <a
        href={projectUrl}
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
    </li>
  );
};

export default Project;
