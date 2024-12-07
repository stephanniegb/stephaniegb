import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-[850px] flex-col gap-12 px-4 py-20 text-sm md:px-12 lg:grid lg:max-w-[1536px] lg:grid-cols-7 lg:gap-0 lg:p-0 xl:grid-cols-2 xl:text-base">
      <section className="col-span-3 flex flex-col justify-between gap-8 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-20 xl:col-span-1 xl:px-20">
        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-[clamp(1.5rem,8vw,2.5rem)] leading-[2.5rem] md:text-5xl lg:text-4xl xl:text-6xl">
            Stephanie Egbuonu
          </h1>
          <h2 className="text-xl">Frontend Engineer</h2>
          <p>help lorem lorrmm gjnf</p>
        </div>
        <Contact />
      </section>
      <section className="col-span-4 h-full w-full lg:py-20 xl:col-span-1">
        <div className="flex w-full flex-col gap-28 lg:pr-12 xl:pr-20">
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
          </div>
          <div className="flex-col gap-4">
            <Experience
              start="2024"
              end="present"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="Horus labs"
              techs={["next.js", "starknet.js", "starknet react", "typescript"]}
              url=""
            />
            <Experience
              start="2023"
              end="2024"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="AVVIC Group"
              techs={["react", "next.js", "typescript", "SCSS", "tailwind"]}
              url="https://avvicgroup.com/"
            />
          </div>

          <div className="flex-col gap-4">
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
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
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="token giver"
              techs={["next.js", "starknet.js", "tailwind"]}
              url="https://www.token-giver-7u11.vercel.app/"
              img="./projects/1.jpg"
            />
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="recreate scroll animation"
              techs={["Next.js", "tailwind", "framer motion"]}
              url="https://www.scroll-transform-recreate.vercel.app/"
              img="./projects/2.jpg"
            />
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="Three.js earth"
              techs={["Next.js", "Three.js", "javascript", "gsap"]}
              url="https://www.three-js-earth-delta.vercel.app/"
              img="./projects/3.jpg"
            />
            <div className="my-8">
              <a href="">view project archive</a>
            </div>
          </div>
          <div>ARTICLES</div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
