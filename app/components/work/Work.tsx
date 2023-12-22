"use client";
import styles from "./Work.module.css";
import Project from "../projects/Projects";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import images from "../scene/assets/images";
import ProjectsData from "@/data/projects.json";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ImageMesh from "../scene/Scene";

const Work = () => {
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
    <section id="work" className="">
      <h2 className="text-[12vw] p-12 font-Holiday_Sunday">Projects</h2>
      <section className="grid h-[200vh]  py-8 relative">
        <div className="absolute z-10 h-full w-full">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <ImageMesh url={"/IMG_7682 2.JPG"} />
            </Suspense>
          </Canvas>
        </div>

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
      </section>
    </section>
  );
};

export default Work;
