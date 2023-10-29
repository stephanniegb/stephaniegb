"use client";
import { useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  altClassname?: string;
  onIntersection?: () => void;
}

const Carousel = ({ children, altClassname, onIntersection }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (onIntersection) {
            onIntersection(); // Call the callback function on intersection
          }
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersection]);
  return (
    <div className={`${altClassname} `} ref={ref}>
      {children}
    </div>
  );
};

export default Carousel;
