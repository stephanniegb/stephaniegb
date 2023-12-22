import { useLayoutEffect, useRef, useState } from "react";
import Project from "../projects/Projects";
import images from "../scene/assets/images";
import ProjectsData from "@/data/projects.json";

const WorkHtml = () => {
  const [imageUrl, setImageUrl] = useState("");
  const projectsParentRef = useRef(null);
  useLayoutEffect(() => {
    const children = Array.from(projectsParentRef.current.children);
    children.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        switch (idx) {
          case 0:
            setImageUrl(images.imageOne);
            break;
          case 1:
            setImageUrl(images.imageTwo);

            break;
          case 2:
            setImageUrl(images.imageThree);

            break;
          case 3:
            setImageUrl(images.imageFour);
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
        }
      });
      link.addEventListener("mouseleave", () => {
        // this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);
      });
    });
  }, []);

  return (
    <ul
      ref={projectsParentRef}
      className="flex flex-col w-[80%] my-0 mx-auto relative overflow-hidden"
    >
      {ProjectsData.map((project) => {
        const { id, images, tech, title, url } = project;
        return (
          <Project
            key={id}
            id={id}
            techs={tech}
            projTitle={title}
            images={images}
            projectUrl={url}
          />
        );
      })}
    </ul>
  );
  /* <ul
            
          >
            
          </ul> */
};

export default WorkHtml;
