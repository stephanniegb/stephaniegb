"use client";
import { useState, useEffect, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (cursorRef.current) {
        const { width, height } = cursorRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor h-[50vw] w-[50vw] rounded-full"
      style={{
        position: "fixed",
        left: `${position.x - size.width / 2}px`,
        top: `${position.y - size.height / 2}px`,
        pointerEvents: "none",
      }}
    />
  );
};

export default Cursor;
