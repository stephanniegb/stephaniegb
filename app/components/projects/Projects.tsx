import NewTab from "@/svg/NewTab";
import Reveal from "../Reveal";
interface ProjectsProps {
  description: string;
  imgUrl: string;
  techs: string[];
  projectUrl: string;
}

const Project = ({ description, imgUrl, techs, projectUrl }: ProjectsProps) => {
  return (
    <Reveal>
      <figure className="project">
        <figcaption className="figCaption">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <h2 className="projectTitle">
              Project Title{" "}
              <span>
                <NewTab />
              </span>
            </h2>
          </a>
          <p className="projectDescription">{description}</p>
          <div className="captionBottom">
            <ul className="techWrapper">
              {techs.map((tech, key) => {
                return (
                  <li key={key} className="tech">
                    {tech}
                  </li>
                );
              })}
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="LearnMoreLink"
              href="#"
            ></a>
          </div>
        </figcaption>

        <img src={imgUrl} alt="" className="projectImg" />
      </figure>
    </Reveal>
  );
};

export default Project;
