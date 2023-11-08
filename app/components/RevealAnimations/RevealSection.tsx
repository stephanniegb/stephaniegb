"use client";
import { useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  altClassname?: string;
}
const RevealSection = ({ children, altClassname }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
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
    <section className={`${altClassname} RevealSection`} ref={ref}>
      {children}
    </section>
  );
};

export default RevealSection;
