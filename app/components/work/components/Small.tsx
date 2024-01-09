import useWindowSize from "@/hooks/useWindowSize";
import RightArrow from "@/svg/RightArrow";
import { useEffect, useRef } from "react";
import Archive from "./Archive";

const ProjectLink = ({
  alt,
  src,
  title,
  url,
}: {
  src: string;
  alt: string;
  title: string;
  url: string;
}) => {
  return (
    <figure className="w-[80vw] max-w-[700px] h-[50vw]  my-0 mx-auto group">
      <a
        className="flex flex-col gap-4 w-full h-full"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <figcaption>
          <h4 className="flex gap-4  items-center text-[5vw] font-Bruno_Ace text-brown uppercase">
            {title}{" "}
            <span className="transition-[transform] duration-500 ease-in-out transform -rotate-45 group-hover:-translate-y-2">
              <RightArrow />
            </span>
          </h4>
        </figcaption>
      </a>
    </figure>
  );
};

const Small = () => {
  const windowSize = useWindowSize();
  const scrollContainer = useRef(null);
  const imageRef = useRef(null);
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
    const skew = velocity * 25;
    const scale = Math.min(Math.abs(acceleration) + 1, 1.1);
    // console.log(Math.min(Math.abs(acceleration) + 1, 1.1));

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `skewY(${skew}deg)`;
    // imageRef.current.style.scale = scale;
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
        <div ref={scrollContainer} className="flex flex-col py-16 gap-32">
          <ProjectLink
            url=""
            alt=""
            src="/Screenshot 2023-10-22 at 8.34.54 PM.png"
            title="Scissors"
          />
          <ProjectLink
            url=""
            alt=""
            src="/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg"
            title="Scissors"
          />
          <ProjectLink
            url=""
            alt=""
            src="/Screenshot 2023-10-22 at 8.34.54 PM.png"
            title="Scissors"
          />
          <ProjectLink
            url=""
            alt=""
            src="/Screenshot 2023-10-22 at 8.34.54 PM.png"
            title="Scissors"
          />
        </div>
        <Archive />
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
