import Github from "@/svg/Github";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Medium from "@/svg/Medium";
import { ReactNode, useContext, useEffect } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import { MotionValue, motion as m, useTransform } from "framer-motion";

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

const Footer = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const { setCopied, copied } = useContext(GlobalContext);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 800);
    }
  }, [copied]);

  const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <m.footer
      id="footer"
      className=" flex flex-col -z-1 text-[#d0d0c5] sticky bottom-0 justify-between  px-4 w-screen pt-16  h-[85dvh] lg:h-eightyVH"
    >
      <m.div
        style={{
          scaleY: scaleProgress,
        }}
        className="flex flex-col lg:gap-32"
      >
        <m.div
          style={{
            scaleY: scaleProgress,
          }}
          className="text-center"
        >
          <h3 className="mb-8">Lets talk about what we can build together</h3>

          <div className="hidden lg:block lg:relative">
            <CopyToClipboard onCopy={() => setCopied(true)} text={EMAILADDRESS}>
              <p
                id="emailAddress"
                className="text-white text-[5vw] font-thin uppercase break-words cursor-none underline py-4 w-fit my-0 mx-auto px-0"
              >
                {EMAILADDRESS}
              </p>
            </CopyToClipboard>
          </div>
          <a
            className="text-[8vw] md:text-[8vw] lg:py-32 underline block break-words uppercase lg:hidden"
            href={`mailto:${EMAILADDRESS}`}
          >
            {EMAILADDRESS}
          </a>
          <span className="font-cursive text-[2em]">stephani.egb</span>
        </m.div>
      </m.div>
      <m.div
        style={{
          scaleY: scaleProgress,
        }}
        className="w-[90%] md:w-[80%]  flex flex-col pb-4  lg:grid lg:grid-cols-5 lg:w-[70vw] lg:gap-4 my-0 mx-auto text-[#94948f]"
      >
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
      </m.div>

      <p className="border-t-[.5px] justify-self-end border-t-white border-solid p-2 md:p-8 text-sm">
        &#169; 2023 Stephanie Egbuonu. All rights reserved.{" "}
        <button className="">Credits</button>
      </p>
    </m.footer>
  );
};

export default Footer;
