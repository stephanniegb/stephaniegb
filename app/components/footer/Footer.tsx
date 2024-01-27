import Github from "@/svg/Github";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Medium from "@/svg/Medium";
import { ReactNode, useContext, useEffect } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import { MotionValue, motion as m, useTransform } from "framer-motion";

const EMAILADDRESS = "egbuonustephanie@gmail.com";

const SocialLink = ({
  children,
  social,
  handler,
  url,
}: {
  children: ReactNode;
  handler: string;
  social: string;
  url: string;
}) => {
  return (
    <a
      className=" border-b-[1px] h-[50px] py-8 lg:border-[1px] border-solid border-[#2a2a28] w-full lg:p-12 lg:rounded-[10px] flex items-center justify-between lg:grid  lg:place-content-center hover:text-lemon  transition-[color] duration-300 cursor-pointer group"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="lg:hidden">
        <p className="flex flex-col">
          <span>{social}</span>
          <span className="text-[.6em] break-words">{handler}</span>
        </p>
      </div>
      {children}
    </a>
  );
};

const Footer = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const thisYear = new Date().getFullYear().toString();
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
            <a
              href={`mailto:${EMAILADDRESS}`}
              className="
              text-white text-[5vw] relative font-thin uppercase break-words py-4 w-fit my-0 mx-auto px-0 before:absolute  before:content-[''] before:w-full before:border-[1px] before:border-solid before:border-offWhite  before:bottom-[10%] before:left-0 before:opacity-100 before:transform before:scale-x-100 before:origin-right-center before:hover:opacity-0 before:hover:scale-x-0 before:transition-[opacity,transform] before:duration-500 before:ease-in-out
              after:absolute  after:content-[''] after:w-full after:border-[1px] after:border-solid after:border-offWhite  after:bottom-[10%] after:left-0 after:opacity-0 after:transform after:scale-x-0 after:origin-left-center after:hover:opacity-100 after:hover:scale-x-100 after:transition-[opacity,transform] after:duration-500 after:ease-in-out
              "
            >
              {EMAILADDRESS}
            </a>
          </div>
          <a
            className="text-[8vw] md:text-[8vw] lg:py-32 underline block break-words uppercase lg:hidden"
            href={`mailto:${EMAILADDRESS}`}
          >
            {EMAILADDRESS}
          </a>
          <span className="hidden lg:inline-block font-cursive text-[2em] ">
            stephani.egb
          </span>
        </m.div>
      </m.div>
      <m.div
        style={{
          scaleY: scaleProgress,
        }}
        className="w-[90%] md:w-[80%]  flex flex-col pb-4  lg:grid lg:grid-cols-4 lg:w-[70vw] lg:gap-4 my-0 mx-auto text-[#94948f]"
      >
        <SocialLink
          url="https://twitter.com/Stephanniegb"
          handler="@stephanniegb"
          social="Twitter"
        >
          <X />
        </SocialLink>
        <SocialLink
          url="https://www.linkedin.com/in/stephanie-egbuonu/"
          handler="Stephanie Egbuonu"
          social="LinkedIn"
        >
          <LinkedIn />
        </SocialLink>
        <SocialLink
          url="https://github.com/stephanniegb"
          handler="stephanniegb"
          social="Github"
        >
          <Github />
        </SocialLink>
        <SocialLink
          url="https://medium.com/@stephanieegbuonu"
          handler="@stephanieegbuonu"
          social="Medium"
        >
          <Medium />
        </SocialLink>
      </m.div>

      <p className="border-t-[.5px] justify-self-end border-t-white border-solid p-2 md:p-8 text-sm">
        &#169; {thisYear} Stephanie Egbuonu. All rights reserved.{" "}
      </p>
    </m.footer>
  );
};

export default Footer;
