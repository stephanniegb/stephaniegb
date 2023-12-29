"use client";
import Project from "../projects/Projects";
import * as THREE from "three";
import {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import images from "../scene/assets/images";
import ProjectsData from "@/data/projects.json";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

import { ShaderContext } from "@/app/context/ShaderContext";
import AnimatedLetters from "../animation/AnimatedLetters";
import ImageMesh from "../scene/ImageMesh";

const Work = () => {
  const { setIsHovered, isHovered, setOffset, offset, setMouse, mouse } =
    useContext(ShaderContext);

  const [imageUrl, setImageUrl] = useState("");
  const projectsParentRef = useRef(null);
  const ref = useRef(null);
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
    return () => {};
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePointerMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMouse((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  useEffect(() => {
    setOffset((prev) => ({
      ...prev,
      x: THREE.MathUtils.lerp(prev.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(prev.y, mouse.y, 0.1),
    }));
  }, [mouse]);

  return (
    <section id="work" className="">
      <h2 className="text-[15vw] p-12 font-Holiday_Sunday">
        <AnimatedLetters word="Projects" />
      </h2>
      <section
        onPointerMove={handlePointerMove}
        ref={ref}
        className="grid h-[200vh]  py-8 relative"
      >
        <div className="absolute z-10 h-full w-full">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ImageMesh url="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </Suspense>
          </Canvas>
        </div>

        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={projectsParentRef}
          className="flex flex-col w-[80%] my-0 z-[1] mx-auto relative transition duration-300 ease-out overflow-hidden"
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
