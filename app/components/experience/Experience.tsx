import { useContext, useEffect, useRef, useState } from "react";
import AnimatedLines from "../animation/AnimatedLines";
import Techs from "./components/Techs";
import GlobalContext from "@/app/context/GlobalContext";
import RightArrow from "@/svg/RightArrow";

const Experience = () => {
  const { setTextColor } = useContext(GlobalContext);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor("text-[#090908]");
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-noise-bg  bg-offWhite   flex flex-col  gap-4 px-4 py-16  lg;px-16 lg:py-8  z-[1] relative overflow-x-hidden">
      <div className="w-full h-full absolute  top-0 left-0 ">
        <div className="w-full h-full">
          <div className="absolute bg-gradient-radial right-[-80%] lg:right-0 h-[60vh] opacity-70 w-[60vh] mix-blend-hard-light"></div>
          <div className="absolute bg-gradient-radial2  top-[20%] right-[-30%] md:right-[-20%] lg:right-[20%] opacity-50  h-[50vh] w-[50vh] mix-blend-hard-light"></div>
          <div className="absolute bg-gradient-radial3 top-[30%] right-[-60%] md:right-[-20%] lg:right-0 h-[60vh] w-[60vh] opacity-30 mix-blend-hard-light"></div>
        </div>
      </div>
      <AnimatedLines
        text="Experience"
        el="h2"
        className="text-center h-fit text-brown text-[15vw]  lg:text-[13vw]  uppercase"
      />
      <div className="text-center">
        <AnimatedLines
          text="I have two years of experience in web development, and I am always eager to learn more and explore new horizons in this fast-paced industry."
          className="
            my-0 mx-auto lg:w-[60%] font-thin
            "
        />
      </div>
      <h3 className="text-center  my-4">
        Some technologies I have worked with:
      </h3>
      <div ref={ref}>
        <Techs isInView={isInView} />
        <a
          href={"/resume.pdf"}
          className="underline text-[1.1em] w-fit flex gap-4 px-8 py-8  items-center  group"
        >
          View full Résumé{" "}
          <span className="transition-[transform,color] duration-500 ease-in-out group-hover:text-lemon transform group-hover:-rotate-[30deg]">
            <RightArrow />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
