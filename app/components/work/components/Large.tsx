"use client";
import * as THREE from "three";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import ProjectsData from "@/data/projects.json";
import { ShaderContext } from "@/app/context/ShaderContext";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useDebounce } from "@/hooks/useDebounce";
import images from "../../scene/assets/images";
import Scene from "../../scene/Scene";
import Archive from "./Archive";
import Project from "./Projects";
const Large = () => {
  const { setIsHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const { cursor } = useContext(GlobalContext);

  const [imageUrl, setImageUrl] = useState("/projects/image-7.png");

  function hideImage() {
    setShowProj(false);
  }

  const projectsParentRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [showProj, setShowProj] = useState(false);
  useLayoutEffect(() => {
    const currentRef = projectsParentRef.current;
    if (currentRef) {
      const children = Array.from(currentRef.children);
      children.forEach((link, idx) => {
        link.addEventListener("mousemove", () => {
          setShowProj(true);

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
          }
        });
        link.addEventListener("mouseleave", () => {
          hideImage();
        });
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", useDebounce(hideImage, 200));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
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
    }
  };

  useEffect(() => {
    setOffset((prev) => ({
      ...prev,
      x: THREE.MathUtils.lerp(offset.x, cursor.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, cursor.y, 0.1),
    }));
  }, [mouse]);

  return (
    <section id="work" className="z-[1] py-4 relative bg-noise-bg bg-[#D9D9D9]">
      <section
        style={{
          paddingTop: "clamp(13rem, 15vmax, 15rem)",
          paddingBottom: "clamp(13rem, 15vmax, 15rem)",
        }}
        onMouseMove={handleMouseMove}
        ref={containerRef}
        className="grid relative"
      >
        <h3 className="uppercase px-8  text-brown">Recent Projects</h3>
        <Scene showProj={showProj} imageUrl={imageUrl} />
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={projectsParentRef}
          className="flex flex-col w-full my-0 mx-auto relative transition duration-800 ease-out overflow-hidden"
        >
          {ProjectsData.map((project) => {
            const { id, tech, title, url, portfolio } = project;
            return (
              <Project
                key={id}
                techs={tech}
                projTitle={title}
                projectUrl={url}
                portfolio={portfolio}
              />
            );
          })}
        </ul>
      </section>
      <Archive />
    </section>
  );
};

export default Large;
