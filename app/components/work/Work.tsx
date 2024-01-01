"use client";
import Project from "../projects/Projects";
import * as THREE from "three";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import images from "../scene/assets/images";
import ProjectsData from "@/data/projects.json";
import { ShaderContext } from "@/app/context/ShaderContext";
import SceneCanvas from "../scene/SceneCanvas";
import CursorContext from "@/app/context/CursorContext";

const Work = () => {
  const { setIsHovered, isHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const { cursor, setCursorText } = useContext(CursorContext);

  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const projectsParentRef = useRef(null);

  useLayoutEffect(() => {
    const children = Array.from(projectsParentRef.current.children);
    children.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        setCursorText("View");

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
            setImageUrl(images.imageFive);

            break;
          case 5:
            setImageUrl(images.imageSix);

            break;
          case 6:
            setImageUrl(images.imageSeven);

            break;
        }
      });
      link.addEventListener("mouseleave", () => {
        setCursorText("");
      });
    });
  }, []);

  useEffect(() => {
    const parent = projectsParentRef.current;
    if (parent) {
      const children = Array.from(parent.children);
      children.forEach((link) => {
        if (isHovered) {
          link.style.opacity = 0.2;
        } else {
          link.style.opacity = 1;
        }
      });
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePointerMove = (e) => {
    const rect = projectsParentRef.current.getBoundingClientRect();
    const relativeMouseY = e.clientY - rect.top;

    setMouse((prev) => ({
      ...prev,
      x: THREE.MathUtils.lerp(mouse.x, (e.clientX / innerWidth) * 2 - 1, 0.1),
      y: THREE.MathUtils.lerp(
        mouse.y,
        -(relativeMouseY / rect.height) * 2 + 1,
        0.1
      ),
    }));
  };

  useEffect(() => {
    setOffset((prev) => ({
      ...prev,
      x: THREE.MathUtils.lerp(offset.x, cursor.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, cursor.y, 0.1),
    }));
  }, [mouse]);

  return (
    <section id="work" className="">
      <h2 className="text-[15vw] p-12 font-Holiday_Sunday">Recent Projects</h2>
      <section onPointerMove={handlePointerMove} className="grid py-8 relative">
        <SceneCanvas imageUrl={imageUrl} isHovered={isHovered} />
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={projectsParentRef}
          className="flex flex-col w-[80%] my-0 mx-auto relative transition duration-800 ease-out overflow-hidden"
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
      </section>
    </section>
  );
};

export default Work;
