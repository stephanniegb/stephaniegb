// "use client";
// import "./cursor.css";
// import { useEffect } from "react";

// const Cursor = () => {
//   useEffect(() => {
//     const cursor = document.getElementById("cursor");
// const links = document.getElementById(id);

//     const handleCursorLeave = () => {
//       if (cursor) {
//         cursor.style.border = "none";
//       }
//     };
//     const handleCursorHover = () => {
//       if (cursor) {
//         cursor.style.border = "none";
//       }
//     };
//     const handleCursor = (e: MouseEvent) => {
//       if (cursor) {
//         // cursor.style.left = e.pageX - 13 + "px";
//         // cursor.style.top = e.pageY - 13 + "px";
//         cursor.style.display = "block";
//         console.log("i am over link with", id);
//       }
//     };
//     if (links) {
//       links.addEventListener("mousemove", handleCursor);
//       links.addEventListener("mouseout", () => {
//         if (cursor) {
//           cursor.style.display = "none";
//         }
//       });
//     }

//     return () => {
//       if (links) {
//         links.removeEventListener("mousemove", handleCursor);
//       }
//     };
//   }, []);

//   return ;
// };

// export default Cursor;
"use client";
import { useEffect } from "react";
import "./cursor.css";
interface Props {
  children: React.ReactNode;
  id: string;
}
const Cursor = ({ children, id }: Props) => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const links = document.querySelectorAll("a");

    const handleCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.visibility = "visible";
        cursor.style.left = `${e.clientX - 13}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    links.forEach((link) => {
      link.addEventListener("mousemove", handleCursor);
      link.addEventListener("mouseout", () => {
        if (cursor) {
          cursor.style.visibility = "hidden";
        }
      });
    });
    // Clean up the event listener when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mousemove", handleCursor);
      });
    };
  }, []);

  return <div id="cursor">{children}</div>;
};

export default Cursor;
