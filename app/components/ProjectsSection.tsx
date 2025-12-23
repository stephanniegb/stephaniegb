import Project from "./Project";
import Link from "next/link";
import RightArrow from "@/svg/RightArrow";

const ProjectsSection = () => {
  return (
    <div className="flex-col gap-4">
      <Project
        description="A developer-first payments SDK that lets apps accept payments from any chain, in any token or currency — instantly"
        title="Chainrails"
        techs={[
          "React",
          "typescript",
          "Ethers.js",
          "Wagmi",
          "starknet.js",
          "Rollup.js",
          "Apollo",
          "graphql",
          "tailwind",
        ]}
        url="https://www.chainrails.io/"
        img="./projects/1.jpg"
      />
      <Project
        description="A beautiful, exquisite card for creators and builders to tell their story, share their work and own their audience!"
        title="Glance"
        techs={[
          "React",
          "typescript",
          "Web3Auth",
          "TipTap",
          "TanStack query",
          "tailwind",
          "gsap",
        ]}
        url="https://www.glnc.me/"
        img="./projects/3.jpg"
      />
      <Project
        description="A community-building platform designed to help users create personalized, smart, and autonomous online communities. It aims to provide a comprehensive solution for building and managing online communities, focusing on personalization, autonomy, and effective engagement strategies."
        title="Coloniz"
        techs={[
          "next.js",
          "starknet.js",
          "typescript",
          "Apollo",
          "graphql",
          "tailwind",
        ]}
        url="https://coloniz.xyz/"
        img="./projects/4.jpg"
      />
      <Project
        description="Designed to explore, create, and manage Token Bound Accounts (ERC-6551) built on Starknet. The platform provides insights into Token Bound Accounts and their capabilities, showcasing what users can achieve with this innovative technology."
        title="token bound explorer"
        techs={[
          "next.js",
          "starknet.js",
          "typescript",
          "TanStack query",
          "tailwind",
          "gsap",
        ]}
        url="https://www.tbaexplorer.com/"
        img="./projects/0.jpg"
      />

      <Project
        description="A fun remake of Nate Smiths's elegantly designed portfolio website (sited on Godly website), showcasing the sophistication and impact of smooth scroll animations on web pages. This weekend project was both a creative exploration and a rewarding experience."
        title="recreate scroll animation"
        techs={["CSS", "React", "tailwind", "framer motion"]}
        url="https://scroll-transform-recreate.vercel.app/"
        img="./projects/2.jpg"
      />

      <div className="my-8">
        <Link href={"/archive"} className="group flex items-center gap-[2px]">
          <span className="group-hover:text-[--accent]">
            View Projects Archive{" "}
          </span>
          <span className="transition-all duration-300 group-hover:translate-x-1">
            <RightArrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;

