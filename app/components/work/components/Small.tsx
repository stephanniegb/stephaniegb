import useWindowSize from "@/hooks/useWindowSize";
import RightArrow from "@/svg/RightArrow";
import ProjectsData from "@/data/projects.json";
import { useEffect, useRef } from "react";
import Archive from "./Archive";
import { motion as m, useInView } from "framer-motion";
import AnimatedBorder from "../../animation/AnimatedBorder";
import Image from "@/util/Image";

const ProjectLink = ({
  alt,
  src,
  title,
  url,
  fallback,
  portfolio,
}: {
  src: string;
  alt: string;
  title: string;
  url: string;
  fallback: string;
  portfolio?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const variants = {
    hidden: { color: "#2f1b12", rotate: "0deg" },
    visible: { color: "#03730B", rotate: "-45deg" },
  };
  const imageVariants = {
    initial: { scale: 1.05 },
    animate: { scale: 1 },
  };
  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  return (
    <>
      {portfolio ? (
        <figure
          ref={ref}
          className="w-[80vw]  max-w-[700px]  py-8  my-0 mx-auto group"
        >
          <div className="flex flex-col  gap-10 w-full h-full">
            <m.div
              variants={imageVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={transition}
              className="w-full h-full object-cover"
            >
              <Image src={src} alt={alt} fallback={fallback} />
            </m.div>
            <figcaption>
              <h4 className="flex gap-4  items-center text-[3.5vw] font-Bruno_Ace text-brown uppercase">
                {title}{" "}
                <m.span
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="transition-[transform] duration-500 ease-in-out"
                >
                  <RightArrow height="30" width="30" />
                </m.span>
              </h4>
            </figcaption>
          </div>
        </figure>
      ) : (
        <figure
          ref={ref}
          className="w-[80vw]  max-w-[700px]  py-8  my-0 mx-auto group"
        >
          <a
            className="flex flex-col  gap-10 w-full h-full"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <m.div
              variants={imageVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={transition}
              className="w-full h-full object-cover"
            >
              <Image src={src} alt={alt} fallback={fallback} />
            </m.div>
            <figcaption>
              <h4 className="flex gap-4  items-center text-[3.5vw] font-Bruno_Ace text-brown uppercase">
                {title}{" "}
                <m.span
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="transition-[transform] duration-500 ease-in-out"
                >
                  <RightArrow height="30" width="30" />
                </m.span>
              </h4>
            </figcaption>
          </a>
        </figure>
      )}
    </>
  );
};

const Small = () => {
  const windowSize = useWindowSize();
  const scrollContainer = useRef(null);

  const skewData = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewData.current = window.scrollY;
    skewData.previous += (skewData.current - skewData.previous) * skewData.ease;
    skewData.rounded = Math.round(skewData.previous * 100) / 100;

    const difference = skewData.current - skewData.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const minSkew = -15;
    const maxSkew = 15;
    const skew = Math.min(Math.max(velocity * 15, minSkew), maxSkew);

    if (scrollContainer.current) {
      (
        scrollContainer.current as HTMLElement
      ).style.transform = `skewY(${skew}deg)`;
    }
    requestAnimationFrame(() => skewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
    return () => {};
  }, []);
  return (
    <section className="z-[1] bg-noise-bg relative px-4 bg-[#D9D9D9] ">
      <h3 className="uppercase px-8 text-brown">Recent Projects</h3>
      <div ref={scrollContainer} className="flex flex-col py-16 gap-10">
        {ProjectsData.map((proj) => {
          const { alt, fallback, id, src, tech, title, url, portfolio } = proj;
          return (
            <div key={id}>
              <ProjectLink
                fallback={fallback}
                url={url}
                alt={alt}
                src={src}
                title={title}
                portfolio={portfolio}
              />
              <AnimatedBorder height="4px" />
            </div>
          );
        })}
      </div>
      <Archive />
    </section>
  );
};

export default Small;
