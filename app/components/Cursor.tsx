"use client";
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
        // cursor.style.backgroundColor = "plum";
        // cursor.style.width = "25px";
        // cursor.style.height = "25px";
        cursor.style.border = "none";
      }
    };
    const handleCursorHover = () => {
      if (cursor) {
        // cursor.style.width = "20px";
        // cursor.style.height = "20px";
        cursor.style.border = "none";
      }
    };
    const handleCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX - 13 + "px";
        cursor.style.top = e.pageY - 13 + "px";
        // cursor.style.border = "none";
        cursor.style.display = "block";
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
    // links.forEach((link) => {
    //   link.addEventListener("mouseenter", handleCursorHover);
    //   link.addEventListener("mouseleave", handleCursorLeave);
    // });
    // Clean up the event listener when the component unmounts
    return () => {
      if (links) {
        links.removeEventListener("mousemove", handleCursor);
      }
      // links.forEach((link) => {
      //   link.removeEventListener("mouseenter", handleCursorHover);
      //   link.removeEventListener("mouseleave", handleCursorLeave);
      // });
    };
  }, []);

  return <div id="cursor">{children}</div>;
};

export default Cursor;
