import RightArrow from "@/svg/RightArrow";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-[850px] flex-col gap-12 px-4 py-20 text-sm md:px-12 lg:grid lg:max-w-[1536px] lg:grid-cols-7 lg:gap-0 lg:p-0 xl:grid-cols-2 xl:text-base">
      <section className="col-span-3 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-20 xl:col-span-1 xl:px-20">
        <div className="flex h-full max-h-[1280px] flex-col justify-between gap-8">
          <div className="flex flex-col gap-2">
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
      <section className="col-span-4 h-full w-full lg:py-20 xl:col-span-1">
        <div className="flex w-full flex-col gap-28 lg:pr-12 xl:pr-20">
          <div className="flex flex-col gap-6">
            <p>
              Hey there! I’m Stephanie, a curious developer who loves bringing
              ideas to life with fun, stunning, and accessible web experiences.
              Whether it’s about making interfaces pop or ensuring the code runs
              like clockwork, I’m all in for the magic behind the screen!
            </p>

            <p>
              I’m currently a Frontend Developer at{" "}
              <a href="https://www.horuslabs.co/">Horus Labs</a>, where I build
              and maintain high-performance user interfaces that not only look
              amazing but also meet web accessibility standards. My focus is on
              creating seamless and inclusive experiences, especially in the
              exciting world of Web3.
            </p>
            <p>
              I’m passionate about learning and pushing myself beyond my current
              limits. In the past, I’ve worked with finance companies, startups,
              and personal projects that have taught me invaluable lessons. Each
              experience has fueled my growth, and I’m excited to keep
              exploring, experimenting, and leveling up.
            </p>
            <p>
              When I’m not learning, you’ll find me dancing, spending quality
              time with my family, or exploring new places—I love how traveling
              adds so much color to life. Lately, I’ve also been diving into
              cooking, and it’s been such a fun and delicious adventure!
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
          </div>

          <div className="flex-col gap-4">
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
              img="./projects/1.jpg"
            />
            <Project
              description="A fun remake of Nate Smiths's elegantly designed portfolio website (sited on Godly website), showcasing the sophistication and impact of smooth scroll animations on web pages. This weekend project was both a creative exploration and a rewarding experience."
              title="recreate scroll animation"
              techs={["Next.js", "tailwind", "framer motion"]}
              url="https://scroll-transform-recreate.vercel.app/"
              img="./projects/2.jpg"
            />
            <Project
              description="A Three.js project focused on modals and shaders, exploring the capabilities of Three.js and demonstrating the stunning, immersive websites that can be created with it. This project also highlights the breathtaking beauty of the Earth through 3D visualization."
              title="Three.js earth"
              techs={["Next.js", "Three.js", "javascript", "glsl", "gsap"]}
              url="https://www.three-js-earth-delta.vercel.app/"
              img="./projects/3.jpg"
            />
            {/* <div className="my-8">
              <a href="" className="group flex items-center gap-[2px]">
                <span className="group-hover:text-[--accent]">
                  View Projects Archive{" "}
                </span>
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  <RightArrow />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
