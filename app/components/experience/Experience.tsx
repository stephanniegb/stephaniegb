import { useContext, useEffect, useRef, useState } from "react";
import StaggeredReveal from "../RevealAnimations/StaggeredReveal";
import AnimatedLines from "../animation/AnimatedLines";
import AnimatedText from "../animation/AnimatedText";
import Techs from "./components/Techs";
import GlobalContext from "@/app/context/GlobalContext";

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
    <section className="min-h-[100vh] bg-noise-bg  bg-offWhite  flex flex-col  gap-4 px-4 py-16  lg;px-16 lg:py-8  z-[1] relative overflow-x-hidden">
      <AnimatedText
        text="Experience"
        el="h2"
        className="text-center h-fit text-brown text-[15vw]  uppercase font-semibold"
      />

      <div className="text-center md:mt-8 lg:mt-16">
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
      <div ref={ref}>
        <Techs isInView={isInView} />
      </div>
      {/* <StaggeredReveal /> */}
    </section>
  );
};

export default Experience;
