import SwigglyStroke from "@/svg/SwigglyStroke";
import ReavealBlackBg from "../RevealAnimations/ReavealBlackBg";
import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "../scene/Scene";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  {
    url: "/vuejs.svg",
    altText: "Vue js",
  },
  {
    url: "/typescript.svg",
    altText: "typescript",
  },
  {
    url: "/sass.svg",
    altText: "sass",
  },
  {
    url: "/bootstrap.svg",
    altText: "Bootstrap",
  },
  {
    url: "/css3.svg",
    altText: "CSS",
  },

  {
    url: "/javascript.svg",
    altText: "Javascript",
  },
  {
    url: "/nextjs.svg",
    altText: "Next JS",
  },
  {
    url: "/nuxt-icon.svg",
    altText: "Nuxt",
  },
  {
    url: "/react.svg",
    altText: "React Js",
  },
  {
    url: "/tailwind-css.svg",
    altText: "Tailwind CSS",
  },
  {
    url: "/Threejs-logo.png",
    altText: "Three JS",
  },
  {
    url: "/html5.svg",
    altText: "HTML",
  },
];
const Experience = () => {
  const rootRef = useRef(null);
  const test = useRef(null);

  useEffect(() => {
    const el = test.current;
    gsap.fromTo(
      el,
      {
        // scale: 0,
        duration: 3,
      },
      {
        // scale: 2.5,
        duration: 3,
      }
    );
  }, []);

  return (
    <section className="h-screen">
      <h2 className="text-center" ref={test}>
        Experience
      </h2>
      <div className="text-center">
        <p>
          I have two years of experience in web development, I remain steadfast
          in my commitment to continuous learning in this dynamic and fast-paced
          industry.Web development is not just a profession for me; it's a
          continuous journey of growth and exploration.
        </p>
      </div>
      <div className="grid grid-cols-2 items-center text-[29px]">
        <h3>Some technologies I've worked with:</h3>
        <StaggeredReveal
          styles="flex flex-wrap gap-2 p-16"
          intersectionRoot={rootRef}
        >
          {IMAGES.map((image, index) => {
            const { altText, url } = image;
            return (
              <div
                className="bg-[#2e302b] grid  place-content-center p-4 rounded-[8px] techExp"
                key={index}
              >
                <Image alt={altText} src={url} width={70} height={70} />
              </div>
            );
          })}
        </StaggeredReveal>
      </div>
      {/* <div className="w-[60vw] h-[60vh] my-0 mx-auto"> */}
      {/* <Canvas camera={{ position: [0, 0, 600] }}>
        <perspectiveCamera fov={75} />
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas> */}
      {/* </div> */}
    </section>
    // <section className="h-screen w-screen bg-black grid">
    //   <div className="w-[60vw] h-[60vh] self-center justify-self-center">

    //   </div>
    //   {/* <div className="absolute top-[50%]   flex gap-4 bg-red-700 overflow-auto">
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //     <div className="w-[100px] h-[100px] bg-white rounded-md"></div>
    //   </div> */}
    // </section>
    // <section className="h-screen p-12">
    //   <ReavealBlackBg setState={setState} intersectionRoot={rootRef}>

    //     <SwigglyStroke />
    //     <div>

    //     </div>
    //   </ReavealBlackBg>
    // </section>
  );
};

export default Experience;
