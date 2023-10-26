"use client";
import "./mosaicProjects.css";
import Reveal from "../Reveal";

const MosaicProjects = () => {
  return (
    <section className="projectsContainer">
      <figure
        className="project medium"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <figcaption
          //   initial={{ left: "100%" }}
          //   animate={isOpen ? "visible" : "hidden"}
          //   variants={variants}
          //   transition={{ duration: 0.3, ease: "easeIn" }}
          className="projectReveal"
        >
          <h2 className="projectTitle">Project name</h2>
          <p className="projectDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nobis vitae at tenetur id iure dolorum, modi eveniet hic odit?
          </p>

          <ul className={"techWrapper"}>
            <li className={"tech"}>React</li>
            <li className={"tech"}>Typescript</li>
            <li className={"tech"}>React</li>
            <li className={"tech"}>Typescript</li>
          </ul>
          <div style={{ display: "flex" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="LearnMoreLink"
              href="#"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
                focusable="false"
                className="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </figcaption>
      </figure>

      <figure className="project large">
        <figcaption
          //   initial={{ left: "100%" }}
          //   animate={isOpen ? "visible" : "hidden"}
          //   variants={variants}
          //   transition={{ duration: 0.3, ease: "easeIn" }}
          className="projectReveal"
        >
          <h2 className="projectTitle">Project name</h2>
          <p className="projectDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nobis vitae at tenetur id iure dolorum, modi eveniet hic odit?
          </p>

          <ul className={"techWrapper"}>
            <li className={"tech"}>React</li>
            <li className={"tech"}>Typescript</li>
            <li className={"tech"}>React</li>
            <li className={"tech"}>Typescript</li>
          </ul>
          <div style={{ display: "flex" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="LearnMoreLink"
              href="#"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
                focusable="false"
                className="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </figcaption>
      </figure>
      <figure className="project medium">three</figure>
      <figure className="project small">four</figure>
      <figure className="project tall">
        <button>See More</button>
      </figure>
      <figure className="project wide">Six</figure>
    </section>
  );
};

export default MosaicProjects;
