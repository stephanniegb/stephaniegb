"use client";
import { BackgroundColorcontext } from "@/context/BackgroundContext";
import { useContext, useEffect, useRef } from "react";
interface Props {
  children: React.ReactNode;
  altClassname?: string;
}
const RevealBgColor = ({ children }: Props) => {
  const BgColor = useContext(BackgroundColorcontext);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            BgColor?.setIsBgWhite(true);
            // entry.target.classList.add("show");
          } else {
            // BgColor?.setIsBgWhite(false);
            // entry.target.classList.remove("show");
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
    <section className={`RevealBgColor`} ref={ref}>
      {children}
    </section>
  );
};

export default RevealBgColor;
