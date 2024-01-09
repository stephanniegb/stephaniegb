import useWindowSize from "@/hooks/useWindowSize";
import RightArrow from "@/svg/RightArrow";
import UpRightArrow from "@/svg/UpRightArrow";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ArchiveLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <a
      className="underline text-[1.1em] w-fit mx-auto my-0  flex gap-4 items-center "
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <RightArrow />
    </a>
  );
};

const ProjectLink = ({
  alt,
  src,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  return (
    <figure className="w-[90vw] max-w-[700px] h-[50vw] max-h-[420px] my-0 mx-auto">
      <Image
        src={src}
        alt={alt}
        height={100}
        width={100}
        className="w-full h-full"
      />
      <figcaption>
        <h4 className="flex items-center">
          {title}{" "}
          <span>
            <UpRightArrow />
          </span>
        </h4>
      </figcaption>
    </figure>
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

  // Scrolling
  const skewScrolling = () => {
    skewData.current = window.scrollY;
    skewData.previous += (skewData.current - skewData.previous) * skewData.ease;
    skewData.rounded = Math.round(skewData.previous * 100) / 100;

    // Difference between
    const difference = skewData.current - skewData.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 15;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `skewY(${skew}deg)`;
    // }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);
  return (
    <>
      <section className="z-[1] relative px-4 bg-[#D9D9D9] ">
        <div ref={scrollContainer} className="flex flex-col py-16 gap-12 ">
          <ProjectLink
            alt=""
            src="/Screenshot 2023-10-22 at 8.34.54 PM.png"
            title="Scissors"
          />
          <ProjectLink
            alt=""
            src="/Screenshot 2023-10-22 at 8.34.54 PM.png"
            title="Scissors"
          />
          <ProjectLink
            alt=""
            src="/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg"
            title="Scissors"
          />
        </div>
        <div className="pt-12">
          <h3 className="text-center">Archive</h3>
          <div className="flex flex-col justify-center uppercase">
            <ArchiveLink text="Some link" url="http://" />
            <ArchiveLink text="Some link" url="http://" />
            <ArchiveLink text="Some link" url="http://" />
            <ArchiveLink text="Some link" url="http://" />
          </div>
        </div>
      </section>
      <svg
        className="z-[1] relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#d9d9d9"
          fillOpacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Small;
