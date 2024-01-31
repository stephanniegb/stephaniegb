import GlobalContext from "@/app/context/GlobalContext";
import MessageIcon from "@/svg/MessageIcon";
import SwigglyStroke from "@/svg/SwigglyStroke";
import { motion as m, useInView } from "framer-motion";
import { useEffect, useRef, useContext } from "react";

const Small = () => {
  const { setTextColor } = useContext(GlobalContext);
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9, once: true });

  const variants = {
    hidden: {
      height: "0px",
      paddingInline: "0",
      paddingTop: "0",
      paddingBottom: "0",
    },
    visible: {
      height: "50vh",
      paddingInline: "10vw",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      // y: 100,
    },
    visible: {
      opacity: 1,
      // y: 0,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor("text-[#d0d0c5]");
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <section className="z-[1] text-[#d0d0c5] relative" ref={containerRef}>
      <div className="z-[1]  bg-black relative px-[10vw] py-16 flex place-content-center flex-col gap-16">
        <div>
          <h3 className="uppercase">About myself</h3>
          <SwigglyStroke />
        </div>
        <h2 className="text-pFS ">
          I'm Stephanie Egbuonu, a web developer specializing in crafting{" "}
          <span className="text-lemon">high-performance</span>, visually
          appealing interfaces!
        </h2>

        <div>
          <a className="flex items-center gap-2" href="mailto:">
            <span className="p-2 rounded-full bg-offWhite text-brown">
              <MessageIcon />
            </span>

            <span className="underline">contact me</span>
          </a>
        </div>
      </div>
      <m.div
        style={{}}
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className="w-full h-0 max-h-[200px]  flex flex-col gap-6  bg-black"
      >
        <m.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 1,
          }}
        >
          Away from my computer, you'll find me getting dressed up, exploring
          new places, hanging out with family and friends, and attempting some
          sick dance moves.
        </m.p>
      </m.div>
    </section>
  );
};

export default Small;
