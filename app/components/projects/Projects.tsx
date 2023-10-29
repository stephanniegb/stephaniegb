import Carousel from "../projects/Carousel";
interface ProjectsProps {
  description: string;
  url: string;
  techs: string[];
}
const carouselItems = [
  { content: "Item 1", heading: "Heading 1" },
  { content: "Item 2", heading: "Heading 2" },
  { content: "Item 3", heading: "Heading 3" },
  // Add more items as needed
];
const Project = ({ description, url, techs }: ProjectsProps) => {
  const handleIntersection = () => {
    console.log("chep!");

    // const otherElement = document.getElementById("otherElementId");
    // if (otherElement) {
    //   otherElement.classList.add("yourClassName");
    // }
  };
  return (
    <Carousel onIntersection={handleIntersection}>
      <figure id="pro1" className="project">
        <img src={url} alt="" className="projectImg" />
        <figcaption>
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
            >
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
    </Carousel>
  );
};

export default Project;
