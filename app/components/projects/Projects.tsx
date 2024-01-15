import { useContext } from "react";
import UpRightArrow from "@/svg/UpRightArrow";
import CursorContext from "@/app/context/GlobalContext";
import SlideInBorder from "../animation/SlideInBorder";
import RightArrow from "@/svg/RightArrow";
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
            <h4
              className="text-[3vw] font-Bruno_Ace text-brown  
             uppercase"
            >
              {projTitle}
            </h4>
            <span className="transition-[transform] duration-500 ease-in-out transform group-hover:text-lemon group-hover:-rotate-[30deg]">
              <RightArrow width="40" height="40" />
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
