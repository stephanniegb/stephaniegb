"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const links = document.querySelectorAll("a");

    const handleCursorLeave = () => {
      if (cursor) {
        cursor.style.backgroundColor = "plum";
        cursor.style.width = "25px";
        cursor.style.height = "25px";
        cursor.style.border = "none";
      }
    };
    const handleCursorHover = () => {
      if (cursor) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
      }
    };
    const handleCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX - 13 + "px";
        cursor.style.top = e.pageY - 13 + "px";
        cursor.style.display = "block";
      }
    };

    document.addEventListener("mousemove", handleCursor);
    document.addEventListener("mouseout", () => {
      if (cursor) {
        cursor.style.display = "none";
      }
    });
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleCursorHover);
      link.addEventListener("mouseleave", handleCursorLeave);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleCursorHover);
        link.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, []);

  return <div id="cursor"></div>;
};

export default Cursor;
