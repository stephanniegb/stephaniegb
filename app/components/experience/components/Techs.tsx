import Image from "next/image";
import { useEffect, useState } from "react";
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

const Techs = ({ isInView }: { isInView: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);

  return (
    <div className="w-[90%] lg:w-[70%] mx-auto my-0  grid  gap-4 grid-cols-4 justify-center lg:grid-cols-5">
      {IMAGES.map((image, index) => {
        const { altText, url } = image;
        return (
          <div
            className="grid place-content-center max-w-[80px] max-h-[100px] p-2 mx-auto my-0"
            key={index}
          >
            <Image
              style={{
                scale: index === currentIndex ? 1.1 : 1,
                filter: index === currentIndex ? "none" : "",
              }}
              className="grayscale hover:filter-none transition-[scale, filter] duration-500 ease-in-out transform hover:scale-110"
              alt={altText}
              src={url}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Techs;
