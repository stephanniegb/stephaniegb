"use client";
import "./cursor.css";
import { useEffect } from "react";
interface Props {
  children: React.ReactNode;
  id: string;
}
const Cursor = ({ children, id }: Props) => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const links = document.getElementById(id);

    const handleCursorLeave = () => {
      if (cursor) {
        cursor.style.border = "none";
      }
    };
    const handleCursorHover = () => {
      if (cursor) {
        cursor.style.border = "none";
      }
    };
    const handleCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX - 13 + "px";
        cursor.style.top = e.pageY - 13 + "px";
        cursor.style.display = "block";
        if (links) {
          // links.style.position = "relative";
        }
      }
    };
    if (links) {
      links.addEventListener("mousemove", handleCursor);
      links.addEventListener("mouseout", () => {
        if (cursor) {
          cursor.style.display = "none";
        }
      });
    }

    return () => {
      if (links) {
        links.removeEventListener("mousemove", handleCursor);
      }
    };
  }, []);

  return <div id="cursor">{children}</div>;
};

export default Cursor;
