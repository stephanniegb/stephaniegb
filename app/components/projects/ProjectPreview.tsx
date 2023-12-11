"use client";
import { useEffect, useState } from "react";
interface ProjectsPreviewProps {
  images: string[];
}
const ProjectPreview = ({ images }: ProjectsPreviewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <figure className="relative">
      <img
        className="slideshow-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      {/* <div className="absolute top-[50px] left-[180px] w-[35px] h-[35px] p-10 grid place-content-center rounded-[50%] bg-green-400">
        <p>view </p>
      </div> */}
    </figure>
  );
};

export default ProjectPreview;
