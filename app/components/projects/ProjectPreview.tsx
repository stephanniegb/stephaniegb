"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectsPreviewProps {
  images: string[];
}
const ProjectPreview = ({ images }: ProjectsPreviewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) {
      return;
    }

    if (Number.isNaN(currentIndex)) {
      setCurrentIndex(0);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      setCurrentIndex(0);
    };
  }, [images]);
  return (
    <figure className="relative">
      <Image
        width={400}
        height={300}
        className="slideshow-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
    </figure>
  );
};

export default ProjectPreview;
