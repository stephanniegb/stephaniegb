import "./projects.css";
import SlideinBorder from "../animation/SlideinBorder";

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
    <li className="relative cursor-none group">
      <a
        style={{
          cursor: "none",
        }}
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-20 block relative transition duration-300 ease-out hover:ease-in"
      >
        <div className="projText relative">
          <div className="relative z-[-1] projectTitleContainer">
            <h3
              className="text-[3vw] font-Bruno_Ace text-brown  
             uppercase"
            >
              {projTitle}
            </h3>
            <span
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
              className="group-hover:text-lemon group-hover:translate-y-[-0.35rem]"
            >
              <UpRightArrow />
            </span>
          </div>

          <ul className=" relative z-[-1] techWrapper">
            {techs.map((tech, key) => {
              return (
                <li key={key} className="p-2 rounded-[25px] text-lemon">
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </a>
      <SlideinBorder height="4px" />
    </li>
  );
};

export default Project;
