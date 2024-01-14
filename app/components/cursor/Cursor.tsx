import CursorContext from "@/app/context/CursorContext";
import { useContext, useEffect, useRef, useState } from "react";

const Cursor = () => {
  const { setCursorText, cursorText, setCursor, cursor, copied, setCopied } =
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
  const handleMouseText = ({ text }: { text: string }) => {
    setCursorText(text);
  };
  const handleMouseLeave = () => {
    setCursorText("");
  };
  useEffect(() => {
    const footerEmail = document.getElementById("emailAddress");

    footerEmail?.addEventListener("mouseenter", () => {
      handleMouseText({ text: "Click to copy" });
    });
    footerEmail?.addEventListener("mouseleave", () => {
      handleMouseLeave();
    });

    footerEmail?.addEventListener("click", () => {
      setCopied(true);
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
            scale: `${
              cursorText === ""
                ? "0"
                : copied && cursorText !== ""
                ? "1.1"
                : "1"
            }`,
            opacity: `${cursorText === "" ? "0" : "1"}`,
            transition: "scale .5s, opacity .5s",
          }}
          className={`fixed bg-[#035AA6] text-white text-[.8rem] font-bold z-[3] pointer-events-none translate-x-[-50%] translate-y-[-50%] backdrop-blur p-1 grid place-content-center w-[6rem] h-[6rem] rounded-full`}
        >
          <p className="z-[2] p-0">
            <span className="block text-[.8rem]">
              {copied ? "Copied" : cursorText}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Cursor;
