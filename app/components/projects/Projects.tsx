import NewTab from "@/svg/NewTab";
import Cursor from "../cursor/Cursor";
import "./projects.css";
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
}

const Project = ({ techs, id, projTitle, imgUrl }: ProjectsProps) => {
  return (
    <div className="project">
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
    </div>
  );
};

export default Project;
{
  /* <Cursor id={id}> */
}
{
  /* <div className="projPreview">
          <img
            src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
            alt=""
            className="projImg"
          /> */
}
{
  /* <div>
            

          </div> */
}
{
  /* </div> */
}
{
  /* // </Cursor> */
}
