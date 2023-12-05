import { useRef, useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
interface Props {
  children: React.ReactNode;
  intersectionRoot: MutableRefObject<null>;
  styles: string;
}
const StaggeredReveal = ({ children, intersectionRoot, styles }: Props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Use GSAP to animate the entry
            gsap.to(entry.target, {
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
              duration: 0.3,
              ease: "expo",
              delay: index * 0.2,
            });
          } else {
            // Revert the animation when out of view
            // gsap.to(entry.target, {
            //   opacity: 0,
            //   filter: "blur(5px)",
            //   x: -100,
            //   duration: 0.3,
            //   ease: "expo",
            // });
          }
        });
      },
      {
        root: intersectionRoot.current,
      }
    );

    const childNodes = containerRef.current?.children;
    if (childNodes) {
      Array.from(childNodes).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (childNodes) {
        Array.from(childNodes).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={styles}>
      {children}
    </div>
  );
};

export default StaggeredReveal;
