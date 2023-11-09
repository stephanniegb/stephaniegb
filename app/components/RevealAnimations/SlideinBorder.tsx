"use client";
import { useEffect, useRef } from "react";
type PropTypes = {
  height: string;
};
const SlideinBorder = ({ height }: PropTypes) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
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
    <div style={{ height: height }} ref={ref} className="SlideinBorder"></div>
  );
};

export default SlideinBorder;
