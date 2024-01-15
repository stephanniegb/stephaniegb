import Github from "@/svg/Github";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Medium from "@/svg/Medium";
import { ReactNode, useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";

const EMAILADDRESS = "egbuonustephanie@gmail.com";

const SocialLink = ({
  children,
  social,
  handler,
}: {
  children: ReactNode;
  handler: string;
  social: string;
}) => {
  return (
    <div className="border-b-[1px] h-[50px] py-8 lg:border-[1px] border-solid border-[#2a2a28] w-full lg:p-12 lg:rounded-[10px] flex items-center justify-between lg:grid  lg:place-content-center hover:text-lemon  transition-[color] duration-300 cursor-pointer group">
      <div className="lg:hidden">
        <p className="flex flex-col">
          <span>{social}</span>
          <span className="text-[.6em] break-words">{handler}</span>
        </p>
      </div>
      {children}
    </div>
  );
};

const Footer = () => {
  const { setCopied, copied } = useContext(GlobalContext);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 800);
    }
  }, [copied]);

  return (
    <footer className=" flex flex-col text-[#d0d0c5] sticky bottom-0 justify-between px-4   w-screen pt-16 h-[85vh]">
      <div className="text-center">
        <h3>Lets talk about what we can build together</h3>

        <div className="hidden lg:block lg:relative">
          <CopyToClipboard onCopy={() => setCopied(true)} text={EMAILADDRESS}>
            <p
              id="emailAddress"
              className="text-white text-[5vw] uppercase break-words cursor-none underline py-4 w-fit my-0 mx-auto px-0"
            >
              {EMAILADDRESS}
            </p>
          </CopyToClipboard>
        </div>
        <a
          className="text-[8vw] py-32 underline block break-words uppercase lg:hidden"
          href={`mailto:${EMAILADDRESS}`}
        >
          {EMAILADDRESS}
        </a>
        {/* <span className="font-cursive text-[2em]">stephani.egb</span> */}
      </div>
      <div className="w-[90%] flex flex-col pb-32 md:pb-12 gap-4 md:gap-8 md:flex-row md:w-full lg:grid lg:grid-cols-5 lg:w-[70vw] lg:gap-4 my-0 mx-auto text-[#94948f]">
        <SocialLink handler="@stephanniegb" social="Twitter">
          <X />
        </SocialLink>
        <SocialLink handler="Stephanie Egbuonu" social="LinkedIn">
          <LinkedIn />
        </SocialLink>
        <SocialLink handler="stephanniegb" social="Github">
          <Github />
        </SocialLink>
        <SocialLink handler="@stephanieegbuonu" social="Medium">
          <Medium />
        </SocialLink>
        <SocialLink handler="@stephani.egb " social="Instagram">
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
