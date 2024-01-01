import "./projects.css";
import SlideinBorder from "../RevealAnimations/SlideinBorder";

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

const Project = ({ techs, projTitle, projectUrl }: ProjectsProps) => {
  return (
    <li className="relative cursor-none projectLink">
      <a
        style={{
          cursor: "none",
        }}
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-20 block transition duration-300 ease-out hover:ease-in"
      >
        {/* hover:-translate-x-3 */}
        <div className="projText relative z-[-2]">
          <div className="projectTitleContainer">
            <h3 className="text-[3vw] uppercase">{projTitle}</h3>
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
      <SlideinBorder height=".5px" />
    </li>
  );
};

export default Project;
