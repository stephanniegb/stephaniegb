import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import { useRef } from "react";
import Image from "next/image";
import AnimatedLines from "../AnimatedLines";
import AnimatedLetters from "../animation/AnimatedLetters";

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
    <section className="min-h-[100vh] text-black flex flex-col gap-12 p-16">
      <h2 className="text-center text-[15vw] font-Holiday_Sunday">
        <AnimatedLetters word="Experience" />
      </h2>
      <div className="text-center">
        <p>
          <AnimatedLines
            sentence={` I have two years of experience in web development, I remain steadfast 
            in my commitment to continuous learning in this dynamic and fast-paced  industry.Web development is not just a profession for me it's a continuous journey of growth and exploration.`}
          />
        </p>
      </div>
      <h3 className="text-center text-3xl">Some technologies I have used:</h3>
      <div className=" w-[70%] mx-auto my-0 p-4 ">
        <StaggeredReveal
          styles="grid grid-cols-5 gap-4"
          intersectionRoot={rootRef}
        >
          {IMAGES.map((image, index) => {
            const { altText, url } = image;
            return (
              <div
                className="grid place-content-center w-[80px] h-[100px]"
                key={index}
              >
                <Image
                  className="grayscale hover:filter-none transition-transform duration-500 transform hover:scale-110"
                  alt={altText}
                  src={url}
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </StaggeredReveal>
      </div>
    </section>
  );
};

export default Experience;
