import { useContext } from "react";
import UpRightArrow from "@/svg/UpRightArrow";
import CursorContext from "@/app/context/CursorContext";
import SlideInBorder from "../animation/SlideInBorder";
interface ProjectsProps {
  id: string;
  projTitle: string;
  description?: string;
  imgUrl?: string;
  techs: string[];
  projectUrl?: string;
  images: string[];
}

const Project = ({ techs, projTitle, projectUrl }: ProjectsProps) => {
  const { cursorText } = useContext(CursorContext);

  return (
    <li className="relative cursor-none  group">
      <a
        style={{
          cursor: cursorText === "" ? "pointer" : "none",
        }}
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-20 block relative transition duration-300 ease-out hover:ease-in"
      >
        <div className="flex justify-between items-center relative">
          <div className="relative z-[-1] flex gap-4 items-center">
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

          <ul className=" relative z-[-1] flex gap-2">
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
      <SlideInBorder height="4px" />
    </li>
  );
};

export default Project;
