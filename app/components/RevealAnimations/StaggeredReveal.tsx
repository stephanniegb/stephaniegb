import { useRef, useEffect, MutableRefObject } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";

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

const StaggeredReveal = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: false });
  const variants = {
    hidden: { opacity: 0, filter: "blur(5px)", x: -20 },
    visible: { opacity: 1, filter: "blur(0px)", x: 0 },
  };
  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <m.div
      transition={{ ...transition, staggerChildren: 0.2 }}
      ref={containerRef}
      className="w-[90%] lg:w-[70%] mx-auto my-0  grid  gap-4 grid-cols-4 justify-center lg:grid-cols-5"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {IMAGES.map((image, index) => {
        const { altText, url } = image;
        return (
          <m.div
            variants={variants}
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
          </m.div>
        );
      })}
    </m.div>
  );
};

export default StaggeredReveal;
