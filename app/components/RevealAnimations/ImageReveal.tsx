"use client";
import { useEffect, useRef } from "react";

interface Props {
  altClassname?: string;
  imgUrl: string;
  imgAltText: string;
}

const ImageReveal = ({ imgAltText, imgUrl, altClassname }: Props) => {
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
    <img
      src={imgUrl}
      alt={imgAltText}
      className={`${altClassname} RevealImg`}
      ref={ref}
    />
  );
};

export default ImageReveal;
