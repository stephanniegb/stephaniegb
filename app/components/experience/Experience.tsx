import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedLines from "../AnimatedLines";

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

  return (
    <section className="min-h-[200vh] text-black flex flex-col gap-12 p-16">
      <h2 className="text-center text-[12vw] font-Holiday_Sunday">
        Experience
      </h2>
      <div className="text-center">
        <p>
          <AnimatedLines
            sentence={` I have two years of experience in web development, I remain steadfast 
            in my commitment to continuous learning in this dynamic and fast-paced  industry.Web development is not just a profession for me it's a continuous journey of growth and exploration.`}
          />
          {/* <AnimatedLines sentence=" " /> */}
          {/* <AnimatedLines sentence="" /> */}
          {/* <AnimatedLines sentence=" " /> */}
        </p>
      </div>
      <div className="grid grid-cols-2 items-center text-[29px] ">
        <h3>Some technologies I've worked with:</h3>

        <StaggeredReveal
          styles="grid grid-cols-5 gap-2"
          intersectionRoot={rootRef}
        >
          {IMAGES.map((image, index) => {
            const { altText, url } = image;
            return (
              <div
                className="bg-[#2e302b] h-[150px] grid place-content-center p-4 rounded-[8px] techExp"
                key={index}
              >
                <Image alt={altText} src={url} width={70} height={70} />
              </div>
            );
          })}
        </StaggeredReveal>
      </div>
    </section>
  );
};

export default Experience;
