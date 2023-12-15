import Github from "@/svg/Github";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Medium from "@/svg/Medium";
import { useCallback, useState } from "react";

const EMAILADDRESS = "egbuonustephanie@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <footer className=" flex flex-col   sticky -z-[1] bottom-0 justify-between  w-screen pt-16 h-[85vh]">
      <div className="text-center">
        <h3>Lets talk about what we can build together</h3>

        <div className="relative">
          <CopyToClipboard
            onCopy={() => onCopy}
            text={EMAILADDRESS}
            // onCopy={() => this.setState({ copied: true })}
          >
            <p
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="text-6xl text-white cursor-none py-4 w-fit my-0 mx-auto "
            >
              {EMAILADDRESS}
            </p>
          </CopyToClipboard>
          {isHovered && (
            <div
              style={{
                top: 0,
                left: mousePosition.x,
                pointerEvents: "none",
              }}
              className="absolute bg-black w-[6rem] h-[6rem] grid place-content-center rounded-full text-white"
            >
              Click to copy
            </div>
          )}
        </div>

        <span className="font-cursive text-[2em]">stephani.egb</span>
      </div>
      <div className="grid grid-cols-5 w-[70vw] gap-4 my-0 mx-auto text-[#94948f]">
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <Github />
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[15px] grid place-content-center">
          <LinkedIn />
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <X />
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28]  h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <Medium />
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <Instagram />
        </div>
      </div>
      <p className="border-t-[.5px] justify-self-end border-t-white border-solid p-8 text-sm">
        &#169; 2023 Stephanie Egbuonu. All rights reserved.{" "}
        <button className="">Credits</button>
      </p>
    </footer>
  );
};

export default Footer;
