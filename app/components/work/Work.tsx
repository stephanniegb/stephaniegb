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
import AnimatedLetters from "../animation/AnimatedLetters";
import SceneCanvas from "../scene/SceneCanvas";
import CursorContext from "@/app/context/CursorContext";

const Work = () => {
  const { setIsHovered, isHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const { setCursorText } = useContext(CursorContext);

  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const projectsParentRef = useRef(null);

  useLayoutEffect(() => {
    const children = Array.from(projectsParentRef.current.children);
    children.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        switch (idx) {
          case 0:
            setImageUrl(images.imageOne);
            setCursorText("View");
            break;
          case 1:
            setImageUrl(images.imageTwo);
            setCursorText("View");
            break;
          case 2:
            setImageUrl(images.imageThree);
            setCursorText("View");

            break;
          case 3:
            setImageUrl(images.imageFour);
            setCursorText("View");
            break;
          case 4:
            setImageUrl(images.imageFive);
            setCursorText("View");
            break;
          case 5:
            setImageUrl(images.imageSix);
            setCursorText("View");
            break;
          case 6:
            setImageUrl(images.imageSeven);
            setCursorText("View");
            break;
        }
      });
      link.addEventListener("mouseleave", () => {
        setCursorText("");
        // this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);
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
    setMouse((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  useEffect(() => {
    setOffset((prev) => ({
      ...prev,
      x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
    }));
  }, [mouse]);

  return (
    <section id="work" className="">
      <h2 className="text-[15vw] p-12 font-Holiday_Sunday">
        Recent Projects
        {/* <AnimatedLetters word="Recent Projects" /> */}
      </h2>
      <section onPointerMove={handlePointerMove} className="grid py-8 relative">
        <SceneCanvas imageUrl={imageUrl} isHovered={isHovered} />
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={projectsParentRef}
          className="flex flex-col w-[80%] my-0 z-[1] mx-auto relative transition duration-800 ease-out overflow-hidden"
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
