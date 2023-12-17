"use client";
import { useContext, useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  altClassname?: string;
}
const ReverseBgColor = ({ children }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("EXP: beige");
          } else {
            entry.target.classList.add("bgBlack");
          }
        });
      },
      {
        // threshold: 0.5,
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
    <section className="reveal" ref={ref}>
      {children}
    </section>
  );
};

export default ReverseBgColor;
