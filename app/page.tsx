import RightArrow from "@/svg/RightArrow";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project";
import UpRightArrow from "@/svg/UpRightArrow";
import Link from "next/link";
import Resources from "./components/Resources";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-[850px] flex-col gap-12 px-4 py-20 text-sm md:px-12 lg:grid lg:max-w-[1536px] lg:grid-cols-7 lg:gap-0 lg:p-0 xl:grid-cols-2 xl:text-base">
      <section className="col-span-3 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-20 xl:col-span-1 xl:px-20">
        <div className="flex h-full max-h-[1280px] flex-col justify-between gap-8">
          <div className="flex flex-col gap-2 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
            <h1 className="mb-4 text-[clamp(1.5rem,8vw,2.5rem)] leading-[2.5rem] md:text-5xl lg:text-4xl xl:text-6xl">
              Stephanie Egbuonu
            </h1>
            <h2 className="text-xl">Frontend Engineer</h2>
            <p className="w-[70%] text-sm">
              Bringing ideas to life with seamless, pixel-perfect web
              experiences.
            </p>
          </div>
          <Contact />
        </div>
      </section>
      <section className="relative z-10 col-span-4 h-full w-full lg:py-20 xl:col-span-1">
        <div className="flex w-full flex-col gap-28 lg:pr-12 xl:pr-20">
          <div className="flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
            <p>
              Hey there! I'm Stephanie, a curious developer who loves bringing
              ideas to life with fun, stunning, and accessible web experiences.
              Whether it's about making interfaces pop or ensuring the code runs
              like clockwork, I'm all in for the magic behind the screen!
            </p>

            <p>
              I'm currently a Frontend Developer at{" "}
              <a href="https://www.horuslabs.co/">Horus Labs</a>, where I build
              and maintain high-performance user interfaces that not only look
              amazing but also meet web accessibility standards. My focus is on
              creating seamless and inclusive experiences, especially in the
              exciting world of Web3.
            </p>
            <p>
              I'm passionate about learning and pushing myself beyond my current
              limits. In the past, I've worked with finance companies, startups,
              and personal projects that have taught me invaluable lessons. Each
              experience has fueled my growth, and I'm excited to keep
              exploring, experimenting, and leveling up.
            </p>
            <p>
              When I'm not learning, you'll find me dancing, spending quality
              time with my family, or exploring new places—I love how traveling
              adds so much color to life. Lately, I've also been diving into
              cooking, and it's been such a fun and delicious adventure!
            </p>
          </div>
          <div className="flex-col gap-4">
            <Experience
              start="2024"
              end="present"
              description="Develop and maintain key frontend components across our products, working closely with designers, developers, and project managers to deliver high-performing and accessible user interfaces. I also integrate smart contracts into the frontend, enabling seamless interaction with the blockchain."
              title="Horus labs"
              techs={["next.js", "starknet.js", "starknet react", "typescript"]}
              url="https://www.horuslabs.co/"
            />
            <Experience
              start="2023"
              end="2024"
              description="Developed, maintained, and delivered essential frontend projects for core components and clients, ensuring high performance and quality. Collaborated with the team in brainstorming sessions, contributed to team-building initiatives, and enhanced internal systems to streamline development processes."
              title="AVVIC Group"
              techs={["react", "next.js", "typescript", "SCSS", "tailwind"]}
              url="https://avvicgroup.com/"
            />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center gap-[2px]"
            >
              <span className="group-hover:text-[--accent] group-focus:text-[--accent]">
                View Full Resume{" "}
              </span>
              <UpRightArrow className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
            </a>
          </div>

          <div className="flex-col gap-4">
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
              description="Decentralized crowdfunding platform enabling users to create, manage, and contribute to a wide variety of campaigns. Built on Token Bound Accounts, each campaign is represented as an NFT, streamlining the crowdfunding process and enhancing efficiency."
              title="token giver"
              techs={["next.js", "starknet.js", "tailwind"]}
              url="https://www.token-giver-7u11.vercel.app/"
              img="./projects/1.png"
            />
            <Project
              description="A fun remake of Nate Smiths's elegantly designed portfolio website (sited on Godly website), showcasing the sophistication and impact of smooth scroll animations on web pages. This weekend project was both a creative exploration and a rewarding experience."
              title="recreate scroll animation"
              techs={["Next.js", "tailwind", "framer motion"]}
              url="https://scroll-transform-recreate.vercel.app/"
              img="./projects/2.jpg"
            />

            <div className="my-8">
              <Link
                href={"/archive"}
                className="group flex items-center gap-[2px]"
              >
                <span className="group-hover:text-[--accent]">
                  View Projects Archive{" "}
                </span>
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  <RightArrow />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-col gap-4">
            <Resources
              url="https://stephanniegb.hashnode.dev/getting-started-with-the-claude-api-a-beginners-guide"
              title="Getting Started with the Claude API: A Beginner's Guide"
              img="./resources/0.png"
              year="2025"
            />
            <Resources
              url="https://www.youtube.com/live/69X4-SgBixA?si=zks6OVWU8Q0UhFEE"
              title="Building with Irys on Starknet"
              img="./resources/1.jpeg"
              year="2025"
            />
          </div>

          <footer className="mt-16 text-sm text-gray-500">
            <p>
              Design inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[--accent] focus:text-[--accent]"
              >
                Brittany Chiang
              </a>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
