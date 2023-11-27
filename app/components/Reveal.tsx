"use client";
import { useEffect, useState, useRef, MutableRefObject } from "react";

interface Props {
  children: React.ReactNode;
  intersectionRoot: MutableRefObject<null>;
}

const Reveal = ({ children, intersectionRoot }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        root: intersectionRoot.current,
      }
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
    <div className={`Reveal`} ref={ref}>
      {children}
    </div>
  );
};

export default Reveal;
