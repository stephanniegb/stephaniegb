import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import { useRef } from "react";
import Image from "next/image";
import AnimatedLines from "../animation/AnimatedLines";
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
    <section className="min-h-[100vh] text-black flex flex-col  gap-4 px-4 py-16 lg:p-16 bg-[#D9D9D9] z-[1] relative">
      <h2 className="text-center text-brown text-[6vw]">
        <AnimatedLines sentence=" Experience" />
      </h2>
      <div className="text-center">
        <p className="my-0 mx-auto lg:w-[60%]">
          <AnimatedLines
            sentence="I have two years of experience
          in web development, I remain steadfast in my commitment to continuous in web development
          "
          />
        </p>
      </div>
      <h3 className="text-center lg:text-3xl my-4">
        Some technologies I have worked with:
      </h3>
      <div className=" ">
        <StaggeredReveal
          styles="w-[90%] lg:w-[70%] mx-auto my-0  grid  gap-4 grid-cols-4 justify-center  lg:grid-cols-5"
          intersectionRoot={rootRef}
        >
          {IMAGES.map((image, index) => {
            const { altText, url } = image;
            return (
              <div
                className="grid place-content-center max-w-[80px] max-h-[100px] p-2 mx-auto my-0"
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
