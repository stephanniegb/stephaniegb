import CursorContext from "@/app/context/CursorContext";
import { useContext, useEffect, useState } from "react";

const Cursor = () => {
  const { setCursorText, cursorText, setCursor, cursor } =
    useContext(CursorContext);

  const [deviceType, setDeviceType] = useState("");
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      setDeviceType("touch");
      return true;
    } catch (e) {
      setDeviceType("mouse");
      return false;
    }
  };
  const handleMouseMove = (e) => {
    const x = (!isTouchDevice() && e.clientX) || 0;
    const y = (!isTouchDevice() && e.clientY) || 0;
    setCursor({ x, y });
  };
  const handleMouseEnter = ({ text }: { text: string }) => {
    setCursorText(text);
  };
  const handleMouseLeave = () => {
    setCursorText("");
  };
  useEffect(() => {
    const footerEmail = document.getElementById("emailAddress");
    const aboutSection = document.getElementById("about");

    footerEmail?.addEventListener("mouseenter", () => {
      handleMouseEnter({ text: "Click to copy" });
    });
    footerEmail?.addEventListener("mouseleave", () => {
      handleMouseLeave();
    });

    aboutSection?.addEventListener("mouseenter", () => {
      handleMouseEnter({ text: "Scroll" });
    });
    aboutSection?.addEventListener("mouseleave", () => {
      handleMouseLeave();
    });

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      {deviceType === "mouse" && (
        <div
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            scale: `${cursorText === "" ? "0" : "1"}`,
            opacity: `${cursorText === "" ? "0" : "1"}`,
            transition: "scale .5s, opacity .5s",
          }}
          className={`fixed text-white text-[.8rem] z-[3] pointer-events-none translate-x-[-50%] translate-y-[-50%] backdrop-blur p-1 grid place-content-center w-[6rem] h-[6rem] rounded-full`}
        >
          <p className="z-[2] p-0">
            <span className="block text-[.8rem]">{cursorText}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Cursor;
