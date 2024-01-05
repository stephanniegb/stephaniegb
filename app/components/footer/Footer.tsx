import Github from "@/svg/Github";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Medium from "@/svg/Medium";
import { ReactNode, useCallback, useContext, useEffect } from "react";
import CursorContext from "@/app/context/CursorContext";

const EMAILADDRESS = "egbuonustephanie@gmail.com";

const SocialLink = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group border-[1px] border-solid border-[#2a2a28]  h-[120px] w-full p-12 rounded-[10px]  grid place-content-center hover:text-lemon  transition-[color] duration-300 cursor-pointer">
      {children}
    </div>
  );
};

const Footer = () => {
  const { setCopied, copied } = useContext(CursorContext);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 800);
    }
  }, [copied]);

  return (
    <footer className=" flex flex-col sticky bottom-0 justify-between  w-screen pt-16 h-[85vh]">
      <div className="text-center">
        <h3>Lets talk about what we can build together</h3>

        <div className="relative">
          <CopyToClipboard onCopy={() => setCopied(true)} text={EMAILADDRESS}>
            <p
              id="emailAddress"
              className="text-6xl text-white cursor-none underline py-4 w-fit my-0 mx-auto px-0"
            >
              {EMAILADDRESS}
            </p>
          </CopyToClipboard>
        </div>

        <span className="font-cursive text-[2em]">stephani.egb</span>
      </div>
      <div className="grid grid-cols-5 w-[70vw] gap-4 my-0 mx-auto text-[#94948f]">
        <SocialLink>
          <X />
        </SocialLink>
        <SocialLink>
          <LinkedIn />
        </SocialLink>
        <SocialLink>
          <Github />
        </SocialLink>
        <SocialLink>
          <Medium />
        </SocialLink>
        <SocialLink>
          <Instagram />
        </SocialLink>
      </div>
      <p className="border-t-[.5px] justify-self-end border-t-white border-solid p-8 text-sm">
        &#169; 2023 Stephanie Egbuonu. All rights reserved.{" "}
        <button className="">Credits</button>
      </p>
    </footer>
  );
};

export default Footer;
