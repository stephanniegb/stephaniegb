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
import AnimatedLines from "../animation/AnimatedLines";

const Work = () => {
  const { setIsHovered, isHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const { cursor, setCursorText } = useContext(CursorContext);

  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const projectsParentRef = useRef(null);
  const containerRef = useRef(null);
  const [showProj, setShowProj] = useState(false);
  useLayoutEffect(() => {
    const children = Array.from(projectsParentRef.current.children);
    children.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        setCursorText("View");
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
        setCursorText("");
        setShowProj(false);
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
      <section id="work" className="z-[1] py-4 relative bg-[#D9D9D9]">
        {/* <h2 className="">
        <AnimatedLines sentence="Recent Projects" />
      </h2> */}

        {/* <div className="z-[-4] relative bg-[#ff0000] h-[15rem] w-[screenhj]"></div> */}

        <section
          onPointerMove={handlePointerMove}
          ref={containerRef}
          className="grid py-[13rem] relative"
        >
          <SceneCanvas showProj={showProj} imageUrl={imageUrl} />
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
      </section>
      <svg
        className="z-[1] relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#d9d9d9"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Work;
