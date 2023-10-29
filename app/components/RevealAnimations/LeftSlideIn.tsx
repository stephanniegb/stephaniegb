"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  altClassname?: string;
}

const LeftSlideIn = ({ children, altClassname }: Props) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
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
  }, []);
  return (
    <div className={`${altClassname} SlideIn`} ref={ref}>
      {children}
    </div>
  );
};

export default LeftSlideIn;
