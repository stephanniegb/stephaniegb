"use client";
import * as THREE from "three";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ProjectsData from "@/data/projects.json";
import { ShaderContext } from "@/app/context/ShaderContext";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useDebounce } from "@/hooks/useDebounce";
import Project from "../../projects/Projects";
import images from "../../scene/assets/images";

import Scene from "../../scene/Scene";

import Archive from "./Archive";
import Wave from "@/svg/Wave";
const Large = () => {
  const { setIsHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const { cursor } = useContext(GlobalContext);

  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  function hideImage() {
    setShowProj(false);
  }

  const projectsParentRef = useRef(null);
  const containerRef = useRef(null);
  const [showProj, setShowProj] = useState(false);
  useLayoutEffect(() => {
    const children = Array.from(projectsParentRef.current.children);
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
          case 5:
            setImageUrl(images.imageSix);

            break;
          case 6:
            setImageUrl(images.imageSeven);

            break;
        }
      });
      link.addEventListener("mouseleave", () => {
        hideImage();
      });
    });
  }, []);

  // useEffect(() => {
  //   const parent = projectsParentRef.current;
  //   if (parent) {
  //     const children = Array.from(parent.children);
  //     children.forEach((link) => {
  //       if (isHovered) {
  //         link.style.opacity = 0.2;
  //       } else {
  //         link.style.opacity = 1;
  //       }
  //     });
  //   }
  // }, [isHovered]);

  useEffect(() => {
    window.addEventListener("scroll", useDebounce(hideImage, 200));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePointerMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
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
    <>
      <section
        id="work"
        className="z-[1] py-4 relative bg-noise-bg bg-[#D9D9D9]"
      >
        <section
          style={{
            paddingTop: "clamp(13rem, 15vmax, 15rem)",
            paddingBottom: "clamp(13rem, 15vmax, 15rem)",
          }}
          onPointerMove={handlePointerMove}
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
        <Archive />
      </section>
      <Wave />
    </>
  );
};

export default Large;
