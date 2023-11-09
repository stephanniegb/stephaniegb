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
      //% images.length ensures that the index wraps around to 0 when it reaches the length of the images array.
      //if currentIndex is 2 and images.length is 3, (2 + 1) % 3 equals 0,
    }, 800);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);
  return (
    <figure className="slideshow-container">
      <img
        className="slideshow-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
    </figure>
  );
};

export default ProjectPreview;
