import { Dispatch, SetStateAction, useRef } from "react";
import "./write.css";
import ReavealBlackBg from "../RevealAnimations/ReavealBlackBg";
import Image from "next/image";
import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import SwigglyStroke from "@/svg/swigglyStroke";

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

const Write = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<number>>;
}) => {
  const rootRef = useRef(null);

  return (
    <section className="h-screen p-12">
      <ReavealBlackBg setState={setState} intersectionRoot={rootRef}>
        <h2>Experience</h2>
        <SwigglyStroke />
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              consectetur quae, nam mollitia dolorum omnis modi cumque est ex
              officiis provident amet praesentium qui id cum repudiandae ratione
              nemo veritatis.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center">
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
        </div>
      </ReavealBlackBg>
    </section>
  );
};

export default Write;
