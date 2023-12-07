import { useRef, useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
interface Props {
  children: React.ReactNode;
  intersectionRoot: MutableRefObject<null>;
}
const TextReveal = ({ children, intersectionRoot }: Props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const text = new SplitType("#target");
    const characters = document.querySelectorAll(".char");

    const characterArray = Array.from(characters);

    characterArray.map((char) => {
      char.classList.add("translate-y");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            characterArray.map((char, index) => {
              gsap.to(char, {
                scrollTrigger: {
                  trigger: char,
                  toggleActions: "restart none none none",
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "expo",
                delay: index * 0.01,
              });
            });
          } else {
            characterArray.map((char, index) => {
              gsap.to(char, {
                opacity: 0,
                y: 100,
                stagger: 0.05,
                duration: 0.5,
                ease: "expo",
              });
            });
          }
        });
      },
      {
        root: intersectionRoot.current,
      }
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
  return <div ref={containerRef}>{children}</div>;
};

export default TextReveal;
