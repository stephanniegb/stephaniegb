import NewTab from "@/svg/NewTab";
import Reveal from "../Reveal";
import { useState } from "react";
import Cursor from "../Cursor";
interface ProjectStyles {
  [key: string]: string;
}

interface ProjectsProps {
  id: string;
  description?: string;
  imgUrl?: string;
  techs: string[];
  projectUrl?: string;
  styles: ProjectStyles;
}

const Project = ({
  description,
  imgUrl,
  techs,
  projectUrl,
  styles,
  id,
}: ProjectsProps) => {
  return (
    <>
      <div
        id={id}
        // className={styles.test}
        className="test"
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="proj">
            {/* <div className={styles.proj}> */}
            <img
              src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
              alt=""
              className="projImg"
              // className={styles.projImg}
            />
            {/* <div className={styles.projBtm}>
            <ul className={styles.techWrapper}> */}
            <div className="projBtm">
              <ul className="techWrapper"></ul>
            </div>
          </div>
        </a>
        <Cursor id={id}>
          <div className="projPreview">
            <img
              src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
              alt=""
              className="projImg"
            />
            <div>
              <ul>
                {techs.map((tech, key) => {
                  return (
                    <li key={key} className="tech">
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <span className="arrow">
                <NewTab />
              </span>
            </div>
          </div>
        </Cursor>
      </div>
    </>
  );
};

export default Project;
